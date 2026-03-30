import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ell1 from "@/public/assets/Home/ContactUS/Ellipse 1.svg"
import ell2 from "@/public/assets/Home/ContactUS/Ellipse 2.svg"
import Image from 'next/image'
import * as motion from 'framer-motion/client'

const HomeContactUS = () => {
    return (
        <section className='bg-primary py-20 lg:py-24 relative overflow-hidden'>
            {/* Background Decoration acting as the curve/circle */}

            <Image className='absolute top-0 right-0 pointer-events-none' src={ell1} alt="ellipse" />
            <Image className='absolute bottom-0 left-0 pointer-events-none' src={ell2} alt="ellipse" />

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='text-white space-y-8'
                    >
                        <div>
                            <h4 className='text-[#80C7ED] font-semibold text-[21px] tracking-[4%] uppercase mb-4'>
                                CONTACT US
                            </h4>
                            <h2 className='text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-normal lg:tracking-[-4%]'>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Let's Build <br /> Something Great.
                            </h2>
                            <p className='text-white text-lg leading-relaxed tracking-normal lg:tracking-[-4%] max-w-xl'>
                                Ready to start your next project? Get in touch for a free consultation and detailed quote tailored to your needs.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.3
                                    }
                                }
                            }}
                            className='space-y-6 pt-4'
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='flex items-start gap-4'
                            >
                                <div className='w-15 h-15 bg-[#1C9BE0] flex items-center justify-center shrink-0'>
                                    <MapPin className='w-6 h-6 text-white' />
                                </div>
                                <div>
                                    <h5 className='text-lg font-semibold tracking-normal lg:tracking-[-4%] mb-1'>Head Office</h5>
                                    <a
                                        href="https://www.google.com/maps/search/7Hills+Industrial+Area,+Hyderabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white tracking-normal lg:tracking-[-4%] hover:underline transition-colors inline-block'
                                    >
                                        7Hills Industrial Area, Hyderabad, India
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='flex items-center gap-4'
                            >
                                <div className='w-15 h-15 bg-[#1C9BE0] flex items-center justify-center shrink-0'>
                                    <Phone className='w-6 h-6 text-white' />
                                </div>
                                <div>
                                    <h5 className='text-lg font-semibold tracking-normal lg:tracking-[-4%] mb-1'>Phone</h5>
                                    <a
                                        href="tel:+919876543210"
                                        className='text-white tracking-normal lg:tracking-[-4%] hover:underline transition-colors inline-block'
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='flex items-center gap-4'
                            >
                                <div className='w-15 h-15 bg-[#1C9BE0] flex items-center justify-center shrink-0'>
                                    <Mail className='w-6 h-6 text-white' />
                                </div>
                                <div>
                                    <h5 className='text-lg font-semibold tracking-normal lg:tracking-[-4%] mb-1'>Email</h5>
                                    <a
                                        href="mailto:7hillspebsolutions@gmail.com"
                                        className='text-white tracking-normal lg:tracking-[-4%] hover:underline transition-colors inline-block'
                                    >
                                        7hillspebsolutions@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='flex items-center gap-4'
                            >
                                <div className='w-15 h-15 bg-[#1C9BE0] flex items-center justify-center shrink-0'>
                                    <Clock className='w-6 h-6 text-white' />
                                </div>
                                <div>
                                    <h5 className='text-lg font-semibold tracking-normal lg:tracking-[-4%] mb-1'>Business Hours</h5>
                                    <p
                                        className='text-white tracking-normal lg:tracking-[-4%] inline-block'
                                    >
                                        Monday – Friday: 9:00 AM – 6:00 PM <br />
                                        Saturday: 9:00 AM – 1:00 PM <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <div className='lg:pl-10'>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='bg-[#FFFFFF] pt-3 shadow-2xl w-full'
                        >
                            {/* <iframe
                                id="YupFormIFrame-26994461-de2c-4b6b-8d91-c679c1186fc0"
                                title="Contact Us Form"
                                src="https://form.yupform.com/26994461-de2c-4b6b-8d91-c679c1186fc0"
                                frameBorder="0"
                                style={{ minWidth: '100%', maxWidth: '100%', height: '690px', border: 'none' }}
                                scrolling="no"
                            ></iframe> */}
                            <script
                                src="https://yup-form.s3.nl-ams.scw.cloud/libs/js/yup-lib.min.gz"
                                async
                            ></script>

                            <div
                                className="yup-form-embed"
                                data-id="26994461-de2c-4b6b-8d91-c679c1186fc0"
                                data-lazyload="true"
                            ></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContactUS