import "../../style/productDetails/categoryDescription.css";

const descriptions = {
  Beer: {
    title: "Non-Alcoholic Beer",
    description:
      "Back Win offers a premium range of non-alcoholic malt beverages crafted with rich malt flavour, refreshing carbonation and exceptional quality. Our collection includes classic and flavoured variants designed for every taste.",
  },

  "Energy Drink": {
    title: "Energy Drinks",
    description:
      "Our energy drinks are formulated to deliver a refreshing taste and an instant energy boost. Available in multiple exciting flavours for consumers looking for performance and refreshment.",
  },

  Juice: {
    title: "Fruit Juices",
    description:
      "Back Win fruit juices are prepared using delicious fruit flavours to deliver a refreshing drinking experience. Available in multiple bottle sizes to suit different consumer needs.",
  },

  "Goli Soda": {
    title: "Goli Soda",
    description:
      "Traditional Indian sparkling beverages with modern flavours. Our Goli Soda range combines authentic taste with refreshing fizz for every occasion.",
  },

  "Nata De Coco": {
    title: "Nata De Coco",
    description:
      "Refreshing fruit beverages blended with delicious nata de coco cubes, offering a unique texture and refreshing taste in every sip.",
  },
};

const CategoryDescription = ({ category }) => {
  const data = descriptions[category];

  if (!data) {
    return (
      <section className="category-description">
        <h1>{category}</h1>
        <p>No description available.</p>
      </section>
    );
  }

  return (
    <section className="category-description">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </section>
  );
};

export default CategoryDescription;