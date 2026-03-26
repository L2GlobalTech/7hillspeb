import React from 'react'
import SectionHeader from '../Shared/SectionHeader'

const EngineeringStandards = () => {

    const data = [{
        title: "ISO 9001",
        subtitle: "Quality Management",
    },
    {
        title: "ASTM International",
        subtitle: "Material Testing"
    },
    {
        title: "AWS D1.1",
        subtitle: "Welding Code"
    },
    {
        title: "MBMA",
        subtitle: "Design Protocols"
    }
    ]


    return (
        <section className='container mx-auto px-10 py-14'>
            <SectionHeader title='ENGINEERING STANDARDS' alignment='center' subtitle={<p className='text-black'>Precision<span className='text-primary'>{" "}Engineering</span></p>} />
            <p className='text-center text-lg text-[#43474F] max-w-3xl mx-auto mt-6'>Our buildings are engineered to comply with the most stringent global benchmarks for safety, durability, and seismic resistance.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-center text-center bg-[#D5F2FF99] p-15'>
                        <h3 className='text-3xl font-bold text-[#001E40]'>{item.title}</h3>
                        <p className='text-[12px] text-[#43474F] mt-2 uppercase tracking-[1.2px]'>{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EngineeringStandards