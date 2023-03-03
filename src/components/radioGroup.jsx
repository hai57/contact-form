import React from "react";

function RadioGroup({ label, require, errors, children }) {
  return (
    <div className="form-group">
      <label>
        {label}
        {require && <span>*</span>}
      </label>
      <div className="radio-wrapper">{children}</div>
      {errors && (
        <div className="err-wrapper">
          <span className="non-valid">{errors}</span>
        </div>
      )}
    </div>
  );
}

export default RadioGroup;
