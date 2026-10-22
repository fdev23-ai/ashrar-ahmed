export const profile = {
  name: 'Ashrar Ahmed',
  role: 'Software developer',
  focus: 'Flutter & React',
  location: 'Abu Dhabi, UAE',
  timeZone: 'Asia/Dubai',
  email: 'asraraha0@gmail.com',
  phone: '+971 54 548 2933',
  linkedin: 'https://linkedin.com/in/asrar-ahmed-5ba36a18a',
  github: 'https://github.com/fdev23-ai',
  resume: '/Ashrar-Ahmed-Resume.pdf',
}

export type Job = {
  years: string
  role: string
  company: string
  location: string
  summary: string
  points: string[]
}

export const work: Job[] = [
  {
    years: '2024 — Now',
    role: 'Software Developer',
    company: 'Etimad Research & Development',
    location: 'Abu Dhabi',
    summary: 'Real-time surveillance and monitoring platform for web and iOS.',
    points: [
      'Live camera feeds over RTSP, delivered with WebRTC for low-latency playback on web and iOS.',
      'PTZ (pan, tilt, zoom) camera control inside the Flutter web app.',
      'Real-time map that tracks cameras and assets as they move.',
      'REST and WebSocket integration, tuned for many simultaneous streams. I run the backend locally and patch it when the integration needs it.',
      'Moved into React for the map-centred web app and a visitor management app for check-in and tracking.',
    ],
  },
  {
    years: '2021 — 2024',
    role: 'Flutter Developer',
    company: 'German Experts',
    location: 'Abu Dhabi',
    summary: 'The company’s customer apps, from Figma to both app stores.',
    points: [
      'Designed in Figma, then built in Flutter: loyalty, rent a car, recovery requests, buy a car and full service history.',
      'Shipped the main GE customer app, with two apps on Google Play and one on the App Store.',
      'Stock inventory app using Zebra handheld barcode scanners.',
      'Internal tools: a Windows extension-number directory and an Android tablet app for pantry orders.',
    ],
  },
  {
    years: '2019 — 2021',
    role: 'Android Developer',
    company: 'Rumooz Technologies',
    location: 'Chennai',
    summary: 'Where I started, building native Android apps.',
    points: [],
  },
]

export type Screen = 'pos' | 'ble' | 'ge'

export type Project = {
  name: string
  kind: string
  summary: string
  stack: string[]
  // Drawn placeholder shown in the phone frame until a real screenshot is set.
  screen?: Screen
  // Path under public/, e.g. '/screens/pos.png'. Replaces the drawn screen.
  screenshot?: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'POS for cashiers and waiters',
    kind: 'Android · phone and tablet',
    summary:
      'One point-of-sale app that handles both cashier and waiter roles on Android phones and tablets. Windows client is next.',
    stack: ['Flutter', 'Android'],
    screen: 'pos',
  },
  {
    name: 'BLE Communicator',
    kind: 'iOS and Android',
    summary:
      'A Whoop-style companion app that streams live blood pressure readings from a Bluetooth Low Energy wearable. Uses Pigeon for type-safe native channels.',
    stack: ['Flutter', 'BLE', 'Pigeon'],
    screen: 'ble',
  },
  {
    name: 'German Experts app suite',
    kind: 'App Store and Google Play',
    summary:
      'The customer apps for a car service group, covering loyalty, rentals, recovery, sales and service history. Designed in Figma, built in Flutter.',
    stack: ['Flutter', 'Figma', 'REST'],
    screen: 'ge',
  },
  {
    name: 'Doctor Dashboard',
    kind: 'Full stack',
    summary:
      'A patient and records system I built on my own end to end: data model, Django REST API, PostgreSQL and a React dashboard.',
    stack: ['Django', 'PostgreSQL', 'React'],
  },
  {
    name: 'Business websites',
    kind: 'Web',
    summary: 'Static sites for clients, designed, built and hosted under tashjeel.ae.',
    stack: ['HTML', 'CSS', 'Hosting'],
  },
]

export const studies = [
  { name: 'Crop prediction', note: 'Recommends a crop from soil and climate data' },
  { name: 'Plant disease detection', note: 'Classifies leaf photos by disease' },
  { name: 'Face emotion detection', note: 'Finds a face, then reads its expression' },
  { name: 'Health check', note: 'Flags risk from symptoms and vitals' },
  { name: 'Data harvesting', note: 'Scrapes and cleans training datasets' },
]

export const stack: { group: string; items: string[] }[] = [
  { group: 'Mobile', items: ['Flutter', 'Dart', 'GetX', 'Bloc', 'Provider', 'Kotlin', 'Java'] },
  { group: 'Web', items: ['React', 'TypeScript', 'HTML & CSS'] },
  { group: 'Real-time', items: ['WebRTC', 'RTSP', 'WebSocket', 'BLE'] },
  { group: 'Backend', items: ['Django', 'Python', 'PostgreSQL', 'REST', 'GraphQL', 'C#', 'Docker'] },
  { group: 'Design & tools', items: ['Figma', 'Git'] },
]

export const education = [
  { years: 'Certificate', name: 'AI & Machine Learning', place: 'GUVi, six-month course' },
  { years: '2015 — 2018', name: 'BCA, Computer Application', place: 'Mohamed Sathak College, Chennai' },
]
