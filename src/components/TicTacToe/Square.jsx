import React from "react";

export const Square=({value,handleClick})=>{
    return(
        <div style={{width:'30px',height:'30px',border:'1px solid black'}} onClick={handleClick}>
            {value}
        </div>
    )
}