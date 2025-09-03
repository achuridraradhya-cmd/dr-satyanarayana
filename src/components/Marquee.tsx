import React from 'react'
import { Marquee } from './magicui/marquee'
import Image from 'next/image'

export default function MarqueeStrip() {
    const services = [
        'Chronic Kidney Disease',
        'Acute Kidney Injury',
        'Nephrotic Syndrome',
        'Polycystic Kidney Disease',
        'Kidney Stones'
    ]
    return (
        <div className='relative w-full flex items-center bg-[#F9FAFB] md:py-3 py-1.5'>
            <Marquee pauseOnHover className='items-center md:gap-10 gap-5'>
                {
                    services.map((data, idx) => (
                        <div key={idx} className='flex md:gap-10 gap-5 items-center'>
                            <Image src='/images/hero/icon-star.svg' alt='star'
                                width={100} height={100} className='md:w-8 w-6' />
                            <span className='md:text-[18px] text-md font-medium text-dark-navy cursor-pointer'>
                                {data}
                            </span>
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}
