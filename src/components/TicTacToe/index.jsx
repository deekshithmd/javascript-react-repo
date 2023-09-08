import React, { useState } from "react";
import { Square } from "./Square";

export const TicTacToe = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [winner,setWinner]=useState('')

    const handleClick = (i) => {
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        setXIsNext(!xIsNext)
        setSquares(nextSquares)
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    let result=calculateWinner(squares);
    let status
    if(result){
        status='Winner:'+result
    }else{
        status='Next Player:'+(xIsNext?'X':'O');
    }

    return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black' }}>
        <h1>TicTacToe</h1>
        <h1>{status}</h1>
        <div style={{ display: 'flex' }}>
            <Square value={squares[0]} handleClick={() => handleClick(0)} />
            <Square value={squares[1]} handleClick={() => handleClick(1)} />
            <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div style={{ display: 'flex' }}>
            <Square value={squares[3]} handleClick={() => handleClick(3)} />
            <Square value={squares[4]} handleClick={() => handleClick(4)} />
            <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div style={{ display: 'flex' }}>
            <Square value={squares[6]} handleClick={() => handleClick(6)} />
            <Square value={squares[7]} handleClick={() => handleClick(7)} />
            <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>

    </div>
}