/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import emailjs from "emailjs-com";
import { Bounce } from "react-reveal";

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tjsjmbb",
      "template_cf862fk",
      form.current,
      "91K5SXPUdj3ChQLMt"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <Bounce left>
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>chibuzorm26@gmail.com</h5>
              <a
                href="mailto:chibuzorm26@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <SiWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+2348141609349</h5>
              <a
                href="https://api.whatsapp.com/send?phone=2348141609349"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
        </Bounce>
        <Bounce right>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </Bounce>
      </div>
    </section>
  );
};

export default contact;
