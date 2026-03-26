"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import bg_img from "@/public/assets/Projects/ProjectsHero.jpg"
import Button from '../Shared/Button'

const ProjectsHero = () => {
    const stats = [
        { value: "500+", label: "PROJECTS" },
        { value: "15+", label: "YEARS" },
        { value: "300+", label: "CLIENTS" },
        { value: "2M+", label: "SQ. FT. BUILT" }
    ];

    return (
        <section className="relative w-full h-[70vh] md:min-h-screen bg-[#0A0A0A] font-inter overflow-hidden">
            {/* Background Image */}
            <Image
                src={bg_img}
                alt="Background"
                fill
                className="object-cover"
                priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_16.83%,rgba(0,0,0,0)_100%),linear-gradient(0deg,rgba(0,0,0,0.52),rgba(0,0,0,0.52))]" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-[70vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-8 md:pb-12 px-6 md:px-10 container mx-auto">

                {/* Main Hero Content */}
                <div className="flex flex-col justify-center grow">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="flex flex-col max-w-4xl"
                    >
                        {/* Tagline with Line */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="h-[2px] w-12 bg-white/80" />
                            <span className="text-white text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[0.15em] uppercase">
                                DELIVERED PROJECTS
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white text-5xl md:text-7xl lg:text-[87.22px] tracking-[-4%] font-extrabold leading-[1.1] mb-6"
                        >
                            Engineering <br />
                            <span className="text-primary">Landmarks</span> <br />
                            Building <br />
                            <span className="text-primary">Excellence</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 0.8 },
                            }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#CECDCB] text-lg md:text-xl max-w-2xl tracking-[-4%] leading-relaxed mb-10"
                        >
                            Explore our portfolio of precision-engineered structures across the globe. From mega-warehouses to high-tech hangars, we define structural integrity.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHero;
