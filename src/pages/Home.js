import React from "react";
import Welcome from "../components/Welcome";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Home() {

    //useState
    const [count, setCount] = useState(0)
    const [text, setText] = useState('Hello')

    function handleClick(){
        setCount(count + 1)
    }

    function updateText(){
        setText("Heeyyy")
    }
    //Hooks - tell react how to respond to changes of state
    
    return(
        //html
        <div>
            <h1>Home Page</h1>
            <p>This is my home page</p>
            <Welcome name = "jane"/>
            <Welcome name="John"/>
            <Welcome name='Alice'/>
            <Button variant="success" onClick= {handleClick}>Button</Button>
            <h4>Count: {count}</h4>
            <hr/>

            <h4>{text}</h4>
            <Button variant="success" onClick= {updateText}>Click</Button>


            
        </div>
        
        
    )
}

export default Home;