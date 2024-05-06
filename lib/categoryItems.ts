interface iAppProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "beach",
    description: "This Property is close to the Beach.",
    title: "Beach",
    imageUrl: "/icons/beach.png",
  },
  {
    id: 1,
    name: "desert",
    description: "This is a Property which is in a desert climate.",
    title: "Desert",
    imageUrl: "/icons/desert.png",
  },
  {
    id: 2,
    name: "mountains",
    description: "This is a Property is close to the beachfront",
    title: "Mountains",
    imageUrl: "/icons/mountains.png",
  },
  {
    id: 3,
    name: "iconic_cities",
    description: "This Property is considerd a Earth Home",
    title: "Iconic Cities",
    imageUrl: "/icons/iconic_cities.png",
  },
  {
    id: 4,
    name: "house_boats",
    description: "This Property is considerd Luxorious",
    title: "House Boats",
    imageUrl: "/icons/house_boats.png",
  },
  {
    id: 5,
    name: "country_side",
    description: "This property has an amazing View",
    title: "Country Side",
    imageUrl: "/icons/country_side.png",
  },
  {
    id: 6,
    name: "camping",
    description: "This property puts a big focus on design ",
    title: "Camping",
    imageUrl: "/icons/camping.png",
  },
  {
    id: 7,
    name: "castles",
    description: "This property has an amazing Pool",
    title: "Castles",
    imageUrl: "/icons/castles.png",
  },
  {
    id: 8,
    name: "skiing",
    description: "This property is considered a tiny home",
    title: "Skiing",
    imageUrl: "/icons/skiing.png",
  },
  {
    id: 9,
    name: "tropical",
    description: "This Property is considered historic",
    title: "Tropical",
    imageUrl: "/icons/tropical.png",
  },
];
