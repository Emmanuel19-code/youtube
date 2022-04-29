import React from 'react'
import Sidebar from './Sidebar'
import './Subscription.css'
import Subscription_header from './Subscription_header'
import SubscripedVideo from './SubscripedVideo'
const Subscription = () => {
  return (
    <div className='subscription'>
        <Sidebar/>
        <div className='subscription_page'>
             <Subscription_header/>
             <div className='sub_videos'>
                     <SubscripedVideo 
                      ch_name="emmanuel"
                      views={30}
                      time="39 minutes ago"
                      status="LIVE NOW"
                     />
             </div>
        </div>
    </div>
  )
}

export default Subscription