export default function BandcampSection() {
  return (
    <section className="min-h-screen w-full bg-zinc-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-white text-3xl mb-8">Releases</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Bandcamp items will be integrated here */}
          <div className="aspect-square bg-zinc-800 rounded-lg"></div>
          <div className="aspect-square bg-zinc-800 rounded-lg"></div>
          <div className="aspect-square bg-zinc-800 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
} 