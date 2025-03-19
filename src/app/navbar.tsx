'use client'

import { motion } from "motion/react"
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation"
import Image from "next/image";
import { useState } from "react"
import {ThreeBarsIcon} from '@primer/octicons-react'

const pageList = [{key: 0, name: "software", displayName: "Software"}, {key:1, name: "art", displayName: "Art"}, {key:2, name: "about-me", displayName: "About Me"}]
const socialList = [{key: 0, url: "https://www.instagram.com/owenbcai/", logo: "/Instagram_Glyph_Black.svg", name: "Instagram"}, {key: 1, url: "https://codeforces.com/profile/billert12", logo: "/codeforces.svg", name: "Codeforces"}, {key: 2, url: "https://github.com/billert", logo: "/github.svg", name: "Github"}, {key: 3, url: "https://www.linkedin.com/in/owenbcai/", logo: "/InBug-Black.png", name: "LinkedIn"}]

export default function Navbar() {
    const pathname = usePathname();
    const [showMenu, setShowMenuState] = useState(false);
    const [menu_item_state, set_menu_item_state] = useState<"closed" | "open">("closed");
    const setShowMenu = (a: boolean) => {
        setShowMenuState(a)
        set_menu_item_state(a ? "open" : "closed"); // true left, false right
    }
    const [menu_state, set_menu_state] = useState<"closed" | "open" | "press" | "hover">("closed");
    return <header className = "z-20 fixed w-screen">
        <motion.div style={{zIndex: 30}} className = "pl-1 pr-1 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#efefef] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
            <div className = "flex flex-row gap-1">

                <Link href = "/" className = "transition-all flex flex-row items-center align-middle p-1 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60]">
                    <div className = "transition ease-in-out flex flex-row">
                        <p className = "text-3xl mr-0 font-bold">billert</p>
                        <p className = "text-3xl ml-0 font-bold text-transparent text-stroke-black dark:text-stroke-white text-stroke-1">.dev</p>
                    
                    </div>
                </Link>
                {pageList.map((item) => {
                    return <li key={item.key} className = "list-none hidden md:flex flex-row align-middle items-center justify-center">
                        <Link href = {"/"+item.name} onClick = {() => {setShowMenu(false)}} className= "flex flex-row align-middle items-center justify-center">
                            <motion.div layout className = {"transition ease-in-out flex flex-row "}>
                                <p className = {pathname.includes("/"+item.name) ? "transition-all opacity-100  bg-[#00000020] dark:bg-[#ffffff30] p-2  active:scale-90 active:bg-[#00000060] dark:active:bg-[#ffffff60]" : "transition-all opacity-70 p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60] hover:scale-105 active:scale-90"}>{item.displayName}</p>
                            </motion.div>
                        </Link>
                    </li>
                })}
                {/*<p className = "">Path: {pathname}</p>*/}
                
            </div>
            <div className = "flex flex-row gap-1">
                {socialList.map((item) => {
                    return <li key = {item.key} className = "list-none hidden md:flex">
                        <Link href = {item.url} className = "transition-all hover:opacity-70 active:opacity-40">
                            <Image aria-hidden src={item.logo} alt={item.name} width={32} height={32} className="dark:invert">

                            </Image>
                        </Link>
                    </li>
                })}
                <motion.a href = "javascript:;" className = "flex flex-row items-center align-middle md:hidden gap-1" suppressHydrationWarning onClick = {() => {setShowMenu(!showMenu); return false;}} animate={menu_state}
                          onMouseEnter={() => set_menu_state("hover")} onMouseLeave={() => {if (showMenu) {set_menu_state("open")} else set_menu_state("closed")}} onMouseDown = {() => set_menu_state("press")} onMouseUp = {() => {set_menu_state("hover")}}
                          variants={{
                    closed: {x: 0, scale:0.9, opacity:0.4},
                    open: {x: 0, scale:0.95, opacity:0.9},
                    press: {x: 0, scale: 0.85, opacity:0.6},
                    hover: {x: 0, scale: 1, opacity:1.0}}}>
                    <ThreeBarsIcon size={40} />
                    
                </motion.a>
            </div>
        </motion.div>
        <motion.div style = {{zIndex: 10}} className = {`${showMenu ? "" : ""} bg-[#dddddda0] dark:bg-[#222222a0] backdrop-blur-md transition-all duration-500 flex flex-col`} animate={menu_item_state} variants={{
            closed: {y: -250, scaleY:1, opacity:1, transition: { ease: ['linear'], duration: 0 }},
            open: {y: 0, scaleY:1, opacity:1, transition: { ease: ['linear'], duration: 0 }},
        }}>
            <div className = "flex flex-col">
                <motion.ul>
                {pageList.map((item) => {
                    return <motion.li key={item.key} className = "list-none md:hidden flex-row align-middle items-center justify-center" animate={menu_item_state} variants = {{
                        closed: {x: 0, scale:0.5, opacity:0.3},
                        open: {x: 0, scale:1, opacity:1, transition: {delay: 0.2+item.key*0.08}},
                    }}>
                        <Link href = {"/"+item.name} onClick = {() => {setShowMenu(false)}} className= "flex flex-row align-middle items-center justify-center">
                            <div className = "flex flex-row items-center align-middle">
                                <p className = {pathname.includes("/"+item.name) ? "opacity-100  bg-[#00000020] dark:bg-[#ffffff30] p-2 w-screen text-center" : "transition-colors opacity-60 p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60] w-screen text-center"}>{item.displayName}</p>
                            </div>
                        </Link>
                    </motion.li>
                })}
                </motion.ul>
                <div className = "md:hidden flex flex-row gap-1 items-center justify-center mb-2 mt-2">
                {socialList.map((item) => {
                    return <motion.li key = {item.key} className = "list-none flex" animate={menu_item_state} variants = {{
                        closed: {x: 0, scale:0.5, opacity:0.0, transition: { ease: ['easeInOut'], duration: 0.5 }},
                        open: {x: 0, scale:1, opacity:1, transition: { ease: ['easeInOut'], duration: 0.5, delay: 0.2+item.key*0.02 }},
                    }}>
                        <a href = {item.url} className="transition-all hover:opacity-70 active:opacity-40">
                            <Image aria-hidden src={item.logo} alt={item.name} width={32} height={32} className="dark:invert">

                            </Image>
                        </a>
                    </motion.li>
                })}
                </div>
            </div>
        </motion.div>
    </header>
}
