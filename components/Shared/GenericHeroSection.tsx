"use client";
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

interface GenericHeroSectionProps {
    title: React.ReactNode;
    subtitle?: string;
    description?: string;
    backgroundImage: StaticImageData | string;
    overlayGradient?: string;
    showSeparator?: boolean;
    gridOverlay?: boolean;
    height?: string;
    minHeight?: string;
    component?: React.ReactNode;
}

const GenericHeroSection = ({
    title,
    subtitle,
    description,
    backgroundImage,
    overlayGradient = 'linear-gradient(286.43deg, rgba(0, 143, 220, 0.7) -78.75%, #000000 110.72%)',
    showSeparator = false,
    gridOverlay = true,
    height = 'h-[50vh]',
    minHeight = 'min-h-[500px]',
    component
}: GenericHeroSectionProps) => {
    return (
        <div className={`relative ${height} ${minHeight} flex items-center overflow-hidden`}>
            {/* Background Image - Parallax Effect */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                    src={backgroundImage}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div
                className='absolute inset-0 z-10'
                style={{ background: overlayGradient, opacity: 0.9 }}
            />

            {/* Darker Overlay for text readability */}
            <div
                className='absolute inset-0 z-10 bg-linear-to-br-from-black-to-transparent'
            />

            {/* Grid Overlay */}
            {gridOverlay && <div
                className='absolute inset-0 pointer-events-none z-20'
                style={{
                    width: '100%',
                    height: '100%',
                    '--gap': '3em',
                    '--line': '1px',
                    '--color': 'hsla(0, 0%, 50%, .31)',
                    backgroundImage: `linear-gradient(-90deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap)), linear-gradient(0deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap))`,
                    backgroundSize: 'var(--gap) var(--gap)'
                } as React.CSSProperties}
            />}

            {/* Content */}
            <div className='container mx-auto px-6 lg:px-8 relative z-30 pt-16 md:pt-20'>
                <div className='max-w-3xl'>
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h4 className='text-primary font-semibold text-[16px] tracking-[4%] uppercase mb-4'>
                                {subtitle}
                            </h4>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className='text-3xl lg:text-[45px] font-bold text-white mb-6 leading-[120%] tracking-normal lg:tracking-[-4%]'>
                            {title}
                        </h1>
                    </motion.div>

                    {showSeparator && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className='h-[2px] bg-[#FFFFFF80] mb-6'
                        />
                    )}

                    {description && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <p className='text-[#CECDCB] text-[16px] max-w-xl leading-[120%]'>
                                {description}
                            </p>
                        </motion.div>
                    )}

                    {component && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {component}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GenericHeroSection
