const heroImages = {
  sundarbans: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=90',
  coxsbazar: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=90',
  sajek: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=90',
  sylhet: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&q=90',
  bandarban: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=90',
  rangamati: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=90',
  kuakata: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1600&q=90',
  srimangal: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=90',
  default: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90',
}

export const DIVISIONS = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Barishal',
  'Khulna',
  'Rajshahi',
  'Rangpur',
  'Mymensingh',
]

const divisionDescriptors = {
  Dhaka: {
    theme: 'Capital culture, rivers, and heritage estates',
    foods: ['Bhuna Khichuri', 'Kacchi Biryani', 'Borhani'],
    story: 'The living heart of the country with palaces, old lanes, and modern energy.',
  },
  Chattogram: {
    theme: 'Coastal escapes, hills, and the country\'s longest beach',
    foods: ['Mezban Beef', 'Fresh Seafood', 'Pithas'],
    story: 'A dramatic mix of shoreline, valleys, and port city momentum.',
  },
  Sylhet: {
    theme: 'Tea gardens, wetlands, and spiritual landmarks',
    foods: ['Shatkora Beef', 'Panshi Pitha', 'Fish Curry'],
    story: 'Lush green landscapes, clear rivers, and unforgettable hill views.',
  },
  Barishal: {
    theme: 'River life, floating markets, and quiet southern beauty',
    foods: ['Ilish Bhaja', 'Panta Ilish', 'Local river fish'],
    story: 'A calmer pace where waterways shape every journey and meal.',
  },
  Khulna: {
    theme: 'Mangroves, tiger country, and colonial forts',
    foods: ['Hilsa Curry', 'Chingri Malaikari', 'Rice platters'],
    story: 'Gateway to the Sundarbans and the southwest delta landscape.',
  },
  Rajshahi: {
    theme: 'Mango country, archaeology, and textile traditions',
    foods: ['Mango desserts', 'Sutki recipes', 'Sweet curd'],
    story: 'Ancient mosques, rich agriculture, and a warm inland pace.',
  },
  Rangpur: {
    theme: 'Northern fields, peaceful towns, and long highways',
    foods: ['Pita', 'Vegetable curries', 'Dairy sweets'],
    story: 'An open northern region shaped by agriculture and calm horizons.',
  },
  Mymensingh: {
    theme: 'Rivers, countryside, and university city energy',
    foods: ['Rice cakes', 'Fresh fish', 'Village meals'],
    story: 'A creative and green corner of the country with a strong cultural pulse.',
  },
}

const districtSeeds = [
  { name: 'Dhaka', division: 'Dhaka', bestFor: 'Capital culture' },
  { name: 'Gazipur', division: 'Dhaka', bestFor: 'Urban parks' },
  { name: 'Narsingdi', division: 'Dhaka', bestFor: 'River views' },
  { name: 'Manikganj', division: 'Dhaka', bestFor: 'Heritage trips' },
  { name: 'Munshiganj', division: 'Dhaka', bestFor: 'Historic estates' },
  { name: 'Narayanganj', division: 'Dhaka', bestFor: 'Riverfront escapes' },
  { name: 'Tangail', division: 'Dhaka', bestFor: 'Craft trails' },
  { name: 'Faridpur', division: 'Dhaka', bestFor: 'Local food stops' },
  { name: 'Gopalganj', division: 'Dhaka', bestFor: 'Pilgrimage and local history' },
  { name: 'Madaripur', division: 'Dhaka', bestFor: 'River routes' },
  { name: 'Rajbari', division: 'Dhaka', bestFor: 'Old family estates' },
  { name: 'Shariatpur', division: 'Dhaka', bestFor: 'River villages' },
  { name: 'Kishoreganj', division: 'Dhaka', bestFor: 'Haor adventures' },

  { name: 'Chattogram', division: 'Chattogram', bestFor: 'Port city energy' },
  { name: "Cox's Bazar", division: 'Chattogram', bestFor: 'Beach holidays' },
  { name: 'Cumilla', division: 'Chattogram', bestFor: 'Ancient sites' },
  { name: 'Brahmanbaria', division: 'Chattogram', bestFor: 'Music and heritage' },
  { name: 'Chandpur', division: 'Chattogram', bestFor: 'River confluence' },
  { name: 'Noakhali', division: 'Chattogram', bestFor: 'Delta life' },
  { name: 'Feni', division: 'Chattogram', bestFor: 'Quick river breaks' },
  { name: 'Lakshmipur', division: 'Chattogram', bestFor: 'Quiet coastal towns' },
  { name: 'Rangamati', division: 'Chattogram', bestFor: 'Lake and hill scenery' },
  { name: 'Khagrachari', division: 'Chattogram', bestFor: 'Tribal culture' },
  { name: 'Bandarban', division: 'Chattogram', bestFor: 'Mountain treks' },

  { name: 'Sylhet', division: 'Sylhet', bestFor: 'Tea and shrines' },
  { name: 'Moulvibazar', division: 'Sylhet', bestFor: 'Tea gardens' },
  { name: 'Habiganj', division: 'Sylhet', bestFor: 'Countryside trails' },
  { name: 'Sunamganj', division: 'Sylhet', bestFor: 'Haor adventures' },

  { name: 'Barishal', division: 'Barishal', bestFor: 'River tourism' },
  { name: 'Patuakhali', division: 'Barishal', bestFor: 'Seaside calm' },
  { name: 'Bhola', division: 'Barishal', bestFor: 'Island life' },
  { name: 'Jhalokati', division: 'Barishal', bestFor: 'Waterways' },
  { name: 'Pirojpur', division: 'Barishal', bestFor: 'Forest and river breaks' },
  { name: 'Barguna', division: 'Barishal', bestFor: 'Southern coast' },

  { name: 'Khulna', division: 'Khulna', bestFor: 'Delta gateway' },
  { name: 'Bagerhat', division: 'Khulna', bestFor: 'Historic mosques' },
  { name: 'Satkhira', division: 'Khulna', bestFor: 'Mangrove edges' },
  { name: 'Jashore', division: 'Khulna', bestFor: 'Mango orchards' },
  { name: 'Jhenaidah', division: 'Khulna', bestFor: 'Local heritage' },
  { name: 'Magura', division: 'Khulna', bestFor: 'Quiet countryside' },
  { name: 'Kushtia', division: 'Khulna', bestFor: 'Lalon heritage' },
  { name: 'Chuadanga', division: 'Khulna', bestFor: 'Rural escapes' },
  { name: 'Meherpur', division: 'Khulna', bestFor: 'Liberation history' },
  { name: 'Narail', division: 'Khulna', bestFor: 'River and art trails' },

  { name: 'Rajshahi', division: 'Rajshahi', bestFor: 'Mango country' },
  { name: 'Pabna', division: 'Rajshahi', bestFor: 'Thermal springs' },
  { name: 'Sirajganj', division: 'Rajshahi', bestFor: 'Jamuna river views' },
  { name: 'Bogura', division: 'Rajshahi', bestFor: 'Archaeology' },
  { name: 'Joypurhat', division: 'Rajshahi', bestFor: 'Quiet northern stops' },
  { name: 'Naogaon', division: 'Rajshahi', bestFor: 'Ancient ruins' },
  { name: 'Natore', division: 'Rajshahi', bestFor: 'Palace visits' },
  { name: 'Chapainawabganj', division: 'Rajshahi', bestFor: 'Mango orchards' },

  { name: 'Rangpur', division: 'Rangpur', bestFor: 'Open field journeys' },
  { name: 'Dinajpur', division: 'Rangpur', bestFor: 'Ancient temples' },
  { name: 'Gaibandha', division: 'Rangpur', bestFor: 'River plains' },
  { name: 'Kurigram', division: 'Rangpur', bestFor: 'Chars and rivers' },
  { name: 'Lalmonirhat', division: 'Rangpur', bestFor: 'Borderland views' },
  { name: 'Nilphamari', division: 'Rangpur', bestFor: 'Northern heritage' },
  { name: 'Panchagarh', division: 'Rangpur', bestFor: 'Tea gardens' },
  { name: 'Thakurgaon', division: 'Rangpur', bestFor: 'Rural calm' },

  { name: 'Mymensingh', division: 'Mymensingh', bestFor: 'Cultural city' },
  { name: 'Jamalpur', division: 'Mymensingh', bestFor: 'Riverside roads' },
  { name: 'Sherpur', division: 'Mymensingh', bestFor: 'Forest approach' },
  { name: 'Netrokona', division: 'Mymensingh', bestFor: 'Haor and hills' },
]

const featuredOverrides = {
  sundarbans: {
    name: 'The Sundarbans',
    slug: 'sundarbans',
    division: 'Khulna',
    bestFor: 'Mangrove wildlife',
    tagline: 'World\'s Largest Mangrove Forest',
    description:
      'A UNESCO World Heritage Site and one of the most extraordinary ecosystems on Earth, The Sundarbans combines dense mangroves, winding creeks, and the chance to spot the Royal Bengal Tiger.',
    highlights: ['Boat safaris through tidal creeks', 'UNESCO World Heritage Site', 'Royal Bengal Tiger habitat'],
    foods: ['Chingri Malai Curry', 'Hilsa Fish (Ilish)', 'Panta Ilish'],
    heroImage: heroImages.sundarbans,
    category: 'Nature',
    season: 'November to March',
  },
  coxsbazar: {
    name: "Cox's Bazar",
    slug: 'coxs-bazar',
    division: 'Chattogram',
    bestFor: 'Beach escape',
    tagline: 'World\'s Longest Natural Sea Beach',
    description:
      "Cox's Bazar stretches for more than 120 km along the Bay of Bengal, with golden sand, fishing culture, beach sunsets, and easy access to nearby island adventures.",
    highlights: ['120 km uninterrupted beach', 'Sunset and surf walks', 'Nearby island day trips'],
    foods: ['Fresh Seafood', 'Grilled Fish', 'Mezban Beef'],
    heroImage: heroImages.coxsbazar,
    category: 'Beach',
    season: 'October to March',
  },
  sajek: {
    name: 'Sajek Valley',
    slug: 'sajek-valley',
    division: 'Chattogram',
    bestFor: 'Mountain views',
    tagline: 'The Queen of Hills — Above the Clouds',
    description:
      'Sajek is famous for rolling green hills, cloud blankets, and the quiet beauty of life high above the valley floor, with community-run stays and scenic viewpoints everywhere you look.',
    highlights: ['Sea-of-clouds mornings', 'Rolling hillside resorts', 'Tribal village experiences'],
    foods: ['Bamboo Chicken', 'Pitha', 'Hot tea by the hills'],
    heroImage: heroImages.sajek,
    category: 'Hills',
    season: 'September to February',
  },
  sylhet: {
    name: 'Sylhet',
    slug: 'sylhet',
    division: 'Sylhet',
    bestFor: 'Tea and spiritual heritage',
    tagline: 'The Land of Tea Gardens & Saints',
    description:
      'Sylhet blends endless tea gardens, haor wetlands, rivers, and deeply rooted spiritual landmarks. It is the region travelers return to for green scenery and calm escapes.',
    highlights: ['Tea estate drives', 'Haor and river journeys', "Shah Jalal's shrine"],
    foods: ['Shatkora Beef', 'Sylheti Panshi', 'Pitha'],
    heroImage: heroImages.sylhet,
    category: 'Nature',
    season: 'Year-round',
  },
  bandarban: {
    name: 'Bandarban',
    slug: 'bandarban',
    division: 'Chattogram',
    bestFor: 'Highest peaks',
    tagline: "Bangladesh's Highest Peaks & Tribal Culture",
    description:
      'Bandarban delivers dramatic peaks, waterfalls, monasteries, and a rich mix of indigenous cultures. It is the best place to combine trekking, culture, and mountain air.',
    highlights: ['Keokradong and Tahjindong treks', 'Waterfalls and monasteries', 'Indigenous community culture'],
    foods: ['Bamboo rice', 'Tribal pork preparations', 'Hill-grown fruits'],
    heroImage: heroImages.bandarban,
    category: 'Hills',
    season: 'October to March',
  },
  rangamati: {
    name: 'Rangamati',
    slug: 'rangamati',
    division: 'Chattogram',
    bestFor: 'Lake adventures',
    tagline: 'The Lake District of Bangladesh',
    description:
      'Rangamati wraps Kaptai Lake, hanging bridges, and quiet hill communities into one of Bangladesh\'s most scenic travel experiences.',
    highlights: ['Kaptai Lake boat rides', 'Hanging bridge views', 'Tribal craft markets'],
    foods: ['Chakma sour fish curry', 'Bamboo shoots', 'Local freshwater fish'],
    heroImage: heroImages.rangamati,
    category: 'Nature',
    season: 'November to March',
  },
  kuakata: {
    name: 'Kuakata',
    slug: 'kuakata',
    division: 'Barishal',
    bestFor: 'Sunrise and sunset beach',
    tagline: 'The Daughter of the Sea',
    description:
      'Kuakata is known for its rare beach where travelers can watch both sunrise and sunset over the same stretch of water, with fishing culture and quiet sands all around.',
    highlights: ['Sunrise and sunset beach views', 'Fishing village atmosphere', 'Easy coastal day trips'],
    foods: ['Seafood curry', 'Crab dishes', 'Local coconut sweets'],
    heroImage: heroImages.default,
    category: 'Beach',
    season: 'October to March',
  },
  srimangal: {
    name: 'Srimangal',
    slug: 'srimangal',
    division: 'Sylhet',
    bestFor: 'Tea capital',
    tagline: 'Tea Gardens and Rainforest Calm',
    description:
      'Srimangal is the tea capital of Bangladesh, with endless estates, wildlife sanctuaries, and a calm pace that makes a slow weekend feel luxurious.',
    highlights: ['Tea estate walks', 'Lawachara rainforest', 'Seven-layer tea stops'],
    foods: ['Seven-layer tea', 'Local pitha', 'Tea-snack pairings'],
    heroImage: heroImages.srimangal,
    category: 'Nature',
    season: 'Year-round',
  },
}

export const FEATURED_DISTRICTS = [
  featuredOverrides.sundarbans,
  featuredOverrides.coxsbazar,
  featuredOverrides.sajek,
  featuredOverrides.sylhet,
  featuredOverrides.bandarban,
  featuredOverrides.rangamati,
  featuredOverrides.kuakata,
  featuredOverrides.srimangal,
]

const categoryAssets = {
  Beach: [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=90',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=90',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&sat=-10',
  ],
  Hills: [
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=90',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=90',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=90',
  ],
  Nature: [
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=90',
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=90',
    'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&q=90',
  ],
  Culture: [
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=90',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=90',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1400&q=90',
  ],
}

const categoryBlueprints = {
  Beach: {
    bestTime: 'October to March',
    attractions: [
      {
        title: 'Sunrise shoreline',
        description: 'Quiet mornings, soft light, and wide-open water views that define the place.',
      },
      {
        title: 'Fishing village walk',
        description: 'Watch daily life unfold where the market, boats, and beach all connect naturally.',
      },
      {
        title: 'Sunset point',
        description: 'Stay for the evening sky and a slow walk along the coast after the crowds fade.',
      },
    ],
    stayNames: ['Seaside Resort', 'Bay View Hotel', 'Budget Guest House'],
    transportTitle: 'By bus or coach',
    transportNote: 'Use long-distance coach services first, then local CNG, auto-rickshaw, or boat where needed.',
    localTransport: 'CNG, auto-rickshaw, boat rides, and short shared rides depending on the district.',
    tips: [
      'Book the first night near the main town to reduce late-evening travel.',
      'Travel early in the morning to avoid heat and traffic near the coast.',
      'Carry cash for local food stalls and small boats.',
      'Keep a flexible plan for weather or tidal changes.',
    ],
    foods: ['Fresh seafood', 'Grilled fish', 'Local crab dishes', 'Coconut sweets'],
  },
  Hills: {
    bestTime: 'September to February',
    attractions: [
      {
        title: 'Hill viewpoint',
        description: 'A high point for cloud views, sunrise colors, and long green valleys.',
      },
      {
        title: 'Village trail',
        description: 'Walk through local settlements, handmade craft areas, and forest paths.',
      },
      {
        title: 'Waterfall stop',
        description: 'A refreshing detour where mountain water, rock faces, and greenery meet.',
      },
    ],
    stayNames: ['Hill View Resort', 'Valley Cottage', 'Budget Homestay'],
    transportTitle: 'By bus and local jeep',
    transportNote: 'Reach the district town by bus or coach, then continue with jeeps, shared cars, or local transport.',
    localTransport: 'Local jeep, Chander Gari, shared cars, and short walks for the last stretch.',
    tips: [
      'Keep one day light so you can move slowly between viewpoints.',
      'Wear comfortable shoes with grip for hill roads and trails.',
      'Leave early if you want to catch cloud views at sunrise.',
      'Carry a light jacket because hill evenings can be cool.',
    ],
    foods: ['Bamboo chicken', 'Pitha', 'Smoked meats', 'Hot tea'],
  },
  Nature: {
    bestTime: 'November to March',
    attractions: [
      {
        title: 'Forest trail',
        description: 'A nature walk with birds, trees, and quiet scenery away from the main roads.',
      },
      {
        title: 'Water and wetland route',
        description: 'Boat or roadside views that show the district\'s river and wetland character.',
      },
      {
        title: 'Sunset landscape',
        description: 'Open skies, soft reflection on water, and a calm end to the day.',
      },
    ],
    stayNames: ['Nature Resort', 'Eco Lodge', 'Budget Stay'],
    transportTitle: 'By bus, train, or launch',
    transportNote: 'Most nature destinations work well with a mix of coach travel, train access, and local transport at the end.',
    localTransport: 'Rickshaw, CNG, boat, and shared van depending on the district terrain.',
    tips: [
      'Start early for the best bird activity and quiet trails.',
      'Use local guides in wetland or forest areas.',
      'Pack water and insect repellent for longer outdoor visits.',
      'Choose weekdays for calmer stays and lower transport pressure.',
    ],
    foods: ['Fresh fish', 'Tea snacks', 'Rice cakes', 'Local sweets'],
  },
  Culture: {
    bestTime: 'Year-round',
    attractions: [
      {
        title: 'Heritage stop',
        description: 'A historic landmark, old street, or local monument that tells the district\'s story.',
      },
      {
        title: 'Local bazaar',
        description: 'Markets, craft stalls, and food lanes where daily life feels most authentic.',
      },
      {
        title: 'Community walk',
        description: 'A slower walk through neighborhoods, river edges, or cultural points of interest.',
      },
    ],
    stayNames: ['City Hotel', 'Heritage Inn', 'Budget Guest House'],
    transportTitle: 'By train or coach',
    transportNote: 'Many cultural destinations are best reached by train or long-distance coach, with short local rides after arrival.',
    localTransport: 'Rickshaw, CNG, local bus, and walking for dense market or heritage zones.',
    tips: [
      'Plan one food stop into the itinerary because local meals are part of the experience.',
      'Start sightseeing after breakfast to avoid busy market traffic.',
      'Use a light day bag for old streets and bazaars.',
      'Ask locals for the best short route between heritage spots.',
    ],
    foods: ['Local sweets', 'Rice platters', 'Street snacks', 'Regional curries'],
  },
}

const buildBudgetPlan = (district) => {
  const base = district.category === 'Beach' ? 1800 : district.category === 'Hills' ? 1600 : district.category === 'Nature' ? 1400 : 1200
  return {
    budget: {
      transport: base,
      stay: base + 400,
      food: 400,
      activities: 250,
    },
    midRange: {
      transport: base + 800,
      stay: base + 1800,
      food: 900,
      activities: 600,
    },
    premium: {
      transport: base + 1800,
      stay: base + 3800,
      food: 1800,
      activities: 1200,
    },
  }
}

const uniqueList = (items) => [...new Set(items)]

export const buildDistrictExperience = (district) => {
  const blueprint = categoryBlueprints[district.category] || categoryBlueprints.Culture
  const images = categoryAssets[district.category] || categoryAssets.Culture
  const budgetPlan = buildBudgetPlan(district)
  const aboutNote = `${district.name} is a ${district.category.toLowerCase()}-friendly destination in ${district.division} division. ${district.description}`

  return {
    bestTime: blueprint.bestTime,
    aboutNote,
    aboutQuote: `Travel slowly and let ${district.name} unfold through local food, short walks, and one great sunrise or sunset.`,
    topAttractions: blueprint.attractions.map((item, index) => ({
      title: `${district.name} ${item.title}`,
      description: item.description,
      image: images[index % images.length],
      badge: district.bestFor,
    })),
    gettingThere: {
      title: blueprint.transportTitle,
      summary: blueprint.transportNote,
      localTransport: blueprint.localTransport,
      routeHint: `From Dhaka or the nearest major city, reach ${district.name} by ${district.category.toLowerCase()}-friendly transport and continue with local rides.`,
    },
    stayOptions: ['Luxury', 'Mid-range', 'Budget'].map((tier, index) => ({
      name: blueprint.stayNames[index],
      tier: tier.toLowerCase(),
      price:
        index === 0
          ? '৳4000-10000/night'
          : index === 1
            ? '৳2500-5000/night'
            : '৳300-800/night',
      note:
        index === 0
          ? 'Best for comfort, views, and full service stays.'
          : index === 1
            ? 'Balanced stay for most travelers.'
            : 'Simple stay for low-cost travel.'
    })),
    tips: blueprint.tips,
    foods: uniqueList([...(district.foods || []), ...blueprint.foods]).slice(0, 6),
    gallery: images.map((image, index) => ({
      image,
      title: `${district.name} moment ${index + 1}`,
      caption: index === 0 ? 'Early light and open scenery.' : index === 1 ? 'A quiet local scene.' : 'The kind of view that stays with you.',
    })),
    budgetPlan,
    guideText: `Guide me from my location to ${district.name} with the best transport and a simple step-by-step route.`,
    readyToGo: `Open the planner to build a ${district.name} trip with transport, hotels, and food options.`,
  }
}

const makeDistrict = ({ name, division, bestFor }) => {
  const descriptor = divisionDescriptors[division]
  return {
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    division,
    bestFor,
    tagline: `${bestFor} in ${division}`,
    description: `${name} is one of the many destinations in ${division} division. ${descriptor.story} It is a great stop for travelers looking for authentic local experiences and a calmer pace of discovery.`,
    highlights: [descriptor.theme, `Best for ${bestFor.toLowerCase()}`, 'Local food and short day trips'],
    foods: descriptor.foods,
    heroImage: heroImages[division.toLowerCase()] || heroImages.default,
    category: bestFor.includes('Beach') || bestFor.includes('coast') ? 'Beach' : bestFor.includes('hill') ? 'Hills' : 'Culture',
    season: 'Year-round',
  }
}

export const ALL_DISTRICTS = districtSeeds.map(makeDistrict)

export const DISTRICT_INDEX = [...FEATURED_DISTRICTS, ...ALL_DISTRICTS].reduce((acc, district) => {
  acc[district.slug] = district
  return acc
}, {})

export const DISTRICT_CARDS = [...FEATURED_DISTRICTS, ...ALL_DISTRICTS]

export const DIVISION_COUNTS = DIVISIONS.reduce((acc, division) => {
  acc[division] = ALL_DISTRICTS.filter((district) => district.division === division).length
  return acc
}, {})

export const FEATURE_STRIPS = [
  {
    title: '64-District Coverage',
    description: 'Explore every district, from the mangrove south to the tea-lined northeast.',
  },
  {
    title: 'GPS Travel Planning',
    description: 'Plan routes, budget trips, and save destinations directly in your browser.',
  },
  {
    title: 'Budget Intelligence',
    description: 'Compare travel styles, stay costs, and local transport suggestions.',
  },
  {
    title: 'Trusted Guides',
    description: 'Curated recommendations for food, stays, and must-see experiences.',
  },
  {
    title: 'Emergency SOS',
    description: 'Quick safety links and important travel reminders for every route.',
  },
]

export const heroStats = [
  { value: '64', label: 'Districts covered' },
  { value: '8', label: 'Divisions explored' },
  { value: '120+ km', label: 'Cox\'s Bazar beach' },
  { value: '1800 ft', label: 'Sajek elevation' },
]

export const divisionCards = DIVISIONS.map((division) => ({
  division,
  count: DIVISION_COUNTS[division],
  heroImage: ALL_DISTRICTS.find((district) => district.division === division)?.heroImage || heroImages.default,
  subtitle: divisionDescriptors[division].theme,
}))
