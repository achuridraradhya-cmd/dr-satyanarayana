import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
    AlertCircle,
    Droplets,
    Waves,
    Battery,
    Sparkles,
    Wind,
    HeartPulse,
    Utensils,
    ShieldCheck,
    Stethoscope,
    Clock,
    CheckCircle,
    HelpCircle,
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "7 Warning Signs of Kidney Disease | How to Know If Your Kidneys Are Failing? – Dr. Satyanarayana Garre",
    description: "Learn the 7 warning signs of kidney disease, who is at higher risk, how kidney disease is diagnosed, and how it can be managed — from Dr. Satyanarayana Garre, Nephrologist, Hyderabad.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/warning-signs-of-kidney-disease",
    },
}

const warningSigns = [
    {
        icon: Droplets,
        title: "1. Changes in Urination",
        intro:
            "One of the early warning signs of kidney disease is a change in your urination pattern. Since the kidneys produce urine, any change may indicate a problem.",
        lookOutFor: [
            "Frequent urination, especially at night",
            "Passing less urine than usual",
            "Foamy or bubbly urine",
            "Blood in the urine",
            "Pain or burning while passing urine",
        ],
        note: "Persistent foamy urine may be caused by protein leaking into the urine, which can be an early sign of kidney damage.",
    },
    {
        icon: Waves,
        title: "2. Swelling in the Feet, Ankles, or Face",
        intro:
            "Healthy kidneys remove extra water and salt from the body. When they are not working properly, fluid builds up and causes swelling.",
        lookOutFor: [
            "Swollen feet and ankles",
            "Puffiness around the eyes",
            "Swollen hands or fingers",
            "Tight shoes or rings",
        ],
        note: "Swelling that does not go away should never be ignored, as it may be one of the important kidney disease signs and symptoms.",
    },
    {
        icon: Battery,
        title: "3. Constant Tiredness and Weakness",
        intro:
            "Do you often feel tired even after getting enough sleep? Damaged kidneys produce less of the hormone that helps make red blood cells. This can lead to anemia, causing:",
        lookOutFor: [
            "Low energy",
            "Weakness",
            "Difficulty concentrating",
            "Feeling tired throughout the day",
        ],
        note: "Persistent fatigue without an obvious reason should be checked by a doctor.",
    },
    {
        icon: Sparkles,
        title: "4. Dry, Itchy Skin",
        intro:
            "Healthy kidneys help maintain the right balance of minerals in your body. When kidney function decreases, waste products build up in the blood, which can affect your skin.",
        lookOutFor: [
            "Dry skin",
            "Constant itching",
            "Skin irritation",
            "Rashes without another clear cause",
        ],
        note: "Although itching has many possible causes, long-lasting itching along with other symptoms may point to kidney disease.",
    },
    {
        icon: Wind,
        title: "5. Shortness of Breath",
        intro: "Difficulty breathing can sometimes be linked to kidney disease. This may happen because:",
        lookOutFor: [
            "Extra fluid collects in the lungs.",
            "Low red blood cell levels reduce oxygen supply to the body.",
        ],
        note: "If you become short of breath during normal daily activities, especially along with swelling or tiredness, medical evaluation is important.",
    },
    {
        icon: HeartPulse,
        title: "6. High Blood Pressure That Is Difficult to Control",
        intro:
            "There is a close connection between high blood pressure and kidney disease. Damaged kidneys cannot regulate blood pressure properly, and uncontrolled high blood pressure can cause even more kidney damage.",
        lookOutFor: [],
        note: "If your blood pressure remains high despite taking medicines, your doctor may recommend kidney function tests to find the underlying cause.",
    },
    {
        icon: Utensils,
        title: "7. Nausea, Loss of Appetite, or Metallic Taste",
        intro:
            "As kidney function decreases, waste products build up in the bloodstream. This can cause:",
        lookOutFor: [
            "Nausea",
            "Vomiting",
            "Poor appetite",
            "Metallic taste in the mouth",
            "Bad breath",
        ],
        note: "These symptoms are more common in advanced kidney disease but should never be ignored if they continue.",
    },
]

const riskFactors = [
    "Diabetes",
    "High blood pressure",
    "Family history of kidney disease",
    "Obesity",
    "Smoking",
    "Frequent use of painkillers",
    "Age above 60 years",
]

const diagnosisTests = [
    "Blood tests to measure kidney function",
    "Urine tests to check for protein or blood",
    "Blood pressure monitoring",
    "Ultrasound or other imaging tests if needed",
]

const managementSteps = [
    "Controlling diabetes and blood pressure",
    "Eating a kidney-friendly diet",
    "Reducing salt intake",
    "Drinking enough water as advised",
    "Maintaining a healthy weight",
    "Avoiding unnecessary painkillers",
    "Taking prescribed medicines regularly",
]

const faqs = [
    {
        q: "What are the early warning signs of kidney disease?",
        a: "Some of the early warning signs of kidney disease include foamy urine, swelling in the feet or face, frequent urination (especially at night), tiredness, high blood pressure, and changes in urine colour or amount.",
    },
    {
        q: "Can kidney disease be treated if detected early?",
        a: "Yes. Although some kidney damage cannot be reversed, early diagnosis and proper treatment can slow the progression of kidney disease and help protect kidney function.",
    },
    {
        q: "Who is at higher risk of kidney disease?",
        a: "People with diabetes, high blood pressure, obesity, a family history of kidney disease, or those who regularly use painkillers are at a higher risk and should have regular kidney check-ups.",
    },
    {
        q: "When should I see a nephrologist?",
        a: "You should consult a nephrologist if you notice persistent swelling, foamy urine, blood in the urine, frequent urination, constant tiredness, or high blood pressure that is difficult to control.",
    },
    {
        q: "How is kidney disease diagnosed?",
        a: "Kidney disease is diagnosed through simple tests such as blood tests, urine tests, kidney function tests (KFT), blood pressure checks, and sometimes ultrasound scans if required.",
    },
    {
        q: "Can lifestyle changes help prevent kidney disease?",
        a: "Yes. Controlling blood sugar and blood pressure, eating a healthy diet, reducing salt intake, staying hydrated, exercising regularly, avoiding smoking, and limiting unnecessary painkiller use can help keep your kidneys healthy.",
    },
    {
        q: "Is swelling always a sign of kidney disease?",
        a: "Not always. Swelling can have many causes, but persistent swelling in the feet, ankles, hands, or around the eyes may indicate kidney problems and should be evaluated by a doctor.",
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
                            7 Warning Signs of Kidney Disease<br className='hidden md:block' /> How to Know If Your Kidneys Are Failing?
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/blog-13.png'
                                width={900}
                                height={480}
                                alt='7 Warning Signs of Kidney Disease – Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Topic', value: 'Warning Signs' },
                                    { label: 'Condition', value: 'Kidney Disease' },
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
                                Kidney disease often develops slowly, and many people do not notice any symptoms in the beginning. Your kidneys play an important role in filtering waste, balancing body fluids, controlling blood pressure, and keeping your body healthy. When they stop working properly, waste and extra fluid start building up in the body.
                            </p>
                            <p className='text-zinc-600 leading-relaxed text-base md:text-lg mt-4'>
                                Knowing the warning signs of kidney disease can help you seek treatment early and prevent serious complications. According to Dr. Satyanarayana Garre, an experienced nephrologist in Hyderabad, early diagnosis and proper treatment can help slow down kidney disease and protect kidney function.
                            </p>
                        </div>

                        {/* Warning signs */}
                        <div className='flex flex-col gap-6'>
                            {warningSigns.map((sign) => (
                                <div
                                    key={sign.title}
                                    className='rounded-2xl border border-zinc-100 bg-zinc-50 p-6 md:p-8 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200'
                                >
                                    <h2 className='text-xl md:text-2xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                        <sign.icon className='w-6 h-6 text-blue-500 shrink-0' />
                                        {sign.title}
                                    </h2>
                                    <Subheading className='text-left mb-4'>
                                        {sign.intro}
                                    </Subheading>
                                    {sign.lookOutFor.length > 0 && (
                                        <>
                                            <p className='text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3'>
                                                Look out for:
                                            </p>
                                            <ul className='grid sm:grid-cols-2 gap-3 mb-4'>
                                                {sign.lookOutFor.map((item) => (
                                                    <li key={item} className='flex items-start gap-2.5'>
                                                        <span className='w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2' />
                                                        <span className='text-zinc-700 text-sm leading-relaxed'>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    <p className='text-sm text-blue-700 font-medium'>
                                        {sign.note}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Risk factors */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    Who Is at Higher Risk of Kidney Disease?
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                Some people have a higher chance of developing kidney disease and should have regular kidney check-ups. Risk factors include:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {riskFactors.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-amber-700 font-medium'>
                                If you have any of these risk factors, regular kidney function tests can help detect problems early.
                            </p>
                        </div>

                        {/* Diagnosis */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                How Is Kidney Disease Diagnosed?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Doctors use simple tests to check kidney health, including:
                            </Subheading>
                            <div className='border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-100'>
                                {diagnosisTests.map((test) => (
                                    <div key={test} className='flex items-start gap-4 px-5 py-4'>
                                        <span className='w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2' />
                                        <span className='text-sm text-zinc-700 leading-relaxed'>{test}</span>
                                    </div>
                                ))}
                            </div>
                            <p className='mt-4 text-sm text-zinc-500 leading-relaxed'>
                                Early diagnosis allows treatment to begin before significant kidney damage occurs.
                            </p>
                        </div>

                        {/* Management */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <ShieldCheck className='w-6 h-6 text-blue-500 shrink-0' />
                                How Can Kidney Disease Be Managed?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                The treatment depends on the cause and stage of kidney disease. Your doctor may recommend:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {managementSteps.map((tip) => (
                                    <li key={tip} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-zinc-500 leading-relaxed'>
                                In advanced stages, dialysis or kidney transplantation may be required.
                            </p>
                        </div>

                        {/* FAQs */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-5 flex items-center gap-2'>
                                <HelpCircle className='w-6 h-6 text-blue-500 shrink-0' />
                                FAQs
                            </h2>
                            <div className='flex flex-col divide-y divide-blue-100'>
                                {faqs.map((item, i) => (
                                    <div key={item.q} className='py-5 first:pt-0 last:pb-0'>
                                        <p className='font-semibold text-dark-navy text-sm md:text-base mb-2'>
                                            {i + 1}. {item.q}
                                        </p>
                                        <p className='text-zinc-600 text-sm leading-relaxed'>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                Many people ask, "What are the warning signs of kidney disease?" The answer is that your body often gives early signals such as changes in urination, swelling, tiredness, itching, shortness of breath, and high blood pressure. Recognizing these early warning signs of kidney disease can help prevent permanent kidney damage.
                            </p>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base mt-4'>
                                If you notice any of these symptoms or have diabetes, high blood pressure, or a family history of kidney disease, consult Dr. Satyanarayana Garre, an experienced nephrologist in Hyderabad. Early diagnosis and timely treatment are the best ways to protect your kidneys and maintain your overall health.
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