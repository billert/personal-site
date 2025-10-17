"use client"
import LightsOut from "../LightsOut"

export default function Page() {
    return (
        <div className = "">
            <div className="z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <p className = "text-5xl">Custom Lights Out</p>
                    <LightsOut/>
                </main>
            </div>
        </div>
    );

}
