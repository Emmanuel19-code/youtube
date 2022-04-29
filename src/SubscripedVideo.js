import React from 'react'
import './subscripedvideo.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function SubscripedVideo({img,ch_name,time,status,views}) {
  return (
    <div className='subscriped'>
              <img src={img}/>
        <div className='channel_info'>
           <p>{ch_name}</p>
           <CheckCircleIcon fontSize='small'/>
        </div>
        <p className='view'>{views}K views<span className='sub_time'>{time}</span></p>
        <p className='status'>{status}</p>
    </div>
  )
}

export default SubscripedVideo