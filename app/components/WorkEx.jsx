import React from 'react'
import Work from './Work'
import ewu from '@/public/ewu.png'

export default function WorkEx() {

    const workex = [
        {
            image: ewu,
            org: "East West University",
            position: "Undergradute Teaching Assistant (UTA)",
            time: "October 2023 - Present"
        },
        {
            image: ewu,
            org: "EWU Cyber Security Club",
            position: "Web Developer Lead",
            time: "October 2024 - Present"
        }
    ]

    return (
        <div>
            <p className='font-bold text-xl'>Work Experience</p>
            <div className='mt-5 space-y-4'>
                {
                    workex.map((work, index) => <Work key={index} details={work}/>)
                }
            </div>
        </div>
    )
}