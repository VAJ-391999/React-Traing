import React, { useState } from 'react';

function About() {
    const[count, addCount] = useState(0);

    return (
        <div>
            <h1>Hello I am About</h1>
            <p>Your current count is {count}</p>
            <button onClick={() => addCount(count+1)}>Add</button>
        </div>
    );
}

export default About;