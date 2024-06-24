import React from 'react';

const TopTweet = () => {
  // Contoh data top 10 tweet (dapat diganti dengan data sesuai kebutuhan)
  const topTweets = [
    { username: 'username1', likeCount: 1000000, tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { username: 'username2', likeCount: 900000, tweetText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { username: 'username3', likeCount: 850000, tweetText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { username: 'username4', likeCount: 800000, tweetText: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { username: 'username5', likeCount: 780000, tweetText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { username: 'username6', likeCount: 750000, tweetText: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { username: 'username7', likeCount: 720000, tweetText: 'Integer quis tortor et est finibus convallis non a lectus.' },
    { username: 'username8', likeCount: 700000, tweetText: 'Nullam id justo sed nunc finibus pretium.' },
    { username: 'username9', likeCount: 680000, tweetText: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer eu vehicula nisl.' },
    { username: 'username10', likeCount: 650000, tweetText: 'Fusce vel massa vel sapien luctus varius et nec turpis.' },
  ];

  return (
    <div className="w-full h-full bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Top 10 Tweets</div>
        <ul className="divide-y divide-gray-200 divide-solid max-h-80 overflow-y-auto">
          {topTweets.slice(0, 10).map((tweet, index) => (
            <li key={index} className="p-4 py-2">
              <div className="flex items-center">
                <span className="font-bold text-gray-700">{index + 1}.</span>
                <span className="ml-2 text-gray-700">{tweet.tweetText}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-500">@{tweet.username}</span>
                <span className="mx-2">-</span>
                <span className="text-gray-500">{tweet.likeCount.toLocaleString()} Likes</span>
              </div>
            </li>
          ))}
        </ul>
        {topTweets.length > 5 && (
          <div className="mt-4">
          </div>
        )}
      </div>
    </div>
  );
};

export default TopTweet;
