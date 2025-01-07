'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";

const pageList = [{key: 0, name: "software", displayName: "Software"}, {key:1, name: "art", displayName: "Art"}, {key:2, name: "about-me", displayName: "About Me"}]
const socialList = [{key: 0, url: "https://codeforces.com/profile/billert12", logo: "/codeforces.svg", name: "Codeforces"}, {key: 1, url: "https://github.com/billert", logo: "/github.svg", name: "Github"}]

export default function Navbar() {
    const pathname = usePathname();
    return <header className = "z-10 sticky pl-1 pr-1 top-0 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#efefef] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
        <div className = "flex flex-row gap-1">

            <Link href = "/" className = "flex flex-row items-center align-middle p-1 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60]">
                <div className = "transition ease-in-out flex flex-row">
                    <p className = "text-3xl mr-0 font-bold">billert</p>
                    <p className = "text-3xl ml-0 font-bold text-transparent text-stroke-black dark:text-stroke-white text-stroke-1">.dev</p>
                
                </div>
            </Link>
            {pageList.map((item) => {
                return <li key={item.key} className = "list-none flex flex-row align-middle items-center justify-center"><Link href = {"/"+item.name} className= "flex flex-row align-middle items-center justify-center">
                <div className = "transition ease-in-out flex flex-row">
                    <p className = {pathname.includes("/"+item.name) ? "opacity-100  bg-[#00000020] dark:bg-[#ffffff30] p-2" : "opacity-70 p-2 hover:bg-[#00000010] dark:hover:bg-[#ffffff10] active:bg-[#00000060] dark:active:bg-[#ffffff60]"}>{item.displayName}</p>
                </div>
            </Link> </li>
            })}
            {/*<p className = "">Path: {pathname}</p>*/}
            
        </div>
        <div className = "flex flew-row gap-1">
            {socialList.map((item) => {
                return <li key = {item.key} className = "list-none">
                    <a href = {item.url}>
                        <Image aria-hidden src={item.logo} alt={item.name} width={32} height={32} className="dark:invert">

                        </Image>
                    </a>
                </li>
            })}
        </div>
    </header>
}
