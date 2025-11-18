"use client"
import { motion } from "motion/react";

interface ToggleProps {
    isOn: boolean;
    onToggle() : void; // A function that returns nothing
}

export default function Toggle({ isOn, onToggle }: ToggleProps) {
    // for (let i = 0; i < rows; i++) {
    //     start_board.push([]);
    //     for (let j = 0; j < cols; j++) {
    //         start_board[i].push(true)
    //     }
    // }
    // setSt("abc")
    return <div>
        <motion.div onClick={onToggle} className={"group cursor-pointer transition-all w-[60] rounded-full p-1 flex active:bg-[#4b67b5] "+(!isOn ? "justify-start bg-[#6E6E6E]" : "justify-end bg-[#2760FB]")}>
            <motion.div layout>
                <div className="transition-all w-[35] h-[20] bg-white rounded-full group-active:scale-95 group-active:opacity-90 group-active:ml-[5] group-active:mr-[5]">

                </div>
            </motion.div>
        </motion.div>
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
