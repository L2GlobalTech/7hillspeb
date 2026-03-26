import GenericHeroSection from '@/components/Shared/GenericHeroSection'
import bgimg from "@/public/assets/ContactUs/Hero-img.png"
import ContactUsForm from '@/components/Contact-Us/ContactUsForm'
import ContactUsMap from '@/components/Contact-Us/ContactUsMap'
import React from 'react'

const ContactUsContainer = () => {
    return (
        <>
            <div>
                <GenericHeroSection
                    title={<>We’d love <br /> <span className='text-primary'>to hear</span> <br /> from you.</>}
                    subtitle="GET IN TOUCH"
                    description="Whether you are planning a new project, need technical guidance, or want to learn more about our Pre-Engineered Building solutions, our team is ready to assist you."
                    backgroundImage={bgimg}
                    showSeparator={false}
                />
            </div>
            <div>
                <ContactUsForm />
            </div>
            <div>
                <ContactUsMap />
            </div>
        </>
    )
}

export default ContactUsContainer