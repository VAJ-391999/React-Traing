import React from 'react';


interface Props {
    text: string;
}


const TextField = (p1: Props) => {
    return (
        <div>
            <h1> Hi I am A TextField. {p1.text} </h1>
        </div>
    );
};

export default TextField;