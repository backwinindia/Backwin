import { useEffect, useState } from "react";

const useCounter = (end, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = Math.floor(progress * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [end, duration, startAnimation]);

  return count;
};

export default useCounter;