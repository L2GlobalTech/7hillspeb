"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import SectionHeader from '../Shared/SectionHeader'

const steps = [
    {
        id: "01",
        title: "Consultation",
        description: "In-depth project analysis, requirement gathering, and site feasibility studies to lay a solid foundation."
    },
    {
        id: "02",
        title: "Engineering",
        description: "Utilizing Tekla 3D modeling and advanced structural analysis to optimize design and minimize waste."
    },
    {
        id: "03",
        title: "Fabrication",
        description: "High-precision manufacturing in our automated facilities, adhering to the strictest ISO quality standards."
    },
    {
        id: "04",
        title: "Logistics",
        description: "Strategic planning and secure packaging to ensure all components reach the site in pristine condition."
    },
    {
        id: "05",
        title: "Erection",
        description: "Professional on-site assembly and structural alignment by our experienced project management teams."
    },
    {
        id: "06",
        title: "Completion",
        description: "Final site audit, rigorous quality checks, and owner handover marking a successful project delivery."
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const stepVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const ProcessFlow = () => {
    return (
        <section className='py-24 bg-[#0A1729] text-white overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10 lg:px-20'>
                <SectionHeader
                    title="THE 7HILLS JOURNEY"
                    alignment="center"
                    subtitle={<span className='text-white'>Our <span className='text-primary'>Seamless</span> Process</span>}
                />

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-24'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            className='relative group'
                        >
                            {/* Connector Line (Desktop) */}
                            {index % 3 !== 2 && (
                                <div className='hidden lg:block absolute top-8 -right-6 w-12 h-px bg-white/10 group-hover:bg-primary transition-colors duration-500' />
                            )}

                            <div className='flex flex-col'>
                                <span className='text-5xl font-black text-white/10 mb-4 group-hover:text-primary/20 transition-colors duration-500'>
                                    {step.id}
                                </span>
                                <h3 className='text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300'>
                                    {step.title}
                                </h3>
                                <p className='text-white/60 leading-relaxed font-medium max-w-sm'>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProcessFlow
