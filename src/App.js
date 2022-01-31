import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  function sendMessage(msg) {
    console.log("message", msg);  
    setMessages([...messages, msg])
  }
  console.log(messages)

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>

      <div className="messages">
        {messages.map((msg)=>{
          if (msg==="")
            msg = "‎"
          return <div className="color text point">{msg}</div>
        })}
      </div>

      <TextInput sendMessage={sendMessage}/>
      
    </div>
  );
}

export default App;
