import React from 'react'
import Navbar from '../Component/navBar'
import Dropdown from '../Component/dropdown'
import Datepicker from '../Component/datepicker'
import Analysis from '../Component/analysis'
import Engagement from '../componentig/engagement'
import Keymap from '../componentig/keymap'
import Trendline from '../componentig/trendline'
import Opinion from '../componentig/opinion'
import Post from '../componentig/post'
import Authors from '../componentig/authors'
import Igmap from '../componentig/igmap'

const Instagram = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Instagram</p>
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
      <div className="grid grid-cols-1 gap-6 w-full p-10 pb-0">
      <div>
      <Opinion/>
      </div>
      </div>
      <div className="grid grid-cols-2 w-full p-10">
        <div className="grid justify-center items-center">
          <Post/>
          </div>
          <div className=" grid justify-center items-center">
        <Authors/>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full p-10">
        <Igmap/>
      </div>
    </div>
  )
}

export default Instagram
