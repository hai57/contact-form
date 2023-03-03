import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useController } from "react-hook-form";

function Datepicker({ control, name, label, require, error }) {
  const { field } = useController({ control, name, defaultValue: null });
  return (
    <div className="form-group">
      <label>
        {label} {require && <span>*</span>}
      </label>
      <div className="inpdate-wrapper">
        <DatePicker
          className={`inp ${!!error && "error"}`}
          selected={field.value}
          onChange={(date) => field.onChange(date)}
          showMonthYearPicker
          minDate={new Date()}
          placeholderText="MM-YY"
          dateFormat="MM-yy"
        />
      </div>
      <div className="err-wrapper">
        <span className="non-valid">{error}</span>
      </div>
    </div>
  );
}

export default Datepicker;
