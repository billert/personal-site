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
        <div>
          <p className = "text-5xl"><motion.span style={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:0}}>Hi,</motion.span><motion.span style={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:0.4}}> I&apos;m </motion.span><motion.span className = "font-bold" style={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:0.6}}>Owen Cai</motion.span><motion.span style={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:0.8}}>,</motion.span></p>

          <motion.p className = "text-2xl" style={{opacity:0}} animate={{opacity:0.7}} transition={{delay:1.2}}>Student at Texas A&M.</motion.p>

        </div>
        <div>
          <motion.p className = "text-2xl mb-0" style={{opacity:0}} animate={{opacity:0.7}} transition={{delay:2.5}}>I&apos;ve also been a...</motion.p>
          <motion.ul className = "m-0" >
          {combined_list.map((item, key) => {
                      return <motion.li key={key} className = "list-none m-0 p-0 gap-0" style={{opacity:0, x:-10}} animate={{opacity:1,x:0}} transition={{delay:3+key*0.6, duration:0.5}}>
                        <p><span className = "font-bold">{item.what}</span> at {item.who}</p>
                      </motion.li>
                  })}
          </motion.ul>
        </div>
        <motion.a layout href="./owen cai resume m15.pdf" download="Owen Cai Resume.pdf" style={{opacity:0, y:5}} animate={{opacity:1, y:0, transition:{delay: 4+combined_list.length*0.6, duration:1}}} className = "p-4 flex flex-row justify-between items-center gap-2 border-2 border-black dark:border-white" onMouseEnter={() => set_arrow_state("hover")} onMouseLeave={() => set_arrow_state("normal")} onMouseDown = {() => set_arrow_state("prime")} onMouseUp = {() => {set_arrow_state("activate"); setResumeButton("Thank you!")}}>
          <p className = "text-3xl">{resumeButton}</p>
          <motion.img src="/arrow-right.svg" alt="Right arrow of Go" style={{rotate:90}} height={45} width={45} animate={arrow_state} variants={{
            normal: {y: 0, opacity:0.7},
            prime: {y: -2, opacity:0.5},
            activate: {y:4, opacity: 1},
            hover: {y: 0, opacity: 0.9}
          }} className="dark:invert"></motion.img>
        </motion.a>
      </main>
    </div>
    </div>
  );

}
