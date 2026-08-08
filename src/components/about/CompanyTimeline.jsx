import { motion } from "framer-motion";

import "../../style/about/companyTimeline.css";

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description:
      "Back Win began its journey with a vision to manufacture premium quality beverages for every consumer.",
  },
  {
    year: "2013",
    title: "Production Expansion",
    description:
      "Production capacity increased with modern manufacturing equipment and improved quality processes.",
  },
  {
    year: "2017",
    title: "Product Portfolio Growth",
    description:
      "Introduced multiple beverage categories including non-alcoholic beer, juices and energy drinks.",
  },
  {
    year: "2021",
    title: "National Distribution",
    description:
      "Expanded distribution network across multiple Indian states through trusted partners.",
  },
  {
    year: "2024",
    title: "International Markets",
    description:
      "Successfully entered global markets with export-quality beverage products.",
  },
  {
    year: "Today",
    title: "Growing Every Day",
    description:
      "Continuing to innovate, expand and deliver premium beverages with uncompromising quality.",
  },
];

const CompanyTimeline = () => {
  return (
    <section className="timeline-section">

      <motion.div
        className="timeline-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>OUR JOURNEY</span>

        <h2>
          A Timeline Of Growth & Innovation
        </h2>

        <p>
          Over the years, Back Win has continuously evolved through innovation,
          quality manufacturing and expanding market presence.
        </p>

      </motion.div>

      <div className="timeline-wrapper">

        <div className="timeline-center-line"></div>

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className={`timeline-row ${
              index % 2 === 0 ? "left" : "right"
            }`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >

            <div className="timeline-card">

              <div className="timeline-year">
                {item.year}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default CompanyTimeline;