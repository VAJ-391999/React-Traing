import React from 'react';
import './Person.css';
/*import Radium from 'radium';*/
import styled from 'styled-components';


const currentDate = new Date().toLocaleDateString();
const currnetTime = new Date().toLocaleTimeString();

const person = (props) => {
console.log('person.js redering...')
    return (
        //<div className="Person" style={style}>
        <div>
            <p onClick={props.click}>I am a {props.name}! My age is {props.age}</p>
            <p>Current Date : {currentDate}</p>
            <p>Current Time: {currnetTime}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
            </div>
    
    )
};

export default person;
