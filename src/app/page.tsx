"use client"
import { motion } from "motion/react"
import { useState } from "react"

export default function Page() {

  const pos_list = ["Backend SWE","Web Officer", "Developer", "Web Officer", "Mobile App Developer", "Programming Teacher"]
  const company_list = ["Switchless", "Aggie Competitive Programming Club",  "Texas A&M eSports", "Engineering TA Organization", "Magical Menu", "TAMU Chinese School"]
  const combined_list = []
  for (let i = 0; i < pos_list.length; i++) {
    combined_list.push({what: pos_list[i], who: company_list[i]})
  }

  const [arrow_state, set_arrow_state] = useState<"normal" | "prime" | "activate" | "hover">("normal");
  const [resumeButton, setResumeButton] = useState("Download Résumé");
  return (
    <div className = "">
    <div className="z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <p className = "text-5xl">Hi, I&apos;m <span className = "font-bold">Owen Cai</span>,</p>
        <p className = "text-2xl opacity-70">Student at Texas A&M</p>
        <motion.a layout href="./owen cai resume m6.pdf" download="Owen Cai Resume.pdf" className = "p-4 w-[525] flex flex-row justify-between items-center gap-2 border-2 border-black dark:border-white" onMouseEnter={() => set_arrow_state("hover")} onMouseLeave={() => set_arrow_state("normal")} onMouseDown = {() => set_arrow_state("prime")} onMouseUp = {() => {set_arrow_state("activate"); setResumeButton("Thank you!")}}>
          <p className = "text-5xl">{resumeButton}</p>
          <motion.img src="/arrow-right.svg" alt="Right arrow of Go" style={{rotate:90}} height={60} width={60} animate={arrow_state} variants={{
            normal: {y: 0, opacity:0.7},
            prime: {y: -2, opacity:0.5},
            activate: {y:4, opacity: 1},
            hover: {y: 0, opacity: 0.9}
          }} className="dark:invert"></motion.img>
        </motion.a>
        <p className = "text-2xl opacity-70 mb-0">I&apos;m also a...</p>
        <ul className = "m-0">
        {combined_list.map((item, key) => {
                    return <li key={key} className = "list-none m-0 p-0 gap-0">
                      <p><span className = "font-bold">{item.what}</span> at {item.who}</p>
                    </li>
                })}
        </ul>
      </main>
    </div>
    </div>
  );

}
