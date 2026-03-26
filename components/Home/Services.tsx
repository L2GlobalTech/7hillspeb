"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import { MoveLeft, MoveRight } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as motion from 'framer-motion/client'

// Import attributes for images
import CompleteDesign from '@/public/assets/Home/Services/CompleteDesign.png'
import Manufacturing from '@/public/assets/Home/Services/Manufacturing.png'
import Erection from '@/public/assets/Home/Services/Erection.png'
import ProjectManagement from '@/public/assets/Home/Services/ProjectManagement.png'
import Foundation from '@/public/assets/Home/Services/Foundation.png'

const Services = () => {
    const sliderRef = useRef<Slider>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const services = [
        {
            id: 1,
            title: "Complete design & engineering",
            image: CompleteDesign
        },
        {
            id: 2,
            title: "Manufacturing & fabrication",
            image: Manufacturing
        },
        {
            id: 3,
            title: "Erection & installation",
            image: Erection
        },
        {
            id: 4,
            title: "Project management",
            image: ProjectManagement
        },
        {
            id: 5,
            title: "Foundation & Civil Works",
            image: Foundation
        }
    ]

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    // Calculate progress percentage
    const progress = ((currentSlide + 1) / services.length) * 100

    return (
        <section className='bg-[#F6F8F9] py-20 lg:py-28 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row justify-between items-end mb-12'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className='text-primary font-bold text-[16px] tracking-[4%] uppercase mb-3'>
                            OUR SERVICES
                        </h4>
                        <h2 className='text-[28px] lg:text-[36px] font-medium text-black tracking-normal lg:tracking-[-4%]'>
                            End-to-End <span className='text-primary font-medium tracking-normal lg:tracking-[-4%]'>PEB Solutions</span>
                        </h2>
                    </motion.div>

                    {/* Navigation Arrows */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='hidden lg:flex flex-col-reverse items-end gap-6'
                    >
                        {/* Progress Line */}
                        <div className='w-70 h-0.5 bg-gray-200 relative'>
                            <div
                                className='absolute top-0 left-0 h-full bg-primary transition-all duration-300'
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => sliderRef.current?.slickPrev()}
                                className='text-primary hover:text-primary/50 transition-colors duration-300 cursor-pointer'
                            >
                                <MoveLeft className='w-6 h-6' strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={() => sliderRef.current?.slickNext()}
                                className='text-primary hover:text-primary/50 transition-colors duration-300 cursor-pointer'
                            >
                                <MoveRight className='w-6 h-6' strokeWidth={1.5} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Progress Bar (Visible on mobile/tablet) */}
                <div className="w-full bg-gray-200 h-1 mb-8 lg:hidden rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Slider  - Left Contained, Right Full Bleed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-[calc(100%+32px)] sm:w-[calc(100%+48px)] lg:w-[calc(50%+50vw)] overflow-visible'
                >
                    <Slider ref={sliderRef} {...settings}>
                        {services.map((service) => (
                            <div key={service.id} className='px-3 outline-none'>
                                <div className='relative h-[400px] lg:h-[480px] w-full group overflow-hidden'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />

                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90' />

                                    {/* Content */}
                                    <div className='absolute bottom-0 left-0 p-6 w-full'>
                                        <div className='h-full flex items-end'>
                                            <div className='border-l-4 border-primary pl-4'>
                                                <h3 className='text-white text-[16px] font-medium leading-tight tracking-normal lg:tracking-[-4%]'>
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    )
}

export default Services