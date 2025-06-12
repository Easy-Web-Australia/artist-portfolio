import SEOHead from '../components/SEOHead'
import { dummyAbout } from '../lib/dummyData'

export default function About({ about }) {
  return (
    <>
      <SEOHead title={about.title} />
      <div>
        <h1 className="text-4xl font-bold mb-8 text-center">{about.title}</h1>
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { about: dummyAbout } }
}
