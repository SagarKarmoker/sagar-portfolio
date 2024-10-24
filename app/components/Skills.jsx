import React from 'react'
import { Badge } from "@/components/ui/badge"

export default function Skills() {
    const skills = [
        "Java", "C++", "C", "React", "NextJS", "MongoDB", "Oracle SQL", "Spring Boot", "Blockchain", "Solidity", "Smart Contract"
    ]
    return (
        <div>
            <p className='font-bold text-xl'>Skills</p>
            <div className='grid grid-cols-5 gap-2 mt-4'>
                {
                    skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
                }
            </div>
        </div>
    )
}
