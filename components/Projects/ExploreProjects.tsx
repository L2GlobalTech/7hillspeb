"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, Settings } from 'lucide-react'
import overlayblur from "@/public/assets/Projects/Overlay+Blur.svg"
import coldstorage from "@/public/assets/Projects/ColdStorage.png"
import corporate from "@/public/assets/Projects/Corporate.png"
import aerohangar from "@/public/assets/Projects/Hangar.png"


const sectors = ['ALL', 'INDUSTRIAL', 'COMMERCIAL', 'COLD STORAGE', 'SPECIALIZED']
const types = ['ALL', 'DOMESTIC', 'INTERNATIONAL', 'ONGOING', 'COMPLETED']

const projects = [
    {
        id: 1,
        title: "Cold Storage Facility",
        location: "BERLIN, GERMANY",
        year: "2023",
        tags: ["50,000 SQ.FT", "GRADE-A STEEL"],
        image: coldstorage,
        sector: "COLD STORAGE",
        type: "COMPLETED",
        style: "standard"
    },
    {
        id: 2,
        title: "Corporate Office Block",
        location: "DUBAI, UAE",
        year: "2023",
        tags: ["50,000 SQ.FT", "GRADE-A STEEL"],
        image: corporate,
        sector: "COMMERCIAL",
        type: "ONGOING",
        style: "overlay"
    },
    {
        id: 3,
        title: "Aero Tech Hangar",
        location: "CHANGI, SINGAPORE",
        year: "2023",
        tags: ["30,000 SQ.FT", "GRADE-A STEEL", "SPECIALIZED"],
        image: aerohangar,
        sector: "SPECIALIZED",
        type: "COMPLETED",
        style: "standard"
    }
]

const ExploreProjects = () => {
    const [selectedSector, setSelectedSector] = useState('ALL')
    const [selectedType, setSelectedType] = useState('ALL')

    const filteredProjects = projects.filter(project => {
        const sectorMatch = selectedSector === 'ALL' || project.sector === selectedSector
        const typeMatch = selectedType === 'ALL' || project.type === selectedType
        return sectorMatch && typeMatch
    })

    return (
        <section className='container mx-auto px-6 md:px-10 py-14 lg:py-24'>
            <div className='text-center mb-16'>
                <h2 className='text-primary text-2xl md:text-3xl font-bold uppercase tracking-widest'>
                    EXPLORE PROJECTS
                </h2>
            </div>

            {/* Filters */}
            <div className='flex flex-col gap-6 md:gap-8 mb-16 md:mb-20 font-inter'>
                <div className='flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 md:pb-6'>
                    <span className='text-[#43474F] text-xs font-bold uppercase tracking-widest mr-4'>FILTER BY SECTOR:</span>
                    <div className='flex flex-wrap gap-2 md:gap-4'>
                        {sectors.map(sector => (
                            <button
                                key={sector}
                                onClick={() => setSelectedSector(sector)}
                                className={`px-5 py-2 text-xs font-bold transition-all duration-300 ${selectedSector === sector ? 'bg-[#001E40] text-white' : 'text-[#43474F] hover:bg-gray-100'}`}
                            >
                                {sector}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-4 border-b border-gray-100 pb-4 md:pb-6'>
                    <span className='text-[#43474F] text-xs font-bold uppercase tracking-widest mr-4'>FILTER BY TYPE:</span>
                    <div className='flex flex-wrap gap-2 md:gap-4'>
                        {types.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-5 py-2 text-xs font-bold transition-all duration-300 ${selectedType === type ? 'bg-[#001E40] text-white' : 'text-[#43474F] hover:bg-gray-100'}`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16'>
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className='flex flex-col'
                        >
                            <div className='relative overflow-hidden aspect-4/3 group'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className='absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-8'>
                                    <ArrowRight className='w-12 h-12 mb-6 -rotate-45' />
                                    <h3 className='text-2xl font-bold text-center'>{project.title}</h3>
                                    <p className='text-sm mt-2 opacity-80'>{project.location} • {project.year}</p>
                                </div>
                            </div>
                            <div className='mt-8 flex flex-col items-start'>
                                <div className='flex items-center gap-2 text-[#43474F] text-xs font-bold uppercase tracking-widest mb-3'>
                                    <MapPin size={14} className='text-primary' />
                                    <span>{project.location} • {project.year}</span>
                                </div>
                                <h3 className='text-2xl md:text-3xl font-bold text-[#001E40] mb-6'>
                                    {project.title}
                                </h3>
                                <div className='flex flex-wrap items-center justify-between w-full gap-4'>
                                    <div className='flex gap-3'>
                                        {project.tags.map(tag => (
                                            <span key={tag} className='px-3 py-1 bg-[#E0F2FE] text-primary text-[10px] font-bold uppercase '>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className='flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform'>
                                        VIEW DETAILS
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special CTA Card (Only show if ALL or COLD STORAGE selected) */}
                    {/* {(selectedSector === 'ALL' || selectedSector === 'COLD STORAGE') && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className='bg-[#001E40] p-10 md:p-16 flex flex-col justify-between items-start text-white relative overflow-hidden group'
                        >
                            <div className='absolute -top-25 -right-25 w-full h-full'>
                                <Image src={overlayblur} alt="overlayblur" fill className='object-cover' />
                            </div>
                            <div className='relative z-10'>
                                <div className='bg-primary p-4 inline-block  mb-12 group-hover:scale-110 transition-transform'>
                                    <Settings className='w-8 h-8 text-[#001E40]' />
                                </div>
                                <h3 className='text-3xl md:text-4xl font-bold leading-tight mb-8 max-w-sm'>
                                    Explore Cold Storage Innovations
                                </h3>
                                <p className='text-[#CECDCB] text-lg leading-relaxed max-w-md mb-12'>
                                    Advanced thermal envelope solutions for global pharmaceutical and food supply chains.
                                </p>
                            </div>
                            <button className='relative z-10 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white px-8 py-4 font-bold uppercase text-xs tracking-widest transition-all '>
                                SEE COLD STORAGE PROJECTS
                            </button>
                        </motion.div>
                    )} */}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ExploreProjects