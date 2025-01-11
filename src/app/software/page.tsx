"use client"

import React from 'react'
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link";


const projects = [{key: 0, name: "Maroon Menu", desc: "A menu checker for Texas A&M Dining Halls that just works", images: ["/maroon menu 1.png", "/maroon menu 2.png", "/maroon menu 3.png", "/maroon menu 4.png", "/maroon menu 5.png"]}]

export default function Page() {
const [emblaRef] = useEmblaCarousel({dragFree: true})
  return (
    <div className = "">
    <div className="z-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
            <div className = "bg-[#dddddd] dark:bg-[#222222] flex flex-col justify-start w-[600] p-2">
              <div className = "flex flex-row justify-between align-middle">
                <p className = "font-bold text-6xl">Maroon Menu</p>
                <Link href = "https://maroonmenu.billert.dev">
                  <Image src = {"/arrow-right.svg"} alt = "Go Button" height = {50} width = {50} className = "dark:invert"></Image>
                </Link>
              </div>

                <p className = "leading-5 w-[350] text-lg mb-2">A menu checker for Texas A&M Dining Halls that just works</p>
                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex gap-2 flex-shrink-0">
                        {projects[0].images.map((item, index) => {
                            return <div key = {index} className = "embla__slide flex-shrink-0">
                                <Image src = {item} alt = "Preview screenshot" height = {300} width = {150} className = "rounded-3xl"></Image>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
        
      </main>
      
    </div>
    </div>
  );

}
