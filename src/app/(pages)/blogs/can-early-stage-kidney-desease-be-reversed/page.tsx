import { Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import type { Metadata } from 'next'
import { AlertCircle, Droplets, FlaskConical, Clock, CheckCircle, ShieldCheck, Stethoscope } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Can Early Stage Kidney Disease Be Reversed? – Dr. Satyanarayana Garre",
    description: "Can early stage kidney disease be reversed? Learn what causes early CKD, its warning signs, how it's diagnosed, and how early treatment can slow or improve kidney function — from Dr. Satyanarayana Garre.",
    alternates: {
        canonical: "https://www.drsatyanarayanagarre.in/blogs/can-early-stage-kidney-desease-be-reversed",
    },
}

const causes = [
    {
        title: "High Blood Pressure",
        body: "Uncontrolled blood pressure slowly damages the tiny filters inside the kidneys. If blood pressure is controlled with medicines, a healthy diet, and regular exercise, kidney function can remain stable for many years.",
    },
    {
        title: "Diabetes",
        body: "Diabetes is one of the leading causes of chronic kidney disease. Keeping blood sugar under control and following the doctor's advice can reduce protein leakage in the urine and help protect the kidneys from further damage.",
    },
    {
        title: "Dehydration or Certain Medicines",
        body: "Sometimes kidney function becomes weak because of severe dehydration or frequent use of painkillers like NSAIDs. If treated early and the cause is removed, kidney function may return close to normal.",
    },
    {
        title: "Urinary Tract Problems",
        body: "Kidney stones, repeated urinary infections, or blockage in the urinary tract can affect kidney health. Treating these conditions early may improve kidney function and prevent permanent damage.",
    },
]

const reversibilityPoints = [
    "Slow down or stop further kidney damage",
    "Improve kidney function in some patients",
    "Reduce symptoms",
    "Delay or prevent the need for dialysis",
    "Help patients maintain a healthy life for many years",
]

const earlySigns = [
    "Feeling tired all the time",
    "Swelling in the feet, ankles, or around the eyes",
    "Foamy urine",
    "Frequent urination, especially at night",
    "High blood pressure",
    "Loss of appetite",
    "Difficulty concentrating",
]

const diagnosisTests = [
    "Blood tests to check creatinine levels",
    "eGFR test to measure kidney function",
    "Urine test to check for protein",
    "Blood pressure monitoring",
    "Blood sugar test if diabetes is suspected",
]

const protectionTips = [
    "Keep blood pressure under control.",
    "Manage diabetes properly.",
    "Drink enough water unless your doctor advises otherwise.",
    "Reduce salt intake.",
    "Eat a balanced, kidney-friendly diet.",
    "Exercise regularly.",
    "Maintain a healthy weight.",
    "Avoid taking painkillers without medical advice.",
    "Get regular kidney function tests if you are at risk.",
]

const nephrologistBenefits = [
    "Find the exact cause of kidney damage",
    "Create a personalized treatment plan",
    "Monitor kidney function regularly",
    "Help prevent complications",
    "Reduce the chances of dialysis in the future",
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
                            Can Early Stage Kidney<br className='hidden md:block' /> Disease Be Reversed?
                        </h1>

                        <p className='text-zinc-500 text-sm italic mb-6'>
                            By Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                        </p>

                        {/* Hero image */}
                        <div className='relative w-full rounded-2xl overflow-hidden'>
                            <Image
                                src='/images/blog/blog-12.png'
                                width={900}
                                height={480}
                                alt='Can Early Stage Kidney Disease Be Reversed? – Dr. Satyanarayana Garre'
                                className='w-full object-cover'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-wrap gap-6'>
                                {[
                                    { label: 'Topic', value: 'Early Stage CKD' },
                                    { label: 'Condition', value: 'Chronic Kidney Disease' },
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
                                Kidney disease is often called a "silent disease" because it usually develops without noticeable symptoms. Many people only discover they have a kidney problem during a routine health check-up. This often leads to an important question: Can early stage kidney disease be reversed?
                            </p>
                            <p className='text-zinc-600 leading-relaxed text-base md:text-lg mt-4'>
                                The answer depends on the cause and how early the condition is diagnosed. While damaged kidneys cannot completely heal in most cases, early stage kidney disease can often be controlled, slowed down, and in some cases, kidney function may improve with the right treatment and lifestyle changes.
                            </p>
                        </div>

                        {/* Quote callout */}
                        <blockquote className='bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5'>
                            <p className='text-blue-800 text-sm md:text-base leading-relaxed italic'>
                                "According to Dr. Satyanarayana Garre, a leading nephrologist in Hyderabad, early diagnosis is the best way to protect your kidneys and reduce the risk of kidney failure."
                            </p>
                            <footer className='mt-3 text-blue-600 text-xs font-semibold tracking-wide uppercase'>
                                — Dr. Satyanarayana Garre, Nephrologist, Hyderabad
                            </footer>
                        </blockquote>

                        {/* What is early stage kidney disease */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Droplets className='w-6 h-6 text-blue-500 shrink-0' />
                                What Is Early Stage Kidney Disease?
                            </h2>
                            <Subheading className='text-left'>
                                Chronic Kidney Disease (CKD) is divided into five stages based on how well the kidneys filter waste from the blood. In Stage 1 and Stage 2 CKD, the kidneys are still working quite well, but there may be early signs of damage. These signs may include protein in the urine, slightly increased creatinine levels, or changes seen in kidney function tests.
                            </Subheading>
                            <Subheading className='text-left mt-3'>
                                At this stage, most people do not have any symptoms. This is why regular health check-ups are very important, especially for people with diabetes, high blood pressure, or a family history of kidney disease.
                            </Subheading>
                        </div>

                        {/* Can it be reversed */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                Can Early Stage Kidney Disease Be Reversed?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                One of the most searched questions is "Can early stage kidney disease be reversed?" In many cases, the damage that has already happened cannot be completely reversed because kidney tissue does not easily grow back. However, if the disease is found early, doctors can often:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {reversibilityPoints.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-blue-700 font-medium'>
                                The earlier treatment begins, the better the chances of protecting the kidneys.
                            </p>
                        </div>

                        {/* Causes */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-2 flex items-center gap-2'>
                                <FlaskConical className='w-6 h-6 text-blue-500 shrink-0' />
                                What Causes Early Kidney Disease?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                The possibility of improvement depends on the reason behind the kidney damage.
                            </Subheading>
                            <div className='grid gap-4'>
                                {causes.map((cause, i) => (
                                    <div key={cause.title} className='flex gap-4 p-5 rounded-xl border border-zinc-100 bg-zinc-50 hover:border-blue-200 hover:bg-blue-50/40 transition-colors duration-200'>
                                        <span className='flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5'>
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className='font-semibold text-dark-navy text-sm mb-1'>{cause.title}</p>
                                            <p className='text-zinc-600 text-sm leading-relaxed'>{cause.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Early signs */}
                        <div className='rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8'>
                            <div className='flex items-center gap-2 mb-4'>
                                <AlertCircle className='w-5 h-5 text-amber-600 shrink-0' />
                                <h2 className='text-xl md:text-2xl font-bold text-dark-navy'>
                                    Early Signs of Kidney Disease You Should Never Ignore
                                </h2>
                            </div>
                            <Subheading className='text-left mb-5'>
                                Early kidney disease signs are often mild and easy to miss. Some people may not have any symptoms at all. Common kidney disease signs and symptoms include:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {earlySigns.map((s) => (
                                    <li key={s} className='flex items-start gap-2.5'>
                                        <span className='w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-amber-700 font-medium'>
                                If you notice these symptoms, consult a nephrologist as early as possible.
                            </p>
                        </div>

                        {/* Diagnosis */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3'>
                                How Is Early Kidney Disease Diagnosed?
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Simple medical tests can detect kidney disease before serious damage occurs. Your doctor may recommend:
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
                                These tests are simple, affordable, and can help identify kidney problems at an early stage.
                            </p>
                        </div>

                        {/* Protect your kidneys */}
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <ShieldCheck className='w-6 h-6 text-blue-500 shrink-0' />
                                How to Protect Your Kidneys
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Good daily habits can make a big difference in slowing the progression of kidney disease. Some simple ways to protect your kidneys include:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {protectionTips.map((tip) => (
                                    <li key={tip} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-zinc-500 leading-relaxed'>
                                Even small lifestyle changes can help improve long-term kidney health.
                            </p>
                        </div>

                        {/* Why early consultation matters */}
                        <div className='bg-blue-50 rounded-2xl p-6 md:p-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-dark-navy mb-3 flex items-center gap-2'>
                                <Stethoscope className='w-6 h-6 text-blue-500 shrink-0' />
                                Why Early Consultation with a Nephrologist Matters
                            </h2>
                            <Subheading className='text-left mb-5'>
                                Seeing a kidney specialist early allows proper diagnosis and treatment before the disease becomes severe. A nephrologist can:
                            </Subheading>
                            <ul className='grid sm:grid-cols-2 gap-3'>
                                {nephrologistBenefits.map((b) => (
                                    <li key={b} className='flex items-start gap-2.5'>
                                        <CheckCircle className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
                                        <span className='text-zinc-700 text-sm leading-relaxed'>{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='mt-5 text-sm text-blue-700 font-medium'>
                                Early medical care gives the best opportunity to preserve kidney function.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className='rounded-2xl bg-dark-navy px-6 md:px-10 py-8 text-center'>
                            <Clock className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                            <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                                Conclusion
                            </h2>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base'>
                                So, can early stage kidney disease be reversed? In many cases, complete reversal is not possible, but early treatment can slow the disease, improve kidney function in some patients, and prevent serious complications. If you have diabetes, high blood pressure, obesity, or a family history of kidney disease, do not wait for symptoms to appear. Regular kidney check-ups can help detect problems early and protect your kidney health.
                            </p>
                            <p className='text-zinc-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base mt-4'>
                                If you are looking for expert kidney care, Dr. Satyanarayana Garre, an experienced nephrologist in Hyderabad, provides comprehensive evaluation and personalized treatment for early kidney disease, helping patients maintain healthy kidney function and improve their quality of life.
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