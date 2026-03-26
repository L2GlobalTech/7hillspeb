"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react'
import bg_img from "@/public/assets/Home/HeroBG.png"
import Button from '../Shared/Button'

const HeroSection = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "We Build Steel",
            highlight: "Structures",
            suffix: "That Last.",
            description: "India's trusted partner for high-performance steel buildings. Engineered for strength. Delivered on time.",
            image: bg_img
        },
        {
            title: "Innovative PEB",
            highlight: "Solutions",
            suffix: "For Every Need.",
            description: "Customized pre-engineered buildings designed to meet your specific industrial and commercial needs.",
            image: bg_img
        },
        {
            title: "Global Standards",
            highlight: "Excellence",
            suffix: "In Every Beam.",
            description: "Leading the way in steel structure fabrication with precision and excellence in every project.",
            image: bg_img
        }
    ];

    const stats = [
        { value: "500+", label: "PROJECTS" },
        { value: "15+", label: "YEARS" },
        { value: "300+", label: "CLIENTS" },
        { value: "2M+", label: "SQ. FT. BUILT" }
    ];

    const settings = {
        dots: false,
        // infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex)
    };

    return (
        <section className="relative w-full min-h-screen bg-[#0A0A0A] font-inter">
            <Slider ref={sliderRef} {...settings} className="h-full w-full">
                {slides.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                        <div key={index} className="relative w-full min-h-screen">
                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt="Background"
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90" />
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90" />

                            {/* Content Container */}
                            <div className="relative z-10 w-full min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-8 md:pb-12 px-6 md:px-10 container mx-auto">

                                {/* Main Hero Content */}
                                <div className="flex flex-col justify-center grow">
                                    <motion.div
                                        initial="hidden"
                                        animate={isActive ? "visible" : "hidden"}
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
                                                Pre-Engineered Building Solutions
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
                                            {slide.title} <br />
                                            <span className="text-primary">{slide.highlight}</span> <br />
                                            {slide.suffix}
                                        </motion.h1>

                                        {/* Description */}
                                        <motion.p
                                            variants={{
                                                hidden: { opacity: 0 },
                                                visible: { opacity: 0.8 },
                                            }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-gray-300 text-lg md:text-xl max-w-2xl tracking-[-4%] leading-relaxed mb-10"
                                        >
                                            {slide.description}
                                        </motion.p>

                                        {/* Buttons */}
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className="flex flex-wrap items-center gap-6 mb-12 md:mb-20"
                                        >
                                            <Button text="About Us" icon={<ArrowRight size={18} />} />

                                            <button className="group flex items-center gap-3 text-white font-bold text-sm md:text-base uppercase tracking-wider hover:text-primary transition-colors cursor-pointer">
                                                <Play size={14} className="text-white group-hover:text-primary ml-0.5 transition-colors" />
                                                View Projects
                                            </button>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Footer Section: Stats & Controls */}
                                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-8 md:flex md:gap-30 w-full md:w-auto">
                                        {stats.map((stat, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <span className="text-[#00AEEF] text-3xl md:text-4xl font-bold">
                                                    {stat.value}
                                                </span>
                                                <span className="text-[#CECDCB] text-[16px] font-light uppercase">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Slider Controls */}
                                    <div className="flex flex-col w-full md:w-80 gap-4 mt-8 md:mt-0">
                                        <div className="flex justify-between items-center text-white">
                                            {/* Counter */}
                                            <div className="text-xl font-light tracking-widest">
                                                <span>0{currentSlide + 1}</span>
                                                <span className="text-white/40">/0{slides.length}</span>
                                            </div>

                                            {/* Arrows */}
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => currentSlide > 0 && sliderRef.current?.slickPrev()}
                                                    className={`transition-all duration-300 ${currentSlide === 0 ? 'text-white/30 cursor-not-allowed' : 'text-white cursor-pointer hover:text-[#00AEEF]'}`}
                                                    disabled={currentSlide === 0}
                                                >
                                                    <MoveLeft size={24} strokeWidth={1.5} />
                                                </button>
                                                <button
                                                    onClick={() => currentSlide < slides.length - 1 && sliderRef.current?.slickNext()}
                                                    className={`transition-all duration-300 ${currentSlide === slides.length - 1 ? 'text-white/30 cursor-not-allowed' : 'text-white cursor-pointer hover:text-[#00AEEF]'}`}
                                                    disabled={currentSlide === slides.length - 1}
                                                >
                                                    <MoveRight size={24} strokeWidth={1.5} />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-px bg-white/20 relative cursor-pointer" onClick={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const x = e.clientX - rect.left;
                                            const width = rect.width;
                                            const clickRatio = x / width;
                                            const targetSlide = Math.floor(clickRatio * slides.length);
                                            sliderRef.current?.slickGoTo(targetSlide);
                                        }}>
                                            <motion.div
                                                className="absolute -top-px left-0 h-[3px] bg-white"
                                                initial={{ width: "0%" }}
                                                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default HeroSection;
