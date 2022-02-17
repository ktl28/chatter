import React from "react";
import "./App.css";
import {useState} from "react";
import { FiArrowDownRight } from 'react-icons/fi'


function NamePicker(props) {
        const [editName, setEditName] = useState(false)
        const [name, setName] = useState('')

    function edit() {
        props.edit(name + ": ")
        setEditName(false)
    }

    
    // edit user name if button is pressed
    if (editName) {
    return (
        <div className="username">
            <input 
                className="username-input" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onKeyPress={(e) => {
                    if(e.key==="Enter") edit()
                }}
            />
            <button className="username" onClick={edit}>OK</button>
        </div>
    )
    }

    // changing username and imports fi icon
    else {
        return (
            <div className="username">
                <button className="ok" onClick={()=>setEditName(true)}>
                username <FiArrowDownRight/>
                </button>
                
            <div className="display">
                <div>{name}</div> 
            </div>
            </div>
        )
    }
}

export default NamePicker