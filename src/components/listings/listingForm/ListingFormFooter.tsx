const ListingFormFooter = () => {
  return (
    <div className="flex flex-col items-end gap-3 rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur">
      <p className="text-xs text-white/60">
        Ready to publish? You can edit later.
      </p>
      <button
        type="submit"
        form="listing-form"
        className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90 w-full"
      >
        Publish listing
      </button>
    </div>
  )
}

export default ListingFormFooter
