import React, { useState } from 'react';

const Analysis = () => {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveKeyword = () => {
    if (inputValue.trim() !== '') {
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  return (
    <div className="grid grid-rows-2">
      <div className='font-semibold pt-14 pb-5'>
        <p>Fill Keywords</p>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <form>
          <div className="">
            <div className="flex rounded-md py-1 shadow ring-1 ring-gray-300 sm:max-w-md">
              <input
                type="text"
                className="block text-sm flex-1 border-0 bg-transparent py-1 px-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                placeholder="Choose keywords"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-700 focus:outline-none px-2"
                onClick={handleSaveKeyword}
              >
                +
              </button>
            </div>
          </div>
        </form>
        <div className="">
          <button className='text-white text-sm bg-blue-500 hover:bg-blue-700 place-content-center px-10 py-2.5 rounded-md'>Analyze</button>
        </div>
        <div className="col-span-2">
          <p className="text-md font-semibold">Keywords:</p>
          {keywords.length > 0 && (
            <ul className="flex list-none list-inside">
              {keywords.map((keyword, index) => (
                <li key={index} className="text-black flex items-center">
                  {keyword}
                  <button
                    className="ml-2 text-sm text-red-600 hover:text-red-700"
                    onClick={() => handleDeleteKeyword(index)}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
