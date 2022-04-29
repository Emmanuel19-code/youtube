import React from 'react'
import './SearchPage.css'
import Sidebar from './Sidebar'
import TunedOutlineIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
const SearchPage = () => {
  return (
    <div className="search">
      <Sidebar/>
        <div className='search1'>
               <div className='search_filter'>
                  <TunedOutlineIcon/>
                <h2>FILTER</h2>
               </div>
                   <hr/>
                <ChannelRow 
                channel="hello"
                verified
                subs="1.5k"
                noOfVideos={400}
                />
                <hr/>
                <VideoRow/>
         </div>
    </div>
  )
}

export default SearchPage