import React, { EventHandler, useContext, useEffect, useState } from 'react';
import { UseContext } from '../App';
import UserXContext, { userName } from './UserContextExample';
import TextField from './TextField';
import TestUseReduer from './UseReducerComponent';

function ConsumeContext(): JSX.Element {
    const sampleContext = useContext(UserXContext);

    return(
        <div>
            {sampleContext.firstname}
            {sampleContext.lastname}
        </div>
    );
};


function UseStateExample() {

    const ExampleUseContext = useContext(UseContext);
    const [item, setItem] = useState<string>();
    const [items, setItems] = useState<Array<string>>([]);
    const [timer, setTimer] = useState<Date>(new Date());
    const [user, setUser] = useState<typeof userName>({
        firstname: 'hello',
        lastname: 'world'
    });




    const takeItem = () => {
        console.log("Hello" + item);

        console.log("hello");
        console.log(item);
        setItems([...items, `${item}`]);
        setItem('');
    }

    useEffect(() => {
        setTimeout(() => {
            //setTimer(timer - 1);
        }, 1000);
    }, [timer]);

    return (
        <div>
            <h1>{timer.toLocaleTimeString()}</h1>
            <input type="text" placeholder="Item" name="itemName" onChange={(e: any) => setItem(e.target.value)} value={item} />
            <button type="submit" onClick={() => takeItem()}>sunmit Item {item}</button>

            {JSON.stringify(items)}
            <ul>
                {items.map((i, index) => {
                    <li key={index}>
                        {i}
                    </li>
                })}
            </ul>
            {ExampleUseContext.first}
            {ExampleUseContext.last.l}
            <UserXContext.Provider value={user}>
                <ConsumeContext />
                <input type="text" placeholder="Enter first name" onChange={(e) => setUser( {
                    ...user,
                    firstname: e.target.value
                })}/>
                <input type="text" placeholder="Enter last name" onChange={(e) => setUser( {
                    ...user,
                    lastname: e.target.value
                })}/>

            </UserXContext.Provider>
            <TestUseReduer />
        </div>
    );
};

export default UseStateExample;