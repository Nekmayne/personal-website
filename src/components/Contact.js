import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((res) => {
      notify();
      console.log(res);
    })
    .catch((err) => console.log(err));
  e.target.reset();
};

const notify = () => {
  toast.success("Message successfully sent!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="box">
        <h1>Get In Touch</h1>
        <div className="contact-container">
          <form className="form" onSubmit={SendEmail}>
            <label>First Name</label>
            <input type="text" className="input-area" name="name" required />
            <label>Email</label>
            <input type="email" className="input-area" name="email" required />
            <label>Message</label>
            <textarea name="message" className="textarea" rows="5" required />

            <div className="btn">
              <input className="contact-button" type="submit" value="send" />
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
