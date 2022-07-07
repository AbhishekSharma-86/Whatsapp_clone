import { Avatar, IconButton } from '@mui/material'
import React, {useState} from 'react'
import './Chat.css'
import { AttachFile, SearchOutlined, MoreVert } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

function Chat({messages}) {
  const[input, setInput] = useState("");
  const sendMessage = async(e)=>{
      e.preventDefault();
      await axios.post("/messages/new",{
        message: input,
        name: "Demo name",
        timestamp: "just now",
        received: true
      })
  }
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
        {messages.map((message)=>{
          return <p className={`chatMessage ${message.received ? "chatRecieve" : ""}`}>
          <span className='chatName'>{message.name}</span>
          {message.message}
          <span className='chatTime'>{message.timestamp}</span>
        </p>
        })}
        
      </div>
      <div className='chatFooter'>
        <InsertEmoticonIcon/>
        <form>
          <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Type a message'/>
          <button onClick={sendMessage} type='submit'>Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
