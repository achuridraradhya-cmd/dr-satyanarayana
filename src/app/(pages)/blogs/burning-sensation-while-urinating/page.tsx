import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { AlertCircle, Clock, CheckCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Burning Sensation While Urinating: 7 Causes Beyond Infection – Dr. Satyanarayana Garre",
    description: "A burning sensation while urinating is not always a UTI. Learn about 7 causes including kidney stones, prostate problems, and dehydration from Dr. Satyanarayana Garre, nephrologist in Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/burning-sensation-while-urinating",
    },
}

const causes = [
    {
        number: "01",
        title: "Urinary Tract Infection (UTI) Is Common – But Not the Only Reason",
        body: "A urinary tract infection is the most common cause of painful urination. It happens when bacteria enter the urinary tract and cause infection. However, if your urine test is normal and the burning continues, there may be another reason behind your symptoms.",
        symptoms: [
            "Frequent urge to urinate",
            "Pain while passing urine",
            "Cloudy or foul-smelling urine",
            "Mild lower abdominal discomfort",
        ],
    },
    {
        number: "02",
        title: "Kidney Stones Can Cause Burning While Urinating",
        body: "Kidney stones are another common reason for pain during urination. Small stones can move through the urinary tract and irritate its lining, causing discomfort. Early diagnosis can help prevent complications and reduce pain.",
        symptoms: [
            "Sharp pain in the back or side",
            "Burning while passing urine",
            "Blood in the urine",
            "Frequent urge to urinate",
            "Nausea or vomiting in some cases",
        ],
    },
    {
        number: "03",
        title: "Prostate Problems in Men",
        body: "In men, prostate conditions can also lead to burning urination. An enlarged or inflamed prostate can affect the normal flow of urine and cause irritation. A proper evaluation helps identify the exact cause and the most suitable treatment.",
        symptoms: [
            "Burning during urination",
            "Weak urine flow",
            "Difficulty starting urination",
            "Frequent urination, especially at night",
            "Pain in the lower abdomen or pelvic area",
        ],
    },
    {
        number: "04",
        title: "Dehydration, Medicines, and Personal Care Products",
        body: "Not every burning sensation is caused by an infection. Sometimes everyday habits can be responsible. When the body is dehydrated, urine becomes more concentrated, which may irritate the urinary tract. Drinking enough water and avoiding harsh products often helps relieve mild symptoms.",
        symptoms: [
            "Not drinking enough water",
            "Using scented soaps or intimate hygiene products",
            "Certain medications",
            "Holding urine for long periods",
        ],
    },
    {
        number: "05",
        title: "Other Health Conditions That Can Cause Burning Urination",
        body: "Several other conditions may also cause painful urination without a urinary tract infection. Since these conditions need different treatments, self-medicating with antibiotics is not always the right solution.",
        symptoms: [
            "Sexually transmitted infections (STIs)",
            "Vaginal infections in women",
            "Painful bladder syndrome (Interstitial Cystitis)",
            "Narrowing of the urinary passage (urethral stricture)",
            "Complicated urinary tract infections that require specialist care",
        ],
    },
]

const whenToSee = [
    "Blood in the urine",
    "Fever or chills",
    "Severe back or side pain",
    "Swelling in the legs or face",
    "Difficulty passing urine",
    "Frequent burning despite taking medicines",
]

const faqs = [
    {
        q: "Is burning while urinating always a UTI?",
        a: "No. Besides UTIs, kidney stones, dehydration, prostate problems, vaginal infections, and other urinary conditions can also cause burning during urination.",
    },
    {
        q: "Can kidney stones cause a burning sensation while urinating?",
        a: "Yes. Kidney stones can irritate the urinary tract, leading to burning, pain, and sometimes blood in the urine.",
    },
    {
        q: "When should I see a doctor for burning urination?",
        a: "If the burning lasts more than two days, keeps returning, or is associated with fever, blood in urine, or severe pain, you should consult a kidney specialist.",
    },
    {
        q: "Can dehydration cause burning while passing urine?",
        a: "Yes. Concentrated urine due to dehydration can irritate the urinary tract and cause a burning sensation.",
    },
    {
        q: "Which doctor should I consult for burning urination?",
        a: "If the symptoms are persistent or related to kidney health, consult a nephrologist like Dr. Satyanarayana Garre for proper diagnosis and treatment.",
    },
]

export default function Page() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full max-w-4xl mx-auto'>

                    {/* ── Header ── */}
                    <div className='mb-8'>
                        <span className='inline-block text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4'>
                            Kidney Health · Hyderabad
                        </span>

                        <h1 className='text-3xl md:text-5xl font-bold text-dark-navy leading-tight mb-3'>
                            Burning Sensation<br className='hidden md:block' /> While Urinating
                        </h1>

                        <p className='text-zinc-400 text-sm font-medium mb-1'>7 Causes Beyond Infection</p>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/blog-14.png'
                                width={900}
                                height={480}
                                alt='Burning Sensation While Urinating – Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Topic', value: 'Burning Urination' },
                                    { label: 'Causes Covered', value: '7 Causes' },
                                    { label: 'Specialist', value: 'Nephrologist' },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <p className='text-white/60 text-[10px] uppercase tracking-widest'>{s.label}</p>
                                        <p className='text-white font-semibold text-sm'>{s.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Body ── */}
                    <div className='flex flex-col gap-10'>

                        {/* Intro */}
                        <div className='border-l-4 border-blue-500 pl-5'>
                            <p className='text-zinc-600 leading-relaxed text-base md:text-lg'>
                                A burning sensation while urinating is a common problem that many people experience at least once in their lives. Most people immediately think it is a urinary tract infection (UTI). While a UTI is one of the most common reasons, it is not the only cause. In many cases, the burning may be linked to kidney stones, prostate problems, dehydration, irritation from personal care products, or other medical conditions.
                            </p>
                        </div>

                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <p className='text-blue-800 text-sm md:text-base leading-relaxed'>
                                Knowing the real cause is important because the right treatment depends on the underlying problem. If the burning lasts for more than a couple of days or keeps coming back, it is best to consult a kidney specialist.
                            </p>
                        </div>

                        {/* Causes */}
                        <div className='flex flex-col gap-6'>
                            {causes.map((cause) => (
                                <div key={cause.number} className='border border-zinc-200 rounded-2xl overflow-hidden'>
                                    <div className='bg-dark-navy px-6 py-4 flex items-center gap-4'>
                                        <span className='text-blue-400 font-bold text-lg tabular-nums'>{cause.number}</span>
                                        <h2 className='text-base md:text-lg font-bold text-white leading-snug'>{cause.title}</h2>
                                    </div>
                                    <div className='p-6 md:p-8'>
                                        <Subheading className='text-left mb-5'>{cause.body}</Subheading>
                                        <ul className='grid sm:grid-cols-2 gap-3'>
                                            {cause.symptoms.map((s) => (
                                                <li key={s} className='flex items-start gap-2.5'>
                                                    <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                                    <span className='text-zinc-600 text-sm leading-relaxed'>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* When to see a specialist */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    When Should You See a Kidney Specialist?
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                Do not ignore a burning sensation if it continues for more than two days or comes back frequently. Consult a nephrologist immediately if you also have:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {whenToSee.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-amber-700 font-medium'>
                                A kidney specialist may recommend simple tests like a urine test, blood test, ultrasound, or other investigations to find the exact cause and start the right treatment.
                            </p>
                        </div>

                        {/* Protect your kidney health */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                Protect Your Kidney Health with Early Care
                            </h2>
                            <Subheading className='text-left'>
                                A burning sensation while urinating may seem like a minor problem, but it should never be ignored if it persists. While many cases are caused by infections, several kidney and urinary tract conditions can also be responsible. Early diagnosis helps prevent complications and protects your kidney health.
                            </Subheading>
                        </div>

                        {/* FAQs */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2'>
                                <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                FAQs
                            </h2>
                            <div className='flex flex-col divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden'>
                                {faqs.map((faq, i) => (
                                    <div key={i} className='p-5 md:p-6'>
                                        <p className='font-semibold text-dark-navy text-sm mb-1.5'>{faq.q}</p>
                                        <p className='text-zinc-600 text-sm leading-relaxed'>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion CTA */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Timely Care Makes All the Difference
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                If you are experiencing repeated burning during urination, blood in the urine, or other urinary symptoms, consult Dr. Satyanarayana Garre, an experienced nephrologist in Hyderabad. Timely evaluation and the right treatment can help you recover faster and keep your kidneys healthy for the long term.
                            </p>
                            <Link
                                href='/contact'
                                className='inline-block mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors duration-200'
                            >
                                Book a Consultation
                            </Link>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}