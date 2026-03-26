import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import React from 'react'
import img from "@/public/assets/MediaAwards/MediaAwardsHero.jpg"
import GlobalIndustryLeader from '@/components/MediaAwards/GlobalIndustryLeader'

// Import Images
import bbc from "@/public/assets/MediaAwards/Medias/BBC.svg"
import nytimes from "@/public/assets/MediaAwards/Medias/NYTimes.svg"
import ndtv from "@/public/assets/MediaAwards/Medias/NDTV.svg"
import cnn from "@/public/assets/MediaAwards/Medias/CNN.svg"
import aajtak from "@/public/assets/MediaAwards/Medias/AAJ Tak.svg"
import reuters from "@/public/assets/MediaAwards/Medias/Reuters.svg"
import forbes from "@/public/assets/MediaAwards/Medias/Forbes.svg"
import indiatoday from "@/public/assets/MediaAwards/Medias/IndiaToday.svg"
import TrustedBy from '@/components/Home/TrustedBy'
import Recognition from '@/components/Home/Recognition'
import Certifications from '@/components/MediaAwards/Certifications'
import GenericCTA from '@/components/Shared/GenericCTA'


const logos = [
    { name: "BBC", src: bbc },
    { name: "New York Times", src: nytimes },
    { name: "NDTV", src: ndtv },
    { name: "CNN", src: cnn },
    { name: "Aaj Tak", src: aajtak },
    { name: "Reuters", src: reuters },
    { name: "Forbes", src: forbes },
    { name: "India Today", src: indiatoday },
]



const MediaAwardsContainer = () => {
    return (
        <>
            <GenericHeroSection backgroundImage={img} title={<>Media <br /> <span className='text-primary'>And</span> <br /> Recognition.</>} subtitle='our legacy of excellence' gridOverlay={false} showSeparator={false} overlayGradient='linear-gradient(286.43deg, rgba(11, 30, 49, 0.33) -78.75%, #000000 110.72%)' description='Celebrating milestones in engineering precision and the global recognition of our architectural innovations.' />
            <GlobalIndustryLeader />
            <TrustedBy title='Featured in' logos={logos} />
            <Recognition />
            <Certifications />
            <GenericCTA title='Have a press inquiry?' description='Our communications team is available for interviews, facility tours, and technical insights regarding the steel industry.' buttonText='Get in touch' />
        </>
    )
}

export default MediaAwardsContainer