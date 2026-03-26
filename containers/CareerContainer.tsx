import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import React from 'react'
import img from "@/public/assets/Careers/CareersHero.png"
import WhyJoinUs from '@/components/Careers/WhyJoinUs'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import OpenPositions from '@/components/Careers/OpenPositions'
import GenericCTA from '@/components/Shared/GenericCTA'

const CareerContainer = () => {
    return (
        <>
            <GenericHeroSection backgroundImage={img}
                title={<>Build Your <br /> <span className='text-primary'>Legacy</span> <br /> With 7Hills</>}
                subtitle="Engineering the future"
                description="Join a team of visionaries dedicated to redefining pre-engineered structures through precision, safety, and architectural integrity."
                showSeparator={false}
                gridOverlay={false}
                overlayGradient='linear-gradient(286.43deg, rgba(11, 30, 49, 0.14) -78.75%, rgba(0, 0, 0, 0.95) 110.72%)'
            />
            <WhyJoinUs />
            <WhyChooseUs />
            <OpenPositions />
            <GenericCTA title="Don’t see a fit" description="We are always looking for exceptional talent. If you have a passion for structural excellence, send us your resume and we'll reach out when the right role appears." buttonText="Send us your resume" />
        </>
    )
}

export default CareerContainer