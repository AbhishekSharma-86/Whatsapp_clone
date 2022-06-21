import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'
function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChatInfo'>
          <h2>Room name</h2>
          <p>This is in the room</p>
      </div>
    </div>
  )
}

export default SidebarChat
