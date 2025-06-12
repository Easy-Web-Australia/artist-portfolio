import ArtworkGrid from '../components/ArtworkGrid'
import SEOHead from '../components/SEOHead'
import { dummyArtworks, dummyAbout, dummySEO } from '../lib/dummyData'

export default function Home({ artworks, seo, about }) {
  return (
    <>
      <SEOHead title={seo.meta_title} description={seo.meta_description} />
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Art World</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover a curated selection of artworks and creative projects.
        </p>
        <a
          href="/portfolio"
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View Portfolio
        </a>
      </section>
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Artworks</h2>
        <ArtworkGrid artworks={artworks.slice(0, 3)} />
      </section>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        <a href="/contact" className="mt-8 inline-block underline text-lg">
          Get in touch
        </a>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      artworks: dummyArtworks,
      seo: dummySEO,
      about: dummyAbout
    }
  }
}
