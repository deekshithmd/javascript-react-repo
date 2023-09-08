import React from "react";

export const ChessBoard = () => {
    // const Boxes = [...Array(8)].map(i => Array(8))
    const [boxes, setBoxes] = React.useState([]);
    const n = 8, m = 8;

    React.useEffect(() => {
        const result = [];
        for (let i = 0; i < n; i++) {
            const row = Array.from({ length: m });
            result.push(row)
        }
        setBoxes(result)
    }, [])

    return (
        <div style={{width:'100%' ,display:'flex', flexDirection:'column',alignItems:'center',margin:'30px 0px', border:'1px solid black'}}>
            <h1>ChessBoard</h1>
            <div style={{ height: '160px', width: '160px', border: '1px solid black' }}>
                {
                    boxes?.map((array, i) => {
                        return (
                            <div key={i} style={{ width: '100%', height: '20px',display:'flex' }}>
                                {

                                    array?.map((_, ind) => {
                                        return (
                                            <div key={ind} style={{ width: '20px', height: '20px', backgroundColor: (i + ind) % 2 === 0 ? 'black' : 'white' }}></div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            {/* To prevent pasting */}
            <label>Can't Paste here
            <input onPaste={(e)=>e.preventDefault()}/>
            </label>
        </div >
    )

}