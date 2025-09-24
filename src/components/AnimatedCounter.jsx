import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  return (
    <div
      ref={counterRef}
      className="px-5 sm:px-10 md:px-20 lg:px-20 mt-10 md:mt-20 w-full"
    >
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="text-white-50 text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-purple-10 text-sm sm:text-base md:text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div id="about"></div>
    </div>
  );
};

export default AnimatedCounter;
