'use client'

import { motion } from "motion/react"
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation"
import Image from "next/image";
import { useState } from "react"

const pageList = [{key: 0, name: "software", displayName: "Software"}, {key:1, name: "art", displayName: "Art"}, {key:2, name: "about-me", displayName: "About Me"}]
const socialList = [{key: 2, url: "https://www.instagram.com/owenbcai/", logo: "/Instagram_Glyph_Black.svg", name: "Instagram"}, {key: 0, url: "https://codeforces.com/profile/billert12", logo: "/codeforces.svg", name: "Codeforces"}, {key: 1, url: "https://github.com/billert", logo: "/github.svg", name: "Github"}, {key: 3, url: "https://www.linkedin.com/in/owenbcai/", logo: "/InBug-Black.png", name: "LinkedIn"}]

export default function Navbar() {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);
    return <header className = "z-20 fixed w-screen">
        <div className = "pl-1 pr-1 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#efefef] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
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
                <a href = "javascript:;" className = "flex flex-row items-center align-middle md:hidden gap-1" suppressHydrationWarning onClick = {() => {setShowMenu(!showMenu); return false;}}>
                    Menu
                    
                </a>
            </div>
        </div>
        <div className = {`${showMenu ? "translate-y-0" : "hidden translate-y-full"} bg-[#dddddda0] dark:bg-[#222222a0] backdrop-blur-md transition-all duration-500 flex flex-col`}>
            <div className = "flex flex-col">
                {pageList.map((item) => {
                    return <li key={item.key} className = "list-none md:hidden flex-row align-middle items-center justify-center">
                        <Link href = {"/"+item.name} onClick = {() => {setShowMenu(false)}} className= "flex flex-row align-middle items-center justify-center">
                            <div className = "flex flex-row items-center align-middle">
                                <p className = {pathname.includes("/"+item.name) ? "opacity-100  bg-[#00000020] dark:bg-[#ffffff30] p-2 w-screen text-center" : "transition-colors opacity-60 p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60] w-screen text-center"}>{item.displayName}</p>
                            </div>
                        </Link>
                    </li>
                })}
                <div className = "flex flex-row gap-1 items-center justify-center mb-2 mt-2">
                {socialList.map((item) => {
                    return <li key = {item.key} className = "list-none flex">
                        <a href = {item.url} className="transition-all hover:opacity-70 active:opacity-40">
                            <Image aria-hidden src={item.logo} alt={item.name} width={32} height={32} className="dark:invert">

                            </Image>
                        </a>
                    </li>
                })}
                </div>
            </div>
        </div>
    </header>
}
