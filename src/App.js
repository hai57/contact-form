import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./components/form";
import pic from "./img/bg.jpeg";
import "./sass/index.scss";

function App() {
  return (
    <Fragment>
      <div className="container">
        <img className="banner" src={pic} alt="banner" />
        <Form />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
