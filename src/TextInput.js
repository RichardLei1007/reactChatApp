import "./TextInput.css";
import { useState } from "react";

function TextInput(props) {
    const [text, setText] = useState("")

    // Saves input message and clears input box
    function send() {
        props.sendMessage(text);
        setText("");
    }

    // Runs send() function
    function onKeyPress(e) {
        if (e.key === "Enter") {
          send();
        }
    }

    // send a smiley emoji :D
    function sendEmoji() {
        props.sendMessage("🙂");
    }

    // Footer components
    return (
        <footer className = "footer">
            <input className = "input" value = {text} onChange = {(e) => setText(e.target.value)} onKeyPress={onKeyPress}></input>
            <button className = "button" onClick = {send}></button>
            <button className = "emoji" onClick = {sendEmoji}></button>
        </footer>
    );
}

export default TextInput;