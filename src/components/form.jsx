import React, { useState, useRef, useEffect } from "react";

import Slider from "./slider";

const Forms = () => {
  const [values, setValues] = useState(500);

  const handleChange = (e) => {
    setValues(e.target.value);
  };

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

  const fName = useRef(null);
  const lName = useRef(null);
  const company = useRef(null);
  const mail = useRef(null);
  const phone = useRef(null);
  const gender = useRef(null);
  const payment = useRef(null);
  const card = useRef(null);
  const expiration = useRef(null);
  const cvn = useRef(null);

  const onHandleReset = () => {
    fName.current.value = "";
    lName.current.value = "";
    company.current.value = "";
    mail.current.value = "";
    phone.current.value = "";
    gender.current.value = "";
    payment.current.value = "";
    card.current.value = "";
    expiration.current.value = "";
    cvn.current.value = "";
  };
  const [errForm, setErrForm] = useState({});
  // const itemMap = [
  //   {
  //     id: 1,
  //     label: "FIRST NAME",
  //     name: "fName",
  //     errname: errForm.fName,
  //     refname: "fName",
  //   },
  //   {
  //     id: 2,
  //     label: "LAST NAME:",
  //     name: "lName",
  //     errname: errForm.lName,
  //     refname: "lName",
  //   },
  //   {
  //     id: 3,
  //     label: "COMPANY:",
  //     name: "company",
  //     errname: errForm.company,
  //     refname: "company",
  //   },
  //   {
  //     id: 4,
  //     label: "EMAIL:",
  //     name: "mail",
  //     errname: errForm.mail,
  //     refname: "mail",
  //   },
  //   {
  //     id: 5,
  //     label: "PHONE NUMBER:",
  //     name: "phone",
  //     errname: errForm.phone,
  //     refname: "phone",
  //   },
  // ];
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

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isVali = onHandleSubmitError();
    console.log(isVali);
    console.log(data);
  };

  return (
    <div className="content">
      <form onSubmit={onHandleSubmit}>
        <div className="container-inp">
          <div className="inp-group-left">
            {/* {itemMap.map((item) => {
              return (
                <div key={item.id} className="form-group">
                  <label>
                    {item.label} <span>*</span>
                  </label>
                  <br />
                  <input
                    ref={item.refname}
                    className="inp"
                    name={item.name}
                    onChange={onHandleChange}
                  ></input>
                  <br />
                  <span className="non-valid">{item.errname}</span>
                </div>
              );
            })} */}
            <div className="form-group">
              <label>
                FIRST NAME<span>*</span>
              </label>
              <br />
              <input
                ref={fName}
                className="inp"
                name="fName"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.fName}</span>
            </div>
            <div className="form-group">
              <label>
                LAST NAME<span>*</span>
              </label>
              <br />
              <input
                ref={lName}
                className="inp"
                name="lName"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.lName}</span>
            </div>
            <div className="form-group">
              <label>
                COMPANY<span>*</span>
              </label>
              <br />
              <input
                ref={company}
                className="inp"
                name="company"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.company}</span>
            </div>
            <div className="form-group">
              <label>
                EMAIL<span>*</span>
              </label>
              <br />
              <input
                ref={mail}
                className="inp"
                name="mail"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.mail}</span>
            </div>
            <div className="form-group">
              <label>
                PHONE NUMBER<span>*</span>
              </label>
              <br />
              <input
                ref={phone}
                className="inp"
                name="phone"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.phone}</span>
            </div>
          </div>
          <div className="inp-group-right">
            <div className="form-group">
              <label>
                GENDER <span>*</span>
              </label>
              <br />
              <select className="inp" name="gender" onChange={onHandleChange}>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <span className="non-valid">{errForm.gender}</span>
            </div>
            <div className="form-group">
              <label>
                PAYMENT MODE <span>*</span>
              </label>
              <br />
              <div>
                <input
                  type={"radio"}
                  name="payment"
                  value="visa"
                  onChange={onHandleChange}
                  checked={data.payment === "visa"}
                ></input>
                <label>Visa</label>
              </div>
              <div>
                <input
                  type={"radio"}
                  name="payment"
                  value="mastercard"
                  onChange={onHandleChange}
                  checked={data.payment === "mastercard"}
                ></input>
                <label>Mastercard</label>
              </div>
              <div>
                <input
                  ref={payment}
                  type={"radio"}
                  name="payment"
                  value="amex"
                  onChange={onHandleChange}
                  checked={data.payment === "amex"}
                ></input>
                <label>Amex</label>
              </div>
              <span className="non-valid">{errForm.payment}</span>
            </div>
            <div className="form-group">
              <label>
                CARD NUMBER <span>*</span>
              </label>
              <br />
              <input
                ref={card}
                className="inp"
                name="card"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.card}</span>
            </div>
            <div className="form-group">
              <label>
                EXPIRATION <span>*</span>
              </label>
              <br />
              <input
                className="inp"
                name="expiration"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.expiration}</span>
            </div>
            <div className="form-group">
              <label>
                CVN <span>*</span>
              </label>
              <br />
              <input
                className="inp"
                name="cvn"
                onChange={onHandleChange}
              ></input>
              <br />
              <span className="non-valid">{errForm.cvn}</span>
            </div>
          </div>
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
