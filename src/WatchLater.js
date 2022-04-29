import React from 'react'
import Sidebar from './Sidebar'
import WatchSide from './WatchSide'
import './watch_later.css'
import Watch_later_videos from './Watch_later_videos'
const WatchLater = () => {
  return (
    <div className='watch_later'>
               <Sidebar/>
               <div className='watch_l_partition'>
                <WatchSide/> 
                <Watch_later_videos/>
               </div>     
    </div>
  )
}

export default WatchLater