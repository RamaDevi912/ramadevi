import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cs from "./myport.module.css";
import pa from "./pageanimation.module.css";
import img1 from "../assets/myimg.jpg";

export default function Main() {
  return (
    <motion.div
      className="page"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={cs.main}>
        <div className={cs.main1}>
          <img src={img1} alt="Rama" className={cs.img1} />
          <div className={cs.main2}>
            <div className={cs.greeting}>HI THERE!</div>
            <div className={cs.name}>
              <div>I'M </div>
              <span className={cs.typewriter}>
                <Typewriter
                  words={[
                    "RAMA DEVI",
                    "A FULL STACK DEVELOPER",
                    "A COMPETITIVE PROGRAMMER",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <p className={cs.description}>
              I'm a Full-Stack Developer specializing in React.js, JavaScript,
              and modern web technologies. With a strong foundation in Data
              Structures and Algorithms, I create efficient and user-friendly
              web applications.
            </p>
            <div className={cs.buttons}>
              <Link to="/about">
                <button className={cs.button}>More about me</button>
              </Link>
              <Link to="/work">
                <button className={cs.button}>Certifications & Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
