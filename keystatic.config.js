import { config, collection, singleton, fields } from '@keystatic/core'

export default config({
    storage:
        process.env.KEYSTATIC_GITHUB_CLIENT_ID
            ? {
                  kind: 'github',
                  repo: {
                      owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER || 'SagarKarmoker',
                      name: process.env.KEYSTATIC_GITHUB_REPO_NAME || 'sagar-portfolio',
                  },
              }
            : { kind: 'local' },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'data/cms/projects/*',
            format: 'json',
            schema: {
                title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                name: fields.text({ label: 'Name' }),
                description: fields.text({ label: 'Description', multiline: true }),
                desc: fields.text({ label: 'Short Description', multiline: true }),
                technologies: fields.array(fields.text({ label: 'Tech' }), {
                    label: 'Technologies',
                    itemLabel: (props) => props.value || 'Tech',
                }),
                badges: fields.array(fields.text({ label: 'Badge' }), {
                    label: 'Badges',
                    itemLabel: (props) => props.value || 'Badge',
                }),
                category: fields.text({ label: 'Category' }),
                icon: fields.text({ label: 'Icon (emoji)' }),
                website: fields.text({ label: 'Website URL' }),
                github: fields.text({ label: 'GitHub URL' }),
                live: fields.text({ label: 'Live URL' }),
                timeline: fields.text({ label: 'Timeline' }),
                date: fields.text({ label: 'Date' }),
                status: fields.text({ label: 'Status' }),
                coverImage: fields.text({ label: 'Cover Image URL' }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first. Current = 0, older = 10, 20, …' }),
            },
        }),
        workExperience: collection({
            label: 'Work Experience',
            slugField: 'org',
            path: 'data/cms/work/*',
            format: 'json',
            schema: {
                image: fields.text({ label: 'Logo Path' }),
                org: fields.text({ label: 'Organization', validation: { isRequired: true } }),
                position: fields.text({ label: 'Position', validation: { isRequired: true } }),
                time: fields.text({ label: 'Time Period' }),
                location: fields.text({ label: 'Location' }),
                current: fields.checkbox({ label: 'Current Position' }),
                description: fields.text({ label: 'Description', multiline: true }),
                responsibilities: fields.array(fields.text({ label: 'Responsibility' }), {
                    label: 'Responsibilities',
                    itemLabel: (props) => props.value || 'Item',
                }),
                technologies: fields.array(fields.text({ label: 'Tech' }), {
                    label: 'Technologies',
                    itemLabel: (props) => props.value || 'Tech',
                }),
                website: fields.text({ label: 'Website URL' }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first. Current = 0, older = 10, 20, …' }),
            },
        }),
        education: collection({
            label: 'Education',
            slugField: 'institution',
            path: 'data/cms/education/*',
            format: 'json',
            schema: {
                image: fields.text({ label: 'Logo Path' }),
                institution: fields.text({ label: 'Institution', validation: { isRequired: true } }),
                degree: fields.text({ label: 'Degree', validation: { isRequired: true } }),
                period: fields.text({ label: 'Period' }),
                location: fields.text({ label: 'Location' }),
                description: fields.text({ label: 'Description', multiline: true }),
                courses: fields.array(fields.text({ label: 'Course' }), {
                    label: 'Courses',
                    itemLabel: (props) => props.value || 'Course',
                }),
                achievements: fields.array(fields.text({ label: 'Achievement' }), {
                    label: 'Achievements',
                    itemLabel: (props) => props.value || 'Achievement',
                }),
                website: fields.text({ label: 'Website URL' }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first.' }),
            },
        }),
        awards: collection({
            label: 'Awards',
            slugField: 'title',
            path: 'data/cms/awards/*',
            format: 'json',
            schema: {
                title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                period: fields.text({ label: 'Period' }),
                institution: fields.text({ label: 'Institution' }),
                location: fields.text({ label: 'Location' }),
                description: fields.text({ label: 'Description', multiline: true }),
                details: fields.text({ label: 'Details', multiline: true }),
                icon: fields.text({ label: 'Icon (emoji)' }),
                category: fields.text({ label: 'Category' }),
                achievement: fields.text({ label: 'Achievement' }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first.' }),
            },
        }),
        hackathons: collection({
            label: 'Hackathons',
            slugField: 'title',
            path: 'data/cms/hackathons/*',
            format: 'json',
            schema: {
                icon: fields.text({ label: 'Icon' }),
                date: fields.text({ label: 'Date' }),
                title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                location: fields.text({ label: 'Location' }),
                description: fields.text({ label: 'Description', multiline: true }),
                achievement: fields.text({ label: 'Achievement (Winner/Finalist/Participant)' }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first.' }),
            },
        }),
        expertise: collection({
            label: 'Expertise',
            slugField: 'title',
            path: 'data/cms/expertise/*',
            format: 'json',
            schema: {
                icon: fields.text({ label: 'Icon Name' }),
                title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                description: fields.text({ label: 'Description', multiline: true }),
                order: fields.integer({ label: 'Display Order', description: 'Lower = appears first.' }),
            },
        }),
    },
    singletons: {
        research: singleton({
            label: 'Research',
            path: 'data/cms/research/',
            format: 'json',
            schema: {
                publications: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                        venue: fields.text({ label: 'Venue' }),
                        doi: fields.text({ label: 'DOI URL' }),
                        status: fields.text({ label: 'Status' }),
                        year: fields.text({ label: 'Year' }),
                        type: fields.text({ label: 'Type' }),
                    }),
                    {
                        label: 'Publications',
                        itemLabel: (props) => props.fields.title.value || 'Publication',
                    }
                ),
                researchAreas: fields.array(fields.text({ label: 'Area' }), {
                    label: 'Research Areas',
                    itemLabel: (props) => props.value || 'Area',
                }),
            },
        }),
        skills: singleton({
            label: 'Skills',
            path: 'data/cms/skills/',
            format: 'json',
            schema: {
                skillCategories: fields.array(
                    fields.object({
                        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                        icon: fields.text({ label: 'Icon Name' }),
                        image: fields.text({ label: 'Image URL' }),
                        skills: fields.array(fields.text({ label: 'Skill' }), {
                            label: 'Skills',
                            itemLabel: (props) => props.value || 'Skill',
                        }),
                    }),
                    {
                        label: 'Skill Categories',
                        itemLabel: (props) => props.fields.title.value || 'Category',
                    }
                ),
                additionalSkills: fields.array(fields.text({ label: 'Skill' }), {
                    label: 'Additional Skills',
                    itemLabel: (props) => props.value || 'Skill',
                }),
            },
        }),
        contact: singleton({
            label: 'Contact Methods',
            path: 'data/cms/contact/',
            format: 'json',
            schema: {
                methods: fields.array(
                    fields.object({
                        icon: fields.text({ label: 'Icon Name' }),
                        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
                        description: fields.text({ label: 'Description' }),
                        link: fields.text({ label: 'URL/Link' }),
                        color: fields.text({ label: 'Text Color Class' }),
                        bgColor: fields.text({ label: 'Background Color Class' }),
                    }),
                    {
                        label: 'Contact Methods',
                        itemLabel: (props) => props.fields.title.value || 'Method',
                    }
                ),
            },
        }),
        logos: singleton({
            label: 'Skill Logos',
            path: 'data/cms/logos/',
            format: 'json',
            schema: {
                logos: fields.text({
                    label: 'Logo URLs',
                    multiline: true,
                }),
            },
        }),
    },
})
