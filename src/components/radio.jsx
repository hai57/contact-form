import React from 'react'

const Radio = ({data, onHandleChange}) =>  {
  return (
    <div className="radio-wrapper">
      <div>
        <label htmlFor="visa" className="radio-label">
        <input
          className="radio-inp"
          type="radio"
          name="payment"
          id="visa"
          value="visa"
          onChange={onHandleChange}
          checked={data.payment === "visa"}
        />
        <span className="custom-radio" />
        Visa
        </label>
      </div>
      <div>
        <label htmlFor="mastercard" className="radio-label">
          <input
            className="radio-inp"
            type="radio"
            name="payment"
            id="mastercard"
            value="mastercard"
            onChange={onHandleChange}
            checked={data.payment === "mastercard"}
          />
          <span className="custom-radio" />
          Mastercard
        </label>
      </div>
      <div>
        <label htmlFor="amex" className="radio-label">
          <input
            className="radio-inp"
            type="radio"
            name="payment"
            id="amex"
            value="amex"
            onChange={onHandleChange}
            checked={data.payment === "amex"}
          />
          <span className="custom-radio" />
          Amex
        </label>
      </div>
    </div>
    );
  };

export default Radio
