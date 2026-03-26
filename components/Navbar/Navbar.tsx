"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from "@/public/vectors/Logo.svg"
import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Button from '../Shared/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { href: '/about-us', label: 'About' },
        { href: '/teams', label: 'Teams' },
        { href: '/projects', label: 'Projects' },
        { href: '/careers', label: 'Careers' },
        { href: '/media-awards', label: 'Media & Awards' },
        { href: '/expertise', label: 'Expertise' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    }

    const linkVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className={`fixed top-0 z-50 left-0 right-0 font-inter transition-all duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6 md:py-8'}`}
            >
                <div className='container mx-auto px-6 md:px-10'>
                    <div className='flex justify-between items-center'>
                        <motion.div variants={linkVariants} className='flex items-center cursor-pointer'>
                            <Link href='/'>
                                <Image src={logo} alt='7HILLS Logo' className='h-10 md:h-14 w-auto' />
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className='hidden lg:flex justify-center items-center gap-[40px] text-[18px] tracking-[-4%] text-white font-medium'>
                            {navLinks.map((link, index) => (
                                <motion.div key={index} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        className={`cursor-pointer hover:text-primary transition-colors relative group ${pathname === link.href ? 'text-primary' : ''}`}
                                    >
                                        {link.label}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={linkVariants}>
                                <Button onClick={() => { router.push('/contact-us') }} text="Contact Us" icon={<ArrowRight size={18} />} className={pathname === '/contact-us' ? 'bg-primary' : ''} />
                            </motion.div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <motion.div variants={linkVariants} className='lg:hidden text-white'>
                            <button onClick={() => setIsMobileMenuOpen(true)}>
                                <Menu className="w-8 h-8" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-60 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center'
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='absolute top-6 right-6 text-white'
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className='flex flex-col items-center gap-8 text-white font-medium text-2xl'>
                            {navLinks.map((link) => (
                                <Link href={link.href} className={`cursor-pointer hover:text-primary transition-colors ${pathname === link.href ? 'text-primary' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
                            ))}
                            <Button onClick={() => { router.push('/contact-us'); setIsMobileMenuOpen(false) }} text="Contact Us" icon={<ArrowRight size={18} />} className={pathname === '/contact-us' ? 'bg-primary' : ''} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar