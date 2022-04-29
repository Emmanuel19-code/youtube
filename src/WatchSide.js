import React from 'react'
import Watch_sideprop from './Watch_sideprop'
import SecurityIcon from '@material-ui/icons/Security';
import './watchside.css'
import Avatar from '@material-ui/core/Avatar'


const WatchSide = () => {
  return (
    <div className='watch_side'>
             <h3>Watch Later</h3> 
             <Watch_sideprop
              videos={278}
              date="today"
             />
             <div className='private'>
  <SecurityIcon fontSize='smaller'/><span className='private_1'>Private</span>
             </div>
             <hr/>
             <div className='avatar_main'>
                 <Avatar className='avatar'/>
                 <p>Emmanuel Kofi</p>
             </div>
        
    </div>
  )
}

export default WatchSide