import React, { useState } from 'react';

const Datepicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setShowStartDatePicker(false);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setShowEndDatePicker(false);
  };

  return (
    <div className="flex items-center">
      {/* Start date input */}
      <div className="relative">
        {/* Start date input */}
        <input
          type="date"
          className="input-style"
          value={startDate}
          onChange={handleStartDateChange}
          onClick={() => setShowStartDatePicker(!showStartDatePicker)}
        />
        {/* Start date picker icon on the right */}
        <div className="inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <path
              fillRule="evenodd"
              d="M2 3a1 1 0 1 1 2 0v1h12V3a1 1 0 1 1 2 0v1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2V3zm4 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H6z"
              clipRule="evenodd"
            />
        </div>
      </div>
      <span className="mx-4 text-gray-500">to</span>
      {/* End date input */}
      <div className="relative">
        {/* End date input */}
        <input
          type="date"
          className="input-style"
          value={endDate}
          onChange={handleEndDateChange}
          onClick={() => setShowEndDatePicker(!showEndDatePicker)}
        />
        {/* End date picker icon on the right */}
        <div className="inset-y-0 right-0 flex items-center pr-3 cursor-pointer z-0">
            <path
            className=''
              fillRule="evenodd"
              d="M2 3a1 1 0 1 1 2 0v1h12V3a1 1 0 1 1 2 0v1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2V3zm4 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H6z"
              clipRule="evenodd"
            />
        </div>
      </div>
    </div>
  );
};

export default Datepicker;
