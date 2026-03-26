"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import commitmentImg from "@/public/assets/Careers/CommitmentImage.png"
import compassIcon from "@/public/vectors/Compass.svg"
import { MoveUpRight, TrendingUp } from 'lucide-react'

const WhyJoinUs = () => {
    return (
        <section className='bg-white py-14 overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10'>
                <div className='text-primary text-3xl font-bold tracking-[4%] uppercase text-center mb-16'>
                    Why Join Us
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
                    {/* Card 1: Commitment to Innovation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='md:col-span-2 relative min-h-[300px] overflow-hidden flex flex-col justify-end p-8 lg:p-12 group'
                    >
                        <Image
                            src={commitmentImg}
                            alt="Commitment to Innovation"
                            fill
                            className='object-cover opacity-20 group-hover:scale-105 transition-transform duration-700'
                        />
                        <div className='relative z-10'>
                            <h3 className='text-2xl md:text-3xl font-bold text-[#001E40] mb-4'>Commitment to Innovation</h3>
                            <p className='text-[#43474F] max-w-md leading-relaxed'>
                                We utilize state-of-the-art modeling software and advanced manufacturing techniques to solve the most complex structural challenges.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Architectural Layering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className='md:col-span-1 bg-[#001D3D] p-8 lg:p-12 flex flex-col items-center text-center justify-center group'
                    >
                        <div className='mb-6'>
                            <Image
                                src={compassIcon}
                                alt="Architectural Layering"
                                width={30}
                                height={30}
                                className='group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-4 max-w-[150px]'>Architectural Layering</h3>
                        <p className='text-[#D3E4FE] text-sm md:text-base leading-[20px] max-w-[300px]'>
                            Every project we build is a testament to our team's precision and dedication.
                        </p>
                    </motion.div>

                    {/* Card 3: Safety First */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='md:col-span-1 bg-[#3EA9E1] min-h-[300px] p-8 lg:p-12 flex flex-col justify-end text-white group'
                    >
                        <h3 className='text-2xl md:text-3xl font-bold mb-4'>Safety First</h3>
                        <p className='text-white/90 leading-relaxed'>
                            Zero compromises on workplace safety protocols. We build structures that last, and environments where you thrive.
                        </p>
                    </motion.div>

                    {/* Card 4: Professional Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='md:col-span-2 bg-[#D9EEFA] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group'
                    >
                        <div className='flex-1'>
                            <h3 className='text-2xl md:text-3xl font-bold text-[#001D3D] mb-4'>Professional Growth</h3>
                            <p className='text-gray-600 max-w-md leading-relaxed'>
                                Continuous learning programs and mentorship from industry leaders to advance your career path.
                            </p>
                        </div>
                        <div className='text-[#001D3D] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500'>
                            <TrendingUp size={80} strokeWidth={1.5} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyJoinUs