import React from 'react';
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Marketplace from '../images/Marketplace.png'
import X from '../images/X.png'
import Youtube from '../images/Youtube.png'
import DigitalNews from '../images/DigitalNews.png'

const Card = ({ keyword, lastAnalysed, postCount, likeCount, trendlineCount, isRising }) => {
  // Determine the color based on whether data is rising or falling
  const textColor = isRising ? 'text-green-500' : 'text-red-500';

  return (
    <div className="grid grid-rows-2 text-left max-w-full mr-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2 pb-2 gap-2">
    <div className="bg-white rounded-lg shadow p-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={Facebook} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={Instagram} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={X} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2 pb-2 gap-2">
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={Youtube} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4 ">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={Marketplace} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow p-4 mb-4 max-w-lg mx-2 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="items-center grid grid-cols-2">
          <div className="text-lg font-semibold mt-2">Keyword: {keyword}</div>
        </div>
        <div>
        <img src={DigitalNews} alt="Platform Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-2">Last Analyzed: {lastAnalysed}</div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-semibold text-3xl"> 20 {postCount}</div>
          <div className="text-xs text-gray-500">Post</div>
        </div>
        <div>
          <div className="font-semibold text-3xl"> 20 {likeCount}</div>
          <div className="text-xs text-gray-500">Like</div>
        </div>
        <div>
          <div className="font-semibold text-3xl">20 {trendlineCount}</div>
          <div className="text-xs text-gray-500">Trendline</div>
        </div>
        <div className={`text-sm place-items- ${textColor}`}>
          {isRising ? 'Up' : 'Down'}
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Card;
