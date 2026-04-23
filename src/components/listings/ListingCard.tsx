import { Star, EditIcon } from 'lucide-react'
import { resolveImageUrl } from '@/lib/resolveImageUrl'

type CardProps = {
  variant?: 'grid' | 'horizontal'
  title: string
  pricePerNight: number
  images: string[]
  reviews: number
  isFavorited?: boolean
  hideFavorite?: boolean
  showDelete?: boolean
  showEdit?: boolean
  onCardClick?: () => void
  onDeleteClick?: () => void
  onEditClick?: () => void
  onFavoriteClick?: () => void
  handleViewNew?: () => void
}

type ListingCardSkeletonProps = {
  variant?: 'grid' | 'horizontal'
}

export const ListingCardSkeleton = ({
  variant = 'grid',
}: ListingCardSkeletonProps) => {
  if (variant === 'horizontal') {
    return (
      <div
        className={`
          relative flex w-full items-center gap-4
          rounded-2xl border border-white/10 bg-black/60 p-3
          shadow-2xl backdrop-blur
        `}
      >
        <div className="h-20 w-28 rounded-xl bg-white/10 animate-pulse" />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="h-4 w-3/4 rounded bg-white/10 animate-pulse" />
          <div className="h-3 w-1/2 rounded bg-white/10 animate-pulse" />
        </div>
        <div className="ml-auto h-7 w-20 rounded-full bg-white/10 animate-pulse" />
      </div>
    )
  }

  return (
    <div
      className={`
        group relative w-full h-80
        rounded-3xl bg-black/60 shadow-2xl
        border border-white/10 backdrop-blur
      `}
    >
      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden z-10 rounded-t-3xl bg-white/10 animate-pulse" />

      <div className="absolute inset-x-0 bottom-0 z-20 bg-black/70 px-5 pb-4 pt-4 backdrop-blur rounded-b-3xl">
        <div className="flex flex-col gap-3">
          <div className="h-5 w-3/4 rounded bg-white/10 animate-pulse" />
          <div className="flex items-center justify-between gap-3">
            <div className="h-4 w-1/3 rounded bg-white/10 animate-pulse" />
            <div className="h-4 w-12 rounded bg-white/10 animate-pulse" />
          </div>
          <div className="mt-1 h-8 w-full rounded-2xl bg-white/10 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

const ListingCard = ({
  variant = 'grid',
  title,
  pricePerNight,
  images,
  reviews,
  isFavorited = false,
  hideFavorite = false,
  showDelete = false,
  showEdit = false,
  onCardClick,
  handleViewNew,
  onDeleteClick,
  onEditClick,
  onFavoriteClick,
}: CardProps) => {
  if (variant === 'horizontal') {
    return (
      <div
        className={`
          relative flex w-full items-center gap-4
          rounded-2xl border border-white/10 bg-black/60 p-3
          shadow-2xl backdrop-blur
        `}
      >
        <img
          src={images[0]}
          alt={title}
          className="h-20 w-28 rounded-xl object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="truncate text-sm font-semibold text-white">{title}</p>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span>${pricePerNight} · night</span>

          </div>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onFavoriteClick?.()
          }}
          className="ml-auto rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/10"
        >
          Unfavorite
        </button>
      </div>
    )
  }

  return (
    <div
      role={onCardClick ? 'button' : undefined}
      onClick={onCardClick}
      onKeyDown={(event) => {
        if (!onCardClick) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onCardClick()
        }
      }}
      tabIndex={onCardClick ? 0 : undefined}
      className={`
        group relative w-full h-80
        rounded-3xl bg-black/60 shadow-2xl ${onCardClick ? 'cursor-pointer' : ''}
        border border-white/10 backdrop-blur
        focus:outline-none focus:ring-2 focus:ring-amber-400/60
        ${isFavorited ? 'ring-2 ring-amber-400 shadow-[0_0_0_1px_rgba(245,158,11,0.6)]' : ''}
      `}
    >
      {/* Image */}
      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden z-10 ">
        <img
          src={resolveImageUrl(images[0])}
          alt={title}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>
      {/* Edit icon */}
      {showEdit && (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            onEditClick?.()
          }}
          className="absolute z-20 right-2 top-2"
          aria-label="Edit listing"
        >
          <EditIcon color="white" size={25} />
        </button>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-black/70 px-5 pb-4 pt-4 backdrop-blur rounded-b-3xl">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg text-white">{title}</h3>

          <div className="flex items-center justify-between gap-3">
            <p className="text-white/70 text-sm">${pricePerNight} · night</p>

          </div>
          {!hideFavorite && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onFavoriteClick?.()
              }}
              className={`mt-1 w-full rounded-2xl border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition ${isFavorited
                ? 'border-amber-400 bg-amber-400/15 text-amber-300'
                : 'border-white/20 text-white/80 hover:bg-white/10'
                }`}
            >
              {isFavorited ? 'Favorited' : 'Favorite'}
            </button>
          )}
          {showDelete && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onDeleteClick?.()
              }}
              className="mt-1 w-full rounded-2xl border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition hover:bg-red-500 hover:cursor-pointer"
            >
              Delete
            </button>
          )}
          {handleViewNew && (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                handleViewNew()
              }}
              className="mt-1 w-full rounded-2xl border border-emerald-400/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200 transition hover:bg-emerald-500/20 hover:cursor-pointer"
            >
              View
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingCard
