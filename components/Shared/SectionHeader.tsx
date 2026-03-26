import React from 'react'

interface SectionHeaderProps {
    title: string;
    alignment: "left" | "center" | "right";
    subtitle?: React.ReactNode;
}

const SectionHeader = ({ title, alignment, subtitle }: SectionHeaderProps) => {
    return (
        <div className={`text-primary text-base font-bold tracking-[3.2px] uppercase text-${alignment}`}>
            {title}
            {subtitle && <p className='text-4xl font-medium tracking-[-4%] mt-2 capitalize text-center'>{subtitle}</p>}
        </div>
    )
}

export default SectionHeader