"use client";
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react'
import React from 'react'

const ContactUsForm = () => {
    return (
        <section className='bg-white py-20 lg:py-24 relative overflow-hidden'>

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
                            {/* <h4 className='text-white/80 font-bold text-sm tracking-widest uppercase mb-4'>
                                CONTACT US
                            </h4> */}
                            <h2 className='text-4xl lg:text-[46px] font-bold text-black tracking-normal lg:tracking-[-4%] leading-tight mb-6'>
                                Get in Touch
                            </h2>
                            <p className='text-[#A2A1A1] text-lg leading-relaxed tracking-normal lg:tracking-[-4%] max-w-xl'>
                                {/* Get in touch with us and let’s discuss how we can support your next infrastructure or industrial project. */}
                                Get in touch with us and let’s discuss how we can support your next future project.
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
                                <div className='w-15 h-15 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center shrink-0'>
                                    <MapPin className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <h5 className='text-lg text-black font-semibold mb-1 tracking-normal lg:tracking-[-4%]'>Corporate</h5>
                                    <a
                                        href="https://www.google.com/maps/search/7Hills+Industrial+Area,+Hyderabad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-[#A2A1A1] tracking-normal lg:tracking-[-4%] hover:text-primary transition-colors inline-block'
                                    >
                                        {/* 7Hills Industrial Area, Hyderabad, India */}
                                        Kodad, Suryapet district, Telangana, India
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
                                <div className='w-15 h-15 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center shrink-0'>
                                    <Phone className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <h5 className='text-lg text-black font-semibold mb-1 tracking-normal lg:tracking-[-4%]'>Phone</h5>
                                    <a
                                        href="tel:+919515605777"
                                        className='text-[#A2A1A1] tracking-normal lg:tracking-[-4%] hover:text-primary transition-colors inline-block'
                                    >
                                        +91 9515605777
                                    </a>, {" "}
                                    <a
                                        href="tel:+919515609777"
                                        className='text-[#A2A1A1] tracking-normal lg:tracking-[-4%] hover:text-primary transition-colors inline-block'
                                    >
                                        +91 9515609777
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
                                <div className='w-15 h-15 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center shrink-0'>
                                    <Mail className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <h5 className='text-lg text-black font-semibold mb-1 tracking-normal lg:tracking-[-4%]'>Email</h5>
                                    <a
                                        href="mailto:7hillspebsolutions@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-[#A2A1A1] tracking-normal lg:tracking-[-4%] hover:text-primary transition-colors inline-block'
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
                                <div className='w-15 h-15 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center shrink-0'>
                                    <Clock className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <h5 className='text-lg text-black font-semibold mb-1 tracking-normal lg:tracking-[-4%]'>Business Hours</h5>
                                    <p
                                        className='text-[#A2A1A1] tracking-normal lg:tracking-[-4%] inline-block'
                                    >
                                        Monday – Friday: 9:00 AM – 6:00 PM <br />
                                        Saturday: 9:00 AM – 1:00 PM <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </motion.div>
                            {/* <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='flex items-start gap-4'
                            >
                                <div className='w-15 h-15 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center shrink-0'>
                                    <MessageSquare className='w-6 h-6 text-primary' />
                                </div>
                                <div>
                                    <h5 className='text-lg text-black font-semibold mb-1 tracking-normal lg:tracking-[-4%]'>Project Enquiries</h5>
                                    <p className='text-[#A2A1A1] text-sm leading-relaxed tracking-normal lg:tracking-[-4%] mb-2 max-w-sm'>
                                        For discussions and quotations regarding industrial or infrastructure projects.
                                    </p>
                                    <a href="mailto:7hillspebsolutions@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-primary hover:underline font-semibold text-sm'>7hillspebsolutions@gmail.com</a>
                                </div>
                            </motion.div> */}

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                className='pt-4'
                            >
                                <h5 className='text-lg text-black font-semibold mb-3 tracking-normal lg:tracking-[-4%]'>Follow Us</h5>
                                <div className='flex gap-4'>
                                    {[
                                        { Icon: Linkedin, href: "#", name: 'LinkedIn' },
                                        { Icon: Facebook, href: "#", name: 'Facebook' },
                                        { Icon: Instagram, href: "#", name: 'Instagram' },
                                        // { Icon: Youtube, href: "#", name: 'YouTube' }
                                    ].map(({ Icon, href, name }) => (
                                        <a
                                            key={name}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='w-11 h-11 bg-[#E8F5FC] border border-[#C9E7F8] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300'
                                            aria-label={name}
                                        >
                                            <Icon className='w-5 h-5' />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <div className=''>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='bg-[#FFFFFF] border border-[#E9E8E8] overflow-hidden p-8 shadow-lg tracking-normal lg:tracking-[-4%]'
                        >
                            <div className='mb-6'>
                                <h3 className='text-[25px] font-bold text-black tracking-normal lg:tracking-[-4%] mb-2'>
                                    Send Us a Message
                                </h3>
                                <p className='text-[#A2A1A1] text-sm tracking-normal lg:tracking-[-4%]'>
                                    If you have any questions or project requirements, please fill out the form below and our team will get back to you shortly.
                                </p>
                            </div>
                            {/* <iframe
                                id="YupFormIFrame-26994461-de2c-4b6b-8d91-c679c1186fc0"
                                title="Contact Us Form"
                                src="https://form.yupform.com/26994461-de2c-4b6b-8d91-c679c1186fc0"
                                frameBorder="0"
                                style={{
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    height: '880px',
                                    border: 'none',
                                    overflow: 'hidden'
                                }}
                                scrolling="no"
                            ></iframe> */}

                            <script src="https://yup-form.s3.nl-ams.scw.cloud/libs/js/yup-lib.min.gz" async></script>
                            <div className="yup-form-embed justify-start" data-id="26994461-de2c-4b6b-8d91-c679c1186fc0" data-lazyload="true"></div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsForm