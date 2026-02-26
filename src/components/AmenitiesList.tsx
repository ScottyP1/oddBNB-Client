import {
  AlarmSmokeIcon,
  BathIcon,
  BedIcon,
  CookingPotIcon,
  DogIcon,
  Heart,
  MountainIcon,
  Star,
  TvIcon,
  WashingMachineIcon,
  WifiIcon,
} from 'lucide-react'
import AmenitiesItem from './AmenitiesItem'

const amenities = [
  {
    icon: <WifiIcon className="h-5 w-5" color="black" />,
    title: 'Fast Wi-Fi',
    subtitle: '500+ Mbps',
  },
  {
    icon: <TvIcon className="h-5 w-5" color="black" />,
    title: '4K Cinema',
    subtitle: 'Dolby Atmos',
  },
  {
    icon: <CookingPotIcon className="h-5 w-5" color="black" />,
    title: 'Chef Kitchen',
    subtitle: 'Full set',
  },
  {
    icon: <WashingMachineIcon className="h-5 w-5" color="black" />,
    title: 'Laundry',
    subtitle: 'Washer + dryer',
  },
  {
    icon: <DogIcon className="h-5 w-5" color="black" />,
    title: 'Pet Friendly',
    subtitle: 'Up to 2 pets',
  },
  {
    icon: <AlarmSmokeIcon className="h-5 w-5" color="black" />,
    title: 'Safety',
    subtitle: 'Smoke + CO2',
  },
]

const AmenitiesList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {amenities.map((item) => (
        <AmenitiesItem
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default AmenitiesList
