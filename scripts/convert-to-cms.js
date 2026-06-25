#!/usr/bin/env node
// Convert existing data json files into Keystatic CMS format
// Collections (arrays) -> individual slug-named files
// Singletons (objects) -> index.json
const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, '..', 'data')
const CMS_DIR = path.join(DATA_DIR, 'cms')

// Map: source file -> { type, target, slugField?, wrapperKey? }
const MAP = [
  { src: 'projects',       type: 'collection', target: 'projects',  slugField: 'title' },
  { src: 'workExperience', type: 'collection', target: 'work',      slugField: 'org' },
  { src: 'education',      type: 'collection', target: 'education', slugField: 'institution' },
  { src: 'awards',         type: 'collection', target: 'awards',    slugField: 'title' },
  { src: 'hackathons',     type: 'collection', target: 'hackathons',slugField: 'title' },
  { src: 'expertise',      type: 'collection', target: 'expertise', slugField: 'title' },
  { src: 'research',       type: 'singleton',  target: 'research' },
  { src: 'skills',         type: 'singleton',  target: 'skills' },
  { src: 'contact',        type: 'singleton',  target: 'contact',  wrapperKey: 'methods' },
  { src: 'logos',          type: 'singleton',  target: 'logos',    textField: 'logos' },
]

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
}

for (const cfg of MAP) {
  const srcPath = path.join(DATA_DIR, cfg.src + '.json')
  if (!fs.existsSync(srcPath)) {
    console.warn('  SKIP ' + cfg.src + '.json not found')
    continue
  }

  const targetDir = path.join(CMS_DIR, cfg.target)
  fs.mkdirSync(targetDir, { recursive: true })

  const raw = fs.readFileSync(srcPath, 'utf-8')
  const data = JSON.parse(raw)

  if (cfg.type === 'collection') {
    for (const entry of data) {
      const slug = slugify(entry[cfg.slugField] || entry.title || 'untitled')
      let filename = slug + '.json'
      let counter = 1
      while (fs.existsSync(path.join(targetDir, filename))) {
        counter++
        filename = slug + '-' + counter + '.json'
      }
      fs.writeFileSync(path.join(targetDir, filename), JSON.stringify(entry, null, 2), 'utf-8')
      console.log('  ' + cfg.target + '/' + filename)
    }
  } else if (cfg.type === 'singleton') {
    let payload = data

    // Wrap array data in a key (e.g. contact: methods)
    if (cfg.wrapperKey && Array.isArray(data)) {
      payload = { [cfg.wrapperKey]: data }
    }

    // Flatten nested object to text field (logos)
    if (cfg.textField && typeof data === 'object' && !Array.isArray(data)) {
      const lines = []
      for (const [category, items] of Object.entries(data)) {
        lines.push('# ' + category)
        if (typeof items === 'object' && items !== null) {
          for (const [name, url] of Object.entries(items)) {
            lines.push(name + ': ' + url)
          }
        } else {
          lines.push(String(items))
        }
        lines.push('')
      }
      payload = { [cfg.textField]: lines.join('\n').trim() }
    }

    fs.writeFileSync(path.join(targetDir, 'index.json'), JSON.stringify(payload, null, 2), 'utf-8')
    console.log('  ' + cfg.target + '/index.json (singleton)')
  }
}

console.log('\nDone. Files in data/cms/')
