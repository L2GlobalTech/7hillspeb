"use client";
import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import { ShieldCheck, Leaf, ShieldPlus } from 'lucide-react'
import { motion, Variants } from 'framer-motion'

const certifications = [
    {
        icon: <ShieldCheck className="text-[#00658D] w-6 h-6" />,
        title: "ISO 9001:2015",
        subtitle: "Quality Management Systems",
        description: "Standardized quality assurance and continuous improvement in every fabrication process."
    },
    {
        icon: <Leaf className="text-[#00658D] w-6 h-6" />,
        title: "ISO 14001:2015",
        subtitle: "Environmental Management",
        description: "Commitment to reducing environmental impact through sustainable steel sourcing and waste reduction."
    },
    {
        icon: <ShieldPlus className="text-[#00658D] w-6 h-6" />,
        title: "ISO 45001:2018",
        subtitle: "Occupational Health & Safety",
        description: "Prioritizing the safety and well-being of our workforce across all manufacturing facilities."
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const Certifications = () => {
    return (
        <div className='bg-[#EFF4FF] py-20 px-4'>
            <div className='container mx-auto px-6 md:px-10 lg:px-20'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeader
                        title='Certifications'
                        alignment='center'
                        subtitle={
                            <p className='text-black'>
                                Global Standards <span className='text-primary'>& Compliance</span>
                            </p>
                        }
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-16'
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='flex gap-6 items-start'
                        >
                            <div className='shrink-0 w-14 h-14 border-2 border-[#00658D33] flex items-center justify-center bg-transparent'>
                                {cert.icon}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-xl font-bold text-black leading-tight'>{cert.title}</h3>
                                <h4 className='text-base font-semibold text-[#00658D] mb-1'>{cert.subtitle}</h4>
                                <p className='text-[#44474E] text-sm leading-relaxed font-medium max-w-[250px]'>
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Certifications
