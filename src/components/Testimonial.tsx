import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'

interface Review {
    /** Reviewer's first name + last initial, as shown on the public review */
    reviewer: string;
    /** Where the review was originally posted, e.g. "Google" */
    platform: string;
    /** Star rating given on the platform (1–5) */
    rating: number;
    /** Optional link to the original review / review listing */
    sourceUrl?: string;
    /** Review text exactly as the patient wrote it; blank lines split paragraphs */
    comment: string;
}

// Only genuine, publicly posted patient reviews belong here.
// Add new ones in the same shape; do not edit the patient's wording.
const reviews: Review[] = [
    {
        reviewer: 'Saicharan P.',
        platform: 'Google',
        rating: 5,
        comment:
            'We consulted Dr. Sathyanarayana Garre for my father’s kidney-related health issues, including CKD, diabetes, hypertension, and his recovery after a period of dialysis. Dr. Garre is highly knowledgeable, patient, and caring. He carefully reviews all reports, explains the condition in simple terms, and provides clear guidance on treatment, medications, diet, and lifestyle changes. His calm and reassuring approach gave our family great confidence during a challenging time.\n\nThanks to his expert care and continuous monitoring, my father’s kidney function has remained stable, and we feel reassured knowing he is under such capable hands. The consultation was thorough, and Dr. Garre addressed all our concerns without rushing. His professionalism, dedication, and compassionate attitude truly stand out.\n\nWe are extremely grateful for his support and would highly recommend Dr. Sathyanarayana Garre to anyone seeking the best nephrology care. Thank you, doctor, for your continued guidance and for helping my father maintain a better quality of life.',
    },
    {
        reviewer: 'Wajhee H.',
        platform: 'Google',
        rating: 5,
        comment:
            'Dr satyanarayana G is very good doctor and humble person, he treats his patients very professionally, my son was taking treatment from him as he was CKD patient. Recently he had successful transplant under Dr Satya at Apollo Hyderabad. I highly recommend this Dr for any Kidney related issues and we wish him all the best.',
    },
    {
        reviewer: 'Aoun N.',
        platform: 'Google',
        rating: 5,
        comment:
            "Dr. Satyanarayana G is a very kind and polite doctor. He listens to all the patient's concerns and responds with humility. He has been really helpful in changing my mother's life. Will recommend him 100% to patients having Kidney related illness.",
    },
    {
        reviewer: 'Meera S.',
        platform: 'Google',
        rating: 5,
        comment:
            'I strongly recommend Dr sathya, He is one of the best doctor ever he treats the patient as his family member, gives lot of confidence by answering all question in a clear and crisp manner',
    },
    {
        reviewer: 'Amit S.',
        platform: 'Google',
        rating: 5,
        comment:
            'Dr.Satyanarayna is an excellent doctor.I have been getting my treatment from him for the past two years. He is incredibly polite and has a great attitude.',
    },
];

function Stars({ rating }: { rating: number }) {
    return (
        <span className='flex gap-0.5' role='img' aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} width='14' height='14' viewBox='0 0 12 12' aria-hidden='true'>
                    <path
                        d='M6 .6L2.6 11.1 11.4 4.7H.6L9.4 11.1Z'
                        fill={i < rating ? '#fabb05' : '#e4e4e7'}
                    />
                </svg>
            ))}
        </span>
    )
}

export default function Testimonial() {
    return (
        <Section className='bg-[url(/images/testimonial/bg.png)] bg-no-repeat bg-cover bg-left-top'>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-10'>
                    <div className='w-full max-w-3xl flex flex-col gap-5'>
                        <Heading>
                            What Patients Say About Dr. Garre
                        </Heading>
                        <Subheading className='text-left'>
                            Google reviews shared by patients and their families, reproduced exactly as written.
                        </Subheading>
                    </div>

                    <ul className='w-full columns-1 md:columns-2 xl:columns-3 gap-6'>
                        {reviews.map((review, index) => (
                            <li
                                key={index}
                                className='break-inside-avoid mb-6 bg-white rounded-2xl shadow p-7 flex flex-col gap-4'
                            >
                                <Stars rating={review.rating} />
                                <blockquote className='text-sm text-zinc-600 font-medium flex flex-col gap-3'>
                                    {review.comment.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </blockquote>
                                <p className='text-sm text-dark-navy'>
                                    <span className='font-bold'>{review.reviewer}</span>
                                    {' · '}
                                    {review.sourceUrl ? (
                                        <a href={review.sourceUrl} target='_blank' rel='noopener nofollow' className='underline'>
                                            {review.platform} review
                                        </a>
                                    ) : (
                                        <>{review.platform} review</>
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
