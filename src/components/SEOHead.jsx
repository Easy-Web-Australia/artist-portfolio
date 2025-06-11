import Head from 'next/head'

export default function SEOHead({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title} | Artist Portfolio` : 'Artist Portfolio'}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  )
}
