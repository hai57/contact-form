import React, { useState, useRef, useEffect } from "react";

import Slider from "./slider";

const Forms = () => {
  const [values, setValues] = useState(500);
  const [data, setData] = useState({
    fName: "",
    lName: "",
    company: "",
    mail: "",
    phone: "",
    gender: "",
    payment: "",
    card: "",
    expiration: "",
    cvn: "",
  });

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [errForm, setErrForm] = useState({});
  const itemMap = [
    {
      id: 1,
      label: "FIRST NAME",
      name: "fName",
      errname: errForm.fName,
      refname: "fName",
      widthClass: "w-50",
      type: "text",
    },
    {
      id: 7,
      label: "GENDER",
      name: "gender",
      errname: errForm.gender,
      refname: "gender",
      widthClass: "w-50",
      type: "select",
      items: ["male", "female"],
    },
    {
      id: 2,
      label: "LAST NAME:",
      name: "lName",
      errname: errForm.lName,
      refname: "lName",
      widthClass: "w-50",
      type: "text",
    },
    {
      id: 3,
      label: "COMPANY:",
      name: "company",
      errname: errForm.company,
      refname: "company",
      widthClass: "w-50",
      type: "text",
    },
    {
      id: 4,
      label: "EMAIL:",
      name: "mail",
      errname: errForm.mail,
      refname: "mail",
      widthClass: "w-50",
      type: "text",
    },
    {
      id: 5,
      label: "PHONE NUMBER:",
      name: "phone",
      errname: errForm.phone,
      refname: "phone",
      widthClass: "w-50",
      type: "text",
    },
  ];
  const onHandleSubmitError = () => {
    let err = { ...errForm };
    let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (data.fName === "") {
      err.fName = "First name required!";
    } else {
      delete err.fName;
    }
    if (data.lName === "") {
      err.lName = "Last name required!";
    } else {
      delete err.lName;
    }
    if (data.company === "") {
      err.company = "Company required!";
    } else {
      delete err.company;
    }
    if (data.mail === "") {
      err.mail = "Email equired!";
    } else if (!regex.test(data.mail)) {
      err.mail = "Email không đúng định dạng";
    } else {
      delete err.mail;
    }
    if (data.phone === "") {
      err.phone = "Phone number equired!";
    } else {
      delete err.phone;
    }
    if (data.gender === "") {
      err.gender = "Gender equired!";
    } else {
      delete err.gender;
    }
    if (data.payment === "") {
      err.payment = "Payment mode equired!";
    } else {
      delete err.payment;
    }
    if (data.card === "") {
      err.card = "Card equired!";
    } else {
      delete err.card;
    }
    if (data.expiration === "") {
      err.expiration = "Expiration mode equired!";
    } else {
      delete err.expiration;
    }
    if (data.cvn === "") {
      err.cvn = "CVN equired!";
    } else {
      delete err.cvn;
    }
    setErrForm({ ...err });
    return Object.keys(err).length === 0;
  };

  const onHandleChange = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onHandleReset = () => {};
  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isVali = onHandleSubmitError();
    console.log(isVali);
    console.log(data);
  };

  return (
    <div className="content">
      <form onSubmit={onHandleSubmit}>
        <div className="input-wrapper">
          {itemMap.map((item) => {
            return (
              <div key={item.id} className={`form-group ${item.widthClass}`}>
                <label>
                  {item.label} <span>*</span>
                </label>
                {item.type === "text" ? (
                  <input
                    className="inp"
                    name={item.name}
                    onChange={onHandleChange}
                  />
                ) : item.type === "select" ? (
                  <input
                    className="inp"
                    name={item.name}
                    onChange={onHandleChange}
                  />
                ) : (
                  <></>
                )}
                <br />
                <span className="non-valid">{item.errname}</span>
              </div>
            );
          })}
        </div>

        <div className="form-group slider">
          <label>
            DONATE US <span>*</span>
          </label>
          <Slider values={values} handleChange={handleChange} />
        </div>
        <div className="group-btn">
          <button className="btn-submit" type="submit">
            Submit
          </button>
          <button type="button" onClick={onHandleReset} className="btn-reset">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default Forms;
