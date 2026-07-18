/**
 * Julian Voss | Legacy Estates — Central data layer
 * All listings, collections, intelligence, testimonials are fictional.
 */

export type Currency = "EUR" | "USD" | "CHF";

export interface PropertyListing {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  country: string;
  price: number;
  currency: Currency;
  priceLabel: string;
  image: string;
  gallery: string[];
  beds: number;
  baths: number;
  sqm: number;
  acres: number;
  yearBuilt: number;
  category: "Contemporary" | "Historic" | "Island" | "Penthouse" | "Mountain" | "Vineyard";
  status: "Available" | "Private Treaty" | "Quietly Offered";
  highlights: string[];
  story: string[];
  coordinates: { lat: number; lng: number };
  virtualTour: boolean;
  featured: boolean;
}

import { assetUrl as ASSET } from "@/lib/assets";

export const PROPERTIES: PropertyListing[] = [
  {
    slug: "villa-aurelia-cap-ferrat",
    name: "Villa Aurelia",
    tagline: "A contemporary palace above the Côte d'Azur",
    location: "Cap Ferrat, France",
    region: "French Riviera",
    country: "France",
    price: 72000000,
    currency: "EUR",
    priceLabel: "€72,000,000",
    image: ASSET("hero_villa_dusk"),
    gallery: [ASSET("hero_villa_dusk"), ASSET("property_contemporary_palace"), ASSET("lifestyle_yacht_marina")],
    beds: 7,
    baths: 9,
    sqm: 1840,
    acres: 4.2,
    yearBuilt: 2019,
    category: "Contemporary",
    status: "Quietly Offered",
    highlights: [
      "180m infinity pool carved into the cliff",
      "Private funicular to a sealed sea cove",
      "Travertine spa with hammam & cold plunge",
      "Subterranean cellar for 6,000 bottles",
      "Helipad approved, 12-min from Nice",
    ],
    story: [
      "Perched on the last unbuilt promontory of Cap Ferrat, Villa Aurelia is a study in negative space — a building that seems to have been carved from the rock itself rather than placed upon it.",
      "Travertine, bronze and quarter-sawn oak compose a material palette that ages toward silver rather than gold. Every window frames the sea as a deliberate composition, never as background.",
      "Offered quietly to a single buyer who values discretion above display, the estate has never been photographed for publication.",
    ],
    coordinates: { lat: 43.6947, lng: 7.1642 },
    virtualTour: true,
    featured: true,
  },
  {
    slug: "isle-serenity-maldives",
    name: "Isle of Serenity",
    tagline: "A private atoll, entirely your own",
    location: "North Malé Atoll, Maldives",
    region: "Indian Ocean",
    country: "Maldives",
    price: 85000000,
    currency: "EUR",
    priceLabel: "€85,000,000",
    image: ASSET("property_private_island"),
    gallery: [ASSET("property_private_island"), ASSET("lifestyle_yacht_marina"), ASSET("hero_villa_dusk")],
    beds: 5,
    baths: 7,
    sqm: 980,
    acres: 14,
    yearBuilt: 2021,
    category: "Island",
    status: "Private Treaty",
    highlights: [
      "Entire uninhabited atoll with 14 acres of lagoon",
      "Deep-water mooring for vessels to 90m",
      "Solar micro-grid, full water autonomy",
      "Resident staff pavilion for 8",
      "Resident marine biologist & dive master",
    ],
    story: [
      "Twelve hundred kilometres of ocean separate the Isle of Serenity from the nearest paparazzo. It is, in the most literal sense, a place that cannot be reached by accident.",
      "The villa dissolves into the palm canopy — pale stone, dark teak, retractable walls that turn living rooms into the trade winds.",
      "Title includes a 99-year sovereign lease, structurally identical to freehold for the purposes of legacy transmission.",
    ],
    coordinates: { lat: 4.4392, lng: 73.5059 },
    virtualTour: true,
    featured: true,
  },
  {
    slug: "chateau-lumiere-bordeaux",
    name: "Château Lumière",
    tagline: "A classified estate, its own appellation",
    location: "Saint-Émilion, France",
    region: "Bordeaux",
    country: "France",
    price: 48000000,
    currency: "EUR",
    priceLabel: "€48,000,000",
    image: ASSET("property_chateau_vineyard"),
    gallery: [ASSET("property_chateau_vineyard"), ASSET("collection_historic_estate_interior"), ASSET("lifestyle_library_detail")],
    beds: 12,
    baths: 11,
    sqm: 3200,
    acres: 86,
    yearBuilt: 1742,
    category: "Vineyard",
    status: "Available",
    highlights: [
      "86 hectares of classified grand cru vines",
      "Restored 18th-century chartreuse with original boiseries",
      "Working winery, 2018 cellars, 40,000-case capacity",
      "Orangerie, formal gardens, chapel",
      "Includes château-brand trademark & inventory",
    ],
    story: [
      "Château Lumière has produced wine continuously since 1742. The estate survived revolution, phylloxera, and two occupations without losing a single vintage year to neglect.",
      "The chartreuse was restored between 2014 and 2019 under the supervision of the Monuments Historiques, returning the original boiseries, marble, and parquet de Versailles to their first state.",
      "The sale includes the brand, the inventory, and the cellar team — a turnkey legacy for a buyer who understands that a great wine is a long argument with the future.",
    ],
    coordinates: { lat: 44.8378, lng: -0.5792 },
    virtualTour: true,
    featured: true,
  },
  {
    slug: "skyhouse-monaco",
    name: "Skyhouse Monaco",
    tagline: "A duplex penthouse above the principality",
    location: "Monte Carlo, Monaco",
    region: "Côte d'Azur",
    country: "Monaco",
    price: 39000000,
    currency: "EUR",
    priceLabel: "€39,000,000",
    image: ASSET("property_penthouse_skyline"),
    gallery: [ASSET("property_penthouse_skyline"), ASSET("collection_modern_art_loft"), ASSET("lifestyle_library_detail")],
    beds: 4,
    baths: 5,
    sqm: 620,
    acres: 0,
    yearBuilt: 2023,
    category: "Penthouse",
    status: "Available",
    highlights: [
      "Full-floor duplex, 360° terrace, 9m ceiling",
      "Private elevator & sealed resident core",
      "Glass-walled study overlooking the harbour",
      "Wine wall, climate armoury, screening room",
      "Two resident car bays with charge vaults",
    ],
    story: [
      "Skyhouse occupies the upper two floors of Tour Aria — the only tower in Monaco whose silhouette was approved without compromise to the original concept.",
      "From the terrace, the eye travels from the Rock to the harbour to the Alps in a single sweep. At night, the same view becomes a constellation of moving lights.",
      "A residence for someone who has outgrown the notion that privacy requires a wall.",
    ],
    coordinates: { lat: 43.7384, lng: 7.4246 },
    virtualTour: true,
    featured: true,
  },
  {
    slug: "maison-blanc-verbier",
    name: "Maison Blanc",
    tagline: "A contemporary lodge embedded in the alp",
    location: "Verbier, Switzerland",
    region: "Valais",
    country: "Switzerland",
    price: 32000000,
    currency: "CHF",
    priceLabel: "CHF 32,000,000",
    image: ASSET("property_mountain_lodge"),
    gallery: [ASSET("property_mountain_lodge"), ASSET("lifestyle_library_detail"), ASSET("property_penthouse_skyline")],
    beds: 6,
    baths: 6,
    sqm: 740,
    acres: 1.8,
    yearBuilt: 2020,
    category: "Mountain",
    status: "Quietly Offered",
    highlights: [
      "Ski-in / ski-out on the Four Valleys",
      "Spa, indoor pool, climbing wall",
      "Glass-walled wine cave for 2,400 bottles",
      "Boot room with custom last-fitting service",
      "Secured access, monitored approach",
    ],
    story: [
      "Maison Blanc is sunk two thirds of its volume into the slope, so that from the approach road only a single horizontal line of warm light betrays its presence.",
      "Inside, the architecture turns: pale oak, brushed limestone, and a long central hearth that anchors the great room.",
      "The terrace is the only place in Verbier where the morning sun arrives before the rest of the village has woken.",
    ],
    coordinates: { lat: 46.0966, lng: 7.2286 },
    virtualTour: true,
    featured: false,
  },
  {
    slug: "palazzo-infinity-rome",
    name: "Palazzo Infinity",
    tagline: "A contemporary palace at the edge of the city",
    location: "Olgiata, Rome, Italy",
    region: "Lazio",
    country: "Italy",
    price: 21000000,
    currency: "EUR",
    priceLabel: "€21,000,000",
    image: ASSET("property_contemporary_palace"),
    gallery: [ASSET("property_contemporary_palace"), ASSET("collection_modern_art_loft"), ASSET("hero_villa_dusk")],
    beds: 8,
    baths: 10,
    sqm: 1500,
    acres: 6,
    yearBuilt: 2017,
    category: "Contemporary",
    status: "Available",
    highlights: [
      "Reflecting pools flanking the main elevation",
      "Private 18-hole golf adjacency",
      "Equestrian centre & 12-box stables",
      "Helipad, 14-min to Fiumicino",
      "Subterranean spa & screening salon",
    ],
    story: [
      "Palazzo Infinity reads as a horizontal line suspended over water — the reflecting pools double the building into a symmetry that the eye accepts as inevitable.",
      "The interior is deliberately spare: a stage for the buyer's collection, not a statement of its own.",
      "Twenty-five minutes from the Spanish Steps, yet the only sound at dusk is the koi pond at the entrance court.",
    ],
    coordinates: { lat: 42.0197, lng: 12.2742 },
    virtualTour: true,
    featured: false,
  },
  {
    slug: "townhouse-belgrave",
    name: "Belgrave Townhouse",
    tagline: "A restored stucco residence, quietly modernised",
    location: "Belgravia, London, United Kingdom",
    region: "London",
    country: "United Kingdom",
    price: 18500000,
    currency: "EUR",
    priceLabel: "€18,500,000",
    image: ASSET("collection_historic_estate_interior"),
    gallery: [ASSET("collection_historic_estate_interior"), ASSET("lifestyle_library_detail"), ASSET("property_penthouse_skyline")],
    beds: 5,
    baths: 6,
    sqm: 560,
    acres: 0,
    yearBuilt: 1838,
    category: "Historic",
    status: "Private Treaty",
    highlights: [
      "Grade I-listed stucco façade, restored 2022",
      "Bespoke joinery in English walnut",
      "Lower-ground cinema & wine vault",
      "Landscaped mews garden",
      "Secure resident parking, two bays",
    ],
    story: [
      "One of the last intact stucco terraces in Belgravia, the townhouse was restored over three years by a curator rather than a developer.",
      "Every cornice, fanlight, and architrave was returned to its 1838 profile; behind them, the services are entirely 2024.",
      "A residence for a buyer who reads a city by its silence, not its skyline.",
    ],
    coordinates: { lat: 51.4947, lng: -0.1512 },
    virtualTour: false,
    featured: false,
  },
  {
    slug: "loft-montmartre",
    name: "Atelier Montmartre",
    tagline: "A double-volume collector's loft",
    location: "Montmartre, Paris, France",
    region: "Paris",
    country: "France",
    price: 15500000,
    currency: "EUR",
    priceLabel: "€15,500,000",
    image: ASSET("collection_modern_art_loft"),
    gallery: [ASSET("collection_modern_art_loft"), ASSET("property_penthouse_skyline"), ASSET("lifestyle_library_detail")],
    beds: 3,
    baths: 3,
    sqm: 410,
    acres: 0,
    yearBuilt: 1908,
    category: "Penthouse",
    status: "Available",
    highlights: [
      "Double-height atelier, 7m north light",
      "Original Eiffel-era steel columns",
      "Private rooftop terrace with city views",
      "Curatorial lighting & climate control",
      "Secure art lift to the entry hall",
    ],
    story: [
      "Originally a sculptor's atelier, the space retains its 7-metre north light and the steel columns that were forged in the same foundry as the Tower.",
      "A collector's residence: every wall is museum grade, every system tuned to conservation rather than comfort — though comfort has not been neglected.",
      "From the terrace, the rooftops of Paris form the only skyline that needs no introduction.",
    ],
    coordinates: { lat: 48.8867, lng: 2.3431 },
    virtualTour: true,
    featured: false,
  },
];

export interface PrivateCollection {
  slug: string;
  title: string;
  summary: string;
  image: string;
  count: number;
  priceFrom: number;
  priceFromLabel: string;
}

export const COLLECTIONS: PrivateCollection[] = [
  {
    slug: "contemporary-palaces",
    title: "Contemporary Palaces",
    summary:
      "Architecture as autobiography — nine modern residences commissioned by their first owners as a single, unrepeatable gesture.",
    image: ASSET("property_contemporary_palace"),
    count: 9,
    priceFrom: 24000000,
    priceFromLabel: "From €24,000,000",
  },
  {
    slug: "private-islands",
    title: "Private Islands & Atolls",
    summary:
      "Five sovereign-feeling islands offered with full infrastructure, resident staff, and a covenant of absolute exclusivity.",
    image: ASSET("property_private_island"),
    count: 5,
    priceFrom: 48000000,
    priceFromLabel: "From €48,000,000",
  },
  {
    slug: "historic-estates",
    title: "Historic Estates & Châteaux",
    summary:
      "Twelve classified European estates, each restored under architectural supervision and offered with documented provenance.",
    image: ASSET("collection_historic_estate_interior"),
    count: 12,
    priceFrom: 18500000,
    priceFromLabel: "From €18,500,000",
  },
  {
    slug: "urban-penthouses",
    title: "Urban Penthouses & Sky Residences",
    summary:
      "Seven apex residences across Monaco, Paris, London and New York — the highest address in each city.",
    image: ASSET("property_penthouse_skyline"),
    count: 7,
    priceFrom: 15500000,
    priceFromLabel: "From €15,500,000",
  },
  {
    slug: "vineyard-estates",
    title: "Vineyard Estates",
    summary:
      "Four working classified vineyards offered as turnkey legacies — brand, inventory, and cellar team included.",
    image: ASSET("property_chateau_vineyard"),
    count: 4,
    priceFrom: 48000000,
    priceFromLabel: "From €48,000,000",
  },
  {
    slug: "alpine-retreats",
    title: "Alpine Retreats",
    summary:
      "Six contemporary lodges embedded into the slopes of Verbier, Gstaad and Lech — ski-in, ski-out, and unseen.",
    image: ASSET("property_mountain_lodge"),
    count: 6,
    priceFrom: 22000000,
    priceFromLabel: "From €22,000,000",
  },
];

export interface IntelligenceArticle {
  slug: string;
  title: string;
  dek: string;
  category: "Market" | "Macro" | "Outlook" | "Briefing";
  date: string;
  readMinutes: number;
  author: string;
  image: string;
  body: string[];
  datum?: { label: string; value: string; delta?: string }[];
}

export const INTELLIGENCE: IntelligenceArticle[] = [
  {
    slug: "cote-dazur-2026-outlook",
    title: "The Côte d'Azur, Re-priced",
    dek: "Why the 2026 season marks the first structural repricing of Cap Ferrat and Saint-Jean-Cap-Ferrat since 2015.",
    category: "Outlook",
    date: "July 2026",
    readMinutes: 9,
    author: "Julian Voss",
    image: ASSET("hero_villa_dusk"),
    body: [
      "Between January and June 2026, the average price per square metre on Cap Ferrat closed at €48,200 — a 14.2% increase on the same window of 2025, and the first time the figure has crossed €45,000 in the recorded series.",
      "The movement is not driven by general demand. It is driven by scarcity: only three unbuilt promontories remain on the cape, and two of those are under sealed offers as this report is published.",
      "The implication for legacy buyers is structural rather than cyclical. The window for acquiring a first-line Cap Ferrat estate at a price anchored in the 2018–2024 series is, for practical purposes, closing.",
    ],
    datum: [
      { label: "Avg €/sqm", value: "€48,200", delta: "+14.2% YoY" },
      { label: "Days on market", value: "61", delta: "−23%" },
      { label: "Sealed offers", value: "3 active" },
    ],
  },
  {
    slug: "private-islands-liquidity",
    title: "The Quiet Liquidity of Private Islands",
    dek: "Islands have outperformed every other luxury segment over five years — and remain the least understood asset in the category.",
    category: "Market",
    date: "June 2026",
    readMinutes: 12,
    author: "Julian Voss",
    image: ASSET("property_private_island"),
    body: [
      "Over the five years to 2026, the private-island segment delivered a compound annual appreciation of 9.8% — roughly double the rate of urban penthouses over the same period.",
      "The driver is not speculation but supply: the number of islands that can support a residence, a desalination plant, and a sovereign-grade security perimeter is, by physical necessity, fixed.",
      "For legacy planning, islands offer an unusual property: they are the only category in which the buyer can credibly promise descendants that the asset will not be overlooked by future development.",
    ],
    datum: [
      { label: "5yr CAGR", value: "9.8%" },
      { label: "Median days listed", value: "312" },
      { label: "Active inventory", value: "5 islands" },
    ],
  },
  {
    slug: "monaco-supply-constraint",
    title: "Monaco: The Arithmetic of a Fixed Skyline",
    dek: "With fewer than 200 new apex residences deliverable before 2030, the principality's ceiling is now structural.",
    category: "Macro",
    date: "May 2026",
    readMinutes: 7,
    author: "Julian Voss",
    image: ASSET("property_penthouse_skyline"),
    body: [
      "Monaco's height ordinance, reaffirmed in 2024, limits new towers to a profile that respects the existing silhouette of the Rock. The result is a hard ceiling on apex supply.",
      "Between 2026 and 2030, fewer than 200 residences above 500 sqm will be delivered. Of those, the majority are pre-sold to existing residents trading upward.",
      "The implication: apex Monaco is now a closed market for new entrants. Price is set by the buyer who leaves, not the buyer who arrives.",
    ],
    datum: [
      { label: "New apex to 2030", value: "<200" },
      { label: "Pre-sold", value: "73%" },
      { label: "Avg €/sqm", value: "€61,400", delta: "+6.1% YoY" },
    ],
  },
  {
    slug: "vineyard-as-legacy",
    title: "The Vineyard as Legacy Instrument",
    dek: "Why classified Bordeaux estates have become the preferred vehicle for multi-generational transfer in 2026.",
    category: "Briefing",
    date: "April 2026",
    readMinutes: 10,
    author: "Julian Voss",
    image: ASSET("property_chateau_vineyard"),
    body: [
      "A classified vineyard is one of the few assets a family can transmit across three generations without loss of identity. The brand, the land, and the cellar team travel together as a single instrument.",
      "In 2026, the average Bordeaux grand cru transaction closed at 7.4 times EBITDA — a multiple that reflects the scarcity of classified supply more than the cash flow of the estate.",
      "For the right buyer, the estate becomes a working institution: a place where a family's name is renewed each September, rather than defended each quarter.",
    ],
    datum: [
      { label: "Avg multiple", value: "7.4× EBITDA" },
      { label: "Active listings", value: "4 estates" },
      { label: "Median vintage value", value: "€420/btl" },
    ],
  },
];

export interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
  year: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Julian did not sell us a house. He understood a decision we had not yet articulated to ourselves, and then found the place that made it real. We have never looked at another agent since.",
    attribution: "Family office, Geneva",
    context: "Acquisition of a Valais lodge, 2023",
    year: "2023",
  },
  {
    quote:
      "The transaction was completed without a single photograph leaving the room. That is not a service one buys. It is a posture one recognises.",
    attribution: "Founder, technology (anonymised)",
    context: "Disposition of a Cap Ferrat estate, 2024",
    year: "2024",
  },
  {
    quote:
      "We have worked with the largest houses in three countries. Julian is the only advisor who has never once asked us to lower our standard. He raised his instead.",
    attribution: "Private trust, London",
    context: "Three-generation acquisition programme, 2022–2025",
    year: "2025",
  },
  {
    quote:
      "He told us, plainly, not to buy the property we had flown six hours to see. We did not. Eighteen months later we understood why. That is the value of an advisor.",
    attribution: "Industrialist, Milan",
    context: "Averted acquisition, 2024",
    year: "2024",
  },
  {
    quote:
      "Discretion is the absence of vanity. Julian is the only person I have referred to my brother.",
    attribution: "Collector, Monaco",
    context: "Penthouse acquisition, 2025",
    year: "2025",
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
}

export const ADVISOR_TIMELINE: TimelineEntry[] = [
  {
    year: "1998",
    title: "First transaction",
    text: "Began as a solo advisor on the Côte d'Azur, brokering a single estate in his first year — a transaction that closed without ever reaching an open listing.",
  },
  {
    year: "2004",
    title: "First eight-figure sale",
    text: "Advised the disposition of a Cap Ferrat estate at a price that, at the time, established a new recorded high for the cape.",
  },
  {
    year: "2011",
    title: "Cross-border practice",
    text: "Extended the practice into Monaco, Switzerland and London — operating, as now, without partners or franchise.",
  },
  {
    year: "2017",
    title: "€500M career volume",
    text: "Crossed half a billion euros in cumulative career sales volume, entirely as a sole practitioner.",
  },
  {
    year: "2021",
    title: "The first island",
    text: "Advised on the first sovereign-lease private island transaction in his practice — a category he has since come to specialise in.",
  },
  {
    year: "2024",
    title: "€1.2B career volume",
    text: "Crossed €1.2 billion in career sales volume. The practice remains solo: no junior advisors, no franchised listings, no public marketing.",
  },
];

export const ADVISOR_STATS = [
  { label: "Career sales volume", value: "€1.2B+" },
  { label: "Years in practice", value: "28" },
  { label: "Active clients", value: "≤ 40" },
  { label: "Partners or franchisees", value: "None" },
];

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Signature Properties", to: "/properties" },
  { label: "Private Collections", to: "/collections" },
  { label: "Market Intelligence", to: "/intelligence" },
  { label: "The Advisor", to: "/advisor" },
  { label: "Client Legacy", to: "/legacy" },
  { label: "Private Salon", to: "/salon" },
  { label: "Contact", to: "/contact" },
];