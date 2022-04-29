import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import './sidebarrow.css'
const Sidebar_row = ({selected,Icon,title}) => {
  return (
      <div className={`side_row ${selected && "selected"}`}>
            <Icon className="side_icon"/>
        <h4 className='side_title'>{title}</h4>
      </div>
     
  )
}

export default Sidebar_row