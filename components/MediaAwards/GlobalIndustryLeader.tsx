"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Lightbulb, Leaf, ShieldCheck, ArrowRight } from 'lucide-react'
import decoration from "@/public/assets/MediaAwards/Structural Accent Decoration.svg"

const GlobalIndustryLeader = () => {
    return (
        <section className='bg-white overflow-hidden py-20 lg:py-32'>
            <div className='container mx-auto px-6 md:px-10'>

                {/* Top Row: Main Highlights */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
                    {/* Main Award Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2 bg-[#F6F8F9] p-10 md:p-16 relative overflow-hidden group'
                    >
                        <div className='relative z-10 max-w-lg'>
                            <span className='text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 block'>
                                GLOBAL INDUSTRY LEADER
                            </span>
                            <h2 className='text-[#001E40] text-4xl md:text-5xl font-bold mb-8 leading-tight'>
                                Best PEB Manufacturer 2024
                            </h2>
                            <p className='text-[#43474F] text-lg leading-relaxed mb-12'>
                                Awarded for outstanding contribution to industrial infrastructure and pioneering pre-engineered building technology across the sub-continent.
                            </p>

                            <div className='flex items-center gap-6'>
                                <div className='bg-[#001E40] p-4 text-white'>
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 className='text-[#001E40] font-bold text-lg'>National Engineering Council</h4>
                                    <p className='text-[#43474F] text-sm uppercase tracking-widest'>Platinum Certification</p>
                                </div>
                            </div>
                        </div>

                        {/* Static Illustration */}
                        <div className='absolute right-[-10%] bottom-[-10%] w-2/3 h-2/3 opacity-40 md:opacity-100 transition-transform duration-700 group-hover:scale-105 pointer-events-none'>
                            <Image src={decoration} alt="Decoration" fill className='object-contain pointer-events-none' />
                        </div>
                    </motion.div>

                    {/* Dark Highlight Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='bg-[linear-gradient(135.56deg,#002046_0%,#1B365D_100%)] p-10 md:p-12 text-white flex flex-col justify-between group h-full'
                    >
                        <div className='mb-12'>
                            <div className='bg-[linear-gradient(135.56deg,#002046_0%,#1B365D_100%)] p-4 border border-primary/30 inline-block mb-10'>
                                <Award className='text-primary w-8 h-8' />
                            </div>
                            <h3 className='text-3xl font-bold mb-6 leading-tight'>
                                Excellence in Steel Structures 2025
                            </h3>
                            <p className='text-[#87A0CD] text-lg leading-relaxed'>
                                Recognized for innovative structural design and sustainable steel utilization in large-scale logistics hubs.
                            </p>
                        </div>

                        <div className='pt-8 border-t border-white/10'>
                            <button className='flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:translate-x-2 transition-transform'>
                                STEEL DESIGN ASSOCIATION
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Middle Row: Category Awards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24'>
                    {[
                        {
                            title: "Structural Innovation Award",
                            desc: "Honored for developing proprietary cold-formed steel sections that reduce material waste by 15%.",
                            source: "INNOVATION SUMMIT 2022",
                            icon: <Lightbulb className='text-[#161C24]' size={24} />
                        },
                        {
                            title: "Green Building Excellence",
                            desc: "Commended for our zero-waste manufacturing process and LEED-compliant PEB frameworks.",
                            source: "ENVIRONMENTAL COUNCIL",
                            icon: <Leaf className='text-[#161C24]' size={24} />
                        },
                        {
                            title: "Zero Accident Citation",
                            desc: "Achieving 2 million safe man-hours in high-risk steel erection sites across 2023-2024.",
                            source: "OSHA COMPLIANCE 2024",
                            icon: <ShieldCheck className='text-[#161C24]' size={24} />
                        }
                    ].map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className='bg-[#D5F2FF66] p-10 flex flex-col justify-between group hover:bg-[#D5F2FF] transition-colors duration-300'
                        >
                            <div className='mb-12'>
                                <div className='bg-[#80C7ED] p-3 shadow-md inline-block mb-8 group-hover:scale-110 transition-transform'>
                                    {award.icon}
                                </div>
                                <h3 className='text-[#001E40] text-2xl font-bold mb-4'>{award.title}</h3>
                                <p className='text-[#43474F] text-base leading-relaxed'>
                                    {award.desc}
                                </p>
                            </div>
                            <span className='text-primary text-[10px] font-bold uppercase tracking-widest pt-6 border-t border-primary/10'>
                                {award.source}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section: Summary & Stats */}
                <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32 pt-16 border-t border-gray-100'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='max-w-3xl flex flex-col gap-8'
                    >
                        <h2 className='text-[#001E40] text-3xl font-bold'>Beyond Recognition</h2>
                        <div className='border-l-4 border-primary pl-10'>
                            <p className='text-[#43474F] text-base md:text-base leading-relaxed font-medium italic'>
                                "Awards are markers of our past performance, but our true goal is the enduring stability of the structures we build for our clients. Every award is a testament to the thousands of tonnes of steel precisely engineered by 7Hills."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='flex gap-16 md:gap-24 w-full lg:w-auto shrink-0 md:mt-14 ml-10 md:ml-0'
                    >
                        <div className='flex flex-col'>
                            <span className='text-[#001E40] text-5xl font-bold mb-2'>15+</span>
                            <span className='text-[#43474F] text-[10px] font-bold uppercase tracking-widest'>MAJOR AWARDS</span>
                        </div>
                        <div className='w-px h-16 bg-gray-200 hidden md:block' />
                        <div className='flex flex-col'>
                            <span className='text-[#001E40] text-5xl font-bold mb-2'>200+</span>
                            <span className='text-[#43474F] text-[10px] font-bold uppercase tracking-widest'>CERTIFIED PROJECTS</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GlobalIndustryLeader