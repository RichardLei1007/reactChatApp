import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import { useState } from "react";
import Camera from 'react-snap-pic';
import {useDB, db} from "./db";
import { render } from '@testing-library/react';

function App() {
  const messages = useDB();
  //const [messages, setMessage] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [username, saveUsername] = useState("");

  function sendMessage(text) {
    if (!text) return;
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage);
    //setMessages([newMessage, ...messages]);
  }

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  function renderMessages() {
    messages.sort(
      (a, b) => b.time - a.time
    );
      console.log(messages)
    let renderedMessages = messages.map((msg, i) => {
      return <Message {...msg} key = {i} fromMe = {msg.user === username}></Message>;
    })
    
    return renderedMessages
  }

  console.log(messages);

  return (
    <div className="App">
      <header className = "header">
        <div className = "title">
          <div className = "logo"></div>
          <span className = "titleText">Chat Bot 3000</span>
        </div>
        <NamePicker saveUsername = {saveUsername}></NamePicker>
      </header>
      {showCamera && <Camera takePicture = {takePicture} />}
      <div className = "messages">
        {/* {renderMessages()} */}
        {messages.map((msg, i) => {
          return <Message {...msg} key = {i} fromMe = {msg.user === username}></Message>;
        })}
      </div>
      <TextInput sendMessage = {sendMessage} showCamera = {() => setShowCamera(true)} />
    </div>
  );
}

export default App;
