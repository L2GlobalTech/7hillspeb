"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2 } from 'lucide-react'

interface ApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose, jobTitle }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className='fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6'>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className='absolute inset-0 bg-[#001E40]/80 backdrop-blur-sm'
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className='bg-white w-full max-w-2xl shadow-2xl relative overflow-hidden z-10 flex flex-col'
                    >
                        {/* Header */}
                        <div className='p-6 border-b border-gray-100 flex items-center justify-between'>
                            <div>
                                <h3 className='text-xl font-bold text-[#001E40]'>Apply for Position</h3>
                                <p className='text-primary text-sm font-semibold'>{jobTitle}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className='p-2 hover:bg-gray-100 transition-colors text-gray-400 hover:text-[#001E40]'
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className='relative min-h-[570px] px-5 bg-gray-50'>
                            {isLoading && (
                                <div className='absolute inset-0 flex items-center justify-center bg-gray-50/80 z-20'>
                                    <Loader2 className='animate-spin text-primary' size={40} />
                                </div>
                            )}
                            <iframe
                                id="YupFormIFrame-339147e9-e726-40a3-98e4-a7e2fb407e10"
                                title="Application Form"
                                onLoad={() => setIsLoading(false)}
                                src={`https://form.yupform.com/339147e9-e726-40a3-98e4-a7e2fb407e10?position=${encodeURIComponent(jobTitle)}`}
                                frameBorder="0"
                                style={{ minWidth: '100%', maxWidth: '100%', height: '620px', border: 'none' }}
                                scrolling="yes"
                            ></iframe>
                        </div>

                        {/* Footer / Helper Text */}
                        <div className='p-4 bg-gray-50 border-t border-gray-100 text-center'>
                            <p className='text-[10px] text-gray-400 uppercase tracking-widest font-bold'>
                                7Hills Structural Solutions • Recruitment Portal
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default ApplicationForm