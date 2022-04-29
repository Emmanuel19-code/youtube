import React, { useState } from 'react'
import './sidebar.css'
import Sidebar_row from './sidebarrow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import  ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import {Link} from 'react-router-dom'
const Sidebar = () => {
 
  return (
   
    <div className='sidebar'>
        <Sidebar_row  Icon={HomeIcon} title="home"/>
    <Sidebar_row Icon={WhatshotIcon} title="Trending"/>
     <Link to={`/subscriptions`} className="watch_later">
           <Sidebar_row Icon={SubscriptionsIcon} title="Subscription"/>
     </Link>
     <hr/>
     <Sidebar_row Icon={VideoLibraryIcon} title="library"/>
     <Sidebar_row Icon={HistoryIcon} title="History"/>
     <Sidebar_row Icon={OndemandVideoIcon} title="Your videos"/>
        <Link to={`/watch_later`} className="watch_later">
<Sidebar_row  Icon={WatchLaterIcon} title="Watch Later"/>
           </Link>
     <Sidebar_row Icon={ThumbUpAltOutlinedIcon} title="Like Videos"/>
     <hr/>
       <div className='display'>
        
       </div>
        <Sidebar_row Icon={ExpandMoreOutlinedIcon} title="Show more"/>
      <hr/>
      <p className='more'>MORE FROM YOUTUBE</p>
          <Sidebar_row Icon={SportsEsportsIcon} title="Gaming"/>
          <Sidebar_row Icon={SettingsInputAntennaIcon} title="Live"/>
          <Sidebar_row Icon={EmojiEventsIcon} title="Sports"/>
        <hr/>
        <Sidebar_row Icon={SettingsIcon} title="settings"/>
        <Sidebar_row Icon={FlagIcon} title="Report history"/>
        <Sidebar_row Icon={HelpOutlineIcon} title="Help"/>
        <Sidebar_row Icon={FeedbackIcon} title="Send feedback"/>
        
    </div>
  )
}

export default Sidebar