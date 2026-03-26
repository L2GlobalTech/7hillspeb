import React from 'react'
import { Trophy } from 'lucide-react'
import * as motion from 'framer-motion/client'

const Recognition = () => {
    const awards = [
        {
            year: "2024",
            title: "Best PEB Manufacturer",
            subtitle: "Construction Industry Awards"
        },
        {
            year: "2023",
            title: "Excellence in Steel Structures",
            subtitle: "Indian Steel Association"
        },
        {
            year: "2022",
            title: "Green Building Innovation",
            subtitle: "Sustainable Infrastructure Forum"
        },
        {
            year: "2021",
            title: "Fastest Growing PEB Company",
            subtitle: "Business Excellence Awards"
        }
    ]

    return (
        <section className='bg-[#F6F8F9] py-20 lg:py-28'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center gap-1 mb-12 text-center'
                >
                    <p className='text-primary font-bold text-[16px] tracking-[4%] uppercase'>Recognition</p>
                    <p className='text-black text-[35px] font-medium tracking-normal lg:tracking-[-4%]'>Awards & Accolades</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
                >
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className='group relative bg-white p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100 overflow-hidden'
                        >
                            <div className='absolute top-0 left-0 w-full h-[4px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center' />

                            <Trophy className='w-12 h-12 text-primary mb-6 transition-transform duration-300 group-hover:scale-110' strokeWidth={1.5} />

                            <h3 className='text-2xl font-bold text-primary mb-3 tracking-normal lg:tracking-[-4%]'>
                                {award.year}
                            </h3>

                            <h4 className='text-lg font-bold text-black mb-2 leading-tight tracking-normal lg:tracking-[-4%]'>
                                {award.title}
                            </h4>

                            <p className='text-[#A2A1A1] text-sm tracking-normal lg:tracking-[-4%]'>
                                {award.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Recognition