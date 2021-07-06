import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import axios from 'axios';


const EditForm = (props) => {

    const [oldData, setOldData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const formSubmit = () => {
        axios.patch(`http://localhost:4000/restfulapi/student/${props.index}`,oldData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        console.log(props.index)
        axios.get(`http://localhost:4000/restfulapi/student/${props.index}`)
            .then(res => {
                console.log(res.data)
                setOldData({
                    ...oldData,
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                    address: res.data.address
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="edirform">
            <form onSubmit={formSubmit}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={oldData.name}
                        onChange={(event) => setOldData({ ...oldData, name: event.target.value })}
                        type="text" />
                </FormControl><br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={oldData.email}
                        onChange={(event) => setOldData({ ...oldData, email: event.target.value })}
                        type="text" />
                </FormControl><br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Phone</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={oldData.phone}
                        onChange={(event) => setOldData({ ...oldData, phone: event.target.value })}
                        type="text" />
                </FormControl><br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Address</InputLabel>
                    <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        value={oldData.address}
                        onChange={(event) => setOldData({ ...oldData, address: event.target.value })}
                        type="text" /><br />
                </FormControl><br />
                <Button variant="contained" type="submit" onClick={props.closeEdit}>Cancle</Button>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default EditForm;