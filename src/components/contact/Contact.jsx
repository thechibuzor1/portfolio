/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
 
 

const contact = () => {
 /*  const form = useRef();
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
 */
  return (
    <section id="contact">
      <div className="container experience__container">
        <h2>Contact</h2>
        <h3>
          You can reach me through{" "}
          <a
            href="mailto:chibuzormoses20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            chibuzormoses20[at]gmail[dot]com
          </a>
          .
        </h3>
        <br />

        <iframe
          title="Spotify"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/2eT2OvPbOtCXCArGFMODTx?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/*   <div className="container contact__container">
        <Zoom>
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
        </Zoom>
        <Zoom>
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
        </Zoom>
      </div> */}
    </section>
  );
};

export default contact;
