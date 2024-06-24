import React, { useState } from 'react';

const Tmap = () => {
  const [activeTab, setActiveTab] = useState('post'); // State untuk menentukan tab aktif
  const [tweets, setTweets] = useState([
    {
      id: 1,
      user: 'User1',
      tweet: 'Tweet 1 content here.',
      originalReach: 1000,
      engagement: 300,
      opinion: 'positive',
    },
    {
      id: 2,
      user: 'User2',
      tweet: 'Tweet 2 content here.',
      originalReach: 800,
      engagement: 250,
      opinion: 'negative',
    },
    {
      id: 3,
      user: 'User3',
      tweet: 'Tweet 3 content here.',
      originalReach: 1200,
      engagement: 400,
      opinion: 'neutral',
    },
    {
      id: 4,
      user: 'User4',
      tweet: 'Tweet 4 content here.',
      originalReach: 1500,
      engagement: 500,
      opinion: 'positive',
    },
    {
      id: 5,
      user: 'User5',
      tweet: 'Tweet 5 content here.',
      originalReach: 900,
      engagement: 200,
      opinion: 'negative',
    },
    {
      id: 6,
      user: 'User6',
      tweet: 'Tweet 6 content here.',
      originalReach: 1100,
      engagement: 300,
      opinion: 'neutral',
    },
    {
      id: 7,
      user: 'User7',
      tweet: 'Tweet 7 content here.',
      originalReach: 1300,
      engagement: 450,
      opinion: 'positive',
    },
    {
      id: 8,
      user: 'User8',
      tweet: 'Tweet 8 content here.',
      originalReach: 950,
      engagement: 180,
      opinion: 'negative',
    },
    {
      id: 9,
      user: 'User9',
      tweet: 'Tweet 9 content here.',
      originalReach: 1000,
      engagement: 300,
      opinion: 'neutral',
    },
    {
      id: 10,
      user: 'User10',
      tweet: 'Tweet 10 content here.',
      originalReach: 1400,
      engagement: 400,
      opinion: 'positive',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const tweetsPerPage = 5; 


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1); 
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const tabContents = {
    post: (
      <div id="styled-profile" role="tabpanel" aria-labelledby="profile-styled-tab">
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-violet-400 text-white">
            <tr className="">
              <th className="border border-violet-800 px-4 py-2">User</th>
              <th className="border border-violet-800 px-4 py-2">Tweet</th>
              <th className="border border-violet-800 px-4 py-2">Original Reach</th>
              <th className="border border-violet-800 px-4 py-2">Engagement</th>
              <th className="border border-violet-800 px-4 py-2">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {tweets
              .slice((currentPage - 1) * tweetsPerPage, currentPage * tweetsPerPage)
              .map((tweet) => (
                <tr key={tweet.id}>
                  <td className="border font-semibold text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.user}</td>
                  <td className="border border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.tweet}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.originalReach}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.engagement}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.opinion}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(tweets.length / tweetsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    ),
    Interaction : (
      <div id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-styled-tab">
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-violet-400 text-white">
            <tr className="">
              <th className="border border-violet-800 px-4 py-2">User</th>
              <th className="border border-violet-800 px-4 py-2">Tweet</th>
              <th className="border border-violet-800 px-4 py-2">Original Reach</th>
              <th className="border border-violet-800 px-4 py-2">Engagement</th>
              <th className="border border-violet-800 px-4 py-2">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {tweets
              .slice((currentPage - 1) * tweetsPerPage, currentPage * tweetsPerPage)
              .map((tweet) => (
                <tr key={tweet.id}>
                  <td className="border font-semibold text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.user}</td>
                  <td className="border border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.tweet}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.originalReach}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.engagement}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.opinion}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(tweets.length / tweetsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    ),
    Hastag: (
      <div id="styled-settings" role="tabpanel" aria-labelledby="settings-styled-tab">
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-violet-400 text-white">
            <tr className="">
              <th className="border border-violet-800 px-4 py-2">User</th>
              <th className="border border-violet-800 px-4 py-2">Tweet Hastag</th>
              <th className="border border-violet-800 px-4 py-2">Original Reach</th>
              <th className="border border-violet-800 px-4 py-2">Engagement</th>
              <th className="border border-violet-800 px-4 py-2">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {tweets
              .slice((currentPage - 1) * tweetsPerPage, currentPage * tweetsPerPage)
              .map((tweet) => (
                <tr key={tweet.id}>
                  <td className="border font-semibold text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.user}</td>
                  <td className="border border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.tweet}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.originalReach}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.engagement}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.opinion}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(tweets.length / tweetsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    ),
    Links: (
      <div id="styled-contacts" role="tabpanel" aria-labelledby="contacts-styled-tab">
       <table className="table-auto w-full border-collapse ">
          <thead className="bg-violet-400 text-white">
            <tr className="">
              <th className="border border-violet-800 px-4 py-2">User</th>
              <th className="border border-violet-800 px-4 py-2">Tweet Links</th>
              <th className="border border-violet-800 px-4 py-2">Original Reach</th>
              <th className="border border-violet-800 px-4 py-2">Engagement</th>
              <th className="border border-violet-800 px-4 py-2">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {tweets
              .slice((currentPage - 1) * tweetsPerPage, currentPage * tweetsPerPage)
              .map((tweet) => (
                <tr key={tweet.id}>
                  <td className="border font-semibold text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.user}</td>
                  <td className="border border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.tweet}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.originalReach}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.engagement}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.opinion}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(tweets.length / tweetsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    ),
    Authors: (
      <div id="styled-authors" role="tabpanel" aria-labelledby="authors-styled-tab">
        <table className="table-auto w-full border-collapse ">
          <thead className="bg-violet-400 text-white">
            <tr className="">
              <th className="border border-violet-800 px-4 py-2">User</th>
              <th className="border border-violet-800 px-4 py-2">Original Reach</th>
              <th className="border border-violet-800 px-4 py-2">Total post</th>
              <th className="border border-violet-800 px-4 py-2">Location</th>
              <th className="border border-violet-800 px-4 py-2">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {tweets
              .slice((currentPage - 1) * tweetsPerPage, currentPage * tweetsPerPage)
              .map((tweet) => (
                <tr key={tweet.id}>
                  <td className="border font-semibold text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.user}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.originalReach}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{"TPOST"}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{"LOC"}</td>
                  <td className="border text-center border-violet-800 dark:border-gray-600 px-4 py-2">{tweet.opinion}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(tweets.length / tweetsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-lg border ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          {Object.keys(tabContents).map((tabId) => (
            <li key={tabId} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tabId
                    ? 'border-violet-500 text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500'
                    : 'hover:text-gray-600 hover:border-violet-500 dark:hover:text-gray-300'
                }`}
                id={`${tabId}-styled-tab`}
                data-tabs-target={`#styled-${tabId}`}
                type="button"
                role="tab"
                aria-controls={tabId}
                aria-selected={activeTab === tabId}
                onClick={() => handleTabClick(tabId)}
              >
                {tabId.charAt(0).toUpperCase() + tabId.slice(1)} {/* Membuat teks kapital */}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menampilkan konten sesuai dengan tab yang aktif */}
      <div>
        {Object.keys(tabContents).map((tabId) => (
          <div key={tabId} className={activeTab === tabId ? 'block' : 'hidden'} aria-labelledby={`${tabId}-styled-tab`}>
            {tabContents[tabId]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tmap;
