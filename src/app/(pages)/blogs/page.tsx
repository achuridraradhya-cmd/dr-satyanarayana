import { Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import type { Metadata } from 'next'
import { blog } from '@/constant/blog-data';

export const metadata: Metadata = {
  title: "Kidney Health Blog – Nephrology & Prevention Tips",
  description: "Explore kidney health blogs by Dr. Satyanarayana Garre. Learn about prevention, symptoms, causes, and treatments for kidney disease, stones, and failure.",
  alternates: {
    canonical: "https://www.drsatyanarayanagarre.in/blogs",
  },
}


export default function Blogs() {

  return (
    <Section>
      <Wrapper>
        <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
          <div className='flex-1 text-center'>
            <h1 className='lg:text-4xl md:text-[28px] text-2xl leading-[1.3] font-bold text-dark-navy'>
              Blogs and News
            </h1>
            <Subheading className='mx-auto max-w-md'>
              Expert articles and patient-friendly guides for better kidney health.
            </Subheading>
          </div>

          <div className='w-full flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
              blog.map((data, idx) => (
                <div key={idx + 32} className='flex flex-col w-full h-full overflow-hidden border border-gray-300 rounded-xl'>
                  <Image src={data.image} width={500} height={400} className='w-full object-cover h-auto' alt={data.title} />

                  <div className='relative mt-5 px-5 pb-5 flex flex-col justify-between flex-1'>
                    <div>
                      <Link href={data.slug} className='lg:text-2xl md:text-xl text-base font-medium text-dark-navy leading-[1.2] '>
                        {data.title}
                      </Link>
                      <Subheading className='text-left mt-2 line-clamp-5'>
                        {data.content}
                      </Subheading>
                    </div>

                    <Link href={data.slug} className='mt-7 w-max ml-auto !font-montserrat font-medium text-blue-500 flex items-center gap-2'>
                      Read this Blog
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Wrapper>
    </Section>
  )
}
