import ArtworkGrid from '../components/ArtworkGrid'
import SEOHead from '../components/SEOHead'
import { getAllArtworks, getSEO } from '../lib/api'

export default function Home({ artworks, seo }) {
  return (
    <>
      <SEOHead title={seo.meta_title} description={seo.meta_description} />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Featured Artworks</h1>
        <ArtworkGrid artworks={artworks} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const artworks = getAllArtworks()
  const seo = getSEO()
  return {
    props: { artworks, seo }
  }
}
