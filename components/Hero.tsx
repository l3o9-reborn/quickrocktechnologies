'use client'
import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPressure from './TextPressure'
import sectionAnimation from '@/public/Animation - 1750804866714 (1).json'
import Lottie from 'lottie-react'
import Nav from '@/components/Nav'





function Hero() {
    const headingRef = useRef<HTMLDivElement>(null)
    const subheadingRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
       const tl= gsap.timeline({ defaults: { duration: 1 } });
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
        tl.from(chars, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out"
        });
        }
       if (subheadingRef.current) {
            tl.from(subheadingRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power2.out"
            })
        }
       
    }, []);







  return (
    <div>
        <Nav/>
        <div className='text-gray-600 min-h-[60vh] w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center px-5 md:px-10 py-2 md:py-4 overflow-hidden shadow-lg shadow-gray-400'>
        
        
        <div className='px-5 md:px-10'>
                    <TextPressure
                    text="QuickRock"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor='#F44336'
                    strokeColor="#ff0000"
                    minFontSize={80}
                    />

                    <div ref={headingRef} className=' font-bold text-2xl md:text-4xl text-center md:text-left tracking-tighter '>
                        {/* <span className='font-mono text-3xl md:text-5xl font-bold text-foreground '>QuickRock</span> */}
                        Your trusted Software Development Partner
                    </div>
                    <div ref={subheadingRef} className='text-gray-700 font-light md:text-lg text-center md:text-left tracking-wide mt-2'>
                            A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success
                    </div>
        </div>
        <div>
                <Lottie
                animationData={sectionAnimation}
                loop={true}
                
            />

        </div>
        </div>
    </div>
  )
}

export default Hero