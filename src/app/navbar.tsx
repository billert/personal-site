'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

const pageList = [{key: 0, name: "software", displayName: "Software"}, {key:1, name: "art", displayName: "Art"}, {key:2, name: "about-me", displayName: "About Me"}]

export default function Navbar() {
    const pathname = usePathname();
    return <header className = "z-10 sticky top-0 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#efefef] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
        <div className = "flex flex-row gap-1">

            <Link href = "/" className = "flex flex-row items-center align-middle p-2">
                <div className = "transition ease-in-out flex flex-row hover:bottom-2">
                    <p className = "text-3xl mr-0 font-bold">billert</p>
                    <p className = "text-3xl ml-0 font-bold text-transparent text-stroke-black dark:text-stroke-white text-stroke-1">.dev</p>
                
                </div>
            </Link>
            {pageList.map((item, index) => {
                return <li key={item.key} className = "list-none flex flex-row align-middle items-center justify-center"><Link href = {"/"+item.name} className= "flex flex-row align-middle items-center justify-center">
                <div className = "transition ease-in-out flex flex-row">
                    <p className = {pathname.includes("/"+item.name) ? "opacity-100  bg-[#00000020] dark:bg-[#ffffff30] p-2" : "opacity-70 p-2"}>{item.displayName}</p>
                </div>
            </Link> </li>
            })}
            <p className = "">Path: {pathname}</p>
            
        </div>
        <p>other end</p>
    </header>
}
