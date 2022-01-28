import "./TextInput.css";
import { useState } from "react";

function TextInput(props) {
    const [text, setText] = useState("")

    function send() {
        props.sendMessage(text);
        setText("");
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
          send();
        }
    }

    function sendEmoji() {
        props.sendMessage("🙂");
    }

    return (
        <footer className = "footer">
            <input className = "input" value = {text} onChange = {(e) => setText(e.target.value)} onKeyPress={onKeyPress}></input>
            <button className = "button" onClick = {send}></button>
            <button className = "emoji" onClick = {sendEmoji}></button>
        </footer>
    );
}

export default TextInput;