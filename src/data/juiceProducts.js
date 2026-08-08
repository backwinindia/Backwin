import lycheeImage from "../assets/images/allproducts/lycheejuice.png";
import guavaImage from "../assets/images/allproducts/guavajuice.png";
import pineappleImage from "../assets/images/allproducts/pineapplejuice.png";
import muskMelonImage from "../assets/images/allproducts/muskmellonjuice.png";

import desclycheeImage from "../assets/images/juice/lycheejuice.png";
import descguavaImage from "../assets/images/juice/guavajuice.png";
import descpineappleImage from "../assets/images/juice/pineapplejuice.png";
import descmuskMelonImage from "../assets/images/juice/muskmellonjuice.png";

const juiceProducts = [
  {
    id: 17,
    slug: "lychee",
    category: "Juice",
    name: "Lychee",
    description:
      "Refreshing lychee fruit juice with a naturally sweet and smooth taste.",
    image: lycheeImage,
    descimg: desclycheeImage,
    alt: "Lychee Juice",
    variants: [
      {
        volume: "165 ml",
        packQty: 35,
      },
    ],
  },

  {
    id: 18,
    slug: "guava",
    category: "Juice",
    name: "Guava",
    description:
      "Delicious guava fruit juice offering a rich tropical flavour and refreshing taste.",
    image: guavaImage,
    descimg: descguavaImage,
    alt: "Guava Juice",
    variants: [
      {
        volume: "165 ml",
        packQty: 35,
      },
    ],
  },

  {
    id: 19,
    slug: "pineapple",
    category: "Juice",
    name: "Pineapple",
    description:
      "Refreshing pineapple fruit juice with a sweet and tangy tropical flavour.",
    image: pineappleImage,
    descimg: descpineappleImage,
    alt: "Pineapple Juice",
    variants: [
      {
        volume: "165 ml",
        packQty: 35,
      },
    ],
  },

  {
    id: 20,
    slug: "musk-melon",
    category: "Juice",
    name: "Musk Melon",
    description:
      "Refreshing musk melon fruit juice with a naturally smooth and fruity taste.",
    image: muskMelonImage,
    descimg: descmuskMelonImage,
    alt: "Musk Melon Juice",
    variants: [
      {
        volume: "165 ml",
        packQty: 35,
      },
    ],
  },
];

export default juiceProducts;