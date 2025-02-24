import React, { useRef, useState, useEffect } from "react";
import cs from "./contact.module.css"; // Ensure this file exists in the correct path
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef, SiLeetcode } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const form = useRef();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle WhatsApp Message Sending
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Hello, I'm ${name}. My email is ${email}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/919963183222?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle Email Submission
  const sendEmail = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ff7b9cee-59c2-4bca-a5d9-5eee1c8262c2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Submission Failed. Try again.");
      console.error("Error:", error);
    }
  };

  // Show alert when result changes
  useEffect(() => {
    if (result) alert(result);
  }, [result]);

  return (
    <motion.div
      className="page"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className={cs.contactContainer}>
        <div className={cs.contactContent}>
          {/* Heading Section */}
          <h2 className={cs.contactHeading}>
            CONTACT <span className={cs.highlight}>ME</span>
          </h2>
          <p className={cs.contactSubtitle}>
            I&apos;m always open to discussing product design work or partnerships.
          </p>

          <div className={cs.contt1}>
            <div className={cs.contactGrid}>
              {/* Contact Info */}
              <div className={cs.contactInfo}>
                <ul>
                  <li>
                    <a href="sms:+919963183222" className={cs.link}>
                      <FaWhatsapp className={cs.i1} />
                      <span>+91 9963183222</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:22P31A0438@acet.ac.in" className={cs.link}>
                      <AiFillMail className={cs.i1} />
                      <span>22P31A0438@acet.ac.in</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/22P31A0438"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cs.link}
                    >
                      <FaGithub className={cs.i1} />
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/naga-rama-devi-pithani-a9ba71263/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cs.link}
                    >
                      <FaLinkedin className={cs.i1} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>

                {/* Social Profiles */}
                <div className={cs.socialLinks}>
                  <h6>Social Profiles</h6>
                  <div className={cs.icons}>
                    <a href="https://www.hackerrank.com/profile/22P31A0438" target="_blank" rel="noopener noreferrer">
                      <FaHackerrank className={cs.i1} />
                    </a>
                    <a href="https://leetcode.com/u/RamaDevi09/" target="_blank" rel="noopener noreferrer">
                      <SiLeetcode className={cs.i1} />
                    </a>
                    <a href="https://www.codechef.com/users/ramadevi9" target="_blank" rel="noopener noreferrer">
                      <SiCodechef className={cs.i1} />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/22p31a0438/" target="_blank" rel="noopener noreferrer">
                      <SiGeeksforgeeks className={cs.i1} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={cs.contactForm}>
                <p>If you have any suggestions, projects, or even just want to say hello, please fill out the form below.</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className={cs.inputGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={cs.inputGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={cs.inputGroup}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className={cs.sendBtn}>
                    <i className="fa fa-paper-plane"></i> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
