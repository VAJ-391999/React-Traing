import React, { useEffect } from 'react';
import './Cokpit.css';

const cokpit = (props) =>{
    useEffect(() => {
        console.log('Cokpit.js  useEffect');
        //Http Request...
        setTimeout(() => {
            alert('save data to cloud!');
        }, 1000);
    }, []);

    let assignedclasses = [];

    let btnClass = '';

    if(props.showPerson){
        btnClass='Red';
    }

    if (props.persons.length <= 2) {
        assignedclasses.push('red');
    }
    if(props.persons.length <= 1) {
        assignedclasses.push('bold');
    }

    return (
        <div className="Cokpit">
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is really working!!</p>
            <button 
            className = {btnClass}
            onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cokpit;