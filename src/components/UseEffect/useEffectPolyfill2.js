
const hookState=[];
let currentHookIndex=0;
let autoResetScheduled=false;

export const useEffectPolyfill2=(cb, deps)=>{

    if(!autoResetScheduled){
        autoResetScheduled=true;

        queueMicrotask(()=>{
            currentHookIndex=0;
            autoResetScheduled=false;
        })
    }

    const prevHookIndex=currentHookIndex;
    currentHookIndex++;
    const prevHook=hookState[prevHookIndex];

    let shouldRun = !prevHook;

    if(prevHook && deps!== undefined){
        shouldRun= prevHook?.deps.length!==deps.length || deps.some((dep,i)=> !Object.is(dep,prevHook.deps[i]))
    } else if(prevHook&& deps === undefined){
        shouldRun=true;
    }

    hookState[prevHookIndex]={deps, cleanup:prevHook?.cleanup}

    if(shouldRun){
        queueMicrotask(()=>{
            prevHook?.cleanup?.()

            const cleanup = cb();

            if(cleanup&& typeof cleanup==='function'){
                hookState[prevHookIndex].cleanup=cleanup;
            }
        })
    }

}