"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img from "@/public/assets/Projects/TitanSteel.png"

const FeaturedHighlight = () => {
    return (
        <div className='bg-[#F6F8F9] overflow-hidden'>
            <section className='container mx-auto px-6 md:px-10 py-20 lg:py-32'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center'>

                    {/* Left: Stacked Image Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative'
                    >
                        {/* Decorative Background Squares */}
                        <div className='absolute -top-9 left-12 w-48 h-48 bg-[#E5E7EB] z-0 hidden md:block' />
                        <div className='absolute -bottom-10 right-12 w-80 h-80 bg-[#1B2B3E] z-0 hidden md:block' />

                        {/* Main Image Container */}
                        <div className='relative z-10 border-16 border-white shadow-2xl bg-white max-w-[500px] mx-auto'>
                            <Image
                                src={img}
                                alt="Titan Steelworks HQ & Plant"
                                className='w-full h-auto object-contain'
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='flex flex-col'
                    >
                        <span className='text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 block'>
                            FEATURED HIGHLIGHT
                        </span>

                        <h2 className='text-black text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 leading-tight uppercase'>
                            Titan Steelworks <br /> HQ & Plant
                        </h2>

                        {/* Structural Challenge */}
                        <div className='border-l-4 border-primary/20 pl-8 mb-10'>
                            <h3 className='text-[#001E40] text-xl font-bold mb-3'>
                                Structural Challenge
                            </h3>
                            <p className='text-[#43474F] text-lg leading-relaxed max-w-lg'>
                                Requirement for a 120m clear-span with overhead crane capacities of 50 tons. No intermediate columns permitted.
                            </p>
                        </div>

                        {/* The Solution */}
                        <div className='border-l-4 border-primary/20 pl-8 mb-16'>
                            <h3 className='text-[#001E40] text-xl font-bold mb-3'>
                                The Solution
                            </h3>
                            <p className='text-[#43474F] text-lg leading-relaxed max-w-lg'>
                                Engineered high-tensile tapered members with custom bracing systems, reducing total tonnage by 15% compared to conventional steel.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className='flex flex-wrap items-center gap-12 pt-8 border-t border-gray-200'>
                            <div className='flex flex-col'>
                                <span className='text-[#001E40] text-3xl font-extrabold mb-1'>
                                    480 Days
                                </span>
                                <span className='text-[#43474F] text-[10px] uppercase tracking-widest'>
                                    GROUND TO HANDOVER
                                </span>
                            </div>

                            <div className='w-px h-12 bg-gray-200 hidden md:block' />

                            <div className='flex flex-col'>
                                <span className='text-[#001E40] text-3xl font-extrabold mb-1'>
                                    ASTM A572
                                </span>
                                <span className='text-[#43474F] text-[10px] uppercase tracking-widest'>
                                    MATERIAL STANDARD
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedHighlight