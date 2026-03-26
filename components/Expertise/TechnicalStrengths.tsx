"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Cpu, Scale, Leaf, Monitor } from 'lucide-react'
import Image from 'next/image'

// For demonstration, I'll use a placeholder or reuse an image if possible.
// I'll try to find an engineering related image in the codebase.
import engineeringImg from "@/public/assets/Home/Services/CompleteDesign.png"

const strengths = [
    {
        icon: <Monitor className="w-6 h-6 text-primary" />,
        title: "Tekla 3D Modeling",
        description: "Zero-error engineering with detailed 3D modeling that integrates seamlessly with our fabrication lines."
    },
    {
        icon: <Cpu className="w-6 h-6 text-primary" />,
        title: "Robotic Fabrication",
        description: "Consistency and speed through automated welding and CNC precision machinery."
    },
    {
        icon: <Scale className="w-6 h-6 text-primary" />,
        title: "Advanced Analysis",
        description: "Rigorous structural simulations to ensure compliance with international AISC and MBMA codes."
    },
    {
        icon: <Leaf className="w-6 h-6 text-primary" />,
        title: "Sustainability",
        description: "Eco-friendly material sourcing and energy-efficient building designs to reduce the carbon footprint."
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

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const TechnicalStrengths = () => {
    return (
        <section className='py-24 bg-[#F8FAFC] overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10 lg:px-20'>
                <div className='flex flex-col lg:flex-row gap-16 items-center'>
                    {/* Left side: Image with accents */}
                    <motion.div
                        className='lg:w-1/2 relative'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='relative z-10 overflow-hidden shadow-2xl'>
                            <Image
                                src={engineeringImg}
                                alt="Engineering Excellence"
                                className='w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700'
                            />
                            <div className='absolute inset-0 bg-primary/10 mix-blend-multiply' />
                        </div>

                        {/* Decorative Elements */}
                        <div className='absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 z-0' />
                        <div className='absolute -top-10 -left-10 w-40 h-40 bg-primary/5 blur-3xl' />

                        <div className='absolute top-10 right-10 bg-white/90 backdrop-blur-sm p-6 shadow-xl z-20 hidden md:block border border-gray-100'>
                            <p className='text-3xl font-black text-primary mb-1'>100%</p>
                            <p className='text-xs font-bold uppercase tracking-widest text-slate-500'>Precision Guaranteed</p>
                        </div>
                    </motion.div>

                    {/* Right side: Strengths Grid */}
                    <div className='lg:w-1/2'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className='mb-12'
                        >
                            <h4 className='text-primary font-bold text-[16px] tracking-[4%] uppercase mb-3'>
                                TECHNICAL STRENGTHS
                            </h4>
                            <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6'>
                                Engineering the <span className='text-primary'>Future</span> of PEB.
                            </h2>
                            <p className='text-slate-600 text-lg leading-relaxed'>
                                Our expertise is backed by state-of-the-art technology and a team of seasoned engineers dedicated to pushing the boundaries of what's possible in steel construction.
                            </p>
                        </motion.div>

                        <motion.div
                            className='grid grid-cols-1 md:grid-cols-2 gap-8'
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {strengths.map((strength, index) => (
                                <motion.div key={index} variants={itemVariants} className='flex gap-4'>
                                    <div className='shrink-0 w-12 h-12 bg-white shadow-md flex items-center justify-center border border-gray-100'>
                                        {strength.icon}
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-slate-900 mb-1'>{strength.title}</h3>
                                        <p className='text-sm text-slate-500 leading-relaxed'>{strength.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicalStrengths
