import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import { AttachFile, SearchOutlined, MoreVert } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  return (
    <div className='chat'>
      <div className='chatHeader'>
        <Avatar/>
        <div className='chatHeaderInfo'>
          <h3>Room Name</h3>
          <p>last seen at blah</p>
        </div>
        <div className='chatHeaderRight'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className='chatBody'>
        <p className='chatMessage'>
          <span className='chatName'>Abhishek</span>
          this is a message
          <span className='chatTime'>{new Date().toUTCString()}</span>
        </p>
        <p className='chatMessage chatRecieve'>
          <span className='chatName'>Abhishek</span>
          this is a message
          <span className='chatTime'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chatFooter'>
        <InsertEmoticonIcon/>
        <form>
          <input type="text" placeholder='Type a message'/>
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
