"use client";
import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import Image from 'next/image'
import { Box, Activity, ShieldCheck, BadgeCheck } from 'lucide-react'
import mechanicArm from "@/public/vectors/MachineArm.svg"
import { motion } from 'framer-motion'

const features = [
    {
        title: "BIM Integration",
        description: "Full building information modeling for every structure.",
        icon: <Box className="text-primary w-6 h-6" />
    },
    {
        title: "Seismic Analysis",
        description: "Advanced simulations for earthquake-prone regions.",
        icon: <Image src={mechanicArm} alt="Seismic Analysis" width={24} height={24} />
    },
    {
        title: "IS Standard Compliant",
        description: "Developed in line with IS codes for long-lasting quality.",
        icon: <BadgeCheck className="text-primary w-6 h-6" />
    }
]

const PrecisionDesign = () => {
    return (
        <section className='bg-[#F6F8F9] py-20 lg:py-32 overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10 max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader
                        title='Precision Design'
                        alignment='center'
                        subtitle={<p className='text-black'>Engineering<span className='text-primary'>{" "}Excellence.</span></p>}
                    />
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-16 md:mt-20 items-center'>
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className='text-[#43474F] text-lg lg:text-xl leading-relaxed mb-12'>
                            Our design and structural team utilizes state-of-the-art software to simulate loads, stresses, and environmental factors, ensuring maximum safety and material efficiency.
                        </p>

                        <div className='space-y-6'>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className='bg-white p-6 border-l-4 border-primary shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow'
                                >
                                    <div className='bg-[#F8F9FF] p-3 group-hover:bg-[#E0F2FE] transition-colors'>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className='text-lg font-bold text-[#001E40]'>
                                            {feature.title}
                                        </h4>
                                        <p className='text-[#43474F] text-sm mt-1'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative aspect-4/3 md:aspect-square lg:aspect-4/3 shadow-xl'
                    >
                        <Image
                            src="/assets/Teams/PrecisionDesign.jpg"
                            alt="Precision Design Steel Structure"
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-700'
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PrecisionDesign
