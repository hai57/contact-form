import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Slider from "./slider";
import Radio from "./radio";
import Dropdown from "../img/dropdown.png"

const dataDefault = {
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
};

const Forms = () => {

  const [range, setRange] = useState(0);

  const getRange = (e) => {
    setRange(e.target.value);
  };

  const [forms,setForms] = useState([]);

  const formatDate = (input) => {
    var datePart = input.split("-");
    var first = "MM-YY";
    if(input === "" ){
      return first;
    }else {
      return  datePart[1]+ "-" +datePart[0].substring(2);
    }
  };

  const [data, setData] = useState(dataDefault);

  const [errForm, setErrForm] = useState({});

  const onHandleReset = () => {
    setData(dataDefault);
    setErrForm(dataDefault);
    setRange(0);
  };

  const [show,setShow] = useState(false);

  const options = [
    {
      value: "",
      text: "",
    },
    {
      value: "male",
      text: "Male",
    },
    {
      value: "female",
      text: "Female",
    }
  ]

  const onHandleClick = () => {
    return setShow(true);
  }

  const onHandleSubmitError = () => {
    let err = { ...errForm };
    let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let cardDate= data.expiration.split('-');
    let date = new Date();

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
      err.mail = "Email required!";
    } else if (!regex.test(data.mail)) {
      err.mail = "Email invalidate";
    } else {
      delete err.mail;
    }
    if (data.phone === "") {
      err.phone = "Phone number required!";
    } else if (!/^[0-9]+$/.test(data.phone) ||  data.phone.length !==10 )  {
      err.phone = "Please only enter number and there are only 10 numbers";
    } else {
      delete err.phone;
    }
    if (data.gender === "") {
      err.gender = "Gender required!";
    } else {
      delete err.gender;
    }
    if (data.payment === "") {
      err.payment = "Payment mode required!";
    } else {
      delete err.payment;
    }
    if (data.card === "") {
      err.card = "Card required!";
    } else if (!/^[0-9]+$/.test(data.card)){
      err.card = "Only number";
    } else {
      delete err.card;
    }
    if (data.expiration === "") {
      err.expiration = "Expiration mode required!";
    }  else if (new Date( cardDate[0], cardDate[1], 1) < date) {
      err.expiration = "Expiry date must be this month or later";
    }
    else {
      delete err.expiration;
    }
    if (data.cvn === "") {
      err.cvn = "CVN required!";
    } else if(!/^[0-9]+$/.test(data.cvn) ) {
      err.cvn ="Please enter number";
    }
    else {
      delete err.cvn;
    }
    if (range === 0) {
      err.range = "Donate required!";
    } else {
      delete err.range;
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

  const addForms = () => {
    setForms([
      ...forms,
      {
        id: uuidv4(),
        fName: data.fName,
        lName: data.lName,
        company: data.company,
        mail: data.mail,
        phone: data.phone,
        gender: data.gender,
        payment: data.payment,
        card: data.card,
        expiration: data.expiration,
        cvn: data.cvn,
        donate: range,
      }
    ])
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    let isVali = onHandleSubmitError();
    if(isVali) {
      addForms();
      localStorage.setItem("form", JSON.stringify(forms));
    }
  };

  return (
    <div className="content">
      <form onSubmit={onHandleSubmit}>
        <div className="container-inp">
          <div className="form-group">
            <label>
              FIRST NAME<span>*</span>
            </label>
            <input
              className="inp"
              name="fName"
              placeholder="Enter first name"
              value={data.fName}
              onChange={onHandleChange}
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.fName}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              GENDER <span>*</span>
            </label>
            <div className="pos-relative">
              <select
                value={data.gender}
                className="inp select"
                name="gender"
                onChange={onHandleChange}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <img
                className="pos-absolute"
                src={Dropdown}
                onClick={onHandleClick}
                alt="Dropdown icon"
              />
            </div>
            <div className="err-wrapper">
              <span className="non-valid">{errForm.gender}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              LAST NAME<span>*</span>
            </label>
            <input
              className="inp"
              name="lName"
              value={data.lName}
              placeholder="Enter last name"
              onChange={onHandleChange}
            />
              <div className="err-wrapper">
                <span className="non-valid">{errForm.lName}</span>
              </div>
          </div>
          <div className="form-group">
            <label>
              PAYMENT MODE <span>*</span>
            </label>
            <Radio
              data={data}
              onHandleChange={onHandleChange}
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.payment}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              COMPANY<span>*</span>
            </label>
            <input
              className="inp"
              name="company"
              value={data.company}
              placeholder="Enter company"
              onChange={onHandleChange}
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.company}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              CARD NUMBER <span>*</span>
            </label>
            <input
              className="inp"
              name="card"
              value={data.card}
              placeholder="Enter card"
              onChange={onHandleChange}
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.card}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              EMAIL<span>*</span>
            </label>
            <input
              className="inp"
              name="mail"
              value={data.mail}
              placeholder="Enter Email"
              onChange={onHandleChange}
            />
            <div className="err-wrapper">
             <span className="non-valid">{errForm.mail}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              EXPIRATION <span>*</span>
            </label>
            <div className="inpdate-wrapper">
              <input
                className="inp inp-date"
                name="expiration"
                value={data.expiration}
                onChange={onHandleChange}
                maxLength="5"
                type="month"
              />
              <span>{formatDate(data.expiration)}</span>
            </div>
            <div className="err-wrapper">
              <span className="non-valid">{errForm.expiration}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              PHONE NUMBER<span>*</span>
            </label>
            <input
              className="inp"
              name="phone"
              value={data.phone}
              placeholder="Enter phone number"
              onChange={onHandleChange}
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.phone}</span>
            </div>
          </div>
          <div className="form-group">
            <label>
              CVN <span>*</span>
            </label>
            <input
              className="inp"
              name="cvn"
              value={data.cvn}
              onChange={onHandleChange}
              placeholder="3 or 4 number"
              maxLength="4"
            />
            <div className="err-wrapper">
              <span className="non-valid">{errForm.cvn}</span>
            </div>
          </div>
          <div className="form-group slider">
            <label>
              DONATE US <span>*</span>
            </label>
            <Slider  range={range} getRange={getRange} />
            <div className="err-wrapper m-30">
              <span className="non-valid">{errForm.range}</span>
            </div>
          </div>
        </div>
        <div className="group-btn">
          <button className="btn-submit" type="submit">
            SUBMIT
          </button>
          <button
            type="button"
            onClick={onHandleReset}
            className="btn-reset"
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
