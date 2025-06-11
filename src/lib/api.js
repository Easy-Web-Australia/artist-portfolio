import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const artworksDirectory = path.join(process.cwd(), 'content/artworks')

export function getAllArtworks() {
  const fileNames = fs.readdirSync(artworksDirectory)
  const artworks = fileNames.map((fileName) => {
    const fullPath = path.join(artworksDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      ...data,
      description: content.trim()
    }
  })
  return artworks
}

export async function getArtworkBySlug(slug) {
  const fullPath = path.join(artworksDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
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

export function getAbout() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/about.md'), 'utf8')
  const { data, content } = matter(file)
  return { ...data, content }
}

export function getSEO() {
  const file = fs.readFileSync(path.join(process.cwd(), 'content/seo.md'), 'utf8')
  const { data } = matter(file)
  return data
}
