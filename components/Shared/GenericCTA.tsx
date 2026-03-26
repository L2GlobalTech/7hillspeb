"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface GenericCTAProps {
    title: string;
    description: string;
    buttonText: string;
    icon?: boolean;
    link?: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
}

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const GenericCTA = ({ title, description, buttonText, icon, link }: GenericCTAProps) => {
    return (
        <section className='container mx-auto px-6 md:px-10 py-16 md:py-24'>
            <motion.div
                className='relative overflow-hidden bg-linear-to-r from-[#1D5E9B] via-[#208AC6] to-[#1C9BE0] py-20 px-8 text-center shadow-2xl group'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Decorative overlay for better gradient depth */}
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none' />

                <div className='relative z-10'>
                    <motion.h2
                        className='text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 tracking-tight'
                        variants={childVariants}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className='text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium'
                        variants={childVariants}
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        className='flex items-center justify-center'
                        variants={childVariants}
                    >
                        <Link href={link || '#'} className='bg-[#0A1729] hover:bg-black text-white px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer flex items-center gap-2'>
                            {buttonText}
                            {icon && <ArrowRight size={24} className='text-white ml-2' />}
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default GenericCTA
