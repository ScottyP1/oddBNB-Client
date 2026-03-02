import {
  AlarmSmokeIcon,
  CookingPotIcon,
  DogIcon,
  MountainIcon,
  TvIcon,
  WashingMachineIcon,
  WifiIcon,
} from 'lucide-react'
import AmenitiesItem from './AmenitiesItem'

export type AmenityKey =
  | 'desertView'
  | 'mountainView'
  | 'valleyView'
  | 'wifi'
  | 'tv'
  | 'kitchen'
  | 'washer'
  | 'dryer'
  | 'petsAllowed'
  | 'smokeAlarm'

export type AmenityOption = {
  id: AmenityKey
  title: string
  subtitle?: string
  icon: React.ReactNode
}

export const AMENITIES: AmenityOption[] = [
  {
    id: 'desertView',
    icon: <MountainIcon className="h-5 w-5 text-white/80" />,
    title: 'Desert view',
    subtitle: 'Wide horizons',
  },
  {
    id: 'mountainView',
    icon: <MountainIcon className="h-5 w-5 text-white/80" />,
    title: 'Mountain view',
    subtitle: 'Panoramic peaks',
  },
  {
    id: 'valleyView',
    icon: <MountainIcon className="h-5 w-5 text-white/80" />,
    title: 'Valley view',
    subtitle: 'Rolling hills',
  },
  {
    id: 'wifi',
    icon: <WifiIcon className="h-5 w-5 text-white/80" />,
    title: 'Fast Wi-Fi',
    subtitle: '500+ Mbps',
  },
  {
    id: 'tv',
    icon: <TvIcon className="h-5 w-5 text-white/80" />,
    title: '4K Cinema',
    subtitle: 'Dolby Atmos',
  },
  {
    id: 'kitchen',
    icon: <CookingPotIcon className="h-5 w-5 text-white/80" />,
    title: 'Chef Kitchen',
    subtitle: 'Full set',
  },
  {
    id: 'washer',
    icon: <WashingMachineIcon className="h-5 w-5 text-white/80" />,
    title: 'Washer',
    subtitle: 'In-unit',
  },
  {
    id: 'dryer',
    icon: <WashingMachineIcon className="h-5 w-5 text-white/80" />,
    title: 'Dryer',
    subtitle: 'In-unit',
  },
  {
    id: 'petsAllowed',
    icon: <DogIcon className="h-5 w-5 text-white/80" />,
    title: 'Pet Friendly',
    subtitle: 'Up to 2 pets',
  },
  {
    id: 'smokeAlarm',
    icon: <AlarmSmokeIcon className="h-5 w-5 text-white/80" />,
    title: 'Smoke alarm',
    subtitle: 'Safety first',
  },
]

type AmenitiesListProps = {
  selectable?: boolean
  selectedIds?: AmenityKey[]
  onToggle?: (id: AmenityKey) => void
}

const AmenitiesList = ({
  selectable = false,
  selectedIds = [],
  onToggle,
}: AmenitiesListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {AMENITIES.map((item) => (
        <AmenitiesItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          selectable={selectable}
          selected={selectedIds.includes(item.id)}
          onToggle={onToggle ? () => onToggle(item.id) : undefined}
        />
      ))}
    </div>
  )
}

export default AmenitiesList
