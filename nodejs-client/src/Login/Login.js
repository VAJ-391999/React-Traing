
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import './Login.css'
import axios from 'axios';

const Login = () => {

    let history = useHistory();

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const [loginMsg, setLoginMsg] = useState({ msg: "" })
    const [cookieData, setCookieData] = useState({})

    const loginFormSubmit = (event) => {
        event.preventDefault();

        /*axios.get('http://localhost:4000/app/login')
        .then(res => {
            const serversideData = res.data;
            serversideData.map((user,index) => {
                if(user.email === loginDetails.email) {
                    if(user.password === loginDetails.password) {
                        console.log("You have successful logged in");
                        history.replace('/Dashboard')
                    }
                }
                
            })
        })*/

        axios.post('http://localhost:4000/app/login', loginDetails, {withCredentials : true})
            .then(res => {
                console.log("After post", res.data)
                setLoginMsg({...loginMsg, msg : res.data.msg})

               if (res.data.user) {
                   history.replace('/dashboard')
               }
            })
    }


    return (
        <div className="Login">
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={loginDetails.email}
                        onChange={(event) => setLoginDetails({ ...loginDetails, email: event.target.value })}
                        type="text" />
                </FormControl><br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={loginDetails.password}
                        onChange={(event) => setLoginDetails({ ...loginDetails, password: event.target.value })}
                        type="password" /><br />
                </FormControl><br />

                <Button variant="contained" type="submit" onClick={(event) => loginFormSubmit(event)}>Submit</Button>
            </form>

            <div className="Msg-div">
                {loginMsg.msg}
            </div>

        </div>
    );
};

export default Login;