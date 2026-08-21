import { getBlogDetail } from '@/lib/blog';
import { Section, Wrapper } from '@/utils/Section';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

type PageProps = {
    params: Promise<{ slug: string }>;
};


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const res = await getBlogDetail(slug);

    if (!res) return { title: "Blog Post Not Found | Divine Soul Resonance" };

    return {
        title: `${res.data.meta_title} | Blog Post Not Found | Divine Soul Resonance`,
        description: res.data.meta_description?.replace(/&ldquo;|&rdquo;/g, '"'),
        alternates: {
            canonical: `https://www.drsatyanarayanagarre.in/blogs/${slug}`,
        },
        openGraph: {
            title: res.data.meta_title,
            description: res.data.meta_description?.replace(/&ldquo;|&rdquo;/g, '"'),
            images: [res.data.main_image],
        },
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const res = await getBlogDetail(slug);
    if (!res) notFound();
    const { data: post, you_might_also_like: related } = res;


    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>
                    <div className='mb-8'>
                        {/* Eyebrow */}
                        <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                            Nephrology Care · Hyderabad
                        </span>

                        <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                            {post.title}
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image with caption overlay */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src={post.main_image}
                                width={900}
                                height={480}
                                alt={post.title}
                                className='w-full object-cover'
                                priority
                            />

                            {/* Gradient overlay with stat strip */}
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
