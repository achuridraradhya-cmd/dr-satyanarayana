import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'

interface Review {
    /** Reviewer's initials or "Verified patient" — never an invented name */
    reviewer: string;
    /** Where the review was originally posted, e.g. "Apollo 24/7" */
    platform: string;
    /** Optional link to the original review / profile */
    sourceUrl?: string;
    /** Optional ISO date the review was posted, e.g. "2025-03-14" */
    date?: string;
    /** Review text exactly as the patient wrote it */
    comment: string;
}

// Only genuine, publicly posted patient reviews belong here.
// Add new ones in the same shape; do not edit the patient's wording.
const reviews: Review[] = [
    {
        reviewer: 'Verified patient',
        platform: 'Apollo 24/7',
        comment:
            "Dr. Satyanarayana G is a very kind and polite doctor. He listens to all the patient's concerns and responds with humility. He has been really helpful in changing my mother's life. Will recommend him 100% to patients having Kidney related illness.",
    },
    {
        reviewer: 'Verified patient',
        platform: 'Apollo 24/7',
        comment:
            'Dr satyanarayana G is very good doctor and humble person, he treats his patients very professionally, my son was taking treatment from him as he was CKD patient. Recently he had successful transplant under Dr Satya at Apollo Hyderabad. I highly recommend this Dr for any Kidney related issues and we wish him all the best.',
    },
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
}

export default function Testimonial() {
    return (
        <Section className='bg-[url(/images/testimonial/bg.png)] bg-no-repeat bg-cover bg-left-top'>
            <Wrapper>
                <div className='relative w-full grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-16'>
                    <div className='w-full h-full flex flex-col gap-5'>
                        <Heading>
                            What Patients Say About Dr. Garre
                        </Heading>
                        <Subheading className='text-left'>
                            Reviews shared by patients and their families on public platforms, reproduced exactly as written.
                        </Subheading>
                    </div>

                    <ul className='w-full grid md:grid-cols-2 grid-cols-1 gap-8'>
                        {reviews.map((review, index) => (
                            <li key={index} className='bg-white rounded-2xl shadow p-8 flex flex-col justify-between gap-5'>
                                <blockquote className='text-sm text-zinc-600 font-medium'>
                                    <p>&ldquo;{review.comment}&rdquo;</p>
                                </blockquote>
                                <p className='text-sm text-dark-navy'>
                                    <span className='font-bold'>{review.reviewer}</span>
                                    {' · '}
                                    {review.sourceUrl ? (
                                        <a href={review.sourceUrl} target='_blank' rel='noopener nofollow' className='underline'>
                                            {review.platform}
                                        </a>
                                    ) : (
                                        review.platform
                                    )}
                                    {review.date && (
                                        <>
                                            {' · '}
                                            <time dateTime={review.date}>{formatDate(review.date)}</time>
                                        </>
                                    )}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        </Section>
    )
}
