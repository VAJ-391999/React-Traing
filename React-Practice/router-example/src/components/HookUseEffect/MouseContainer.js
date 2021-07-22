import React , {useEffet, useState} from 'react';
import HookMouseEffect from './HookMouseEffect';

function MouseContainer() {

    const[display, setDisplay] = useState(true);

    return (
        <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseEffect></HookMouseEffect>}
        </div>
    );
};

export default MouseContainer;