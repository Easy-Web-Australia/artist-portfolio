import Link from 'next/link'

export default function ArtworkCard({ artwork }) {
  return (
    <div className="p-4">
      <Link href={`/artwork/${artwork.slug}`} className="block">
        <img src={artwork.image} alt={artwork.title} className="w-full h-auto" />
        <h3 className="mt-2 text-xl font-semibold">{artwork.title}</h3>
      </Link>
    </div>
  )
}
