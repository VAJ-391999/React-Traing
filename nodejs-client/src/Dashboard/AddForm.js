import React, { useState } from "react";
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import axios from 'axios';

const AddForm = (props) => {

    const [newStudent, setNewStudent] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const formSubmit = () => {
        axios.post('http://localhost:4000/restfulapi/student', newStudent)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="AddForm">
            <form onSubmit={formSubmit}>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={newStudent.name}
                    onChange={(event) => setNewStudent({...newStudent, name: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={newStudent.email}
                    onChange={(event) => setNewStudent({...newStudent, email: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={newStudent.phone}
                    onChange={(event) => setNewStudent({...newStudent, phone: event.target.value})}
                    type="text" />
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    value={newStudent.address}
                    onChange={(event) => setNewStudent({...newStudent, address: event.target.value})}
                    type="text" /><br />
            </FormControl><br />
            <Button variant="contained" type="submit" onClick={props.closeAdd}>Cancle</Button>
            <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
        
    );
};

export default AddForm;