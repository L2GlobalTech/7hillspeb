import React from 'react'
import img from "@/public/assets/AboutUs/AboutHero.jpg"
import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import TheFoundation from '@/components/About-us/TheFoundation'
import OurPurpose from '@/components/About-us/OurPurpose'
import OurCapabilities from '@/components/About-us/OurCapabilities'
import OurCoreValues from '@/components/About-us/OurCoreValues'
import IndustriesWeServe from '@/components/About-us/IndustriesWeServe'
import HomeContactUS from '@/components/Home/HomeContactUS'

const AboutUsContainer = () => {
    return (
        <div>
            <GenericHeroSection
                title={<>Building The <br /> <span className='text-primary'>Future</span> <br /> of Steel.</>}
                subtitle="The 7 hills legacy"
                description="High-performance steel structures designed for speed, built for durability, and trusted by industry leaders."
                backgroundImage={img}
                gridOverlay={false}
                showSeparator={true}
                overlayGradient='linear-gradient(180deg, #000000 1.92%, rgba(0,0,0,0.81) 53.37%, rgba(0,0,0,0.54) 100%)'
            />
            <TheFoundation />
            <OurPurpose />
            <OurCapabilities />
            <OurCoreValues />
            <IndustriesWeServe />
            <HomeContactUS />
        </div>
    )
}

export default AboutUsContainer