export interface Listing {
  id: string;
  title: string;
  description: string;
  _geo: {
    lat: number;
    lng: number;
  };
  price: number;
  rating: number;
  amenities: string[];
}

const sampleListings: Listing[] = [
  // San Francisco - 6 listings
  {
    id: "sf-001",
    title: "Modern Loft in Mission District",
    description: "Stylish loft apartment with exposed brick walls and high ceilings. Walking distance to Dolores Park and vibrant restaurants. Perfect for urban explorers seeking authentic San Francisco charm.",
    _geo: { lat: 37.7599, lng: -122.4148 },
    price: 185,
    rating: 4.7,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating", "Workspace"]
  },
  {
    id: "sf-002",
    title: "Victorian Home Near Golden Gate Park",
    description: "Beautiful Victorian house with original details and modern amenities. Spacious backyard and close to the park. Ideal for families or groups wanting a quintessential SF experience.",
    _geo: { lat: 37.7694, lng: -122.4862 },
    price: 320,
    rating: 4.9,
    amenities: ["WiFi", "Kitchen", "Parking", "Washer", "Garden", "Heating"]
  },
  {
    id: "sf-003",
    title: "Downtown Studio with Bay Views",
    description: "Compact studio in the heart of downtown with stunning views of the Bay Bridge. Walking distance to Ferry Building and BART station. Perfect for solo travelers.",
    _geo: { lat: 37.7949, lng: -122.3936 },
    price: 145,
    rating: 4.3,
    amenities: ["WiFi", "Heating", "Elevator"]
  },
  {
    id: "sf-004",
    title: "Sunny Apartment in Castro",
    description: "Bright and cheerful apartment in the vibrant Castro neighborhood. Close to cafes, bars, and public transport. Recently renovated with modern finishes.",
    _geo: { lat: 37.7609, lng: -122.4350 },
    price: 165,
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating"]
  },
  {
    id: "sf-005",
    title: "Luxury Penthouse in Pacific Heights",
    description: "Exclusive penthouse with panoramic views of the Golden Gate Bridge and San Francisco Bay. High-end appliances, marble countertops, and concierge service.",
    _geo: { lat: 37.7938, lng: -122.4371 },
    price: 495,
    rating: 5.0,
    amenities: ["WiFi", "Kitchen", "Parking", "Washer", "AC", "Gym", "Pool", "Elevator"]
  },
  {
    id: "sf-006",
    title: "Cozy Studio in North Beach",
    description: "Charming studio in Little Italy with easy access to Fisherman's Wharf. Perfect for budget travelers who want to be in the center of the action.",
    _geo: { lat: 37.8006, lng: -122.4104 },
    price: 125,
    rating: 4.4,
    amenities: ["WiFi", "Heating", "Kitchen"]
  },

  // New York City - 6 listings
  {
    id: "nyc-001",
    title: "Brooklyn Brownstone Apartment",
    description: "Spacious apartment in a historic brownstone in Park Slope. High ceilings, original woodwork, and close to Prospect Park. Great for families or longer stays.",
    _geo: { lat: 40.6694, lng: -73.9800 },
    price: 245,
    rating: 4.8,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating", "Workspace"]
  },
  {
    id: "nyc-002",
    title: "Times Square Modern Studio",
    description: "Contemporary studio right in the heart of Midtown Manhattan. Perfect for first-time visitors who want to be in the center of everything NYC has to offer.",
    _geo: { lat: 40.7580, lng: -73.9855 },
    price: 195,
    rating: 4.2,
    amenities: ["WiFi", "AC", "Heating", "Elevator"]
  },
  {
    id: "nyc-003",
    title: "SoHo Luxury Loft",
    description: "Stunning industrial loft in the heart of SoHo with floor-to-ceiling windows. Walking distance to designer boutiques and art galleries. Ultra-modern amenities throughout.",
    _geo: { lat: 40.7233, lng: -74.0030 },
    price: 425,
    rating: 4.9,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Elevator", "Workspace"]
  },
  {
    id: "nyc-004",
    title: "East Village Classic Walk-Up",
    description: "Authentic NYC experience in a 5th floor walk-up. Exposed brick, vintage fixtures, and surrounded by amazing restaurants and nightlife. Perfect for young travelers.",
    _geo: { lat: 40.7264, lng: -73.9818 },
    price: 155,
    rating: 4.5,
    amenities: ["WiFi", "Kitchen", "Heating"]
  },
  {
    id: "nyc-005",
    title: "Upper West Side Family Home",
    description: "Spacious 3-bedroom apartment near Central Park and Museum of Natural History. Ideal for families with children. Quiet residential street with easy subway access.",
    _geo: { lat: 40.7870, lng: -73.9754 },
    price: 315,
    rating: 4.7,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating", "Parking"]
  },
  {
    id: "nyc-006",
    title: "Williamsburg Trendy Pad",
    description: "Hip apartment in trendy Williamsburg with great rooftop access. Minutes from amazing food scene and nightlife. Close to L train for easy Manhattan access.",
    _geo: { lat: 40.7081, lng: -73.9571 },
    price: 205,
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Rooftop"]
  },

  // Lisbon - 6 listings
  {
    id: "lis-001",
    title: "Alfama Traditional Apartment",
    description: "Charming apartment in historic Alfama district with views of the Tagus River. Stone walls, wooden beams, and walking distance to São Jorge Castle. Experience authentic Lisbon.",
    _geo: { lat: 38.7139, lng: -9.1288 },
    price: 95,
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Heating"]
  },
  {
    id: "lis-002",
    title: "Modern Flat in Chiado",
    description: "Contemporary apartment in upscale Chiado neighborhood. Close to theaters, bookshops, and elegant cafes. Recently renovated with all modern comforts.",
    _geo: { lat: 38.7107, lng: -9.1422 },
    price: 135,
    rating: 4.8,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Elevator"]
  },
  {
    id: "lis-003",
    title: "Belem Waterfront Studio",
    description: "Cozy studio near Belem Tower and Jeronimos Monastery. Perfect for history enthusiasts. Enjoy pastéis de nata from the famous bakery just steps away.",
    _geo: { lat: 38.6976, lng: -9.2067 },
    price: 85,
    rating: 4.4,
    amenities: ["WiFi", "Kitchen", "Heating"]
  },
  {
    id: "lis-004",
    title: "Luxury Penthouse in Avenida da Liberdade",
    description: "Exclusive penthouse on Lisbon's most prestigious avenue. Rooftop terrace with 360° views, high-end finishes, and concierge service. Ultimate luxury experience.",
    _geo: { lat: 38.7223, lng: -9.1414 },
    price: 385,
    rating: 5.0,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Parking", "Elevator", "Rooftop", "Pool"]
  },
  {
    id: "lis-005",
    title: "Bairro Alto Artist Loft",
    description: "Bohemian loft in the heart of nightlife district. Exposed stone walls, artistic decor, and surrounded by bars and restaurants. Perfect for night owls.",
    _geo: { lat: 38.7133, lng: -9.1451 },
    price: 110,
    rating: 4.5,
    amenities: ["WiFi", "Kitchen", "Heating"]
  },
  {
    id: "lis-006",
    title: "Cascais Beach House",
    description: "Charming house in coastal Cascais, 30 minutes from Lisbon center. Steps from the beach with private patio. Perfect for a relaxing Portuguese getaway.",
    _geo: { lat: 38.6979, lng: -9.4209 },
    price: 175,
    rating: 4.7,
    amenities: ["WiFi", "Kitchen", "Washer", "Parking", "Garden", "Beach Access"]
  },

  // London - 6 listings
  {
    id: "lon-001",
    title: "Notting Hill Georgian Flat",
    description: "Beautiful apartment in colorful Notting Hill. Near Portobello Road Market and excellent transport links. High ceilings and period features throughout.",
    _geo: { lat: 51.5142, lng: -0.1947 },
    price: 215,
    rating: 4.7,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating"]
  },
  {
    id: "lon-002",
    title: "Shoreditch Industrial Loft",
    description: "Converted warehouse loft in trendy Shoreditch. Exposed brick, open plan living, and surrounded by street art, markets, and nightlife. Very cool urban vibe.",
    _geo: { lat: 51.5254, lng: -0.0844 },
    price: 185,
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating", "Workspace"]
  },
  {
    id: "lon-003",
    title: "Covent Garden Pied-à-Terre",
    description: "Compact but perfectly located studio in the heart of theatreland. Walk to West End shows, Royal Opera House, and countless restaurants. London at your doorstep.",
    _geo: { lat: 51.5119, lng: -0.1241 },
    price: 165,
    rating: 4.3,
    amenities: ["WiFi", "Heating", "Elevator"]
  },
  {
    id: "lon-004",
    title: "South Kensington Victorian Townhouse",
    description: "Elegant townhouse apartment near museums and Hyde Park. Classic London charm with modern updates. Perfect for families or groups wanting a refined stay.",
    _geo: { lat: 51.4946, lng: -0.1764 },
    price: 295,
    rating: 4.9,
    amenities: ["WiFi", "Kitchen", "Washer", "Heating", "Parking", "Garden"]
  },
  {
    id: "lon-005",
    title: "Canary Wharf Modern Apartment",
    description: "Sleek apartment in London's financial district with Thames views. Great for business travelers. Excellent transport links and nearby shopping center.",
    _geo: { lat: 51.5054, lng: -0.0235 },
    price: 175,
    rating: 4.4,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Elevator", "Gym"]
  },
  {
    id: "lon-006",
    title: "Chelsea Luxury Residence",
    description: "Stunning apartment in prestigious Chelsea neighborhood. Designer furnishings, marble bathrooms, and close to King's Road shopping. London living at its finest.",
    _geo: { lat: 51.4875, lng: -0.1687 },
    price: 445,
    rating: 5.0,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Parking", "Elevator", "Concierge"]
  },

  // Rio de Janeiro - 6 listings
  {
    id: "rio-001",
    title: "Copacabana Beachfront Apartment",
    description: "Classic apartment with stunning views of Copacabana Beach. Wake up to the sound of waves and enjoy Rio's most famous beach right at your doorstep.",
    _geo: { lat: -22.9711, lng: -43.1822 },
    price: 155,
    rating: 4.6,
    amenities: ["WiFi", "Kitchen", "AC", "Beach Access"]
  },
  {
    id: "rio-002",
    title: "Ipanema Modern Flat",
    description: "Chic apartment in upscale Ipanema, two blocks from the beach. Trendy neighborhood with excellent restaurants and bars. Perfect for experiencing Rio's beach culture.",
    _geo: { lat: -22.9838, lng: -43.2050 },
    price: 195,
    rating: 4.8,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Beach Access"]
  },
  {
    id: "rio-003",
    title: "Santa Teresa Artist House",
    description: "Colorful house in bohemian Santa Teresa with panoramic city views. Artistic neighborhood with cobblestone streets and historic trams. Unique Rio experience.",
    _geo: { lat: -22.9156, lng: -43.1881 },
    price: 125,
    rating: 4.7,
    amenities: ["WiFi", "Kitchen", "Garden", "Workspace"]
  },
  {
    id: "rio-004",
    title: "Leblon Luxury Penthouse",
    description: "Exclusive penthouse in Rio's most sophisticated neighborhood. Rooftop pool, 360° mountain and ocean views, steps from the beach. Ultimate Rio luxury.",
    _geo: { lat: -22.9842, lng: -43.2256 },
    price: 425,
    rating: 5.0,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Pool", "Parking", "Elevator", "Beach Access"]
  },
  {
    id: "rio-005",
    title: "Lapa Budget Studio",
    description: "Simple studio in vibrant Lapa district, heart of Rio's nightlife and samba culture. Perfect for budget travelers wanting to experience authentic carioca culture.",
    _geo: { lat: -22.9131, lng: -43.1792 },
    price: 65,
    rating: 4.2,
    amenities: ["WiFi", "AC", "Kitchen"]
  },
  {
    id: "rio-006",
    title: "Barra da Tijuca Beach House",
    description: "Spacious house in Barra with direct beach access and private garden. Perfect for families or groups. Close to shopping malls and Olympic Park.",
    _geo: { lat: -23.0122, lng: -43.3649 },
    price: 235,
    rating: 4.5,
    amenities: ["WiFi", "Kitchen", "AC", "Washer", "Parking", "Garden", "Beach Access", "Pool"]
  }
];

export default sampleListings;

