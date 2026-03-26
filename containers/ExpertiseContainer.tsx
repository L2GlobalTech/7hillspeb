import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import React from 'react'
import img from "@/public/assets/Expertise/ExpertiseHero.jpg"
import ExpertiseGrid from '@/components/Expertise/ExpertiseGrid'
import ProcessFlow from '@/components/Expertise/ProcessFlow'
import TechnicalStrengths from '@/components/Expertise/TechnicalStrengths'
import GenericCTA from '@/components/Shared/GenericCTA'
import OurCapabilities from '@/components/About-us/OurCapabilities'

const ExpertiseContainer = () => {
    return (
        <>
            <GenericHeroSection
                backgroundImage={img}
                title={<>Our <br /> <span className='text-primary'>Engineering</span> <br /> Expertise.</>}
                subtitle='unmatched precision & innovation'
                gridOverlay={false}
                showSeparator={false}
                overlayGradient='linear-gradient(90deg, #000000 1.92%, rgba(0,0,0,0.80) 53.37%, rgba(0,0,0,0.54) 100%)'
                description='Leveraging decades of experience in pre-engineered building solutions to deliver excellence in every project.'
            />
            <ExpertiseGrid />
            <OurCapabilities />
            <ProcessFlow />
            <TechnicalStrengths />
            <GenericCTA
                title="Ready to Start Your Project?"
                description="Leverage our world-class engineering expertise for your next industrial or commercial venture."
                buttonText="Consult with an Expert"
                icon={true}
            />
        </>
    )
}

export default ExpertiseContainer