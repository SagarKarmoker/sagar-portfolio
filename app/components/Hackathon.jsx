import { Badge } from '@/components/ui/badge'
import React from 'react'
import Hacks from './Hacks'

export default function Hackathon() {
    const events = [
        {
            icon: "🟣",
            date: "September, 2024",
            title: "The 5th Bangladesh Blockchain Olympiad",
            location: "Dhaka, Bangladesh",
            description: "Developed a blockchain-based supply chain management system that enhances transparency and traceability in logistics."
        },
        {
            icon: "🔵",
            date: "October, 2024",
            title: "NASA Space Apps Challenge 2024 (Grant Event)",
            location: "AIUB Dhaka, Bangladesh",
            description: "Developed a SDG Classroom is an educational platform designed to revolutionize high school science education by integrating Sustainable Development Goals (SDGs) directly into the curriculum using augmented reality (AR) technology, NASAs API, and many interactive games and videos."
        },
        // {
        //     icon: "⚪",
        //     date: "March 23rd - 24th, 2018",
        //     title: "FirstNet Public Safety Hackathon",
        //     location: "San Francisco, California",
        //     description: "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital."
        // }
    ]

    return (
        <div>
            <div className='flex justify-center'>
                <Badge className='text-xl'>Hackathons and Contests</Badge>
            </div>
            <div className='space-y-4 mt-5'>
                <p className='text-center text-4xl font-bold'>I like building product and explor new things</p>
                <p className='text-center'>During my university years, I participated in three hackathons where people from across the nation gathered to rapidly develop innovative solutions over 2-3 days. It was truly inspiring to witness how a group of driven and enthusiastic individuals could bring a myriad of possibilities to life in such a short time.</p>
            </div>

            <div>
                <Hacks events={events} />
            </div>
        </div>
    )
}
