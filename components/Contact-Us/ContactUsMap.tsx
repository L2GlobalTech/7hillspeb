"use client";
import { MapPin } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const ContactUsMap = () => {
    return (
        <section className='bg-[#F6F9FC] py-16 lg:py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='bg-white overflow-hidden shadow-sm border border-[#E9E8E8]'
                >
                    {/* Header */}
                    <div className='bg-[#F8F9FA] px-6 py-4 border-b border-[#E9E8E8] flex items-center gap-3'>
                        <MapPin className='w-5 h-5 text-[#008FCC]' />
                        <span className='text-black text-sm sm:text-base tracking-[4%]'>
                            7Hills Industrial Area, Hyderabad, India
                        </span>
                    </div>

                    {/* Map Iframe */}
                    <div className='w-full h-[400px] lg:h-[500px] bg-gray-100 relative'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407062!2d78.40804554999999!3d17.4122998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                            className='grayscale-30 hover:grayscale-0 transition-all duration-500'
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUsMap