import { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";

const Slider = ({ control, name, min, max }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: 0,
  });
  const [step, setStep] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const rangeLinePadding = 5;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    setStep(calcStep);
  }, [field.value]);

  return (
    <div className="slide">
      <div className="line">
        <div className="start"></div>
      </div>
      <input {...field} type="range" min={min} max={max} ref={ref} />
      <label
        className="lb-donate"
        htmlFor="range"
        style={{
          transform: `translateX(${field.value * step}px)`,
        }}
      >
        <span className="spa-donate">
          &lt; &nbsp; $ {field.value} &nbsp; &gt;
        </span>
      </label>
    </div>
  );
};

export default Slider;
