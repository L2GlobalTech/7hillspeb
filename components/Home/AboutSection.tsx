import Image from 'next/image'
import React from 'react'
import img from '@/public/assets/Home/About.png'
import * as motion from 'framer-motion/client'

const AboutSection = () => {
    return (
        <section className='bg-white py-16 lg:py-24 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='relative'
                    >
                        <div className='relative w-full aspect-5/3 overflow-hidden'>
                            <Image
                                src={img}
                                alt='7Hills PEB Engineering Team'
                                className='object-contain w-full h-full'
                                placeholder='blur'
                            />
                        </div>
                        {/* Overlay Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='absolute -bottom-14 right-10 bg-primary text-white p-6 w-32 h-32 flex flex-col justify-center items-center shadow-lg'
                        >
                            <span className='text-3xl font-bold'>15+</span>
                            <span className='text-sm font-medium'>Years</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <div className='space-y-6'>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className='text-primary font-bold text-[16px] tracking-[4%] uppercase mb-2'>
                                ABOUT 7HILLS PEB
                            </h3>
                            <h2 className='text-3xl lg:text-[35px] font-medium text-black tracking-normal lg:tracking-[-4%]'>
                                Engineering Excellence, Built on <br className='hidden lg:block' />
                                Trust & Innovations
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='text-[#A2A1A1] text-[16px] space-y-4 tracking-normal lg:tracking-[-4%]'
                        >
                            <p>
                                We are a leading provider of Pre-Engineered Building (PEB) solutions,
                                delivering innovative, reliable, and cost-efficient steel building systems.
                                With a strong foundation in engineering excellence and advanced manufacturing,
                                we specialize in designing and constructing modern steel structures that meet
                                the evolving demands of industrial and commercial infrastructure.
                            </p>
                            <p>
                                By integrating cutting-edge design technologies with precision manufacturing,
                                we deliver buildings that are not only strong and durable but also highly
                                efficient and sustainable. Our expertise covers the entire spectrum of PEB
                                solutions, ensuring seamless project execution from concept to erection.
                                <br /><br />
                                <a href="/about-us" className='text-primary font-medium hover:underline'>Read More...</a>
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4'
                        >
                            {[
                                { title: '100%', subtitle: 'On-Time Delivery' },
                                { title: 'ISO', subtitle: '9001 Certified' },
                                { title: '50+', subtitle: 'Expert Engineers' },
                                { title: 'Pan', subtitle: 'India Presence' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className='border-l-2 border-primary pl-4'
                                >
                                    <h4 className='text-xl font-bold tracking-normal lg:tracking-[-4%] text-black'>{stat.title}</h4>
                                    <p className='text-sm text-[#A2A1A1] tracking-normal lg:tracking-[-4%]'>{stat.subtitle}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection