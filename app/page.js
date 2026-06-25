import React from 'react'
import { createReader } from '@keystatic/core/reader'
import config from '../keystatic.config'
import App from './App'

// Fallback data imports (used when Keystatic CMS hasn't been seeded)
import fallbackProjects from '@/data/projects.json'
import fallbackWork from '@/data/workExperience.json'
import fallbackEducation from '@/data/education.json'
import fallbackAwards from '@/data/awards.json'
import fallbackHackathons from '@/data/hackathons.json'
import fallbackExpertise from '@/data/expertise.json'
import fallbackResearch from '@/data/research.json'
import fallbackSkills from '@/data/skills.json'
import fallbackContact from '@/data/contact.json'
import fallbackLogos from '@/data/logos.json'

// Helper: fetch collection data from Keystatic, fallback to JSON import
async function fetchCollection(reader, name, fallback) {
    try {
        const items = await reader.collections[name].all()
        if (items && items.length > 0) return items.map(i => i.entry)
    } catch {
        // CMS path not seeded yet
    }
    return fallback
}

// Helper: fetch singleton data from Keystatic, fallback to JSON import
async function fetchSingleton(reader, name, fallback) {
    try {
        const item = await reader.singletons[name]()
        if (item) return item
    } catch {
        // CMS path not seeded yet
    }
    return fallback
}

export default async function Home() {
    const reader = createReader(process.cwd(), config)

    const projects = await fetchCollection(reader, 'projects', fallbackProjects)
    const workExperience = await fetchCollection(reader, 'workExperience', fallbackWork)
    const education = await fetchCollection(reader, 'education', fallbackEducation)
    const awards = await fetchCollection(reader, 'awards', fallbackAwards)
    const hackathons = await fetchCollection(reader, 'hackathons', fallbackHackathons)
    const expertise = await fetchCollection(reader, 'expertise', fallbackExpertise)

    const research = await fetchSingleton(reader, 'research', fallbackResearch)
    const skills = await fetchSingleton(reader, 'skills', fallbackSkills)
    const contact = await fetchSingleton(reader, 'contact', fallbackContact)
    const logos = await fetchSingleton(reader, 'logos', fallbackLogos)

    // If contact singleton has `.methods` wrapper, extract it
    const contactList = contact?.methods || contact || fallbackContact
    // If logos singleton has custom format, use the original fallback
    const logoData = logos?.logos ? fallbackLogos : (logos || fallbackLogos)

    const cmsData = {
        projects,
        workExperience,
        education,
        awards,
        hackathons,
        expertise,
        research,
        skills,
        contact: contactList,
        logos: logoData,
    }

    return <App cmsData={cmsData} />
}
