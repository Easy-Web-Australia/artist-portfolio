import SEOHead from '../../components/SEOHead'
import { getAllArtworkSlugs, getArtworkBySlug } from '../../lib/api'

export default function ArtworkDetail({ artwork }) {
  return (
    <>
      <SEOHead title={artwork.title} />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{artwork.title}</h1>
        <img src={artwork.image} alt={artwork.title} className="w-full h-auto" />
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: artwork.html }} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const slugs = getAllArtworkSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const artwork = await getArtworkBySlug(params.slug)
  return { props: { artwork } }
}
