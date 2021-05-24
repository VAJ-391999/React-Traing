import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFatching() {

    const[post, setPost] = useState({});
    const[id, setId] = useState(1);
    const[idFromButtonClick, setIdFromBottonClicke] = useState(1);

    const fetchHandler = () => {
        setIdFromBottonClicke(id)
    }

    useEffect(() => {
        console.log('use effect called fro data fatching')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res);
           setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    return (
        <div>

            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <button onClick={fetchHandler}>Fetch Post</button>
            <h2>{post.title}</h2>

            {/*
            
            <ul style={{textAlign:'center'}}>
                {
                    posts.map(post => 
                         <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
            
            */}
        </div>
    );
};

export default DataFatching;