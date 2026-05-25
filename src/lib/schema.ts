import { CONTACT, LOCATION, PRICING, RATING, SITE, SOCIAL } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: LOCATION.streetAddress,
  addressLocality: LOCATION.locality,
  addressRegion: LOCATION.region,
  postalCode: LOCATION.postalCode,
  addressCountry: LOCATION.country,
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: LOCATION.latitude,
  longitude: LOCATION.longitude,
};

const amenities = [
  "Air Conditioning",
  "Free Parking",
  "In-house Catering",
  "Accommodation Rooms",
  "Decorated Mandap",
  "Outdoor Lawn",
  "Designer Stage",
  "Bridal Room",
  "Power Backup",
  "Sound System",
].map((name) => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
}));

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EventVenue", "Resort"],
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: ["Royal Resort Soraon", "Royal Resort Narayanpur"],
        url: SITE.url,
        logo: `${SITE.url}/logo.png`,
        image: [
          `${SITE.url}/images/banquet-hall-hero.jpg`,
          `${SITE.url}/images/mandap-decorated.jpg`,
          `${SITE.url}/images/lawn-evening.jpg`,
        ],
        description: SITE.description,
        telephone: [CONTACT.phonePrimary, CONTACT.phoneSecondary],
        email: CONTACT.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer, Card",
        address: postalAddress,
        geo,
        hasMap: LOCATION.googleMapsUrl,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        maximumAttendeeCapacity: PRICING.banquetCapacity,
        amenityFeature: amenities,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: RATING.value,
          reviewCount: RATING.count,
        },
        sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube],
        areaServed: [
          { "@type": "City", name: "Prayagraj" },
          { "@type": "City", name: "Allahabad" },
          { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": ORG_ID },
        inLanguage: SITE.locale,
      },
    ],
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

type FAQItem = { question: string; answer: string };

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function banquetServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/banquet-hall#service`,
    serviceType: "Wedding Banquet Hall Rental",
    name: "Royal Banquet Hall — Wedding Package",
    description:
      "Fully air-conditioned banquet hall for 500 guests with decorated mandap, designer stage, two AC rooms, jaimala & milni mala, catering kitchen, 20 waiters, and complete flower & light decoration.",
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Prayagraj" },
      { "@type": "City", name: "Allahabad" },
    ],
    audience: { "@type": "Audience", audienceType: "Wedding couples and families" },
    offers: {
      "@type": "Offer",
      price: PRICING.banquetPackage,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-03-31",
      url: `${SITE.url}/banquet-hall`,
      description:
        "Royal Banquet Hall wedding package for 500 guests including AC hall, decorated mandap, jaimala, milni mala, catering space, 2 AC rooms, designer stage, 20 waiters, and flower decoration. Additional plates at ₹150 each.",
    },
  };
}

export function miniHallServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/mini-hall#service`,
    serviceType: "Event Hall Rental",
    name: "Royal Mini Hall — Haldi, Mehndi, Birthday & Engagement Package",
    description:
      "Air-conditioned mini hall for 200 guests perfect for haldi, mehndi, birthday parties, engagements, anniversaries, and intimate functions. Includes decorated stage, 2 AC rooms, and 8 waiters.",
    provider: { "@id": ORG_ID },
    areaServed: [{ "@type": "City", name: "Prayagraj" }],
    offers: {
      "@type": "Offer",
      price: PRICING.miniHallPackage,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/mini-hall`,
    },
  };
}

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "@id": `${SITE.url}/rooms#hotel`,
    name: SITE.name,
    description:
      "Deluxe air-conditioned rooms at Royal Resort Prayagraj in Soraon, ideal for wedding guests, families, and couples. ₹4,500 per night including breakfast.",
    url: `${SITE.url}/rooms`,
    telephone: CONTACT.phonePrimary,
    address: postalAddress,
    geo,
    priceRange: "₹₹",
    starRating: { "@type": "Rating", ratingValue: "3" },
    amenityFeature: amenities,
    checkinTime: "12:00",
    checkoutTime: "11:00",
    makesOffer: {
      "@type": "Offer",
      name: "Deluxe Room — Per Night",
      price: PRICING.deluxeRoomNight,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        unitText: "night",
        minValue: 1,
      },
    },
  };
}
