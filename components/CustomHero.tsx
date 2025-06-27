'use client'
import React, {useRef} from 'react'
import TextPressure from './TextPressure'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function CustomHero({ heading, subheading }: { heading: string, subheading: string }) {

    const headingRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
       
        if (headingRef.current) {
         const el = headingRef.current;
        const text = el.textContent || "";
        // Split into words, then wrap each word in a span, and each char in a span
        el.innerHTML = text
            .split(" ")
            .map(word =>
                `<span style="display:inline-block;white-space:nowrap;">${
                    word
                        .split("")
                        .map(char =>
                            `<span style="display:inline-block">${char}</span>`
                        ).join("")
                }</span>`
            )
            .join(" ");

        const chars = el.querySelectorAll("span > span");
        gsap.from(chars, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out"
        });
        }
       
       
    }, []);




  return (
    <div className='h-full w-full bg-[#ffffff] p-5 md:p-30 text-red-500 m-auto py-15 md:py-30'>
         <TextPressure
                    text={heading}
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor='#F44336'
                    strokeColor="#ff0000"
                    minFontSize={50}
        />
        <div ref={headingRef} className=' font-bold text-2xl md:text-4xl text-center md:text-left tracking-tighter text-gray-700'>
                        {/* <span className='font-mono text-3xl md:text-5xl font-bold text-foreground '>QuickRock</span> */}
                        {subheading}
        </div>
    </div>
  )
}

export default CustomHero