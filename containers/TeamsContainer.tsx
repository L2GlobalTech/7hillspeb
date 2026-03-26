import React from 'react'
import img from "@/public/assets/Teams/TeamsHero.jpeg"
import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import OurLeaders from '@/components/Teams/OurLeaders'
import PrecisionDesign from '@/components/Teams/PrecisionDesign'
import FieldTeam from '@/components/Teams/FieldTeam'
import GenericCTA from '@/components/Shared/GenericCTA'
const TeamsContainer = () => {
    return (
        <>
            <GenericHeroSection backgroundImage={img} title={<>The Minds <br /> <span className='text-primary'>Behind</span> <br /> The Metal</>} description='Our team combines technical expertise and architectural vision to create durable pre-engineered building solutions.' gridOverlay={false} showSeparator={false} subtitle='Engineering the future' overlayGradient='linear-gradient(286.43deg, rgba(11, 30, 49, 0.33) -78.75%, #000000 110.72%)' />
            <OurLeaders />
            <PrecisionDesign />
            <FieldTeam />
            <GenericCTA title='Interested in joining our team?' description='We are always looking for ambitious engineers, designers, and project managers who want to build the future of infrastructure.' buttonText='Explore Opportunities' icon={true} link='/careers' />
        </>
    )
}

export default TeamsContainer