import React from 'react'
import NavBar from '../Component/navBar'
import Dropdown from '../Component/dropdown'
import Datepicker from '../Component/datepicker'
import Analysis from '../Component/analysis'
import Susbscribers from '../componenyt/subscribers'
import Views from '../componenyt/views'
import Authors from '../componenyt/authors'
import Video from '../componenyt/video'
import Engagement from '../componenyt/engagement'
import Keymap from '../componenyt/keymap'
import Trendline from '../componenyt/trendline'
import Opinion from '../componenyt/opinion'
import Ytmap from '../componenyt/ytmap'

const Youtube = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Youtube</p>
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
      <div className="grid grid-cols-4 pt-20 w-full p-10 gap-6">
        <div>
            <Authors/>
        </div>
        <div>
            <Susbscribers/>
        </div>
        <div>
            <Video/>
        </div>
        <div>
            <Views/>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full p-10 gap-6">
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
      <div className="grid grid-col-1 w-full p-10">
        <Opinion/>
      </div>
      <div className="grid grid-cols-1 w-full p-10">
        <Ytmap/>
      </div>
    </div>
  )
}

export default Youtube
