
import React, { useState, useHistory } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import axios from 'axios';

const Login = () => {

    

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    
    const loginFormSubmit = (event) => {
        event.preventDefault();

        axios.get('http://localhost:4000/app/login')
        .then(res => {
            const serversideData = res.data;
            serversideData.map((user,index) => {
                if(user.email === loginDetails.email) {
                    if(user.password === loginDetails.password) {
                        console.log("You have successful logged in");
                        
                    }
                }
                
            })
        })

       
    }


    return (
        <div>
            <form>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={loginDetails.email}
                    onChange={(event) => setLoginDetails({...loginDetails, email: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={loginDetails.password}
                    onChange={(event) => setLoginDetails({...loginDetails, password: event.target.value})}
                    type="password" /><br />
            </FormControl><br />

            <Button variant="contained" type="submit" onClick={(event) => loginFormSubmit(event)}>Submit</Button>
            </form>
           
        </div>
    );
};

export default Login;