import React from "react";
import { useController } from "react-hook-form";

const RadioButton = ({ control, name, value, label, id }) => {
  const {
    field: { onChange, ...rest },
  } = useController({
    control,
    name,
  });
  return (
    <div>
      <label htmlFor={id} className="radio-label">
        <input
          className="radio-inp"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={() => onChange(value)}
          {...rest}
        />
        <span className="custom-radio" />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
