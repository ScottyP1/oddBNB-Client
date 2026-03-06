const ListingFormHeader = ({ isEditing }: { isEditing: boolean }) => {
  return (
    <div className="">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          {isEditing ? 'Update Listing' : 'New listing'}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          {isEditing ? 'Update your stay' : 'Create your stay'}
        </h1>
      </div>
    </div>
  )
}

export default ListingFormHeader
