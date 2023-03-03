import React from "react";
import { useController } from "react-hook-form";

function Input({ control, name, label, require, placeholder, error }) {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="form-group">
      <label>
        {label}
        {require && <span>*</span>}
      </label>
      <input
        className={`inp ${!!error && "error"}`}
        name={name}
        placeholder={placeholder}
        {...field}
      />
      <div className="err-wrapper">
        <span className="non-valid">{error}</span>
      </div>
    </div>
  );
}

export default Input;
