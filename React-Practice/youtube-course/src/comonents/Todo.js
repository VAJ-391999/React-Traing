import React from 'react';

function Todo(props) {
    function deletHandler () {
        alert('hello');
    }
       
        return (
            <div className="Card">
            <h2>{props.title}</h2>
            <div className="actions">
              <button className="btn" onClick={deletHandler}>Delete</button>
            </div>
          </div>
        )
}

export default Todo;