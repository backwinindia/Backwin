import blueBerryImage from "../assets/images/allproducts/blueperrygolisoda.png";
import iceCreamSodaImage from "../assets/images/allproducts/icecreamgolisoda.png";
import mojitoImage from "../assets/images/allproducts/mojitogolisoda.png";
import limbuSodaImage from "../assets/images/allproducts/lemongolisoda.png";

import descblueBerryImage from "../assets/images/golisoda/blueberrygoli.png";
import desciceCreamSodaImage from "../assets/images/golisoda/icecreamgoli.png";
import descmojitoImage from "../assets/images/golisoda/mojitogoli.png";
import desclimbuSodaImage from "../assets/images/golisoda/lemongoli.png";

const goliSodaProducts = [
  {
    id: 13,
    slug: "blue-berry",
    category: "Goli Soda",
    name: "Blue Berry",
    description:
      "Refreshing sparkling Goli Soda with a delicious Blue Berry flavour, combining traditional taste with a modern twist.",
    image: blueBerryImage,
    descimg: descblueBerryImage,
    alt: "Blue Berry Goli Soda",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 14,
    slug: "ice-cream-soda",
    category: "Goli Soda",
    name: "Ice Cream Soda",
    description:
      "Classic sparkling Goli Soda with the nostalgic taste of Ice Cream Soda, crafted for a refreshing experience.",
    image: iceCreamSodaImage,
    descimg: desciceCreamSodaImage,
    alt: "Ice Cream Soda",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 15,
    slug: "mojito",
    category: "Goli Soda",
    name: "Mojito",
    description:
      "Refreshing sparkling Goli Soda infused with a cool Mojito flavour for a unique and vibrant taste.",
    image: mojitoImage,
    descimg: descmojitoImage,
    alt: "Mojito Goli Soda",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 16,
    slug: "limbu-soda",
    category: "Goli Soda",
    name: "Limbu Soda",
    description:
      "Traditional sparkling lemon-flavoured Goli Soda delivering a refreshing citrus taste with authentic fizz.",
    image: limbuSodaImage,
    descimg: desclimbuSodaImage,
    alt: "Limbu Soda",
    variants: [
      {
        volume: "250 ml",
        packQty: 24,
      },
    ],
  },
];

export default goliSodaProducts;