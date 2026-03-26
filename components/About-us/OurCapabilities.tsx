import React from 'react'
import SectionHeader from '../Shared/SectionHeader'

const capabilities = [
    {
        title: "Design & Engineering",
        description: "Our engineering team develops highly efficient structural designs using advanced software to ensure optimal performance and structural reliability."
    },
    {
        title: "Manufacturing Excellence",
        description: "With modern fabrication facilities and strict quality control systems, we manufacture high-precision steel components that meet international standards."
    },
    {
        title: "Project Management",
        description: "We follow a structured project execution approach to ensure timely delivery, cost control, and seamless coordination at every stage."
    },
    {
        title: "Erection & Installation Support",
        description: "Our experienced teams provide expert guidance and support during the erection process to ensure safe and efficient installation."
    },
    {
        title: "Quality Assurance",
        description: "Every component undergoes rigorous quality checks to ensure compliance with engineering specifications and industry standards."
    }
]

const OurCapabilities = () => {
    return (
        <section className='bg-[#F8F9FF] text-[#001E40] py-20 lg:py-32'>
            <div className='container mx-auto px-6 md:px-10'>
                <div className='mb-16'>
                    <SectionHeader title="Our Capabilities" alignment="center" />
                    <p className='text-lg lg:text-xl text-[#43474F] mt-6 leading-relaxed max-w-3xl mx-auto text-center'>
                        Our strength lies in combining advanced engineering, modern manufacturing technologies, and industry expertise to deliver high-quality Pre-Engineered Building solutions.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12'>
                    {capabilities.map((item, index) => (
                        <div key={index} className='group'>
                            <div className='flex items-start gap-4'>
                                <div className='w-1 h-12 bg-primary group-hover:h-16 transition-all duration-300' />
                                <div>
                                    <h3 className='text-xl lg:text-2xl font-bold mb-3 tracking-tight text-[#001E40] group-hover:text-primary transition-colors'>
                                        {item.title}
                                    </h3>
                                    <p className='text-[#43474F] text-sm lg:text-base leading-relaxed'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurCapabilities
