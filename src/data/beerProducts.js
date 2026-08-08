import kingfighter from "../assets/images/allproducts/kingfighterbeer.png";
import kingwiser from "../assets/images/allproducts/kingwiserbeer.png";
import malty from "../assets/images/allproducts/maltybeer.png";
import greenapplebeer from "../assets/images/allproducts/greenapplebeer.png";
import canberrybeer from "../assets/images/allproducts/canberrybeer.png";
import berryblastbeer from "../assets/images/allproducts/berryblastbeer.png";
import beer5000 from "../assets/images/allproducts/beer5000.png";
import kingandwiser from "../assets/images/allproducts/king&wiser.png";


import desckingfighter from "../assets/images/beer/kingfighter.png";
import desckingwiser from "../assets/images/beer/kingwiser.png";
import descmalty from "../assets/images/beer/malty.png";
import descgreenapplebeer from "../assets/images/beer/greenapplebeer.png";
import desccanberrybeer from "../assets/images/beer/canberrybeer.png";
import descberryblastbeer from "../assets/images/beer/berryblastbeer.png"; 
import descbeer5000 from "../assets/images/beer/5000.png";
import desckingandwiser from "../assets/images/beer/king&wiser.png";


const beerProducts = [
  /* =====================================================
      CLASSIC NON-ALCOHOLIC BEER
  ===================================================== */

  {
    id: 1,
    slug: "kingfighter",
    category: "Beer",
    type: "Classic",
    name: "Kingfighter",
    description:
      "Experience the bold character of a premium strong non-alcoholic malt beverage with rich malt flavor, refreshing carbonation, and a smooth finish.",
    image: kingfighter,
    descimg: desckingfighter,
    alt: "Kingfighter Bottle",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 2,
    slug: "kingweiser",
    category: "Beer",
    type: "Classic",
    name: "Kingweiser",
    description:
      "Classic premium non-alcoholic malt beverage with smooth malt character and a crisp, refreshing finish.",
    image: kingwiser,
    descimg: desckingwiser,
    alt: "Kingweiser Bottle",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
      {
        volume: "650 ml",
        packQty: 12,
      },
    ],
  },

  {
    id: 5,
    slug: "malty-beer",
    category: "Beer",
    type: "Classic",
    name: "Malty Beer",
    description:
      "Smooth alcohol-free malt beverage crafted for everyday enjoyment with a refreshing and satisfying taste.",
    image: malty,
    descimg: descmalty,
    alt: "Malty Beer Bottle",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
    ],
  },

  /* =====================================================
      FLAVOURED BEER
  ===================================================== */

  {
    id: 6,
    slug: "black-bon-green-apple",
    category: "Beer",
    type: "Flavoured",
    name: "Black Bon Green Apple",
    description:
      "Refreshing non-alcoholic malt beverage infused with delicious Green Apple flavour.",
    image: greenapplebeer,
    descimg: descgreenapplebeer,
    alt: "Black Bon Green Apple",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 7,
    slug: "black-bon-berry-blast",
    category: "Beer",
    type: "Flavoured",
    name: "Black Bon Berry Blast",
    description:
      "Refreshing non-alcoholic malt beverage with a delicious Berry Blast flavour.",
    image: berryblastbeer,
    descimg: descberryblastbeer,
    alt: "Black Bon Berry Blast",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
    ],
  },

  {
    id: 8,
    slug: "black-bon-cranberry",
    category: "Beer",
    type: "Flavoured",
    name: "Black Bon Cranberry",
    description:
      "Refreshing non-alcoholic malt beverage blended with Cranberry flavour.",
    image: canberrybeer,
    descimg: desccanberrybeer,
    alt: "Black Bon Cranberry",
    variants: [
      {
        volume: "330 ml",
        packQty: 24,
      },
    ],
  },

  {
        id: 3,
        slug: "king-and-wiser",
        category: "Beer",
        type: "Classic",
        name: "King & Wiser",
        description:
          "Premium non-alcoholic malt beverage crafted with a rich taste and smooth finish for those who enjoy a classic beer experience.",
        image: kingandwiser,
        descimg: desckingandwiser,
        alt: "King & Wiser Bottle",
        variants: [
          {
            volume: "650 ml",
            packQty: 12,
          },
        ],
      },
    
      {
        id: 4,
        slug: "5000",
        category: "Beer",
        type: "Classic",
        name: "5000",
        description:
          "Strong tasting premium non-alcoholic malt beverage with refreshing carbonation and a bold character.",
        image: beer5000,
        descimg: descbeer5000,
        alt: "5000 Bottle",
        variants: [
          {
            volume: "650 ml",
            packQty: 12,
          },
        ],
      },
];

export default beerProducts;