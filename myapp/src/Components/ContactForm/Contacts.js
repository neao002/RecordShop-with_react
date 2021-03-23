import React, { useState } from "react";

//npm install emailjs-com you have to install this package on ur pc
import emailjs from "emailjs-com";

// npm install react-hook-form also this one
import { useForm } from "react-hook-form";

import { Jumbotron } from "react-bootstrap";
const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_sO2dxgdGfdkAfjD6EyISz";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! We Will contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <Jumbotron className="mb-0" style={{ background: "#ff7700" }}>
      <div className="contacts">
        <div className="text-center">
          <h1>Contact Us!</h1>
          <p>Please fill out the form!</p>
          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* NAME INPUT */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    ref={register({
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message:
                          "Please enter a name with less than 20 characters",
                      },
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
                {/* PHONE INPUT */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    ref={register({
                      required: "Please add your phone number",
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
                {/* EMAIL INPUT */}
                <div className="text-center">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email",
                      },
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
                {/* SUBJECT INPUT */}
                <div className="text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    ref={register({
                      required: "OOPS, you forget to add the subject.",
                    })}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* DESCRIPTION */}
                <div className="text-center">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Please describe your requires here!"
                    name="description"
                    ref={register({
                      required: "Please describe your requires here!",
                    })}
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
                {/* <button className="btn-main-offer contact-btn" type="submit">
                  Contact Us
                </button> */}
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button
                className="btn-main-offer ml-5 mt-5 contact-btn btn-dark"
                type="submit"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Contacts;
