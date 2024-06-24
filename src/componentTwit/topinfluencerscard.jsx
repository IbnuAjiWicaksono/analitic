import React from 'react';

const topinfluencerscard = () => {
  // Contoh data top 10 influencer Twitter (dapat diganti dengan data sesuai kebutuhan)
  const topInfluencers = [
    { username: 'username1', name: 'Influencer 1', followers: 1000000 },
    { username: 'username2', name: 'Influencer 2', followers: 900000 },
    { username: 'username3', name: 'Influencer 3', followers: 850000 },
    { username: 'username4', name: 'Influencer 4', followers: 800000 },
    { username: 'username5', name: 'Influencer 5', followers: 780000 },
    { username: 'username6', name: 'Influencer 6', followers: 750000 },
    { username: 'username7', name: 'Influencer 7', followers: 720000 },
    { username: 'username8', name: 'Influencer 8', followers: 700000 },
    { username: 'username9', name: 'Influencer 9', followers: 680000 },
    { username: 'username10', name: 'Influencer 10', followers: 650000 },
  ];

  return (
    <div className="w-full bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Top 10 Twitter Influencers</div>
        <ul>
          {topInfluencers.map((influencer, index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="text-gray-700 text-sm font-semibold">{index + 1}. {influencer.name}</span>
              <span className="text-gray-500">@{influencer.username}</span>
              <span className="text-gray-500">{influencer.followers.toLocaleString()} Followers</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default topinfluencerscard;
