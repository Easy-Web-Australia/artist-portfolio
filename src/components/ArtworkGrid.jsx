import ArtworkCard from './ArtworkCard'

export default function ArtworkGrid({ artworks }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {artworks.map((art) => (
        <ArtworkCard key={art.slug} artwork={art} />
      ))}
    </div>
  )
}
