import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Work({ details }) {
    const { image, org, position, time, description } = details;
    
    // Handle image import based on the path
    const getImageSrc = (imagePath) => {
        if (imagePath === '/ewu.png') {
            return require('@/public/ewu.png');
        } else if (imagePath === '/ewucsc.jpg') {
            return require('@/public/ewucsc.jpg');
        }
        return null;
    };

    const imageSrc = getImageSrc(image);
    
    return (
        <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
        >
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                        {imageSrc && (
                            <Image
                                src={imageSrc}
                                alt={`${org} logo`}
                                width={48}
                                height={48}
                                className="rounded-lg object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                                {position}
                            </h3>
                            <div className="flex items-center text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                <MapPin className="w-5 h-5 mr-2" />
                                {org}
                            </div>
                            {description && (
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Timeline */}
                        <div className="flex items-center lg:items-start lg:flex-col lg:text-right">
                            <div className="flex items-center text-slate-500 dark:text-slate-400">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span className="font-medium">{time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
