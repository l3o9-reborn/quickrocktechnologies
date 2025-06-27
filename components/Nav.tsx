'use client'
import Image from 'next/image'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

function Nav() {

    const toggleRef= useRef<HTMLDivElement>(null);
    const xRef= useRef<HTMLDivElement>(null);
    const ulRef= useRef<HTMLUListElement>(null);
    const [navActive, setNavActive] = useState(false);


     useEffect(() => {
        if (!navActive && toggleRef.current) {
            const spans = toggleRef.current.querySelectorAll('span');
            gsap.fromTo(spans,{y:-10}, {
                y: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: 1,
                stagger: {
                    each: 0.15,
                    yoyo: true,
                    repeat: -1,
                }
            });
        }
        if (navActive && xRef.current) {
            gsap.to(xRef.current, {
                scaleX: 1.2,
                scaleY: 0.8 ,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: 0.5,
            });
        }
        if(ulRef.current) {
            const listItems = ulRef.current.querySelectorAll('li');
            if (navActive) {
                gsap.fromTo(listItems, {y: -20, opacity: 0}, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                });
            } 
        }
        // Cleanup on toggle
        return () => {
            gsap.killTweensOf(toggleRef.current?.querySelectorAll('span'));
            gsap.killTweensOf(xRef.current);
        };
    }, [navActive, ulRef, toggleRef, xRef]);

    useEffect(() => {
    if (navActive) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
    // Cleanup on unmount
    return () => {
        document.body.classList.remove('overflow-hidden');
    };
}, [navActive]);

   




  return (
    <div className=' h-full w-full flex items-center justify-between  px-5 md:px-10 py-2 md:py-4 overflow-hidden'>
        <div>
            <Image
             src="/QuickRock.gif"
             alt="QuickRock Technologies"
             width={80} height={80}
             className='md:m-5 h-full w-20 md:scale-180' />
        </div>
        
        <div>
            <button onClick={() => setNavActive(!navActive)}>
                {
                    !navActive ? (
                        <div ref={toggleRef} className='  font-bold text-red-500 text-3xl '>
                            <span className='inline-block'>|</span>
                            <span className='inline-block'>|</span>
                            <span className='inline-block'>|</span>
                        </div>
                    ):(
                        <div ref={xRef} className='  font-bold text-red-500 text-3xl '>
                            X
                        </div>
                    )
                }
            </button>
            {
                navActive && (
                   <div className='absolute inset-0 top-25 max-w-[1400px] mx-auto  md:top-37 left-0 h-[100%] w-full bg-background z-10 flex items-center justify-center'>
                        <ul ref={ulRef}  className=' text-red-500 font-mono flex w-[100%] flex-col gap-5 font-thin text-2xl '>
                            <li className='text-center hover:font-normal cursor-pointer'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='text-center hover:font-normal cursor-pointer'>
                                <Link href='/about'>About</Link>
                            </li>
                            <li className='text-center hover:font-normal cursor-pointer'>
                                <Link href='/services'>Services</Link>
                            </li>
                            <li className='text-center hover:font-normal cursor-pointer'>
                                <Link href='/contact'>Contact Us</Link>
                            </li>
                            <li className='text-center hover:font-normal cursor-pointer'>
                                <Link href='/careers'>Careers</Link>
                            </li>
                        </ul>
                   </div>
                )
            }

        </div>
    </div>
  )
}

export default Nav