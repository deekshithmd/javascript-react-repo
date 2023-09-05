import React from "react";
import "./chess.css"

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
        <div>
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
            <input onPaste={(e)=>e.preventDefault()}/>
        </div >
    )

}