import SEOHead from '../../components/SEOHead'
import { getAllArtworkSlugs, getArtworkBySlug } from '../../lib/api'

export default function ArtworkDetail({ artwork }) {
  return (
    <>
      <SEOHead title={artwork.title} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{artwork.title}</h1>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-auto mb-8 rounded"
        />
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: artwork.html }}
        />
      </div>
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
