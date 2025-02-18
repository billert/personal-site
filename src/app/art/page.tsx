"use client"
import Image from "next/image"
import { motion, useMotionValue } from "motion/react"
import { useState } from "react"

export default function Page() {
  const x = useMotionValue(0)
  const opacity = useMotionValue(1)
  const [arrow_state, set_arrow_state] = useState<"normal" | "prime" | "activate" | "hover">("normal");
  return (
    <div className = "">
    <div className="z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <p className = "text-5xl">My art portfolio can be found as a PowerPoint:</p>
        <a href="https://tamucs-my.sharepoint.com/:p:/g/personal/billert_tamu_edu/Ee5WWmMvqmhBhlXWUt5EJFwB04Xt9AC3SbEfsW0qrHxBsA?e=bEIJxu" className = "p-4 flex flex-row justify-center items-center gap-2 border-2 border-black dark:border-white" onMouseEnter={() => set_arrow_state("hover")} onMouseLeave={() => set_arrow_state("normal")} onMouseDown = {() => set_arrow_state("prime")} onMouseUp = {() => set_arrow_state("activate")}>
          <p className = "text-5xl">Go</p>
          <motion.img src="/arrow-right.svg" alt="Right arrow of Go" height={60} width={60} animate={arrow_state} variants={{
            normal: {x: 0, opacity:0.8},
            prime: {x: -2, opacity:0.6},
            activate: {x:4, opacity: 1},
            hover: {x: 0, opacity: 0.9}
          }} className="dark:invert"></motion.img>
        </a>
      </main>
    </div>
    </div>
  );

}
