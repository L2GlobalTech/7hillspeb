'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import * as motion from 'framer-motion/client'
import { AnimatePresence } from 'framer-motion'

// Images
import autoParts from '@/public/assets/Home/Portfolio/AutoPartsFactory.png'
import coldStorage from '@/public/assets/Home/Portfolio/ColdStorage.png'
import corporate from '@/public/assets/Home/Portfolio/CorporateOffice.png'
import highway from '@/public/assets/Home/Portfolio/HighwayToll.png'
import megaWarehouse from '@/public/assets/Home/Portfolio/MegaWarehouse.png'
import textile from '@/public/assets/Home/Portfolio/TextileManu.png'

import img1 from '@/public/assets/Home/Portfolio/1.jpg'
import img2 from '@/public/assets/Home/Portfolio/2.jpg'
import img3 from '@/public/assets/Home/Portfolio/3.jpg'
import img4 from '@/public/assets/Home/Portfolio/4.jpg'
import img5 from '@/public/assets/Home/Portfolio/8.jpg'
import img6 from '@/public/assets/Home/Portfolio/10.jpg'

const categories = ['All', 'Industrial', 'Commercial', 'Warehouse', 'Infrastructure']

const projects = [
    {
        id: 1,
        title: 'Mega Warehouse Complex',
        subtitle: 'Hyderabad - 50,000 sq.ft',
        category: 'Warehouse',
        image: img1,
    },
    {
        id: 2,
        title: 'Auto Parts Factory',
        subtitle: 'Mumbai - 75,000 sq.ft',
        category: 'Industrial',
        image: img2,
    },
    {
        id: 3,
        title: 'Corporate Office Block',
        subtitle: 'Bangalore - 120,000 sq.ft',
        category: 'Commercial',
        image: img3,
    },
    {
        id: 4,
        title: 'Cold Storage Facility',
        subtitle: 'Delhi - 65,000 sq.ft',
        category: 'Warehouse',
        image: img4,
    },
    {
        id: 5,
        title: 'Highway Toll Plaza',
        subtitle: 'Chennai - 25,000 sq.ft',
        category: 'Infrastructure',
        image: img5,
    },
    {
        id: 6,
        title: 'Textile Manufacturing Unit',
        subtitle: 'Pune - 90,000 sq.ft',
        category: 'Industrial',
        image: img6,
    },
]

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <section className='bg-[#0B1E31] py-16 lg:py-24 text-white overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header & Filter */}
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className='text-primary font-bold text-[16px] tracking-[4%] uppercase mb-2'>
                            OUR PORTFOLIO
                        </h4>
                        <h2 className='text-3xl lg:text-[42px] font-medium tracking-normal lg:tracking-[-4%] leading-tight'>
                            Featured Projects
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='flex flex-wrap gap-3'
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 border text-[13px] font-medium uppercase tracking-normal lg:tracking-[-4%] transition-all duration-300 cursor-pointer
                                    ${activeCategory === category
                                        ? 'bg-primary border-primary text-white'
                                        : 'border-[#54626F] text-[#9BA5B1] hover:border-white hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className='group relative aspect-4/3 overflow-hidden cursor-pointer'
                            >
                                {/* Background Image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
                                    placeholder='blur'
                                />

                                {/* Default Gradient Overlay (Visible when NOT hovered) */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0' />

                                {/* Default Content (Bottom) */}
                                <div className='absolute bottom-0 left-0 p-6 w-full transform transition-all duration-300 translate-y-0 opacity-100 group-hover:translate-y-4 group-hover:opacity-0'>
                                    <h3 className='text-xl font-bold mb-1 tracking-normal lg:tracking-[-4%]'>{project.title}</h3>
                                    <p className='text-sm text-gray-300 tracking-normal lg:tracking-[-4%]'>{project.category}</p>
                                </div>

                                {/* Hover Overlay (Blue) */}
                                <div className='absolute inset-0 bg-primary/95 flex flex-col justify-center items-center text-center p-6 opacity-0 transition-visible duration-300 group-hover:opacity-100'>
                                    <ArrowUpRight className='w-8 h-8 mb-4 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-75' />
                                    <h3 className='text-2xl font-bold mb-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-100 tracking-normal lg:tracking-[-4%]'>
                                        {project.title}
                                    </h3>
                                    <p className='text-sm opacity-90 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 delay-150 tracking-normal lg:tracking-[-4%]'>
                                        {project.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default PortfolioSection