import React from 'react'
import Avatar from '@material-ui/core/Avatar'
const Video = ({image,channel,channelImage,title,views,timestamp}) => {
  return (
    <div className='video'>
        <img className="video_thumb" src={image} alt=""/>
        <div className='video_info'>
            <Avatar className='avatar' alt={channel} src={channelImage} />
            <div className='video_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}.{timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Video