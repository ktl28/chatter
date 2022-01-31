import React from "react";
import "./TextInput.css"
import { useState } from "react";


function TextInput (props) {
    const { sendMessage } = props;
    const [text, setText] = useState('')

    function click() {
        sendMessage(text);
        setText("");
    }

    function onKeyPress(e) {
        console.log(e);
        if (e.key==="Enter") {
            click();
        }

    }

    return (
        <footer className="footer">
            <input className="text-input" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyPress}
            />
        <button className="send" onClick={click}>
            ↑
        </button>
      </footer>
    );
}

export default TextInput;