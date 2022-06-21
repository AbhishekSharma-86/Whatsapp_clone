import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, IconButton} from '@mui/material'
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <Avatar src='https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/yegt3stitkjv1qimc82d'/>
        <div className='sidebarHeaderRight'>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='sidebarSearch'>
        <div className='sidebarSearchContainer'>
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type='text'/>
        </div>
      </div>
      <div className='sidebarChats'>
        <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar