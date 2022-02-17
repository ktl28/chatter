import React from 'react'

export default function Message(props) {

  
  return (
      <div className="color text point">
      <span className="username">{props.user}</span>
      <span>{props.text}</span>
      </div>
    );
  }
