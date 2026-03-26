import React from 'react'
import Image from 'next/image'
import * as motion from 'framer-motion/client'



interface TrustedByProps {
    title: string;
    logos: {
        name: string;
        src: string;
    }[];
}

const TrustedBy = ({ title, logos }: TrustedByProps) => {
    // const logo: TrustedByProps[] = 
    // [
    //     { name: "Adani", src: Adani },
    //     { name: "Reliance Industries Limited", src: Reliance },
    //     { name: "Tata Motors", src: Tata },
    //     { name: "Aditya Birla Group", src: AdityaBirla },
    //     { name: "Sun Pharma", src: SunPharma },
    //     { name: "Apollo Tyres", src: Apollo },
    //     { name: "Dr. Reddy's", src: DrReddy },
    //     { name: "Anchor by Panasonic", src: Anchor },
    // ]

    return (
        <section className='bg-white py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h4 className='text-primary font-semibold text-[16px] tracking-normal lg:tracking-[4%] uppercase mb-3'>
                        {title}
                    </h4>
                </motion.div>

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
                    className='grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 overflow-hidden'
                >
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.5 }}
                            className='flex items-center justify-center p-8 sm:p-10 bg-white hover:shadow-sm transition-shadow duration-300 h-32 sm:h-40'
                        >
                            <div className='relative w-full h-full max-w-[140px] max-h-[60px]'>
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className='object-contain transition-all duration-300 opacity-80 hover:opacity-100'
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default TrustedBy