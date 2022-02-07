import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import { useState } from "react";
import Camera from 'react-snap-pic';

function App() {
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const [currentUsername, updateUsername] = useState('');

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

  function saveUsername(uname) {
    updateUsername(uname);
    console.log(uname);
  }

  return (
    <div className="App">
      <header className = "header">
        <div className = "title">
          <div className = "logo"></div>
          <span className = "titleText">Chat Bot 3000</span>
        </div>
        <NamePicker saveUsername = {saveUsername}></NamePicker>
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
