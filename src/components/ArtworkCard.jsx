import Link from 'next/link'

export default function ArtworkCard({ artwork }) {
  return (
    <div className="group">
      <Link
        href={`/artwork/${artwork.slug}`}
        className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:underline">
            {artwork.title}
          </h3>
          {artwork.description && (
            <p className="text-sm text-gray-600 mt-1">{artwork.description}</p>
          )}
        </div>
      </Link>
    </div>
  )
}
