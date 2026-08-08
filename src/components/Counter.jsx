import CounterCard from "./CounterCard";
import "../style/counter.css";

const stats = [

    {
        end:17,
        suffix:"+",
        title:"Years of Experience",
    },

    {
        end:28,
        suffix:"+",
        title:"Product SKUs",
    },

    {
        end:6,
        suffix:"+",
        title:"Indian States",
    },

    {
        end:5,
        suffix:"+",
        title:"Countries",
    },

];

const Counter = () => {

    return (

        <section className="counter-section">

            <div className="counter-container">

                {stats.map((item,index)=>(

                    <CounterCard
                        key={index}
                        end={item.end}
                        suffix={item.suffix}
                        title={item.title}
                    />

                ))}

            </div>

        </section>

    );

};

export default Counter;