"use client"
import { useState} from "react";


function clickBoard(in_board: boolean[][], row: number, col: number) {
    const board = JSON.parse(JSON.stringify(in_board));
    const neighbors = [[0, 0], [0, 1], [1, 0], [0, -1], [-1, 0]]
    neighbors.forEach((neighbor) => {
        const c_row = row + neighbor[0]
        const c_col = col + neighbor[1]
        if (c_col >= 0 && c_row >= 0 && c_row < board.length && c_col < board[0].length) {
            board[c_row][c_col] = !board[c_row][c_col]
        }
    })
    console.log("finish click")
    // update_state(board)
    return board
}

function resetBoard(rows: number, cols: number) {
    return Array.from({ length: rows }, () => (
        Array.from({ length: cols }, () => (Math.random() < 0.5))
    ))
}

function safeDec(num: number) {
    if (num <= 1) {
        return 1
    }
    return num - 1
}

function safeInc(num: number, limit: number) {
    if (num >= limit) {
        return limit
    }
    return num + 1
}

export default function LightsOut() {
    const [rows, setRows] = useState(6)
    const [cols, setCols] = useState(6)
    const [board, setBoard] = useState<boolean[][]>(Array.from({ length: rows }, () => (
        Array.from({ length: cols }, () => (Math.random() < 0.5))
    )));
    // for (let i = 0; i < rows; i++) {
    //     start_board.push([]);
    //     for (let j = 0; j < cols; j++) {
    //         start_board[i].push(true)
    //     }
    // }
    // setSt("abc")
    console.log(board);
    return <div>
        <div className="flex flex-row gap-8 mb-5">
            <div className="flex flex-row gap-2">
                <div className="cursor-pointer" onClick={() => {setRows(safeDec(rows))}}>-</div>
                <p>{rows} rows</p>
                <div className="cursor-pointer" onClick={() => {setRows(safeInc(rows, 1000))}}>+</div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="cursor-pointer" onClick={() => {setCols(safeDec(cols))}}>-</div>
                <p>{cols} cols</p>
                <div className="cursor-pointer" onClick={() => {setCols(safeInc(cols, 1000))}}>+</div>
            </div>
            <div className="cursor-pointer" onClick={() => {setBoard(resetBoard(rows, cols))}}>
                Regenerate
            </div>
        </div>
        <div className="flex flex-col gap-2">
            {board.map((row, i) => (
                <div className={"list-none"} key={i}>
                    <div className="flex flex-row gap-2">
                        {row.map((cell, j) => (
                            <div className="w-7 border-2 text-center cursor-pointer" onClick={() => {setBoard(clickBoard(board, i, j))}} key={j}>
                                <p className={cell ? "bg-[#00000090] dark:bg-[#ffffff90]" : ""}>{cell ? "1" : "0"}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
}


// function LightsOutOld({ rows, cols }: { rows: number, cols: number }) {
//     const [board, setBoard] = useState<boolean[][]>(Array.from({ length: rows }, () => (
//         Array.from({ length: cols }, () => (Math.random() < 0.5))
//     )));
//     // for (let i = 0; i < rows; i++) {
//     //     start_board.push([]);
//     //     for (let j = 0; j < cols; j++) {
//     //         start_board[i].push(true)
//     //     }
//     // }
//     // setSt("abc")
//     console.log(board);
//     return <div>
//         <div className="flex flex-col gap-2">
//             {board.map((row, i) => (
//                 <div className={"list-none"} key={i}>
//                     <div className="flex flex-row gap-2">
//                         {row.map((cell, j) => (
//                             <div className="w-7 border-2 text-center cursor-pointer" onClick={() => {setBoard(clickBoard(board, i, j))}} key={j}>
//                                 <p className={cell ? "bg-[#00000090] dark:bg-[#ffffff90]" : ""}>{cell ? "1" : "0"}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// }
