import { useState } from "react"
import { useEffectPolyfill1 } from "./useEffectPolyfill1";
import { useEffectPolyfill2 } from "./useEffectPolyfill2";





export const UseEffect=()=>{
    const [count,setCount]=useState(0);

    // useEffectPolyfill1(()=>{
    //     console.log('triggering',count)

    //     return ()=>console.log('cleanup')
    // },[count])

    useEffectPolyfill2(()=>{
        console.log('triggering',count)

        return ()=>console.log('cleanup',count)
    },[count])


    return(<div>

        <h2>UseEffect Polyfill</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>)
}