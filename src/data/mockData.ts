import { LookbookLook, RetailerPartner, Testimonial, RunwaySnapshot } from '../types';

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8FW2NSBc3h0o5w7CPe-tiP0B4J9MDrC2ubpPh7NUjKka2DX-1FEzinUdERFqvhJPh6LE7arzJ8U59dZNkssxU0oim7tN9V-3V7C48kV2uBfUjAIc0zE8EEWMQas6qc3JvnNP2uY9Ui5d2ObfhnMP4e7oB-_4x6GSwwKKj7ycOsSz2a-FGXNX-LTBtuCLDRcUGoRwdkSEswUHCRiS6-6Ry2CbEcqtMQEHvdCuD9IcIPoJf2g22avE6sw';
export const LOGO_IMAGE_URL = '/logo.png';

export const CURATED_LOOKS: LookbookLook[] = [
  {
    id: 'look-1',
    title: 'Modern City Streetwear',
    subtitle: 'Clean jacket paired with relaxed trousers',
    vibe: 'Casual Street Style',
    matchScore: 98,
    description: 'A stylish and comfortable outfit with a light cropped jacket, matching cargo pants, and simple accessories for day or night.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Streetwear', 'Casual', 'Everyday'],
    occasion: 'Weekend Outing / Dinner With Friends',
    colorPalette: ['#1A102E', '#2A1B4D', '#B7A4D8', '#F2C94C', '#0C0F0F'],
    stylingTips: [
      'Wear the cropped jacket over a plain black top for an effortless look',
      'Pair with clean leather sneakers or low boots',
      'Add a simple gold necklace for a nice touch of shine'
    ],
    items: [
      {
        id: 'item-1',
        name: 'Cropped Utility Jacket',
        brand: 'Helmut Atelier',
        retailer: 'FARFETCH',
        price: 680,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['XS', 'S', 'M', 'L']
      },
      {
        id: 'item-2',
        name: 'Soft Silk Bralette Top',
        brand: 'Khaite',
        retailer: 'SSENSE',
        price: 420,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
        category: 'top',
        inStock: true,
        sizeAvailable: ['S', 'M']
      },
      {
        id: 'item-3',
        name: 'High-Waist Cargo Trousers',
        brand: 'Acne Studios',
        retailer: 'Net-a-Porter',
        price: 590,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['26', '28', '30', '32']
      },
      {
        id: 'item-4',
        name: 'Gold Ring Pendant Necklace',
        brand: 'StyleCue Collection',
        retailer: 'StyleCue Store',
        price: 340,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        category: 'jewelry',
        inStock: true,
        sizeAvailable: ['One Size']
      }
    ]
  },
  {
    id: 'look-2',
    title: 'Elegant Evening Silk Dress',
    subtitle: 'Smooth silk dress with a warm evening coat',
    vibe: 'Classic Evening',
    matchScore: 99,
    description: 'An elegant long silk dress paired with a soft cashmere coat and gold clutch, perfect for dinner parties, weddings, and galas.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Evening', 'Formal', 'Silk Dress'],
    occasion: 'Cocktail Party & Wedding Reception',
    colorPalette: ['#121414', '#D4AF37', '#38265A', '#E2E2E2', '#5F004F'],
    stylingTips: [
      'Keep your jewelry simple with small gold hoop earrings',
      'Wear with neutral heel sandals or classic pumps',
      'Drape the coat gently over your shoulders when it gets cool'
    ],
    items: [
      {
        id: 'item-5',
        name: 'Silk Slip Maxi Dress',
        brand: 'The Row',
        retailer: 'Net-a-Porter',
        price: 1890,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      },
      {
        id: 'item-6',
        name: 'Cashmere Winter Evening Coat',
        brand: 'Brunello Cucinelli',
        retailer: 'Saks Fifth Avenue',
        price: 3450,
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['XS', 'S', 'M']
      },
      {
        id: 'item-7',
        name: 'Gold Metal Evening Clutch',
        brand: 'Bottega Veneta',
        retailer: 'FARFETCH',
        price: 2600,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
        category: 'accessories',
        inStock: true,
        sizeAvailable: ['One Size']
      }
    ]
  },
  {
    id: 'look-3',
    title: 'Modern Business Suit',
    subtitle: 'Sharp tailored blazer with wide-leg trousers',
    vibe: 'Work & Business',
    matchScore: 96,
    description: 'A crisp, professional suit that makes you look and feel confident in office meetings, presentations, and client dinners.',
    imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Office', 'Business', 'Blazer'],
    occasion: 'Office Meetings & Keynote Presentations',
    colorPalette: ['#1C1E24', '#4A4551', '#EBE2DC', '#B7A4D8', '#100C1A'],
    stylingTips: [
      'Wear the blazer buttoned with trousers for meetings, or open over a t-shirt for casual days',
      'Pair with pointed loafers or comfortable leather flats',
      'Carry a sleek laptop bag or leather tote'
    ],
    items: [
      {
        id: 'item-8',
        name: 'Tailored Hourglass Blazer',
        brand: 'Mugler Studio',
        retailer: 'SSENSE',
        price: 1450,
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['36', '38', '40', '42']
      },
      {
        id: 'item-9',
        name: 'Pleated Wide-Leg Trousers',
        brand: 'Totême',
        retailer: 'Nordstrom',
        price: 620,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      }
    ]
  },
  {
    id: 'look-4',
    title: 'Rainproof Street Parka',
    subtitle: 'Waterproof coat with comfortable layers',
    vibe: 'Modern Techwear',
    matchScore: 97,
    description: 'A stylish, weather-ready outfit with a waterproof parka coat designed for city walks and rainy days.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['All-Weather', 'Outerwear', 'Street'],
    occasion: 'Travel & Rainy City Days',
    colorPalette: ['#0B0D12', '#260058', '#FFADE3', '#F2C94C', '#D2BCFA'],
    stylingTips: [
      'Adjust the waist drawstrings for a snug, fitted silhouette',
      'Wear with waterproof ankle boots for all-day comfort'
    ],
    items: [
      {
        id: 'item-10',
        name: '3-in-1 Weatherproof Parka',
        brand: 'Sacai',
        retailer: 'StyleCue Exclusive',
        price: 1280,
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['M', 'L', 'XL']
      }
    ]
  },
  {
    id: 'look-5',
    title: 'Cozy Cashmere & Wool',
    subtitle: 'Soft cream knitwear with relaxed wool pants',
    vibe: 'Relaxed Comfort',
    matchScore: 99,
    description: 'Super soft, warm cashmere cape and cozy pants in neutral cream tones, great for weekend getaways and coffee dates.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Cashmere', 'Warm', 'Comfort'],
    occasion: 'Weekend Brunch & Travel',
    colorPalette: ['#F5F5F0', '#D6C7B2', '#8C7A6B', '#1E1B18'],
    stylingTips: [
      'Drape the cape over your shoulders for instant cozy style',
      'Pair with warm leather boots and sunglasses'
    ],
    items: [
      {
        id: 'item-11',
        name: '100% Cashmere Blanket Cape',
        brand: 'Loro Piana',
        retailer: 'Net-a-Porter',
        price: 2850,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['One Size']
      },
      {
        id: 'item-12',
        name: 'Silk-Wool Relaxed Pants',
        brand: 'Khaite',
        retailer: 'SSENSE',
        price: 890,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
        category: 'bottom',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L']
      }
    ]
  },
  {
    id: 'look-6',
    title: 'Classic Black Tuxedo',
    subtitle: 'Fitted black blazer with satin collar',
    vibe: 'Formal Black Tie',
    matchScore: 98,
    description: 'A timeless black tuxedo jacket with sleek satin lapels and black trousers for formal dinners and red carpet events.',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Formal', 'Black Tie', 'Classic'],
    occasion: 'Red Carpet & Black-Tie Dinners',
    colorPalette: ['#0A0A0E', '#6B21A8', '#E5E7EB', '#F59E0B'],
    stylingTips: [
      'Wear with crisp black trousers and shiny leather dress shoes',
      'Add crystal or pearl drop earrings for extra elegance'
    ],
    items: [
      {
        id: 'item-13',
        name: 'Satin Collar Smoking Blazer',
        brand: 'Saint Laurent',
        retailer: 'FARFETCH',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['36', '38', '40']
      }
    ]
  },
  {
    id: 'look-7',
    title: 'Statement Gold Gala Dress',
    subtitle: 'Eye-catching gold details with fine pleats',
    vibe: 'Statement Fashion',
    matchScore: 97,
    description: 'A showstopping dress with sculpted gold details and fine flowing pleats for special awards and milestone events.',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Special Event', 'Party', 'Gold'],
    occasion: 'Anniversary & Special Celebrations',
    colorPalette: ['#181024', '#D4AF37', '#E2E8F0', '#4C1D95'],
    stylingTips: [
      'Keep hairstyle sleek to highlight the neckline details',
      'Wear simple gold rings and strappy sandals'
    ],
    items: [
      {
        id: 'item-14',
        name: 'Gilded Bustier Long Dress',
        brand: 'Schiaparelli',
        retailer: 'StyleCue Exclusive',
        price: 6400,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
        category: 'outerwear',
        inStock: true,
        sizeAvailable: ['S', 'M']
      }
    ]
  },
  {
    id: 'look-8',
    title: 'Relaxed Weekend Shirt & Slacks',
    subtitle: 'Easy charcoal overshirt with clean slacks',
    vibe: 'Casual Weekend',
    matchScore: 95,
    description: 'An easy, good-looking everyday outfit featuring a soft charcoal overshirt, comfortable slacks, and a leather shoulder bag.',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80'
    ],
    tags: ['Casual', 'Weekend', 'Relaxed'],
    occasion: 'Brunch, Shopping & Weekend Walks',
    colorPalette: ['#1E1E24', '#B7A4D8', '#EAE6E1', '#000000'],
    stylingTips: [
      'Wear overshirt open with a plain white or gray t-shirt underneath',
      'Great with clean white leather sneakers'
    ],
    items: [
      {
        id: 'item-15',
        name: 'Charcoal Wool Overshirt',
        brand: 'Studio Nicholson',
        retailer: 'SSENSE',
        price: 495,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
        category: 'top',
        inStock: true,
        sizeAvailable: ['S', 'M', 'L', 'XL']
      }
    ]
  }
];

export const RUNWAY_SNAPSHOTS: RunwaySnapshot[] = [
  {
    id: 'runway-1',
    title: 'Milan Spring Fashion Show',
    designer: 'Atelier Valois',
    location: 'Milan, Italy',
    season: 'Spring / Summer 2026',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    category: 'Designer Look',
    palette: ['#1A102E', '#F2C94C', '#B7A4D8'],
    stylistNote: 'Clean proportions with relaxed high-waist pants.'
  },
  {
    id: 'runway-2',
    title: 'Paris Evening Showcase',
    designer: 'Maison Noir',
    location: 'Paris, France',
    season: 'Fall / Winter 2026',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    category: 'Silk Eveningwear',
    palette: ['#121414', '#D4AF37', '#38265A'],
    stylistNote: 'Smooth silk dress with a natural, flowing drape.'
  },
  {
    id: 'runway-3',
    title: 'Tokyo Streetwear Preview',
    designer: 'Sacai x StyleCue',
    location: 'Tokyo, Japan',
    season: 'Resort 2026',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'City Jacket',
    palette: ['#0B0D12', '#260058', '#FFADE3'],
    stylistNote: 'Lightweight zip jacket built for both rain and sun.'
  },
  {
    id: 'runway-4',
    title: 'New York City Suit Preview',
    designer: 'Khaite Studio',
    location: 'New York, USA',
    season: 'Fall Tailoring',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80',
    category: 'Work Suit',
    palette: ['#1C1E24', '#4A4551', '#EBE2DC'],
    stylistNote: 'Structured modern blazer with soft shoulder line.'
  },
  {
    id: 'runway-5',
    title: 'Kyoto Soft Texture Collection',
    designer: 'Issey Miyake Archives',
    location: 'Kyoto, Japan',
    season: 'Capsule 2026',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    category: 'Pleated Wear',
    palette: ['#F5F5F0', '#D6C7B2', '#8C7A6B'],
    stylistNote: 'Soft pleated fabrics that comfortably fit all body types.'
  },
  {
    id: 'runway-6',
    title: 'London Evening Salon',
    designer: 'Alexander McQueen Atelier',
    location: 'London, UK',
    season: 'Winter Collection',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    category: 'Evening Jacket',
    palette: ['#0A0A0E', '#6B21A8', '#E5E7EB'],
    stylistNote: 'Classic black blazer with velvet collar and crystal buttons.'
  }
];

export const RETAILER_PARTNERS: RetailerPartner[] = [
  {
    id: 'ret-1',
    name: 'FARFETCH',
    logo: 'FARFETCH',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    category: 'Global Fashion Marketplace',
    integrationType: 'Live Store Inventory Connection',
    stockSyncSpeed: 'Updated instantly',
    inventoryCount: 'Over 1.2M items'
  },
  {
    id: 'ret-2',
    name: 'Net-a-Porter',
    logo: 'NET-A-PORTER',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    category: 'Designer Clothing & Accessories',
    integrationType: 'New Arrivals & In-Stock Sync',
    stockSyncSpeed: 'Real-time updates',
    inventoryCount: 'Over 800k items'
  },
  {
    id: 'ret-3',
    name: 'SSENSE',
    logo: 'SSENSE',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    category: 'Modern Streetwear & Designer Wear',
    integrationType: 'Direct Store Sync',
    stockSyncSpeed: 'Instant stock check',
    inventoryCount: 'Over 650k items'
  },
  {
    id: 'ret-4',
    name: 'Saks Fifth Avenue',
    logo: 'SAKS FIFTH AVENUE',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    category: 'Luxury Department Store',
    integrationType: 'Store & Online Stock Feed',
    stockSyncSpeed: 'Fast automated check',
    inventoryCount: 'Over 950k items'
  },
  {
    id: 'ret-5',
    name: 'Nordstrom',
    logo: 'NORDSTROM',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    category: 'Designer & Everyday Brands',
    integrationType: 'Local Size & Store Delivery',
    stockSyncSpeed: 'Fast stock check',
    inventoryCount: 'Over 1.4M items'
  },
  {
    id: 'ret-6',
    name: 'Matches Fashion',
    logo: 'MATCHES',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    category: 'Curated Boutique Brands',
    integrationType: 'Runway & Capsule Collection Sync',
    stockSyncSpeed: 'Real-time updates',
    inventoryCount: 'Over 450k items'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "StyleCue makes shopping online easy and fun. The AI actually understands what styles look great on me, and I never waste time looking at clothes that don't fit.",
    author: "Nanda Malini",
    title: "Fashion Stylist & Writer",
    outletOrAvatar: "VOGUE TECH",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    isPress: true
  },
  {
    id: 't2',
    quote: "I haven't had to spend hours shopping in stores for months. In just a few seconds, StyleCue puts together complete outfits for my work trips, and everything fits when it arrives.",
    author: "Dominic Torretto",
    title: "Company Founder & Tech Leader",
    outletOrAvatar: "Client in New York",
    avatarUrl: '/dominic.png',
    isPress: false
  },
  {
    id: 't3',
    quote: "What I love most is that every outfit suggested is in stock in my size right now. You never fall in love with a piece only to find out it is sold out.",
    author: "Chandrika Jayawardena",
    title: "Style & Tech Journalist",
    outletOrAvatar: "ELLE DIGITAL",
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    isPress: true
  },
  {
    id: 't4',
    quote: "Our store returns dropped significantly because customers are getting the right sizes and outfits matched to their true body shape on the very first try.",
    author: "Paul Walker",
    title: "Online Store Director",
    outletOrAvatar: "FORBES",
    avatarUrl: '/paul.png',
    isPress: true
  }
];

export const STYLING_BENEFITS = [
  {
    id: 'b1',
    iconName: 'person_search',
    title: 'Outfits Made Just for You',
    description: 'Our smart AI learns what styles, colors, and cuts you love, so every recommendation feels natural and comfortable for you.',
    stat: '98%',
    statLabel: 'Outfit satisfaction rate',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    details: 'The more you use it, the better it gets at finding pieces that match your taste, body type, and daily routine.'
  },
  {
    id: 'b2',
    iconName: 'inventory_2',
    title: 'In-Stock in Your Size',
    description: 'We connect directly to top online stores, making sure every item shown is available in your size right now.',
    stat: '4.8M+',
    statLabel: 'Items checked in real time',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    details: 'Never feel let down by out-of-stock sizes. We check store inventories constantly across top brands.'
  },
  {
    id: 'b3',
    iconName: 'diamond',
    title: 'Wear Outfits with Confidence',
    description: 'Get clear, easy tips on how to pair tops, pants, jackets, shoes, and accessories together for any occasion.',
    stat: '10 mins',
    statLabel: 'Saved every morning getting ready',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    details: 'Helpful advice for work meetings, casual weekend dinners, parties, weddings, and travel.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Quick In-Store Input',
    subtitle: 'Tell us about your style and size',
    desc: "Shoppers enter body details, size, and occasion on the store's kiosk or tablet—no account needed.",
    badge: 'Quick & Easy',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '02',
    title: 'Instant Store AI Matching',
    subtitle: 'Finding items in your exact size',
    desc: 'The AI stylist analyzes your active store inventory to recommend complete, stylish outfit combinations.',
    badge: 'Instant Search',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '03',
    title: 'Review & Selection Summary',
    subtitle: 'Styled for your specific events',
    desc: 'Shoppers preview their favorite pieces and confirm their selection in seconds.',
    badge: 'Full Outfits',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    step: '04',
    title: 'Automated Staff Notification',
    subtitle: 'Buy your favorites in one click',
    desc: 'A session ID is created and sent instantly to sales staff, who fetch the exact items to the fitting room.',
    badge: 'Fast & Secure',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    q: "How does StyleCue know which size will fit me?",
    a: "We check the sizing guides and customer fit reviews from over 400 clothing brands. By using your basic measurements and fit preferences, we recommend the exact size that will fit you best."
  },
  {
    q: "Can I use clothes I already have in my closet?",
    a: "Yes! You can upload photos of your favorite shirts, jackets, or pants. Our AI will build fresh new outfits combining your owned clothes with new pieces."
  },
  {
    q: "Is StyleCue free to use?",
    a: "Yes, StyleCue is completely free to take style quizzes, get outfit ideas, and shop items. We also offer an optional VIP membership ($29/month) for unlimited personalized outfit packs and direct stylist advice."
  },
  {
    q: "How do clothing stores and brands partner with StyleCue?",
    a: "Stores can easily connect their product catalogs with our system to show their in-stock clothes to shoppers looking for ready-to-wear outfits."
  }
];
