import React from 'react'
import { Badge } from '@/components/ui/badge'
import ProjectCard from './ProjectCard'

export default function MyProjects() {
    const projects = [
        {
            name: "eKYC using Blockchain",
            timeline: "Current project",
            desc: "A blockchain-based system designed to streamline the verification processes required for KYC compliance, increasing security and privacy through decentralized data management.",
            badges: ["Blockchain", "Security", "Data Management"],
            website: "",
            github: "",  // Update when available
            coverImage: ""  // Update with image URL when available
        },
        {
            name: "Taxation System with eKYC Using Blockchain",
            timeline: "Development stage",
            desc: "An integrated blockchain system designed to facilitate the secure and efficient handling of tax processes, coupled with an eKYC mechanism to ensure compliance and authenticity.",
            badges: ["Blockchain", "Finance", "Security", "KYC"],
            website: "",
            github: "",  // Update when available
            coverImage: ""  // Update with image URL when available
        },
        {
            name: "UniCourse",
            timeline: "Current project",
            desc: "A full-fledged Learning Management System built with HTML, JavaScript, Tailwind CSS, and PHP.",
            badges: ["HTML", "JavaScript", "Tailwind CSS", "PHP"],
            website: "",
            github: "https://github.com/SagarKarmoker/UniCourse",
            coverImage: ""
        },
        {
            name: "TutorBridge",
            timeline: "Past project",
            desc: "A freelance teaching platform for Android developed using Java, XML, and Firebase.",
            badges: ["Java", "XML", "Firebase"],
            website: "",
            github: "https://github.com/SagarKarmoker/TutorBridge",
            coverImage: ""
        },
        {
            name: "TraceChainBD",
            timeline: "Past project",
            desc: "A blockchain-based supply chain management system that enhances transparency and traceability in logistics.",
            badges: ["Blockchain", "Supply Chain"],
            website: "",
            github: "https://github.com/SagarKarmoker/TraceChainBD",
            coverImage: ""
        },
        {
            name: "Job Platform with Interview Feature",
            timeline: "Past project",
            desc: "An online platform that connects job seekers and employers, featuring built-in tools for conducting live interviews and assessments.",
            badges: ["Web Development", "React", "Node.js", "WebRTC"],
            website: "",
            github: "",  // Update when available
            coverImage: ""  // Update with image URL when available
        }
    ];

    return (
        <div>
            <div className='flex justify-center'>
                <Badge className='text-2xl'>My Projects</Badge>
            </div>
            <div>
                <p className='text-5xl text-center font-bold mt-4'>Check out my latest work</p>
                <p className='text-center text-xl mt-2'>Here is some of my projects that I have been created. </p>
            </div>
            {/* projects */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4'>
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={index} project={project} />
                    })
                }
            </div>
        </div>
    )
}
