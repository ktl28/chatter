import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import Camera from "react-snap-pic";




function App() {

  // useState makes var=messages
  // initial value is empty array
  // setMessages function is used to update messages (var)
  let [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState(false)


  
  function messageSent(text) { // runs whenever send button is pressed
    if (!text) return;
    
    // new message object
    const newMessage = {
      text, 
      time: Date.now(),
      user: "Kayli: "
    };
    // set the "messages" to be new array with new message + old message
    setMessages([newMessage, ...messages]) // adds onto array using spread operator 
  }
  
  function takePicture(img) {
    console.log(img)
    setShowCamera(false)
}

  // 
  console.log(messages);

  return (
    <div className="App">

      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
      </header>

      {showCamera && <Camera takePicture={takePicture} />}

      <div className="messages">
        {messages.map((msg, i)=>{ // loops over individaul msg and returns msg into bubble
         // loops over every message in the "messages" array and return Message componet
         // "key" needs to be a unique value for each
          return <Message {...msg} key={i} />;
        })}

        {/* {messages.map((msg, j)=>{ 
          return <Name {...msg} key={j} />;
        })} */}
      </div>


       {/* sendMessage prop on TextInput = messageSent function*/}

      <TextInput sendMessage={messageSent}
          showCamera={()=>setShowCamera(true)} 
      />  
    
    </div>
  );
}

export default App;
