import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import { useState } from "react";
import Camera from 'react-snap-pic';
import {useDB, db} from "./db";

function App() {
  const messages = useDB();
  //const [messages, setMessage] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [currentUsername, saveUsername] = useState("");

  function sendMessage(text) {
    if (!text) return;
    const newMessage = {
      text: text,
      time: Date.now(),
      user: currentUsername,
    };
    db.send(newMessage);
    //setMessages([newMessage, ...messages]);
  }

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
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
