import ArtworkGrid from '../components/ArtworkGrid'
import SEOHead from '../components/SEOHead'
import { getAllArtworks } from '../lib/api'

export default function Portfolio({ artworks }) {
  return (
    <>
      <SEOHead title="Portfolio" />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <ArtworkGrid artworks={artworks} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const artworks = getAllArtworks()
  return { props: { artworks } }
}
