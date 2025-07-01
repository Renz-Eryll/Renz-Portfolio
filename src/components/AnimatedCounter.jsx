import React, { useRef } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);
  return (
    <div ref={counterRef} className="padding-x-lg xl:mt-10 mt-10">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-purple-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
      <div id="about"></div>
    </div>
  );
};

export default AnimatedCounter;
