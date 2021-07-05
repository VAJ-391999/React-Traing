import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XGrid, GridColDef, GridCellParams } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid'
import AddForm from './AddForm';

import { Button } from '@material-ui/core'

export const ActionDelete = () => {
    return <Button variant="outlined">Delete</Button>
}

export const ActionEdit = (params) => {

    /*console.log("params",params)

    const getRowId = (row) => row.id;

    const deleteStudent = (param) => {
        //alert('Are you sure you want to delete this student?')
        let index = Number(getRowId(param));
        console.log("row id", index)
    }*/

    return <Button variant="outlined">Edit</Button>
}



const Dashboard = () => {

    const [student, setStudent] = useState();
    const [isAdd, setIsAdd] = useState(false);

    const getRowId = (row) => row.id;

    useEffect(() => {
        axios.get("http://localhost:4000/restfulapi/student")
            .then(res => {
                setStudent(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(student)

    const columns = [
        {
            field: 'id',
            headerName: 'Id',
            width: 150,
            hide: true
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 150,
        },
        {
            field: '__v',
            headerName: 'version',
            width: 150,
            hide: true
        },
        {
            field: 'delete',
            headerName: "Delete",
            width: 150,
            renderCell: (params) => <ActionDelete params={params} />
        },
        {
            field: 'edit',
            headerName: "Edit",
            width: 150,
            renderCell: (params) => <ActionEdit />
        }
    ]

    //const [rows, setRows] = useState(data);
  /* const [deletedRows, setDeletedRows] = useState({});

   const handleRowSelection = (e) => {
    setDeletedRows({...deletedRows, ...student.filter((r) => r.id === e.data.id)});
  };

  console.log(deletedRows)*/
  


    return (
        <div>
            <h1>I am in dashboard</h1>
            <Button variant="outlined" onClick={() => setIsAdd(true)}>+</Button>
            {isAdd && <AddForm />}
            <div style={{ height: 250, width: '100%' }}>
                {student ? <DataGrid
                    columns={columns}
                    rows={student}
                   // onRowSelected={handleRowSelection}
                /> : null}
            </div>

        </div>
    );
};

export default Dashboard;