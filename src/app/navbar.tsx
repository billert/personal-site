import Link from "next/link";

export default function Navbar() {
    return <header className = "z-10 sticky top-0 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#dfdfdf] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
        <div className = "flex flex-row gap-8">

            <Link href = "/" className = "flex flex-row m-3">
                <div className = "transition ease-in-out flex flex-row hover:bottom-2">
                    <p className = "text-3xl mr-0 font-bold">billert</p>
                    <p className = "text-3xl ml-0 font-bold text-transparent text-stroke-black dark:text-stroke-white text-stroke-1">.dev</p>
                
                </div>
            </Link>
            <Link href = "/software" className= "flex flex-row m-3 align-middle items-center justify-center">
                <div className = "transition ease-in-out flex flex-row">
                    <p>Software</p>
                </div>
            </Link>
            
        </div>
        <p>other end</p>
    </header>
}
