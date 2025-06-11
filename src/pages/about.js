import SEOHead from '../components/SEOHead'
import { getAbout } from '../lib/api'
import { dummyAbout } from '../lib/dummyData'
import { remark } from 'remark'
import html from 'remark-html'

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
  try {
    const data = getAbout()
    const processed = await remark().use(html).process(data.content)
    data.html = processed.toString()
    return { props: { about: data } }
  } catch (e) {
    return { props: { about: dummyAbout } }
  }
}
