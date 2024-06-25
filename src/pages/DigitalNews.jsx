import React from 'react'
import NavBar from '../Component/navBar'
import Dropdown from '../Component/dropdown'
import Datepicker from '../Component/datepicker'
import Analysis from '../Component/analysis'
import Engagement from '../componentdn/engagement'
import Keymap from '../componentdn/keymap'
import Trendline from '../componentdn/trendline'
import MediaLanguage from '../componentdn/medialanguage'
import Post from '../componentdn/post'
import Top from '../componentdn/top'
import Tdn from '../componentdn/tdn'

const DigitalNews = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Digital News</p>
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
      <div className="grid grid-cols-3 gap-6 w-full p-10">
       <div>
          <Engagement/>
        </div>
        <div>
        <Keymap/>
        </div>
        <div>
          <Trendline/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full p-10">
        <div>
        <MediaLanguage/>
        </div>
        <div>
        <Post/>
        </div>
        <div>
        <Top/>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full p-10">
    <Tdn/>
      </div>
    </div>
  )
}

export default DigitalNews
