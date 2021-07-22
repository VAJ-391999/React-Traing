import React, {useEffect, useState} from 'react';

function UseEffectCounterOne() {
    const [count, addCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("UseEffet - updating document title");
        document.title = `You Clicked ${count} times`;
    },[count]) //here every time when count will change it will run UseEffect

   return (
       <div>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
           <button onClick={() =>addCount(count + 1)}>
               count Value {count} 
           </button><br />
           <h2>{name}</h2>
       </div>
   );
};

export default UseEffectCounterOne;