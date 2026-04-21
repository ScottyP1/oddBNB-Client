import { spawnSync } from 'node:child_process'

const config = {
  host: process.env.ODDBNB_DB_HOST ?? '127.0.0.1',
  port: process.env.ODDBNB_DB_PORT ?? '3306',
  database: process.env.ODDBNB_DB_NAME ?? 'oddbnb_DB',
  user: process.env.ODDBNB_DB_USER ?? process.env.DB_USER ?? 'root',
  password: process.env.ODDBNB_DB_PASS ?? process.env.DB_PASS ?? '',
  email: process.env.ODDBNB_SEED_EMAIL ?? 'test@email.com',
}

if (!config.password) {
  console.error(
    'Missing DB password. Set ODDBNB_DB_PASS or DB_PASS before running the seeder.',
  )
  process.exit(1)
}

const listings = [
  {
    title: 'Nebula Knockout Saucer',
    imageUrl: '/listings/alien.png',
    description:
      'Retro-futurist flying saucer stay with neon trim, glowing portholes, and midnight-abduction energy in the best possible way.',
    location: 'Roswell, New Mexico',
    lat: 35.1983,
    lon: -106.663,
    pricePerNight: 289,
    squareFeet: 420,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '16:00:00',
    checkOutTime: '11:00:00',
    available: 1,
    amenities: ['desert_view', 'kitchen', 'smoke_alarm', 'tv', 'wifi'],
  },
  {
    title: 'Cask Of Wonder Nook',
    imageUrl: '/listings/barrel.png',
    description:
      'A cedar barrel hideout with a storybook round door, warm wood interior, and just enough whimsy to make normal cabins jealous.',
    location: 'Portland, Oregon',
    lat: 45.5231,
    lon: -122.6765,
    pricePerNight: 224,
    squareFeet: 310,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '15:00:00',
    checkOutTime: '10:00:00',
    available: 1,
    amenities: ['kitchen', 'smoke_alarm', 'valley_view', 'wifi'],
  },
  {
    title: 'Tidal Velvet Cliffhouse',
    imageUrl: '/listings/cliffSide.png',
    description:
      'Glassy cliffside lounge with fireplace, wall-to-wall ocean views, and sunset bragging rights from every seat in the room.',
    location: 'Laguna Beach, California',
    lat: 33.8121,
    lon: -117.919,
    pricePerNight: 615,
    squareFeet: 1850,
    beds: 3,
    baths: 2,
    capacity: 6,
    checkInTime: '16:00:00',
    checkOutTime: '11:00:00',
    available: 1,
    amenities: ['dryer', 'kitchen', 'smoke_alarm', 'tv', 'washer', 'wifi'],
  },
  {
    title: 'Jurassic Moonstone Burrow',
    imageUrl: '/listings/flinstone.png',
    description:
      'A handmade stone-age fantasy dome glowing under the stars, perfect for guests who want Flintstones vibes without cave-person plumbing.',
    location: 'Tucson, Arizona',
    lat: 32.2226,
    lon: -110.9747,
    pricePerNight: 198,
    squareFeet: 540,
    beds: 2,
    baths: 1,
    capacity: 4,
    checkInTime: '15:00:00',
    checkOutTime: '10:00:00',
    available: 1,
    amenities: [
      'desert_view',
      'kitchen',
      'mountain_view',
      'pets_allowed',
      'smoke_alarm',
      'wifi',
    ],
  },
  {
    title: 'Moss Boss Shire Bunker',
    imageUrl: '/listings/hillside.png',
    description:
      'Half-hidden hillside home with mossy curves, tiny round windows, and strong secret-council-of-hobbits energy.',
    location: 'Hocking Hills, Ohio',
    lat: 39.113,
    lon: -82.536,
    pricePerNight: 245,
    squareFeet: 460,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '15:00:00',
    checkOutTime: '10:00:00',
    available: 1,
    amenities: ['kitchen', 'pets_allowed', 'smoke_alarm', 'valley_view', 'wifi'],
  },
  {
    title: 'The Suspended Acorn Reactor',
    imageUrl: '/listings/hornetNest.png',
    description:
      'Suspended woodland orb for people who looked at a hornets nest and thought, yes, but make it boutique and adorable.',
    location: 'Forest of Dean, England',
    lat: 51.5074,
    lon: -2.318,
    pricePerNight: 267,
    squareFeet: 280,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '16:00:00',
    checkOutTime: '11:00:00',
    available: 1,
    amenities: ['mountain_view', 'smoke_alarm', 'valley_view', 'wifi'],
  },
  {
    title: 'Glacier Gospel Lake Lodge',
    imageUrl: '/listings/lakeCabin.png',
    description:
      'Turquoise lakefront escape with cathedral peaks, dockside calm, and enough mountain drama to ruin ordinary weekends forever.',
    location: 'Lake Louise, Alberta',
    lat: 51.4254,
    lon: -116.1773,
    pricePerNight: 472,
    squareFeet: 1320,
    beds: 2,
    baths: 2,
    capacity: 5,
    checkInTime: '16:00:00',
    checkOutTime: '11:00:00',
    available: 1,
    amenities: [
      'dryer',
      'kitchen',
      'mountain_view',
      'smoke_alarm',
      'tv',
      'valley_view',
      'washer',
      'wifi',
    ],
  },
  {
    title: 'Starlight Snowglobe Hideout',
    imageUrl: '/listings/snowglobe.png',
    description:
      'Transparent forest bubble where stargazing happens from bed and every night feels like sleeping inside a sci-fi snow globe.',
    location: 'Normandy Woodland, France',
    lat: 48.8566,
    lon: 2.3522,
    pricePerNight: 338,
    squareFeet: 390,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '17:00:00',
    checkOutTime: '10:00:00',
    available: 1,
    amenities: ['smoke_alarm', 'valley_view', 'wifi'],
  },
  {
    title: 'Mirage Moonbell Camp',
    imageUrl: '/listings/tent.png',
    description:
      'Desert glamping bell tent with sunset mountain silhouettes, firepit vibes, and the kind of soft lighting influencers pray for.',
    location: 'Las Vegas Desert Rim, Nevada',
    lat: 36.1699,
    lon: -115.1398,
    pricePerNight: 176,
    squareFeet: 240,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '15:00:00',
    checkOutTime: '10:00:00',
    available: 1,
    amenities: ['desert_view', 'mountain_view', 'smoke_alarm', 'wifi'],
  },
  {
    title: "Poseidon's Neon Sleeper",
    imageUrl: '/listings/underwater.png',
    description:
      'An underwater suite wrapped in blue light and passing fish, built for guests who want sleepovers sponsored by Neptune.',
    location: 'Rangali Island, Maldives',
    lat: 4.1755,
    lon: 73.5093,
    pricePerNight: 1299,
    squareFeet: 710,
    beds: 1,
    baths: 1,
    capacity: 2,
    checkInTime: '17:00:00',
    checkOutTime: '11:00:00',
    available: 1,
    amenities: ['smoke_alarm', 'tv', 'wifi'],
  },
]

function runMysql(sql, { raw = false } = {}) {
  const args = [
    `-h${config.host}`,
    `-P${config.port}`,
    `-u${config.user}`,
    `-p${config.password}`,
    config.database,
    '--batch',
    '--skip-column-names',
    '-e',
    sql,
  ]

  const result = spawnSync('mysql', args, {
    encoding: 'utf8',
  })

  if (result.status !== 0) {
    const error = result.stderr?.trim() || 'mysql command failed'
    throw new Error(error)
  }

  return raw ? result.stdout : result.stdout.trim()
}

function escapeSql(value) {
  return String(value).replaceAll('\\', '\\\\').replaceAll("'", "\\'")
}

function amenityValue(listing, column) {
  return listing.amenities.includes(column) ? 1 : 0
}

function ensureHostUser() {
  const sql = `
    SELECT id, role
    FROM users
    WHERE email = '${escapeSql(config.email)}'
    LIMIT 1;
  `
  const result = runMysql(sql)

  if (!result) {
    throw new Error(`No user found for ${config.email}`)
  }

  const [userId, role] = result.split('\t')

  if (role === 'GUEST') {
    runMysql(`
      UPDATE users
      SET role = 'HOST'
      WHERE id = ${Number(userId)};
    `)
  }

  return Number(userId)
}

function findExistingListingId(imageUrl) {
  const sql = `
    SELECT listing_id
    FROM listing_images
    WHERE image_url = '${escapeSql(imageUrl)}'
    LIMIT 1;
  `
  const result = runMysql(sql)
  return result ? Number(result) : null
}

function insertListing(hostId, listing) {
  const sql = `
    INSERT INTO listings (
      available,
      baths,
      beds,
      capacity,
      check_in_time,
      check_out_time,
      description,
      lat,
      location,
      lon,
      price_per_night,
      square_feet,
      title,
      host_id
    ) VALUES (
      ${listing.available},
      ${listing.baths},
      ${listing.beds},
      ${listing.capacity},
      '${listing.checkInTime}',
      '${listing.checkOutTime}',
      '${escapeSql(listing.description)}',
      ${listing.lat},
      '${escapeSql(listing.location)}',
      ${listing.lon},
      ${listing.pricePerNight},
      ${listing.squareFeet},
      '${escapeSql(listing.title)}',
      ${hostId}
    );
    SELECT LAST_INSERT_ID();
  `

  return Number(runMysql(sql).split('\n').pop())
}

function insertAmenities(listingId, listing) {
  const sql = `
    INSERT INTO amenities (
      desert_view,
      dryer,
      kitchen,
      mountain_view,
      pets_allowed,
      smoke_alarm,
      tv,
      valley_view,
      washer,
      wifi,
      listing_id
    ) VALUES (
      ${amenityValue(listing, 'desert_view')},
      ${amenityValue(listing, 'dryer')},
      ${amenityValue(listing, 'kitchen')},
      ${amenityValue(listing, 'mountain_view')},
      ${amenityValue(listing, 'pets_allowed')},
      ${amenityValue(listing, 'smoke_alarm')},
      ${amenityValue(listing, 'tv')},
      ${amenityValue(listing, 'valley_view')},
      ${amenityValue(listing, 'washer')},
      ${amenityValue(listing, 'wifi')},
      ${listingId}
    );
  `

  runMysql(sql)
}

function insertImage(listingId, imageUrl) {
  runMysql(`
    INSERT INTO listing_images (image_url, listing_id)
    VALUES ('${escapeSql(imageUrl)}', ${listingId});
  `)
}

function main() {
  const hostId = ensureHostUser()
  const created = []
  const skipped = []

  for (const listing of listings) {
    const existingId = findExistingListingId(listing.imageUrl)

    if (existingId) {
      skipped.push(`${listing.title} (#${existingId})`)
      continue
    }

    const listingId = insertListing(hostId, listing)
    insertAmenities(listingId, listing)
    insertImage(listingId, listing.imageUrl)
    created.push(`${listing.title} (#${listingId})`)
  }

  console.log(`Seed target: ${config.database} on ${config.host}:${config.port}`)
  console.log(`Seed user: ${config.email} (host id ${hostId})`)
  console.log(`Created: ${created.length}`)

  for (const item of created) {
    console.log(`  + ${item}`)
  }

  console.log(`Skipped existing: ${skipped.length}`)

  for (const item of skipped) {
    console.log(`  - ${item}`)
  }
}

try {
  main()
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
}
