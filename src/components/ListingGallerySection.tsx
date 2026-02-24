const ListingGallerySection = ({
  dummyData,
}: {
  dummyData: { images: Array<string>; title: string }
}) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/40 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.8)] backdrop-blur">
        <img
          src={dummyData.images[0]}
          alt={dummyData.title}
          className="h-[420px] w-full object-cover"
        />
        <div className="absolute bottom-5 left-5 rounded-full text-black bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
          lisinting catch name
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {dummyData.images.slice(0).map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="group overflow-hidden rounded-2xl border border-white/70 bg-white/50 shadow-sm"
          >
            <img
              src={image}
              alt={`${dummyData.title} preview ${index + 1}`}
              className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </>
  )
}

export default ListingGallerySection
