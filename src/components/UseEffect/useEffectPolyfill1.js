import { useRef } from "react";

export const useEffectPolyfill1=(cb,deps)=>{
    const isFirstRender=useRef(true);
    const prevDep=useRef(null);

    if(isFirstRender?.current){
        isFirstRender.current=false;
        prevDep.current=deps;
        const cleanup=cb();

        if(cleanup&& typeof cleanup==='function'){
            cleanup();
        }
    }

    const shouldTrigger = deps?(JSON.stringify(prevDep?.current)!==JSON.stringify(deps)):true;

    if(shouldTrigger){
        const cleanup = cb();
        if(cleanup && typeof cleanup==='function'&&deps){
            cleanup();
        }
    }
}