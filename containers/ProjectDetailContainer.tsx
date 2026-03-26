import React from 'react'
import img from "@/public/assets/ProjectDetail/ProjectDetailHero.jpg"
import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import { div } from 'framer-motion/client'

const ProjectDetailContainer = () => {
    return (
        <>
            <GenericHeroSection
                backgroundImage={img}
                title={<>Titan Steelworks <br /> HQ & Plant</>}
                gridOverlay={false}
                showSeparator={false}
                overlayGradient='linear-gradient(286.43deg, rgba(0, 143, 220, 0.7) -78.75%, #000000 110.72%)'
                component={
                    <div>
                        <div></div>
                    </div>
                }

            />
        </>
    )
}

export default ProjectDetailContainer