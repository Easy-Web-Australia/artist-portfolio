import ArtworkGrid from '../components/ArtworkGrid'
import SEOHead from '../components/SEOHead'
import { getAllArtworks } from '../lib/api'
import { dummyArtworks } from '../lib/dummyData'

export default function Portfolio({ artworks }) {
  return (
    <>
      <SEOHead title="Portfolio" />
      <div>
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <ArtworkGrid artworks={artworks} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const artworks = await getAllArtworks()
  return {
    props: {
      artworks: artworks && artworks.length > 0 ? artworks : dummyArtworks
    }
  }
}
