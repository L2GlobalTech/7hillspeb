import React from 'react'
import integrityvector from "@/public/assets/Projects/INTEGRITY.svg"
import Image from 'next/image'

const ProjectsCTA = () => {
    return (
        <section className='relative bg-[#0B1E31] border-y-4 border-[#132537] overflow-hidden'>
            <div className='container mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10'>
                <div className='absolute -bottom-22 left-10 z-0 w-full h-auto'>
                    <Image src={integrityvector} alt="integrityvector" />
                </div>
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight'>
                        Ready to start your <br /> structure?
                    </h2>

                    <p className='text-white text-md md:text-lg lg:text-lg max-w-2xl mx-auto mb-16 leading-relaxed'>
                        Consult with our engineering team today for a feasibility study and comprehensive quote.
                    </p>

                    <div className='flex flex-wrap items-center justify-center gap-15'>
                        <button className='bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-white text-sm md:text-base font-extrabold uppercase tracking-widest px-12 py-4 transition-all duration-300 hover:-translate-y-1'>
                            GET A QUOTE
                        </button>

                        <button className='border-2 border-[#00AEEF] hover:border-[#00AEEF] bg-[#132537]/40 hover:bg-[#00AEEF]/10 text-white text-sm md:text-base font-extrabold uppercase tracking-widest px-12 py-4 transition-all duration-300 hover:-translate-y-1'>
                            DOWNLOAD BROCHURE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsCTA