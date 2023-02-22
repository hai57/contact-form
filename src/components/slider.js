import { useEffect, useRef, useState } from "react";

const Slider = ({ values, handleChange }) => {
  // const [range, setRange] = useState(0);
  // const [step, setStep] = useState(0);
  // const ref = useRef(null);

  // const getRange = (ev) => {
  //   setRange(ev.target.value);
  // };

  // useEffect(() => {
  //   const rangeLinePadding = 16;
  //   const calcStep =
  //     (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
  //   setStep(calcStep);
  // }, []);

  return (
    <div>
      {/* <h1> Range Slider </h1>
      <div className="slider">
        <input
          type="range"
          id="range"
          min="0"
          max="100"
          value={range}
          onChange={getRange}
          ref={ref}
        />
        <label
          htmlFor="range"
          style={{
            transform: `translateX(${range * step}px)`,
          }}
        >
          <span> {range} </span>
          <svg viewBox="0 0 15 18">
            <path d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z" />
          </svg>
        </label>
      </div> */}
    </div>
  );
};

export default Slider;
