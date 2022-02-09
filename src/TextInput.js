import React from "react";
import "./TextInput.css"
import { useState } from "react";
import { FiCamera } from 'react-icons/fi' // error with unused variable when adding fisend


function TextInput (props) {
    const { sendMessage } = props; // other way: props.sendMessage(text);
    const [text, setText] = useState('') // declares variable:text and function:setText

    // when click runs custom prop (sendMessage)
    function click() { // sends up to app.js file
        sendMessage(text); // passes text into sendMessage function. arg=text that is passed into custom prop=sendMess.
        setText("");
    }

    function onKeyPress(e) {
        console.log(e);
        if (e.key==="Enter") {
            click();
        }

    }

    return (

        // collects what you're typing in the input 
        <footer className="footer"> 
        
             <button onClick={props.showCamera}
                style={{left:10, right:'auto'}}>
                <FiCamera style={{height:15, width:15}} />
            </button>
                
            <input className="text-input" //mini loop to change value of text
                value={text}

                // when typing onChange running and makes event
                // everytime you type set value of event = var text using [sexText func. ]
                onChange={(e) => setText(e.target.value)}      

                onKeyPress={onKeyPress}
            />

        {/* sends that message out of this componet */}
        <button className="send" onClick={click}>  
            ↑
        </button>
        
      </footer>
    );
}

export default TextInput;