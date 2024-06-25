import React from 'react'
import NavBar from '../Component/navBar'
import Dropdown from '../Component/dropdown'
import Datepicker from '../Component/datepicker'
import Analysis from '../Component/analysis'
import Most from '../componenmarket/most'
import Sell from '../componenmarket/sell'
import Engagement from '../componenmarket/engagement'
import Keymap from '../componenmarket/keymap'
import Trendline from '../componenmarket/trendline'
import Map from '../componenmarket/map'

const Marketplace = () => {
  return (
    <div>
       <NavBar/>
      <div className="flex justify-center pt-20 w-full">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-left">
            <p className="text-xl font-medium  pl-10 pb-5 pt-5">Dashboard {">"} Marketplace</p>
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
    <div className="grid grid-cols-2 pt-10">
    <div className="flex justify-center">
    <Most/>
    </div>
    <div className="flex justify-center">
    <Sell/>
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
      <div className='p-10'>
        <Map/>
      </div>
    </div>
  )
}

export default Marketplace
