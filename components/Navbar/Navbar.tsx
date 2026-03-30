"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from "@/public/vectors/Logo.svg"
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Button from '../Shared/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/expertise', label: 'Expertise' },
        {
            href: '/about-us',
            label: 'About',
            dropdown: [
                { href: '/teams', label: 'Teams' },
                { href: '/careers', label: 'Careers' },
            ]
        },
        { href: '/media-awards', label: 'Media & Awards' },
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
                                <motion.div
                                    key={index}
                                    variants={linkVariants}
                                    className="relative flex items-center h-full"
                                    onMouseEnter={() => setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`cursor-pointer hover:text-primary transition-colors relative flex items-center gap-1.5 py-2 ${pathname === link.href || link.dropdown?.some(d => d.href === pathname) ? 'text-primary' : ''}`}
                                    >
                                        {link.label}
                                        {link.dropdown && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-primary' : 'text-white/50'}`}
                                            />
                                        )}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href || link.dropdown?.some(d => d.href === pathname) ? 'w-full' : ''}`} />
                                    </Link>

                                    <AnimatePresence>
                                        {activeDropdown === index && link.dropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-[80%] left-[-20px] mt-2 w-56 bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1.5"
                                            >
                                                {link.dropdown.map((sublink, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={sublink.href}
                                                        className={`block px-5 py-3.5 text-[15px] rounded-xl transition-all duration-200 ${pathname === sublink.href ? 'text-primary bg-primary/10' : 'text-white/80 hover:text-primary hover:bg-white/5'}`}
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
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

                        <div className='flex flex-col items-center gap-6 text-white font-medium text-2xl w-full overflow-y-auto py-10'>
                            {navLinks.map((link) => (
                                <React.Fragment key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`cursor-pointer hover:text-primary transition-colors py-2 ${pathname === link.href || link.dropdown?.some(d => d.href === pathname) ? 'text-primary' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="flex flex-col items-center gap-4 -mt-2 mb-2 w-full max-w-[200px] py-4 rounded-2xl">
                                            {link.dropdown.map((sublink) => (
                                                <Link
                                                    key={sublink.href}
                                                    href={sublink.href}
                                                    className={`cursor-pointer hover:text-primary transition-colors text-[18px] opacity-70 ${pathname === sublink.href ? 'text-primary opacity-100' : ''}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sublink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                            <div className="mt-6">
                                <Button onClick={() => { router.push('/contact-us'); setIsMobileMenuOpen(false) }} text="Contact Us" icon={<ArrowRight size={18} />} className={pathname === '/contact-us' ? 'bg-primary' : ''} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar