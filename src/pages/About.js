import React, { useEffect } from "react";
import { useState } from "react";
import AddUserForm from "../components/AddUserForm";

function About(){

    // declare a state variable ('users') to hold the fetched data
    const [users, setUsers] = useState(null);

    // useEffect -hooks for fetching data
    // syntax
    //      useEffect( (arrowfunction) =>{fetching, } [])
    useEffect(()=> {
        //fetch user data

        fetch('http://localhost:3000/users')
            .then(res=> res.json())
            .then(data => {
                setUsers(data)// update the users with the fetched data
            })

    }, [])



    return (

        <div>
            <h1>About Page</h1>

            <AddUserForm />

            {/* Conditionally render the users  */}
            <h2>Users</h2>

            {/* {condition ? (code): (code)} */}

            {users?(
                <ol>
                    {users.map(user=> (
                        <li>{user.name}: {user.language}<br/>
                        {user.bio}</li>
                    ))}
                </ol>
            ):(
                <p>Loading users....</p>
            )}


        </div>
       

       
    )
}

export default About;