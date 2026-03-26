"use client";
import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import { Lightbulb, Award, ShieldCheck, Leaf, BadgeCheck, ShieldPlus } from 'lucide-react'
import { motion } from 'framer-motion'

const CoreValueCard = ({ icon: Icon, title, description, variant = 'default', index, className = '' }: {
    icon: any,
    title: string,
    description: string,
    variant?: 'default' | 'accent',
    index: number,
    className?: string
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.1 } }}
            className={`p-10 flex flex-col gap-6 h-full transition-all duration-300 ${className} ${variant === 'accent'
                ? 'bg-[#008FDC26] border-transparent'
                : 'bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg'
                }`}
        >
            <div className={`w-12 h-12 flex items-center justify-start ${variant === 'accent' ? 'text-[#001E40]' : 'text-[#00658D]'}`}>
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-3xl font-bold text-[#04111D]'>{title}</h3>
                <p className='text-[18px] text-gray-600 leading-relaxed'>{description}</p>
            </div>
        </motion.div>
    )
}

const OurCoreValues = () => {
    return (
        <section className='bg-white py-20 overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10'>
                <div className='text-center mb-16'>
                    <SectionHeader title="The Steel Within" alignment="center" />
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-4xl md:text-5xl text-[#04111D] font-bold capitalize mt-4'
                    >
                        Our Core Values
                    </motion.h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8'>
                    <CoreValueCard
                        index={0}
                        icon={Lightbulb}
                        title="Innovation"
                        description="Pushing the boundaries of engineering to find smarter, faster, and more efficient ways to build."
                        variant="accent"
                        className='md:col-span-2'
                    />
                    <CoreValueCard
                        index={1}
                        icon={BadgeCheck}
                        title="Reliability"
                        description="Structures that stand the test of time and partnerships built on trust."
                        className='md:col-span-1'
                    />
                    <CoreValueCard
                        index={2}
                        icon={ShieldPlus}
                        title="Safety"
                        description="A zero-compromise approach to the well-being of our workforce."
                        className='md:col-span-1'
                    />
                </div>

                {/* Sustainability Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className='mt-8 bg-[#001E40] p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-8 group transition-all duration-300'
                >
                    <div className='flex flex-col gap-4 text-white max-w-2xl'>
                        <h3 className='text-3xl md:text-4xl font-bold'>Sustainability</h3>
                        <p className='text-[18px] md:text-[20px] text-gray-400 font-medium leading-relaxed'>
                            We are committed to eco-friendly manufacturing processes and recyclable steel materials.
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className='text-primary'
                    >
                        <Leaf size={72} strokeWidth={1.5} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default OurCoreValues