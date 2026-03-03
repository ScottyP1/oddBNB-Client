import { useEffect, useMemo } from 'react'

type ListingFormGalleryProps = {
  files: File[]
  onSelectFiles: (files: File[]) => void
  onRemoveImage: (index: number) => void
}

const ListingFormGallery = ({
  files,
  onSelectFiles,
  onRemoveImage,
}: ListingFormGalleryProps) => {
  const previews = useMemo(
    () => files.map((file) => URL.createObjectURL(file)),
    [files],
  )

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [previews])

  return (
    <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Gallery</p>
          <p className="mt-2 text-sm text-white/60">
            Upload high-quality photos that show the space.
          </p>
        </div>
        <label className="cursor-pointer rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10">
          Add photos
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(event) => {
              const files = event.target.files
              if (!files) return
              onSelectFiles(Array.from(files))
              event.target.value = ''
            }}
            className="hidden"
          />
        </label>
      </div>

      {files.length === 0 ? (
        <div className="mt-4 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm text-white/50">
          No Images selected
        </div>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((url, index) => (
            <div
              key={`${url}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={url}
                alt="Listing preview"
                className="h-32 w-full object-cover transition group-hover:scale-105"
              />
              <button
                type="button"
                onClick={() => onRemoveImage(index)}
                className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 opacity-0 transition group-hover:opacity-100"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListingFormGallery
