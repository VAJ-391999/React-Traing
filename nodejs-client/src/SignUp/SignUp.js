import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import axios from 'axios';

const SignUp = () => {
    
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        username: '',
        email: '',
        password: ''
    })

    const formSubmit = (event) => {
        event.preventDefault();
        //alert('form submitted successfully')
        //debugger
        axios.post('http://localhost:4000/app/signup', userDetails)
        .then(res => console.log(res.data))

        setUserDetails({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })

    }

    return (
        <div className="signupform">
            <form onSubmit={formSubmit}>
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

            <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUp;