"use client";
import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'
import ApplicationForm from './ApplicationForm'

// Easily editable positions data
const positions = [
    {
        id: 1,
        category: "ENGINEERING",
        location: "Dubai, UAE",
        title: "Lead Structural Engineer (PEB Specialist)",
        description: "Minimum 8 years experience in high-rise steel structure design and detailing.",
        tagColor: "bg-[#D3E9F9] text-[#2D8BC3]"
    },
    {
        id: 2,
        category: "PROJECT MANAGEMENT",
        location: "Riyadh, KSA",
        title: "Senior Project Manager",
        description: "Overseeing end-to-end delivery of industrial warehouse projects across the GCC region.",
        tagColor: "bg-[#D3E9F9] text-[#2D8BC3]"
    },
    {
        id: 3,
        category: "SITE OPERATIONS",
        location: "Doha, Qatar",
        title: "Site Supervisor",
        description: "Responsible for onsite safety, material management, and erection precision.",
        tagColor: "bg-[#D3E9F9] text-[#2D8BC3]"
    },
    {
        id: 4,
        category: "DESIGN",
        location: "Mumbai, India",
        title: "BIM Modeler",
        description: "Expertise in Tekla Structures and Revit for complex PEB detailing.",
        tagColor: "bg-[#D3E9F9] text-[#2D8BC3]"
    },
    {
        id: 5,
        category: "SALES",
        location: "Hyderabad, India",
        title: "Business Development Manager",
        description: "Driving growth in the industrial infrastructure sector across South India.",
        tagColor: "bg-[#D3E9F9] text-[#2D8BC3]"
    },

]

const JobCard = ({ job, onApply }: { job: typeof positions[0], onApply: (title: string) => void }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
        }}
        className='bg-white border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between mb-6 group'
    >
        <div className='flex-1 pr-4'>
            <div className='flex flex-wrap items-center gap-4 mb-4'>
                <span className={`text-[10px] font-bold tracking-wider px-3 py-1 uppercase ${job.tagColor}`}>
                    {job.category}
                </span>
                <span className='flex items-center text-gray-400 text-xs font-medium'>
                    <MapPin size={14} className='mr-1' />
                    {job.location}
                </span>
            </div>
            <h3 className='text-xl font-bold text-[#001E40] mb-2 group-hover:text-primary transition-colors'>
                {job.title}
            </h3>
            <p className='text-gray-500 text-sm leading-relaxed max-w-2xl'>
                {job.description}
            </p>
        </div>
        <button
            onClick={() => onApply(job.title)}
            className='mt-6 md:mt-0 min-w-[140px] border border-gray-200 text-[#001E40] px-6 py-2.5 font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300'>
            Apply Now
        </button>
    </motion.div>
)

const OpenPositions = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState('')

    const handleApply = (title: string) => {
        setSelectedJob(title)
        setIsModalOpen(true)
    }

    const filteredPositions = useMemo(() => {
        return positions.filter(pos =>
            pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pos.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pos.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    return (
        <section className='bg-[#F6F8F9] py-20 lg:py-24'>
            <div className='container mx-auto px-6 md:px-10 max-w-7xl'>
                {/* Header Area */}
                <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
                    <div>
                        <span className='text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block'>
                            Open Positions
                        </span>
                        <h2 className='text-4xl md:text-5xl font-extrabold text-black'>
                            Explore <span className='text-primary'>Opportunities.</span>
                        </h2>
                    </div>
                    <div className='relative w-full md:w-80'>
                        <input
                            type='text'
                            placeholder='Search roles...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full bg-white text-black border border-gray-200 px-5 py-3 pr-12 text-sm focus:outline-none focus:border-primary transition-colors appearance-none'
                        />
                        <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none' size={20} />
                    </div>
                </div>

                {/* Job List Area */}
                <div className='max-h-[550px] overflow-y-auto pr-4 custom-scrollbar scroll-smooth'>
                    <AnimatePresence mode='popLayout'>
                        {filteredPositions.length > 0 ? (
                            filteredPositions.map((job) => (
                                <JobCard key={job.id} job={job} onApply={handleApply} />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='text-center py-20 text-gray-400'
                            >
                                No positions found matching your search.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <ApplicationForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />
        </section>
    )
}

export default OpenPositions