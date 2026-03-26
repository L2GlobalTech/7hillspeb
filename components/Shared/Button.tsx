
import React from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
    text: React.ReactNode
    variant?: 'primary' | 'outline' | 'text'
    className?: string
    onClick?: () => void
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'primary',
    className = '',
    onClick,
    icon,
    iconPosition = 'right'
}) => {
    const baseStyles = "font-semibold text-sm md:text-base px-6 py-4 uppercase tracking-normal lg:tracking-[-4%] flex items-center gap-2 transition-colors duration-300"

    const variants = {
        primary: "bg-primary hover:bg-primary/80 text-white",
        outline: "border-2 border-white text-white hover:bg-white hover:text-black",
        text: "text-white hover:text-primary p-0 bg-transparent"
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
            onClick={onClick}
        >
            {icon && iconPosition === 'left' && icon}
            {text}
            {icon && iconPosition === 'right' && icon}
        </button>
    )
}

export default Button
