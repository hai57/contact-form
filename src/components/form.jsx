import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Slider from "./slider";
import Datepicker from "./datepicker";
import Input from "./input";
import Dropdown from "./dropdown";
import RadioButton from "./radioButton";
import RadioGroup from "./radioGroup";

const defaultValues = {
  first_name: "",
  last_name: "",
  company: "",
  card_number: "",
  gender: "",
  email: "",
  phone_number: "",
  cvn: "",
  payment: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const formSchema = Yup.object({
  first_name: Yup.string().required("Enter First Name "),
  last_name: Yup.string().required("Enter Last Name"),
  company: Yup.string().required("Enter company"),
  card_number: Yup.string()
    .required("Enter Number")
    .matches(
      /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
      "Only number"
    ),
  gender: Yup.string().required("Choose your gender"),
  email: Yup.string().required("Enter your email").email("Invalid email"),
  phone_number: Yup.string()
    .required("Enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  cvn: Yup.string()
    .required("Enter cvn")
    .matches(
      /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
      "only number"
    ).max(4,"Only 4 number"),
  payment: Yup.mixed().oneOf(
    ["visa", "mastercard", "amex"],
    "Choose your payment"
  ),
  expiration: Yup.string().required("Choose your expiration"),
});
const Forms = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const onHandleClick = () => {
    resetField("first_name");
    resetField("last_name");
    resetField("company");
    resetField("email");
    resetField("phone_number");
    resetField("gender");
    resetField("payment");
    resetField("card_number");
    resetField("expiration");
    resetField("cvn");
    resetField("donate");
  };

  const handleOnSubmit = (value) => {
    try {
      // Call API here
      console.log(value);
      localStorage.setItem("form", JSON.stringify(value));
      toast.success("Success");
      onHandleClick();
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="container-inp">
          <Input
            control={control}
            name="first_name"
            label="First Name"
            placeholder="Enter your First Name..."
            error={errors.first_name?.message}
            require
          />
          <Dropdown
            control={control}
            label="Gender"
            name="gender"
            require
            error={errors.gender?.message}
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Dropdown>
          <Input
            control={control}
            name="last_name"
            label="Last Name"
            placeholder="Enter Your Last Name"
            require
            error={errors.last_name?.message}
          />
          <RadioGroup
            label="PAYMENT MODE"
            require
            errors={errors.payment?.message}
          >
            <RadioButton
              control={control}
              name="payment"
              value="visa"
              label="Visa"
            />
            <RadioButton
              control={control}
              name="payment"
              value="mastercard"
              label="Master Card"
            />
            <RadioButton
              control={control}
              name="payment"
              value="amex"
              label="Amex"
            />
          </RadioGroup>
          <Input
            control={control}
            name="company"
            label="Company"
            placeholder="Your Company"
            error={errors.company?.message}
            require
          />
          <Input
            control={control}
            name="card_number"
            label="Card Number"
            placeholder="Enter card number"
            error={errors.card_number?.message}
            require
          />
          <Input
            control={control}
            name="email"
            label="EMAIL"
            placeholder="Enter email"
            require
            error={errors.email?.message}
          />
          <Datepicker
            control={control}
            name="expiration"
            label="EXPIRATION"
            error={errors.expiration?.message}
            require
          />
          <Input
            control={control}
            name="phone_number"
            label="PHONE NUMBER"
            placeholder="Enter phone number"
            error={errors.phone_number?.message}
            require
          />
          <Input
            control={control}
            name="cvn"
            label="CVN"
            placeholder="Enter CVN"
            require
            error={errors.cvn?.message}
          />
          <div className="form-group slider">
            <label>
              DONATE US <span>*</span>
            </label>
            <Slider
              control={control}
              name="donate"
              min={0}
              max={10000}
            />
          </div>
        </div>
        <div className="group-btn">
          <button className="btn-submit" type="submit">
            SUBMIT
          </button>
          <button
            type="button"
            onClick={onHandleClick}
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
