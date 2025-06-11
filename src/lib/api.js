import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

async function parseMatter(contents) {
  const { default: matter } = await import('gray-matter')
  return matter(contents)
}

const artworksDirectory = path.join(process.cwd(), 'content/artworks')

export async function getAllArtworks() {
  const fileNames = fs.readdirSync(artworksDirectory)
  const artworks = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(artworksDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = await parseMatter(fileContents)
      return {
        ...data,
        description: content.trim()
      }
    })
  )
  return artworks
}

export async function getArtworkBySlug(slug) {
  const fullPath = path.join(artworksDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = await parseMatter(fileContents)
  const processed = await remark().use(html).process(content)
  const htmlContent = processed.toString()
  return {
    ...data,
    html: htmlContent
  }
}

export function getAllArtworkSlugs() {
  return fs.readdirSync(artworksDirectory).map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getAbout() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/about.md'), 'utf8')
  const { data, content } = await parseMatter(file)
  return { ...data, content }
}

export async function getSEO() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/seo.md'), 'utf8')
  const { data } = await parseMatter(file)
  return data
}
