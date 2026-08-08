import africanKiwiImage from "../assets/images/allproducts/africankiwienergy.png";
import wildBerriesImage from "../assets/images/allproducts/wildberriesenergy.png";
import brazilianBerriesImage from "../assets/images/allproducts/brazilianberriesenergy.png";
import classicEnergyImage from "../assets/images/allproducts/classicenergy.png";

import descafricanKiwiImage from "../assets/images/energy/africankiwienergy.png";
import descwildBerriesImage from "../assets/images/energy/wildberryenergy.png";
import descbrazilianBerriesImage from "../assets/images/energy/brazilianberryenergy.png";
import descclassicEnergyImage from "../assets/images/energy/classicenergydrink.png";


const energyProducts = [
  {
    id: 12,
    slug: "classic",
    category: "Energy Drink",
    name: "Classic",
    description:
      "Classic energy drink with a bold refreshing taste, created for consumers looking for instant refreshment and energy.",
    image: classicEnergyImage,
    descimg: descclassicEnergyImage,
    alt: "Classic Energy Drink",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },
  
  {
    id: 9,
    slug: "african-kiwi",
    category: "Energy Drink",
    name: "African Kiwi",
    description:
      "Refreshing energy drink with a unique African Kiwi flavour, formulated to deliver an energizing and refreshing experience.",
    image: africanKiwiImage,
    descimg: descafricanKiwiImage,
    alt: "African Kiwi Energy Drink",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 10,
    slug: "wild-berries",
    category: "Energy Drink",
    name: "Wild Berries",
    description:
      "Refreshing energy drink blended with delicious Wild Berries flavour for a smooth and energizing taste.",
    image: wildBerriesImage,
    descimg: descwildBerriesImage,
    alt: "Wild Berries Energy Drink",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 11,
    slug: "brazilian-berries",
    category: "Energy Drink",
    name: "Brazilian Berries",
    description:
      "Premium energy drink infused with Brazilian Berries flavour for a refreshing and energetic boost.",
    image: brazilianBerriesImage,
    descimg: descbrazilianBerriesImage,
    alt: "Brazilian Berries Energy Drink",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  
];

export default energyProducts;