import React from 'react'
import { createReader } from '@keystatic/core/reader'
import fs from 'fs'
import path from 'path'
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

// Keystatic nulls slugField in collection entries — restore from raw file on disk
const CMS_DIR = path.join(process.cwd(), 'data', 'cms')
const COLLECTION_CFG = {
    projects: { dir: 'projects', slugField: 'title' },
    workExperience: { dir: 'work', slugField: 'org' },
    education: { dir: 'education', slugField: 'institution' },
    awards: { dir: 'awards', slugField: 'title' },
    hackathons: { dir: 'hackathons', slugField: 'title' },
    expertise: { dir: 'expertise', slugField: 'title' },
}

function readRawCollection(name, slugField) {
    const dir = path.join(CMS_DIR, COLLECTION_CFG[name].dir)
    try {
        return fs.readdirSync(dir)
            .filter(f => f.endsWith('.json'))
            .map(f => {
                const raw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'))
                return raw
            })
    } catch { return null }
}

// Helper: fetch collection data from Keystatic, fallback to JSON import
// Sorted by `order` field ascending (lower = first). Missing order → 999.
async function fetchCollection(reader, name, fallback) {
    try {
        const items = await reader.collections[name].all()
        if (items && items.length > 0) {
            const cfg = COLLECTION_CFG[name]
            const raw = readRawCollection(name, cfg.slugField)
            const data = (raw && raw.length === items.length) ? raw : items.map(i => i.entry)
            data.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            return data
        }
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
