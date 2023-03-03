import React from "react";
import { useController } from "react-hook-form";
import Icon from "../img/dropdown.png";

function Dropdown({ control, name, error, label, require, children }) {
  const { field } = useController({ control, name });
  return (
    <div className="form-group">
      <label>
        {label}
        {require && <span>*</span>}
      </label>
      <div className="pos-relative">
        <select
          name="gender"
          error={error}
          className={`inp  select ${!!error && "error"}`}
          {...field}
        >
          {children}
        </select>
        <img className="pos-absolute" src={Icon} alt="Dropdown icon" />
      </div>
    </div>
  );
}

export default Dropdown;
