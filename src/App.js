import './App.css';
import TextInput from './TextInput';
import { useState } from "react";
import Message from './Message';
import Camera from 'react-snap-pic';

function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  function sendMessage(msg) {
    if (!msg) return;
    const newMessage = {
      msg
    };
    setMessages([newMessage, ...messages]);
  }

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  return (
    <div className="App">
      <header className = "header">
        <div className = "logo"></div>
        <span className = "title">Chat Bot 3000</span>
      </header>
      {showCamera && <Camera takePicture = {takePicture} />};
      <div className = "messages"> 
        {messages.map((msg) => {
          return <Message {...msg}></Message>;
        })}
      </div>
      <TextInput sendMessage = {sendMessage} showCamera = {() => setShowCamera(true)} />
    </div>
  );
}

export default App;
