import React , {useState} from 'react';

function HookcounterThree() {

    const [name, setName] = useState({firstname: '', lastname: ''});

    return (
        <div>
            <form>
                <label>First Name:</label>
                <input 
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name"
                    value={name.firstname}
                    onChange={e => setName({...name,firstname: e.target.value})}/>

                <label>Last Name:</label>
                <input 
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value={name.lastname}
                    onChange={e => setName({...name, lastname: e.target.value})}/>

            </form>
            <h2>Your First Name: {name.firstname}</h2>
            <h2>Your First Name: {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    );

};

export default HookcounterThree;