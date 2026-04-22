
type hostProps = {
  id: number
  firstName: string
  lastName: string
}

const ListingItemHeader = ({ host }: { host: hostProps }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="text-sm uppercase tracking-[0.25em]">
        Host: {`${host.firstName} ${host.lastName}`}
      </div>
    </div>
  )
}

export default ListingItemHeader
