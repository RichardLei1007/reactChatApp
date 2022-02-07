import "./NamePicker.css";
import { useState } from "react";

function NamePicker(props) {
    const [isDisabled, setDisable] = useState(true);
    // const [editName, setEditName] = useState(false);
    const [name, setName] = useState('Set Username:');
    const[style, setStyle] = useState('inputOff');
    const[button, setButton] = useState('buttonEdit');
    
    // Sets the input enable / disable status every time the button is clicked
    function changeDisable() {
        setDisable(!isDisabled);
    }

    // Change the style of the input container upon button click
    function changeInput() {
        if (style == 'inputOff') {
            setStyle('inputOn');
        }
        else if (style == 'inputOn') {
            setStyle('inputOff');
            if (name == '') {
                setName('Set Username:');
            }
        }
    }

    // Change the style of the button upon click
    function changeButton() {
        if (button == 'buttonEdit') {
            setButton('buttonConfirm');
        }
        else if (button == 'buttonConfirm') {
            setButton('buttonEdit');
        }
    }

    // Function that runs all change states functions. Passed to the button onClick
    function changeStates() {
        changeDisable();
        changeInput();
        changeButton();
        // Saves the username in input
        if (button == 'buttonConfirm') {
            props.saveUsername(name);
            // console.log(name);
        }
    }

    // Adds enter as a secondary way to run everything
    function changeName(e) {
        if (e.key == "Enter") {
            setName(name);
            changeStates();
        }
    }

    return (
        <div className = "username">
            <input className = {style} value = {name} disabled = {isDisabled} onChange = {(e) => setName(e.target.value)}
            onKeyPress = {changeName}></input>
            <button className = {button} onClick = {changeStates}></button>
        </div>
    );
}

export default NamePicker;