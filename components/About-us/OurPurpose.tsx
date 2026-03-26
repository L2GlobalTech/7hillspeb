"use client";
import { Eye, Rocket } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const OurPurpose = () => {
    return (
        <section className='bg-[#0B1E31] text-white px-6 md:px-10 py-16 md:py-24 overflow-hidden'>
            <div className='container mx-auto max-w-7xl'>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-primary text-center uppercase font-bold text-2xl md:text-4xl tracking-[4px] mb-12 md:mb-20'
                >
                    Our Purpose
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-stretch'>
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className='group bg-[#11253C]/80 border border-[#799DD6]/20 backdrop-blur-sm p-8 md:p-12 h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,143,220,0.15)]'
                    >
                        <div className='flex flex-col items-start justify-start gap-6 md:gap-8'>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className='p-3 bg-primary/10'
                            >
                                <Rocket color='#008FDC' size={36} className='md:w-10 md:h-10' />
                            </motion.div>

                            <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                                Our Mission
                            </h3>

                            <p className='text-[18px] md:text-[22px] leading-relaxed md:leading-[1.6] text-gray-300 font-medium'>
                                To provide high-quality, cost-effective steel building systems through engineering excellence, advanced manufacturing, and a strong commitment to customer satisfaction.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className='group bg-[#11253C]/80 border border-[#799DD6]/20 backdrop-blur-sm p-8 md:p-12 h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,143,220,0.15)]'
                    >
                        <div className='flex flex-col items-start justify-start gap-6 md:gap-8'>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                className='p-3 bg-primary/10'
                            >
                                <Eye color='#008FDC' size={36} className='md:w-10 md:h-10' />
                            </motion.div>

                            <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                                Our Vision
                            </h3>

                            <p className='text-[18px] md:text-[22px] leading-relaxed md:leading-[1.6] text-gray-300 font-medium'>
                                To be a trusted leader in delivering innovative and sustainable pre-engineered building solutions that redefine modern construction.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default OurPurpose
