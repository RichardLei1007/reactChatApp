import './App.css';
import TextInput from './TextInput';
import { useState } from "react";
import Message from './Message'

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(msg) {
    if (!msg) return;
    const newMessage = {
      msg
    };
    setMessages([newMessage, ...messages]);
  }
  return (
    <div className="App">
      <header className = "header">
        <div className = "logo"></div>
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
