import React from 'react'
import { Avatar } from '@material-ui/core/'
import './channelrow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline'


const ChannelRow = ({image,channel,subs,noOfVideos,description,verified}) => {
  return (
    <div className='channel_r'>
          <Avatar className="channel_logo" alt={channel} src={image}/>
          <div className='channel_text'>
              <h4>{channel}{verified && <VerifiedIcon/> }</h4>
              <p>{subs} subscribers . {noOfVideos} videos</p>
              <p>{description}</p>
          </div>
    </div>
  )
}

export default ChannelRow