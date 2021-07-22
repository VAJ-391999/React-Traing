import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        username: '',
        email: '',
        password: ''
    })

    const history = useHistory();
    const [signUpStatus, setSignUpStatus] = useState()

    const formSubmit = (event) => {
        event.preventDefault();
        //alert('form submitted successfully')
        //debugger
        axios.post('http://localhost:4000/app/signup', userDetails)
        .then(res => {
            console.log(res.data)
            setSignUpStatus(res.data.msg)
            if (res.data.signup) {
                history.replace('/login');
            }
        })

        setUserDetails({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })

    }

    return (
        <div className="SignUp">
            <form onSubmit={formSubmit} className="Signup-form">
                <h1>SignUp Form</h1>
            <FormControl>
                <InputLabel htmlFor="my-input">Full Name</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={userDetails.fullName}
                    onChange={(event) => setUserDetails({...userDetails, fullName: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={userDetails.username}
                    onChange={(event) => setUserDetails({...userDetails, username: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={userDetails.email}
                    onChange={(event) => setUserDetails({...userDetails, email: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={userDetails.password}
                    onChange={(event) => setUserDetails({...userDetails, password: event.target.value})}
                    type="password" /><br />
            </FormControl><br />

            <div className="signup-msg">
                {signUpStatus}
            </div>

            <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUp;