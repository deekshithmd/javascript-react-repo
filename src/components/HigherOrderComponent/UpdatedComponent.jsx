import React,{useState} from 'react';

export const UpdatedComponent = (OriginalComponent) => {
    function NewComponent() {
        const [count,setCount]=useState(0);
        const handleIncrement=()=>{
            setCount(p=>p+1);
        }
        return <OriginalComponent count={count} handleIncrement={handleIncrement}/>
    }
    return NewComponent;
}