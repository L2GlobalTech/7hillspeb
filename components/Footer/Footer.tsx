"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from "@/public/vectors/Logo.svg"
import { MapPin, Phone, Mail, ChevronRight, Heart } from 'lucide-react'
import * as motion from 'framer-motion/client'

const Footer = () => {
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (pathname !== '/') {
            return;
        }

        e.preventDefault();
        const targetId = href.replace('/#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div className='bg-[#0B1E31] text-white pt-16 pb-8'>
            <div className='container mx-auto px-6 md:px-10'>
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
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'
                >
                    {/* Brand Column */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className='space-y-6'
                    >
                        <Image src={logo} alt='7Hills Logo' className='h-12 w-auto' />
                        <p className='text-white/50 text-sm leading-relaxed tracking-normal lg:tracking-[-4%] max-w-sm'>
                            Leading pre-engineered building manufacturer delivering high-quality steel structures across India with precision engineering and long-term durability.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h3 className='text-xl font-bold mb-6'>Quick Links</h3>
                        <ul className='space-y-4'>
                            {[
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Expertise', href: '/expertise' },
                                { name: 'Contact', href: '/contact-us' },
                                { name: 'Awards', href: '/media-awards' }
                            ].map((item) => (
                                <li key={item.name} className='flex items-center gap-2 group cursor-pointer'>
                                    <ChevronRight className='w-4 h-4 text-[#1C9BE0] group-hover:translate-x-1 transition-transform' />
                                    <Link
                                        href={item.href}
                                        onClick={(e) => item.href.startsWith('/#') ? handleScroll(e, item.href) : undefined}
                                        className='text-white/50 hover:text-white transition-colors'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h3 className='text-xl font-bold mb-6'>Services</h3>
                        <ul className='space-y-4'>
                            {['Warehouses', 'Factories', 'Commercial Buildings', 'Cold Storage', 'Industrial Sheds'].map((item) => (
                                <li key={item} className='flex items-center gap-2 group cursor-pointer'>
                                    <ChevronRight className='w-4 h-4 text-[#1C9BE0] group-hover:translate-x-1 transition-transform' />
                                    <span className='text-white/50 hover:text-white transition-colors'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Us */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <h3 className='text-xl font-bold mb-6'>Contact Us</h3>
                        <ul className='space-y-6'>
                            <li className='flex items-start gap-3 group'>
                                <MapPin className='w-5 h-5 text-[#1C9BE0] shrink-0 mt-0.5' />
                                <a
                                    href="https://www.google.com/maps/search/7Hills+Industrial+Area,+Hyderabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white/50 text-sm hover:text-white transition-colors'
                                >
                                    {/* 7Hills Industrial Area, Hyderabad */}
                                    Kodad, Suryapet district, Telangana, India
                                </a>
                            </li>
                            <li className='flex items-center gap-3 group'>
                                <Phone className='w-5 h-5 text-[#1C9BE0] shrink-0' />
                                <div className='flex items-center gap-1'>
                                    <a
                                        href="tel:+919515605777"
                                        className='text-white/50 text-sm hover:text-white transition-colors'
                                    >
                                        +91 9515605777
                                    </a>
                                    <span className='text-white/50 hover:text-white transition-colors'>,</span>
                                    <a
                                        href="tel:+919515609777"
                                        className='text-white/50 text-sm hover:text-white transition-colors'
                                    >
                                        +91 9515609777
                                    </a>
                                </div>
                            </li>
                            <li className='flex items-center gap-3 group'>
                                <Mail className='w-5 h-5 text-[#1C9BE0] shrink-0' />
                                <a
                                    href="mailto:7hillspebsolutions@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-white/50 text-sm hover:text-white transition-colors'
                                >
                                    7hillspebsolutions@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50'
                >
                    <p>© 2026 7Hills PEB. All Rights Reserved.</p>
                    <p className='flex items-center gap-1'>
                        Made with <Heart className='w-3 h-3 text-red-500 fill-red-500 animate-[heartbeat_1s_ease-in-out_infinite]' /> by <Link href="https://ascendtis.com" target="_blank" className='text-white font-medium underline decoration-white/30 hover:decoration-white transition-all cursor-pointer'>Ascendtis.</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer