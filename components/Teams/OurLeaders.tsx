"use client";
import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import Image from 'next/image'
import { motion } from 'framer-motion'

const leaders = [
    {
        name: "Ananya Roy",
        title: "CHIEF OPERATING OFFICER",
        description: "Ananya specializes in operational efficiency and supply chain excellence, bridging the gap between design concepts and physical realization.",
        image: "/assets/Teams/P1.png"
    },
    {
        name: "David Miller",
        title: "TECHNICAL DIRECTOR",
        description: "A pioneer in PEB technology, David leads our R&D initiatives, focusing on sustainable steel structures and innovative assembly techniques.",
        image: "/assets/Teams/P2.png"
    }
]

const OurLeaders = () => {
    return (
        <div className='container mx-auto px-6 md:px-10 py-14 lg:py-24 max-w-4xl'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <SectionHeader
                    title='OUR LEADERSHIP'
                    alignment='center'
                    subtitle={<p className='text-black'>Visionary Leaders.<span className='text-primary'>{" "}Driving Our Success </span></p>}
                />
            </motion.div>

            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-16 md:mt-20'>
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className='group flex flex-col items-center md:items-start'
                        >
                            <div className='relative overflow-hidden aspect-4/5 bg-[#F8F9FF] w-full shadow-sm group-hover:shadow-md transition-shadow duration-500'>
                                <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    fill
                                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                                    sizes="(max-width: 500px) 80vw, (max-width: 1280px) 40vw, 450px"
                                />
                            </div>
                            <div className='mt-8 lg:mt-10'>
                                <h3 className='text-xl lg:text-2xl font-bold text-[#001E40] leading-tight'>
                                    {leader.name}
                                </h3>
                                <p className='text-sm lg:text-[14px] font-bold text-[#00658D] uppercase tracking-widest mt-3'>
                                    {leader.title}
                                </p>
                                <p className='text-[#43474F] mt-6 lg:mt-8 text-sm lg:text-base leading-relaxed'>
                                    {leader.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurLeaders
