import React, {useState, useEffect} from 'react'
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from './components/axios.js'


function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then(res=>{
      setMessages(res.data)
    })
  },[])
  useEffect(()=>{
    const pusher = new Pusher('aadcacb8c0cb926f8055', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages, newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])

  console.log(messages)
  return (
    <div className="app">
      <div className='appBody'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
