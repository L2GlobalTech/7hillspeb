import AboutSection from '@/components/Home/AboutSection'
import HeroSection from '@/components/Home/HeroSection'
import PortfolioSection from '@/components/Home/PortfolioSection'
import Services from '@/components/Home/Services'
import FAQ from '@/components/Home/FAQ'
import WhyChooseUs from '@/components/Home/WhyChooseUs'
import Navbar from '@/components/Navbar/Navbar'
import Recognition from '@/components/Home/Recognition'
import TrustedBy from '@/components/Home/TrustedBy'
import React from 'react'
import ContactUS from '@/components/Home/HomeContactUS'
import Footer from '@/components/Footer/Footer'
import HomeContactUS from '@/components/Home/HomeContactUS'


// Import Logos
import Adani from '@/public/assets/Home/TrustedBy/Adani.svg'
import Reliance from '@/public/assets/Home/TrustedBy/Reliance.svg'
import Tata from '@/public/assets/Home/TrustedBy/Tata.svg'
import AdityaBirla from '@/public/assets/Home/TrustedBy/AdityaBirla.svg'
import SunPharma from '@/public/assets/Home/TrustedBy/SunPharma.svg'
import Apollo from '@/public/assets/Home/TrustedBy/apollo.svg'
import DrReddy from '@/public/assets/Home/TrustedBy/DrReddy.svg'
import Anchor from '@/public/assets/Home/TrustedBy/Anchor.svg'

const logos = [
    { name: "Adani", src: Adani },
    { name: "Reliance Industries Limited", src: Reliance },
    { name: "Tata Motors", src: Tata },
    { name: "Aditya Birla Group", src: AdityaBirla },
    { name: "Sun Pharma", src: SunPharma },
    { name: "Apollo Tyres", src: Apollo },
    { name: "Dr. Reddy's", src: DrReddy },
    { name: "Anchor by Panasonic", src: Anchor },
]

const HomeContainer = () => {
    return (
        <>
            <div>
                <HeroSection />
            </div>
            <div>
                <AboutSection />
            </div>
            <div>
                <PortfolioSection />
            </div>
            <div>
                <WhyChooseUs />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Recognition />
            </div>
            <div>
                <TrustedBy title="TRUSTED BY INDUSTRY LEADERS" logos={logos} />
            </div>
            <div>
                <HomeContactUS />
            </div>
        </>
    )
}

export default HomeContainer