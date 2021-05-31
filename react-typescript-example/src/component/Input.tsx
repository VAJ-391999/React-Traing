import React, {useRef} from 'react';

function Input ({label, placeholder, type, ref}: {label: string, placeholder: string, type: string, ref: any}): JSX.Element {
    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} ref={ref}/>
        </>
    );
};

const forwardInputRef = React.forwardRef(Input)

export default forwardInputRef;