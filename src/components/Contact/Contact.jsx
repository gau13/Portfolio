import React from "react";
import { useRef } from "react";
import "./Contact.scss";
import { IoIosSend } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("hiiii");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wws67ic",
        "template_5aaz6w2",
        form.current,
        "t00rk5U0u4wO1ortR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onButtonClick = () => {
    const pdfUrl = "https://rxresu.me/gauravmkhadke/full-stack-developer";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className="subtitle">
        <h1>Contact Me</h1>
      </div>

      <div id="contact">
        <div className="container">
          <div id="contact">
            <div className="first">
              <p className="mail">
                <IoIosSend className="connect" />
                gauravmkhadke@gmail.com
              </p>
              <p className="contact">
                <FaPhoneSquareAlt className="connect" />
                9834041593
              </p>
              {/* <a
                href="file:///C:/Users/ADMIN/Downloads/clrqjg9a800671437jjb4g0cr-_3_.pdf"
                download
              > */}
              <button onClick={onButtonClick}>Download CV</button>
              {/* </a> */}
            </div>
            <div className="second">
              <span className="contactDesc">
                Please fill the below form to discuss any work opportunity
              </span>

              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  className="fname"
                  placeholder="Your Name"
                  name="your_name"
                  required
                />
                <input
                  type="email"
                  className="email"
                  placeholder="Your Email"
                  name="your_email"
                  required
                />
                <textarea
                  className="msg"
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
