import ArtworkCard from './ArtworkCard'

export default function ArtworkGrid({ artworks }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((art) => (
        <ArtworkCard key={art.slug} artwork={art} />
      ))}
    </div>
  )
}
