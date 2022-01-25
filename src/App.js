import './App.css';
import TextInput from './TextInput';
import { useState } from "react";
import Message from './Message'

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(msg) {
    const newMessage = {
      msg,
      time: Date.now(),
      user: "Me",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
    <header className = "header">
      <img className = "logo"></img>
      <span className = "title">Chat Bot 3000</span>
    </header>
    <div className = "messages"> 
      {messages.map((msg) => {
        return <Message {...msg}></Message>;
      })}
      </div>
    <TextInput sendMessage = {sendMessage} />
    </div>
  );
}

export default App;
