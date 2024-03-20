// import React, { useState } from "react";
// import githubIcon from "../Images/github-icon.png";
// import linkedIcon from "../Images/linkedin-icon.png";

// const Contact = () => {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [messsage, setMesssage] = useState("")

//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, messsage })
//       })
//       if(response.ok){
//         alert("Success!")
//       }
//     } catch (error) {
//       // alert(error)
//       console.log(error)
//     }

//   };

//   return (
//     <div className="contact-div-container">
//       <div className="contact-container">
//         <h2 className="contact-title">Contact</h2>

//         <form
//           className="contact-form"
//           name="contact"
//           // method="post"
//           // data-netlify="true"
//           netlify
//           // data-netlify-honeypot="bot-field"
//           onSubmit={handleSubmit}
//         >


//           <div className="input-container inline">
//             <div className="input-container">
//               <label htmlFor="name" className="contact-label">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="contact-input"
//                 name="name"
//                 placeholder="name"
//                 required
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//               />
//             </div>

//             <div className="input-container">
//               <label htmlFor="email" className="contact-label">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="contact-input"
//                 placeholder="email"
//                 name="email"
//                 required
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </div>
//           </div>

//           <div className="input-container">
//             <label htmlFor="message" className="contact-label">
//               Message:
//             </label>

//             <textarea
//               id="message"
//               className="contact-textarea"
//               placeholder="message"
//               name="message"
//               rows="4"
//               required
//               value={messsage}
//               onChange={(event) => setMesssage(event.target.value)}
//             />
//           </div>

//           <button type="submit" className="contact-button">
//             Submit
//           </button>
//         </form>

//         <div className="social-media-buttons">
//           <ul className="social">
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/ed-rojas/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src={linkedIcon}
//                   alt="LinkedIn"
//                   className="linkedin-icon"
//                 />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/erojas1212/VSchool"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img src={githubIcon} alt="Github" className="github-icon" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import githubIcon from "../Images/github-icon.png";
import linkedIcon from "../Images/linkedin-icon.png";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
          event.preventDefault();
          try {
            const response = await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, messsage })
            })
            if(response.ok){
              alert("Success!")
            }
          } catch (error) {
            // alert(error)
            console.log(error)
          }
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
        >
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
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
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
