"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import * as motion from 'framer-motion/client'
import { AnimatePresence } from 'framer-motion'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "What is a Pre-Engineered Building?",
            answer: "A PEB is a steel building designed and fabricated in a factory, then assembled on-site. This approach reduces construction time, waste, and cost while ensuring superior structural quality."
        },
        {
            question: "How long does a PEB project take?",
            answer: "PEB projects are significantly faster than conventional construction. Depending on the size and complexity, a project can be completed in 6-8 weeks from design to installation."
        },
        {
            question: "Are PEB structures durable?",
            answer: "Yes, PEB structures are highly durable, weather-resistant, and designed to withstand severe environmental conditions, including earthquakes and high winds."
        },
        {
            question: "Can PEB be customized?",
            answer: "Absolutely. PEBs offer immense design flexibility and can be customized with various architectural finishes, wall claddings, and roofing options to meet specific aesthetic and functional needs."
        },
        {
            question: "What types of buildings can be made?",
            answer: "PEBs are versatile and suitable for warehouses, factories, showrooms, offices, schools, hospitals, hangars, and even residential buildings."
        }
    ]

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className='bg-white py-20 lg:py-28'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h4 className='text-primary font-bold text-[16px] tracking-[4%] uppercase mb-3'>
                        FAQ
                    </h4>
                    <h2 className='text-3xl lg:text-4xl font-medium text-black tracking-normal lg:tracking-[-4%]'>
                        Common <span className='text-primary font-medium tracking-normal lg:tracking-[-4%]'>Questions</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className='bg-white space-y-4'
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className={`border transition-all duration-300 overflow-hidden ${activeIndex === index
                                ? 'border-[#C9E7F8] bg-[#F6F8F9]'
                                : 'border-[#C9E7F8] bg-white'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer'
                            >
                                <span className={`text-[18px] font-medium tracking-normal lg:tracking-[-4%] pr-8 ${activeIndex === index ? 'text-black' : 'text-black'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-gray-900' : 'text-gray-500'
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className='px-6 pb-6 pt-0'>
                                            <p className='text-[#A2A1A1] text-[16px] tracking-normal lg:tracking-[-4%]'>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ