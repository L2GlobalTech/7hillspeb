"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Ruler, Factory, HardHat, ShieldCheck, ClipboardList, PenTool } from 'lucide-react'
import SectionHeader from '../Shared/SectionHeader'

const expertiseData = [
    {
        title: "Design & Engineering",
        description: "Utilizing advanced software like Tekla and Revit for precise 3D modeling and structural analysis, ensuring optimal material usage and structural integrity.",
        icon: <Ruler className="w-8 h-8" />,
        capabilities: ["3D Structural Modeling", "Value Engineering", "Load Analysis", "BIM Integration"]
    },
    {
        title: "Manufacturing & Fabrication",
        description: "State-of-the-art facilities with automated welding and high-precision cutting machines for superior quality steel components.",
        icon: <Factory className="w-8 h-8" />,
        capabilities: ["Automated Welding", "CNC Precision Cutting", "Surface Treatment", "Built-up Sections"]
    },
    {
        title: "Project Management",
        description: "Comprehensive planning and real-time monitoring to ensure projects are delivered on time, within budget, and with zero safety incidents.",
        icon: <ClipboardList className="w-8 h-8" />,
        capabilities: ["Timeline Optimization", "Resource Allocation", "Safety Protocols", "On-site Coordination"]
    },
    {
        title: "Erection & Installation",
        description: "Expert on-site teams equipped with modern machinery for swift and safe assembly of complex steel structures.",
        icon: <HardHat className="w-8 h-8" />,
        capabilities: ["Structural Alignment", "Rigid Frame Assembly", "Roofing & Cladding", "Safety Netting"]
    },
    {
        title: "Quality Assurance",
        description: "Strict adherence to ISO standards with multi-stage inspections and rigorous testing of all raw materials and finished products.",
        icon: <ShieldCheck className="w-8 h-8" />,
        capabilities: ["ISO 9001 Compliance", "Material Testing", "Welding Inspection", "Final Site Audit"]
    },
    {
        title: "Custom Solutions",
        description: "Tailoring PEB designs to meet specific industrial, commercial, or institutional requirements with maximum flexibility.",
        icon: <PenTool className="w-8 h-8" />,
        capabilities: ["Mezzanine Floors", "Crane Systems", "Large Clear Spans", "Architectural Accents"]
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const ExpertiseGrid = () => {
    return (
        <section className='py-24 bg-white'>
            <div className='container mx-auto px-6 md:px-10 lg:px-20'>
                <SectionHeader
                    title="CORE EXPERTISE"
                    alignment="center"
                    subtitle={<>Technical <span className='text-primary'>Precision</span> & Mastery</>}
                />

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='group p-8 border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-white relative overflow-hidden'
                        >
                            {/* Hover Background Accent */}
                            <div className='absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500' />

                            <div className='mb-6 p-4 bg-primary/5 inline-block rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500'>
                                {item.icon}
                            </div>

                            <h3 className='text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300'>
                                {item.title}
                            </h3>

                            <p className='text-slate-600 mb-8 leading-relaxed font-medium'>
                                {item.description}
                            </p>

                            <div className='flex flex-wrap gap-2 mt-auto'>
                                {item.capabilities.map((cap, i) => (
                                    <span key={i} className='text-[12px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full'>
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ExpertiseGrid
