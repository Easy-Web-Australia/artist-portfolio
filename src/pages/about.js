import SEOHead from '../components/SEOHead'
import { getAbout } from '../lib/api'
import { remark } from 'remark'
import html from 'remark-html'

export default function About({ about }) {
  return (
    <>
      <SEOHead title={about.title} />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: about.html }} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const data = getAbout()
  const processed = await remark().use(html).process(data.content)
  data.html = processed.toString()
  return { props: { about: data } }
}
