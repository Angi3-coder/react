import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddUserForm() {

    //set variable to hold the inputs
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [bio, setBio] = useState('');
    const [version, setVersion] = useState('');


    //function to handle submit

    function handleSubmit(e){
        e.preventDefault();

        //create a new user object
        const newUser = {name, language, bio, version};
        

        //POST
        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
                "Content-type": 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            console.log(name)
            setName('')
            setBio('')
            setLanguage('')
            setVersion('')
        })
        .catch(err=>console.error("Error!", err))
    }
    


  return (
    <div>

        {/* add onSubmit event handler */}
        <Form onSubmit={handleSubmit}>
            {/* name input */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Enter name:" />
            </Form.Group>

            {/* language input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>language</Form.Label>
                <Form.Control type="text" placeholder="langage" />
            </Form.Group>
            
            {/* bio input */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>bio</Form.Label>
                <Form.Control type="text" placeholder="bio" />
            </Form.Group>

            {/* version */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>version</Form.Label>
                <Form.Control type="text" placeholder="version" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    </div>
  )
}

export default AddUserForm