import React from 'react'
import ReactDom from 'react-dom';

export const App = () => {
    return (
        <div>
            <h1>Testing!!!!</h1>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));