import React from 'react'
import Navbar from '../Component/navBar'
import Dropdown from '../Component/dropdown'
import Datepicker from '../Component/datepicker'
import Analysis from '../Component/analysis'
import Post from '../componentfb/post'
import Like from '../componentfb/like'
import Comment from '../componentfb/comment'
import Share from '../componentfb/share'
import Engagement from '../componentfb/engagement'
import Keymap from '../componentfb/keymap'
import Trendline from '../componentfb/trendline'
import Opinion from '../componentfb/opinion'
import Tfb from '../componentfb/tfb'
import Mediainteraction from '../componentfb/mediainteraction'

const Facebook = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Facebook</p>
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
      <div className="grid grid-cols-4 gap-6 w-full p-10">
        <div>
        <Post/>
        </div>
        <div>
        <Like/>
        </div>
        <div>
        <Comment/>
        </div>
        <div>
        <Share/>
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
      <div className="grid grid-cols-1 gap-6 w-full p-10">
      <Opinion/>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full p-10">
        <Mediainteraction/>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full p-10">
        <Tfb/>
      </div>
    </div>
  )
}

export default Facebook
