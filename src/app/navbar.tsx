export default function Navbar() {
    return <header className = "z-10 sticky top-0 flex flex-row items-center justify-between align-middle h-12 w-full bg-[repeating-linear-gradient(45deg,var(--tw-gradient-stops))] from-[#dfdfdf] dark:from-[#090909] from-[length:0_20px] to-[#f5f5f5] dark:to-[#161616] to-[length:20px_40px]">
        <div className = "flex flex-row">
            <div className = "flex flex-row">
                <p className = "text-3xl m-3 mr-0 font-bold font-sans">billert</p>
                <p className = "text-3xl m-3 ml-0 font-bold font-sans">.me</p>
            </div>
            
        </div>
        <p>other end</p>
    </header>
}
