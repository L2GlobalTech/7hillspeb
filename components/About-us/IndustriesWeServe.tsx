"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '../Shared/SectionHeader'

// Importing icons
import manufacturingIcon from "@/public/assets/AboutUs/Icons/Cement Industry.png"
import warehouseIcon from "@/public/assets/AboutUs/Icons/Warehouse&Logistics.svg"
import commercialIcon from "@/public/assets/AboutUs/Icons/Multi-storied.png"
import infrastructureIcon from "@/public/assets/AboutUs/Icons/Aviation Industry.svg"
import automotiveIcon from "@/public/assets/AboutUs/Icons/Automotive Industry.png"
import agriculturalIcon from "@/public/assets/AboutUs/Icons/FMCG.png"

const industries = [
    {
        title: "Manufacturing & Industrial Facilities",
        description: "PEB structures provide large clear spans and flexible layouts ideal for factories and production units.",
        icon: manufacturingIcon,
    },
    {
        title: "Warehousing & Logistics",
        description: "Efficient and spacious buildings designed for modern warehousing and distribution operations.",
        icon: warehouseIcon,
    },
    {
        title: "Commercial Buildings",
        description: "Modern steel structures suitable for showrooms, retail spaces, and commercial complexes.",
        icon: commercialIcon,
    },
    {
        title: "Infrastructure Projects",
        description: "Reliable building solutions for airports, metro depots, transportation hubs, and public infrastructure.",
        icon: infrastructureIcon,
    },
    {
        title: "Automotive & Engineering Industries",
        description: "Specialized facilities designed to support heavy equipment and large-scale industrial operations.",
        icon: automotiveIcon,
    },
    {
        title: "Agricultural Buildings",
        description: "Durable structures for storage, processing, and agricultural operations.",
        icon: agriculturalIcon,
    },
]

const IndustriesWeServe = () => {
    return (
        <section className='bg-white py-20 lg:py-24 overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10 max-w-7xl'>
                <div className='text-center mb-16'>
                    <SectionHeader title="Industries We Serve" alignment="center" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-relaxed'
                    >
                        Our Pre-Engineered Building solutions are widely used across multiple industries where durability, speed of construction, and cost efficiency are critical.
                    </motion.p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className='group p-8 bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center'
                        >
                            <div className='w-20 h-20 mb-6 relative flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-primary/5 transition-colors duration-300'>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    className='z-10 opacity-70 group-hover:opacity-100 transition-opacity object-contain'
                                />
                                <div className='absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-100' />
                            </div>
                            <h3 className='text-xl font-extrabold text-[#04111D] mb-4 group-hover:text-primary transition-colors'>
                                {item.title}
                            </h3>
                            <p className='text-gray-600 text-sm leading-relaxed font-medium'>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IndustriesWeServe
