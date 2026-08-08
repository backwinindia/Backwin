import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import useCounter from "../hooks/useCounter";

const CounterCard = ({ end, suffix, title }) => {

    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    const count = useCounter(end, 2000, isInView);

    return (

        <motion.div
            ref={ref}
            className="counter-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
        >

            <h2>

                {count}{suffix}

            </h2>

            <p>{title}</p>

        </motion.div>

    );

};

export default CounterCard;