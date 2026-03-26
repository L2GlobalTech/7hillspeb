"use client";
import React from 'react'
import SectionHeader from '../Shared/SectionHeader'
import Image from 'next/image'
import { motion } from 'framer-motion'

const teamMembers = [
    {
        name: "Sanjay Mehra",
        role: "Senior Site Manager",
        quote: "Precision at the site is where the real engineering is tested.",
        image: "/assets/Teams/fieldteam/Team member.png"
    },
    {
        name: "Elena Rodriguez",
        role: "Logistics Head",
        quote: "Managing global supply chains to keep project timelines on track.",
        image: "/assets/Teams/fieldteam/Team member-1.png"
    },
    {
        name: "Marcus Thorne",
        role: "Safety Officer",
        quote: "Zero compromise on safety. Every worker returns home safe.",
        image: "/assets/Teams/fieldteam/Team member-2.png"
    },
    {
        name: "Priya Sharma",
        role: "Quality Assurance",
        quote: "Every weld, every bolt is checked against our highest standards.",
        image: "/assets/Teams/fieldteam/Team member-3.png"
    },
    {
        name: "Sanjay Mehra",
        role: "Senior Site Manager",
        quote: "Precision at the site is where the real engineering is tested.",
        image: "/assets/Teams/fieldteam/Team member-4.png"
    },
    {
        name: "Elena Rodriguez",
        role: "Logistics Head",
        quote: "Managing global supply chains to keep project timelines on track.",
        image: "/assets/Teams/fieldteam/Team member-5.png"
    },
    {
        name: "Marcus Thorne",
        role: "Safety Officer",
        quote: "Zero compromise on safety. Every worker returns home safe.",
        image: "/assets/Teams/fieldteam/Team member-6.png"
    },
    {
        name: "Priya Sharma",
        role: "Quality Assurance",
        quote: "Every weld, every bolt is checked against our highest standards.",
        image: "/assets/Teams/fieldteam/Team member-7.png"
    }
]

const FieldTeam = () => {
    return (
        <section className='py-20 lg:py-32'>
            <div className='container mx-auto px-6 md:px-10 max-w-7xl'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <SectionHeader
                        title='Field Team'
                        alignment='center'
                        subtitle={<p className='text-black'>Project &<span className='text-primary'>{" "}Operation.</span></p>}
                    />
                    <p className='text-[#43474F] text-lg mt-6 max-w-2xl mx-auto'>
                        The experts who turn blueprints into steel landmarks. Our site teams deliver precision, safety, and operational excellence on every project.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative'>
                    {/* Horizontal Separator (Desktop) */}
                    <div className='hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-10'></div>

                    {/* Vertical Separators (Desktop) */}
                    <div className='hidden lg:block absolute left-1/4 top-0 w-px h-full bg-gray-200 z-10'></div>
                    <div className='hidden lg:block absolute left-1/2 top-0 w-px h-full bg-gray-200 z-10'></div>
                    <div className='hidden lg:block absolute left-3/4 top-0 w-px h-full bg-gray-200 z-10'></div>

                    {/* Tablet Separators (2 columns) */}
                    <div className='hidden md:block lg:hidden absolute top-1/4 left-0 w-full h-px bg-gray-200 z-10'></div>
                    <div className='hidden md:block lg:hidden absolute top-1/2 left-0 w-full h-px bg-gray-200 z-10'></div>
                    <div className='hidden md:block lg:hidden absolute top-3/4 left-0 w-full h-px bg-gray-200 z-10'></div>
                    <div className='hidden md:block lg:hidden absolute left-1/2 top-0 w-px h-full bg-gray-200 z-10'></div>

                    {/* Mobile Separators (1 column) */}
                    <div className='md:hidden absolute top-[12.5%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[25%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[37.5%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[50%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[62.5%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[75%] left-10 right-10 h-px bg-gray-200 z-10'></div>
                    <div className='md:hidden absolute top-[87.5%] left-10 right-10 h-px bg-gray-200 z-10'></div>

                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='p-8 lg:p-10 flex flex-col items-start group hover:bg-[#F8F9FF] transition-colors duration-300 relative'
                        >
                            <div className='w-16 h-16 relative overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow'>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <h4 className='text-xl font-bold text-[#001E40] mb-1'>
                                {member.name}
                            </h4>
                            <p className='text-sm font-bold text-[#00658D] mb-6'>
                                {member.role}
                            </p>
                            <p className='text-[#43474F] text-sm leading-relaxed italic'>
                                "{member.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FieldTeam