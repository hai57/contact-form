import { useEffect, useRef, useState } from "react";

const Slider = ({ range, getRange }) => {

  const [step, setStep] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const rangeLinePadding = 5;
    const calcStep = (ref.current.offsetWidth - rangeLinePadding) / (ref.current.max );
    setStep(calcStep);
  }, [range]);

  return (
    <div className="slide">
      <div className="line">
        <div className="start"></div>
      </div>
      <input
        name="range"
        type="range"
        id="range"
        min="0"
        max="1000"
        value={range}
        onChange={getRange}
        ref={ref}
      />
      <label
        className="lb-donate"
        htmlFor="range"
        style={{
          transform: `translateX(${range * step}px)`,
        }}
      >
        <span className="spa-donate">&lt; &nbsp; $ {range} &nbsp; &gt;</span>
      </label>
    </div>
  );
};

export default Slider;
