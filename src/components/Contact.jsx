import React, { useState } from "react";
import githubIcon from "../Images/github-icon.png";
import linkedIcon from "../Images/linkedin-icon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic using Fetch API
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <div className="contact-div-container">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          data-netlify-honeypot="bot-field"
        >
          {/* Hidden form name field */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="input-container inline">
            <div className="input-container">
              <label htmlFor="name" className="contact-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="contact-input"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="email" className="contact-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="contact-input"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="message" className="contact-label">
              Message:
            </label>

            <textarea
              id="message"
              className="contact-textarea"
              placeholder="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>

        <div className="social-media-buttons">
          <ul className="social">
            <li>
              <a
                href="https://www.linkedin.com/in/ed-rojas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedIcon}
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/erojas1212/VSchool"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="Github" className="github-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
