"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import personImg from "@/public/assets/AboutUs/PersonWorking.png"

const TheFoundation = () => {
    return (
        <section className='py-20 lg:py-32 bg-white overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
                    {/* Left side - Image with decorations */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative w-full lg:w-1/2 flex justify-center lg:justify-start'
                    >
                        <div className='relative z-10'>
                            <Image
                                src={personImg}
                                alt="Worker with steel pipes"
                                className='w-[450px] aspect-4/5 object-cover'
                            />
                            {/* Decorative background box - precisely positioned & smaller as per screenshot */}
                            <div className='absolute -right-15 -bottom-15 w-[320px] h-[320px] border-8 border-[#D1E5F1] -z-10 hidden sm:block' />
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <div className='w-full lg:w-1/2'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className='text-primary font-bold text-[14px] tracking-[0.2em] uppercase mb-4'>
                                THE FOUNDATION
                            </h4>
                            <h2 className='text-3xl lg:text-[45px] font-bold text-black mb-8 leading-[1.2] tracking-tight'>
                                Structural Integrity is Our <br className='hidden lg:block' /> Core Philosophy
                            </h2>
                            <p className='text-[#666666] text-lg leading-relaxed mb-12 max-w-2xl'>
                                7Hills PEB Solutions stands at the intersection of architectural vision and industrial precision. As a premier leader in pre-engineered building solutions, we provide a vertically integrated approach encompassing advanced <span className='font-bold text-black'>Design</span>, meticulous <span className='font-bold text-black'>Fabrication</span>, and professional <span className='font-bold text-black'>Erection</span>.
                            </p>
                        </motion.div>

                        {/* Features grid */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {[
                                {
                                    title: "Design",
                                    icon: "/vectors/Compass.svg",
                                    delay: 0.2
                                },
                                {
                                    title: "Fabrication",
                                    icon: "/vectors/MachineArm.svg",
                                    delay: 0.4
                                },
                                {
                                    title: "Erection",
                                    icon: "/vectors/Tool.svg",
                                    delay: 0.6
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: feature.delay }}
                                    className='flex flex-row items-center md:flex-col md:items-start gap-4 bg-white p-6 border-l-4 border-primary shadow-[10px_10px_30px_rgba(0,0,0,0.03)]'
                                >
                                    <div className='w-12 h-12 relative'>
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                    <h5 className='text-xl font-semibold text-black tracking-tight'>{feature.title}</h5>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TheFoundation
