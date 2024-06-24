import React, { useState } from 'react';
import Navbar from '../Component/navBar';
import Dropdown from '../Component/dropdown';
import Analysis from '../Component/analysis';
import Interaction from '../componentTwit/interaction';
import Tweet from '../componentTwit/tweet';
import Potentialreach from '../componentTwit/potentialreach';
import Viralreach from '../componentTwit/viralreach';
import Tmap from '../componentTwit/tmap';
import Topinfluencerscard from '../componentTwit/topinfluencerscard';
import Toptweet from '../componentTwit/toptweet';
import Trendline from '../componentTwit/trendline';
import Engagement from '../componentTwit/engagement';
import Keymap from '../componentTwit/keymap';
import Opinion from '../componentTwit/opinion';
import Datepicker from '../Component/datepicker';


const Twitter = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Twitter</p>
            <p className="text-md font-semibold pl-10 pb-2">Platform</p>
            <Dropdown/>
            </div>
          <div className="flex items-left">
         <Datepicker/>
          </div>
          <div>
          <Analysis/>
          </div>
        </div>
      </div>
      <div>
      <div className="grid grid-cols-3 gap-6 w-full p-10 pb-0">
        <div className='flex flex-col items-left h-full w-full'>
          <Engagement/>
        </div>
        <div>
        <Keymap/>
        </div>
        <div>
          <Trendline/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full p-10">
          <div className="flex flex-col items-left h-max w-max">
          <Interaction/>
            </div>
          <div className="flex flex-col items-left h-max w-max">
          <Tweet/>
          </div>
          <div className="flex flex-col items-left h-max w-max">
          <Potentialreach/>
          </div>
          <div className="flex flex-col items-left h-max w-max">
          <Viralreach/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full h-full p-10">
      <div>
      <Topinfluencerscard/>
      </div>
      <div>
      <Toptweet/>
      </div>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full p-10">
      <Opinion/>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full p-10">
        <Tmap/>
      </div>
    </div>
  );
};

export default Twitter;
