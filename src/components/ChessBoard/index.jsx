import React from "react";
import "./chess.css"

export const ChessBoard = () => {
    // const Boxes = [...Array(8)].map(i => Array(8))
    // console.log("boxes", Boxes)
    // return (
    //     <div>
    //         <h1>ChessBoard</h1>
    //         <div style={{ height: '160px', width: '160px', border: '1px solid black' }}>
    //             {
    //                 Boxes?.map((array, i) => {
    //                     return (
    //                         <div key={i} style={{ width: '20px', height: '20px', backgroundColor: i % 2 === 0 ? 'black' : 'white' }}>
    //                             {
    //                                 array?.map((_, ind) => {
    //                                     return (
    //                                         <div key={ind} style={{ width: '20px', height: '20px', backgroundColor: (i + ind) % 2 === 0 ? 'black' : 'white' }}></div>
    //                                     )
    //                                 })
    //                             }
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div >
    // )
    // Number of rows
    const n = 8;

    // Number of columns
    const m = 8;

    // Array which will be used to 
    // display the chessboard
    const [chessBoard, setChessBoard] = React.useState([]);

    React.useEffect(() => {

        // Initialize result with an empty array
        const result = [];

        // Iterate n number of times to
        // create n number of rows
        for (let i = 0; i < n; i++) {

            // For each of row create an Array
            // of length m (number of columns)
            const row = Array.from({ length: m });
            result.push(row);
        }

        // Set chess board's value to the
        // created 2d result array
        setChessBoard(result);
    }, []);
    console.log(chessBoard)

    return (
        <>
            {chessBoard.length > 0 &&
                chessBoard.map((row, rIndex) => {
                    return (
                        <div className="row" key={rIndex}>
                            {row.map((_, cIndex) => {
                                return (
                                    <div
                                        // className={`box ${

                                        //     // If the sum of row index 
                                        //     // and column index is even 
                                        //     // then background will be 
                                        //     // black else white
                                        //     (rIndex + cIndex) % 2 === 0
                                        //         ? "black" : "white"
                                        //     }`}
                                        style={{ width: '20px', height: '20px', backgroundColor: (rIndex + cIndex) % 2 === 0 ? 'black' : 'white' }}
                                        key={cIndex}
                                    ></div>
                                );
                            })}
                        </div>
                    );
                })}
        </>
    );
}