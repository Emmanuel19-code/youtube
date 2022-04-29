import React from 'react'
import './Videorow.css'
const VideoRow = ({views,subs,description,timestamp,channel,title,image}) => {
  return (
    <div className='video_row'>        
        <img src={image} alt=""/>
        <div className='videorow_text'>
            <h3>{title}</h3>
    <p className='video_headline'>
        {channel} <span className='video_subs'><span className='sub_num'>{subs}</span> Subscribers</span>.  {views} . {timestamp}
    </p>
    <p className='video_description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow