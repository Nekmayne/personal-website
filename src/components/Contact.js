import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_02gt7ob",
      "template_iyqmv7x",
      e.target,
      "AJgGXGCKOPlMpgkou"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  e.target.reset();
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="box">
        <h1>Get In Touch</h1>
        <div className="contact-container">
          <form className="" onSubmit={sendEmail}>
            <div className="input-box">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <textarea name="message" rows="5" placeholder="Message" />
            </div>
            <input className="contact-button" type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
