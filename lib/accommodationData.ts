export interface accommodationDataProps {
  title: string;
  rating: number;
  duration: [days: number, nights: number];
  flights: number;
  hotel: number;
  transfers: number;
  activities: number;
  details: string[];
  price: number;
  imageURL: string;
  location: string;
  id: number;
}

export const ACCOMMODATIONDATA: accommodationDataProps[] = [
  {
    title: "Parisian Adventure",
    rating: 4.7,
    duration: [5, 4], // 5 days, 4 nights
    flights: 2,
    hotel: 2,
    transfers: 2,
    activities: 8,
    details: ["Eiffel Tower visit", "Louvre Museum tour"],
    price: 1800,
    imageURL: "/images/accommodation/paris.jpg",
    location: "France",
    id: 0,
  },
  {
    title: "New York Experience",
    rating: 4.5,
    duration: [4, 3], // 4 days, 3 nights
    flights: 1,
    hotel: 1,
    transfers: 1,
    activities: 10,
    details: ["Broadway show tickets", "Statue of Liberty tour"],
    price: 1600,
    imageURL: "/images/accommodation/new_york.jpg",
    location: "United States of America",
    id: 1,
  },
  {
    title: "Serengeti Safari",
    rating: 4.9,
    duration: [6, 5], // 6 days, 5 nights
    flights: 2,
    hotel: 2,
    transfers: 2,
    activities: 6,
    details: ["Game drives", "Luxury tent accommodation"],
    price: 2500,
    imageURL: "/images/accommodation/serengeti.jpg",
    location: "Tanzania",
    id: 2,
  },
  {
    title: "Tokyo Exploration",
    rating: 4.6,
    duration: [7, 6], // 7 days, 6 nights
    flights: 1,
    hotel: 2,
    transfers: 1,
    activities: 9,
    details: ["Visit to Tokyo Disneyland", "Shibuya crossing experience"],
    price: 2000,
    imageURL: "/images/accommodation/tokyo.jpg",
    location: "Japan",
    id: 3,
  },
  {
    title: "Rome Discovery",
    rating: 4.8,
    duration: [5, 4], // 5 days, 4 nights
    flights: 1,
    hotel: 2,
    transfers: 2,
    activities: 7,
    details: ["Colosseum tour", "Vatican City visit"],
    price: 1900,
    imageURL: "/images/accommodation/rome.jpg",
    location: "Italy",
    id: 4,
  },
  {
    title: "Rio de Janeiro Escape",
    rating: 4.4,
    duration: [6, 5], // 6 days, 5 nights
    flights: 1,
    hotel: 2,
    transfers: 1,
    activities: 8,
    details: ["Christ the Redeemer tour", "Copacabana Beach relaxation"],
    price: 2200,
    imageURL: "/images/accommodation/rio.jpg",
    location: "Brazil",
    id: 5,
  },
  {
    title: "London Discovery",
    rating: 4.7,
    duration: [5, 4], // 5 days, 4 nights
    flights: 1,
    hotel: 3,
    transfers: 2,
    activities: 7,
    details: ["Tower of London tour", "West End show tickets"],
    price: 1700,
    imageURL: "/images/accommodation/london.jpg",
    location: "England",
    id: 6,
  },
  {
    title: "Sydney Adventure",
    rating: 4.6,
    duration: [6, 5], // 6 days, 5 nights
    flights: 2,
    hotel: 3,
    transfers: 1,
    activities: 8,
    details: ["Sydney Opera House tour", "Harbour Bridge climb"],
    price: 2100,
    imageURL: "/images/accommodation/sydney.jpg",
    location: "Australia",
    id: 7,
  },
  {
    title: "Dubai Experience",
    rating: 4.5,
    duration: [4, 3], // 4 days, 3 nights
    flights: 1,
    hotel: 2,
    transfers: 1,
    activities: 6,
    details: ["Burj Khalifa observation deck", "Desert safari"],
    price: 1800,
    imageURL: "/images/accommodation/dubai.jpg",
    location: "United Arab Emirates",
    id: 8,
  },
  {
    title: "Cape Town Exploration",
    rating: 4.8,
    duration: [5, 4], // 5 days, 4 nights
    flights: 2,
    hotel: 2,
    transfers: 1,
    activities: 7,
    details: ["Table Mountain hike", "Cape Winelands tour"],
    price: 2000,
    imageURL: "/images/accommodation/cape_town.jpg",
    location: "South Africa",
    id: 9,
  },

  {
    title: "Bali Retreat",
    rating: 4.7,
    duration: [7, 6], // 7 days, 6 nights
    flights: 2,
    hotel: 3,
    transfers: 3,
    activities: 8,
    details: ["Ubud rice terraces", "Beachfront villa accommodation"],
    price: 2300,
    imageURL: "/images/accommodation/bali.jpg",
    location: "Bali",
    id: 10,
  },
  {
    title: "Amsterdam Getaway",
    rating: 4.6,
    duration: [4, 3], // 4 days, 3 nights
    flights: 1,
    hotel: 1,
    transfers: 1,
    activities: 6,
    details: ["Van Gogh Museum visit", "Canal cruise"],
    price: 1600,
    imageURL: "/images/accommodation/amsterdam.jpg",
    location: "Netherlands",
    id: 11,
  },
  {
    title: "Barcelona Escape",
    rating: 4.8,
    duration: [5, 4], // 5 days, 4 nights
    flights: 1,
    hotel: 2,
    transfers: 1,
    activities: 7,
    details: ["Sagrada Familia tour", "Tapas tasting"],
    price: 1900,
    imageURL: "/images/accommodation/barcelona.jpg",
    location: "Spain",
    id: 12,
  },
  {
    title: "Venice Retreat",
    rating: 4.5,
    duration: [6, 5], // 6 days, 5 nights
    flights: 1,
    hotel: 3,
    transfers: 1,
    activities: 8,
    details: ["Gondola ride", "St. Mark's Basilica visit"],
    price: 2100,
    imageURL: "/images/accommodation/venice.jpg",
    location: "Italy",
    id: 13,
  },
  {
    title: "Prague Discovery",
    rating: 4.6,
    duration: [5, 4], // 5 days, 4 nights
    flights: 1,
    hotel: 1,
    transfers: 1,
    activities: 7,
    details: ["Charles Bridge walk", "Prague Castle tour"],
    price: 1800,
    imageURL: "/images/accommodation/prague.jpg",
    location: "Czech Republic",
    id: 14,
  },
  {
    title: "Santorini Escape",
    rating: 4.9,
    duration: [7, 6], // 7 days, 6 nights
    flights: 1,
    hotel: 3,
    transfers: 1,
    activities: 8,
    details: ["Caldera sunset cruise", "Oia village exploration"],
    price: 2400,
    imageURL: "/images/accommodation/santorini.jpg",
    location: "Greece",
    id: 15,
  },
  {
    title: "Machu Picchu Expedition",
    rating: 4.8,
    duration: [8, 7], // 8 days, 7 nights
    flights: 2,
    hotel: 2,
    transfers: 2,
    activities: 9,
    details: ["Inca Trail trek", "Sun Gate sunrise experience"],
    price: 2600,
    imageURL: "/images/accommodation/machu_picchu.jpg",
    location: "Peru",
    id: 16,
  },
  {
    title: "Kyoto Retreat",
    rating: 4.7,
    duration: [6, 5], // 6 days, 5 nights
    flights: 1,
    hotel: 2,
    transfers: 1,
    activities: 8,
    details: ["Arashiyama bamboo forest", "Kinkaku-ji temple visit"],
    price: 2200,
    imageURL: "/images/accommodation/kyoto.jpg",
    location: "Japan",
    id: 17,
  },
  {
    title: "Istanbul Discovery",
    rating: 4.6,
    duration: [5, 4], // 5 days, 4 nights
    flights: 1,
    hotel: 1,
    transfers: 1,
    activities: 7,
    details: ["Blue Mosque tour", "Grand Bazaar shopping"],
    price: 1900,
    imageURL: "/images/accommodation/istanbul.jpg",
    location: "Turkey",
    id: 18,
  },
];
