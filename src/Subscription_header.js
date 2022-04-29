import React from 'react'
import './subscription_header.css'
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListIcon from '@material-ui/icons/List';
import {Link}from 'react-router-dom'
function Subscription_header() {
  return (
    <div className='subheader'>
        <div className='sub_date'>
            <p>Today</p>
        </div>
        <div className='manage'>
          <Link to={`/manage`}>
            <p className='icon'>Manage</p>
          </Link>
             
            <ViewComfyIcon className='icon'/>
            <ListIcon className='icon'/>
        </div>
    </div>
  )
}

export default Subscription_header