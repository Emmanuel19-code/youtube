import React,{useState} from 'react'
import './header.css' //css stylesheeet
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon  from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Link } from 'react-router-dom'
const Header = () => {
     const [search,setSearch]=useState("");
  return (
    <div className='header'>
            {/*left side*/}
           <div className='header_left'>
         <MenuIcon/>
         <Link to={`/`}>
           <img className='header-img'  alt="" src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg">
        </img>
         </Link>
    </div>
        {/*the input section*/}
        <div className='header_S_input'>
            <div className='header_input'>
 <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search" type="text"></input>
    <Link to={`/search/${search}`}>
 <SearchIcon className='input_search'/>
    </Link> 
        </div>
         <KeyboardVoiceIcon className='keyboard'/>
        </div>
        {/*header icons */}
        <div className='header_icons'>
          <VideoCallIcon className='icon'/>
           <AppsIcon className='icon'/>
        <NotificationsIcon className='icon'/>
        <Avatar/>
    </div>
        
    </div>
  )
}

export default Header