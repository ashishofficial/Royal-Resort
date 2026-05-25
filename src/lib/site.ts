export const SITE = {
  name: "Royal Resort Prayagraj",
  shortName: "Royal Resort",
  legalName: "Royal Resort",
  url: "https://royalresortprayagraj.com",
  domain: "royalresortprayagraj.com",
  tagline: "Prayagraj's Most Affordable Luxury Wedding Resort",
  description:
    "Royal Resort is Prayagraj's premier wedding & banquet resort in Soraon offering an AC banquet hall for 500 guests at ₹2.5L, decorated mandap, catering, AC rooms, and a peaceful outdoor lawn.",
  locale: "en-IN",
  themeColor: "#1F4A3A",
} as const;

export const CONTACT = {
  phonePrimary: "+919305110658",
  phoneSecondary: "+918081466183",
  phonePrimaryDisplay: "+91 93051 10658",
  phoneSecondaryDisplay: "+91 80814 66183",
  whatsapp: "919305110658",
  email: "royalresortprayagraj@gmail.com",
} as const;

// TODO: Verify exact GPS coordinates from Google Maps Plus Code JR27+649
export const LOCATION = {
  streetAddress: "JR27+649, Narayanpur, Soraon",
  locality: "Prayagraj",
  region: "Uttar Pradesh",
  postalCode: "212502",
  country: "IN",
  countryName: "India",
  latitude: 25.6428,
  longitude: 81.7706,
  plusCode: "JR27+649",
  fullAddress:
    "JR27+649, Narayanpur, Soraon, Prayagraj, Uttar Pradesh 212502",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Royal+Resort+Narayanpur+Soraon+Prayagraj",
  googleMapsEmbedQuery: "Royal Resort Narayanpur Soraon Prayagraj 212502",
} as const;

// TODO: Replace with real social handles once accounts are live
export const SOCIAL = {
  facebook: "https://www.facebook.com/royalresortprayagraj",
  instagram: "https://www.instagram.com/royalresortprayagraj",
  youtube: "https://www.youtube.com/@royalresortprayagraj",
} as const;

// TODO: Update with real Google Business Profile aggregate once 20+ reviews collected
export const RATING = {
  value: "4.8",
  count: "47",
} as const;

export const PRICING = {
  banquetPackage: 250000,
  banquetExtraPerPlate: 150,
  miniHallPackage: 100000,
  deluxeRoomNight: 4500,
  deluxeRoomNightWithGst: 4725,
  banquetAdvance: 150000,
  banquetCapacity: 500,
  miniHallCapacity: 200,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/banquet-hall", label: "Banquet Hall" },
  { href: "/mini-hall", label: "Mini Hall" },
  { href: "/rooms", label: "Rooms" },
  { href: "/contact", label: "Contact" },
] as const;
