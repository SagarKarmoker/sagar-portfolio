import React from 'react'
import Work from './Work'
import ewu from '@/public/ewu.png'

export default function Education() {

    const myedu = [
        {
            image: ewu,
            org: "East West University",
            position: "B.Sc in Computer Science and Engineering",
            time: "2020 - 2024"
        },
    ]

    return (
        <div>
            <p className='font-bold text-xl'>Education</p>
            <div className='mt-5 space-y-4'>
                {
                    myedu.map((work, index) => <Work key={index} details={work}/>)
                }
            </div>
        </div>
    )
}