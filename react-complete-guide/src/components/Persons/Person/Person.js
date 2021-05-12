import React from 'react';
import './Person.css';
/*import Radium from 'radium';*/
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #eee;
    padding: 60px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
    `;
const person = (props) => {
    const style  = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };

const currentDate = new Date().toLocaleDateString();
const currnetTime = new Date().toLocaleTimeString();


    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I am a {props.name}! My age is {props.age}</p>
            <p>Current Date : {currentDate}</p>
            <p>Current Time: {currnetTime}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </StyledDiv>
    
    )
};

export default person;
