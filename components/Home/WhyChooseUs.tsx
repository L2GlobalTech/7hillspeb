import React from 'react'
import { Shield, Zap, Ruler, Settings, DollarSign, Layers } from 'lucide-react'
import * as motion from 'framer-motion/client'

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Settings className="w-8 h-8" strokeWidth={1.5} />,
            title: "Engineering Excellence",
            description: "Optimized building solutions through advanced design and structural analysis."
        },
        {
            icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
            title: "High Quality Materials",
            description: "Premium-grade steel and strict quality control for lasting durability."
        },
        {
            icon: <Ruler className="w-8 h-8" strokeWidth={1.5} />,
            title: "Customized Solutions",
            description: "Tailored PEB structures engineered for your specific operational needs."
        },
        {
            icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
            title: "Faster Execution",
            description: "Rapid construction through streamlined design and manufacturing processes."
        },
        {
            icon: <DollarSign className="w-8 h-8" strokeWidth={1.5} />,
            title: "Cost Efficiency",
            description: "Cost-effective building solutions via optimized material usage and design."
        },
        {
            icon: <Layers className="w-8 h-8" strokeWidth={1.5} />,
            title: "End-to-End Solutions",
            description: "Comprehensive services from concept design to complete project support."
        }
    ]

    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4 className="text-primary font-bold text-[16px] tracking-[4%] uppercase mb-3">
                        WHY CHOOSE US
                    </h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-normal lg:tracking-[-4%]"
                    >
                        Built on Expertise. <span className="text-primary font-bold">Driven by Trust.</span>
                    </motion.h2>
                </motion.div>

                {/* Grid Layout */}
                {/* Grid Layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5 }
                                }
                            }}
                            className="p-8 py-14 hover:bg-[#F7F8F8] transition-colors duration-300 group bg-white h-full flex flex-col items-start text-left"
                        >
                            <div className={`w-16 h-16 flex items-center justify-center mb-6 transition-all duration-600 group-hover:-translate-y-1 border border-[#C9E7F8] text-primary group-hover:bg-primary group-hover:text-white `}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-medium text-black mb-3 tracking-normal lg:tracking-[-4%]">
                                {feature.title}
                            </h3>

                            <p className="text-[#A2A1A1] text-sm leading-relaxed tracking-normal lg:tracking-[-4%]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs
