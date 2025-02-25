import React, { useEffect, useState } from "react";

import Profile from "../components/Profile";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";

const HomeScreen = () => {
  // Typing Animation Texts
  const roles = ["Web Designer", "Frontend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const refResume = useRef(null);
  const isInViewResume = useInView(refResume, { once: true, margin: "-100px" });

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < roles[index].length) {
          setText((prev) => prev + roles[index][charIndex]);
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === roles[index].length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      },
      isDeleting ? 100 : 150
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);
  return (
    <div
      id="Home"
      className="bg-cyan-400  absolute w-full h-full "
      style={{
        backgroundImage: `url(${"/assets/img/computer.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black  opacity-70 w-full h-full flex justify-center items-center">
        <div className="opacity-100 text-white">
          <motion.div
       
            initial={{ opacity: 0, y: 50 }}
            animate={ { opacity: 1, y: 0 } }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Typing Animation */}
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              I am Thae Oo Su Pyae Sone
            </h1>

            <div className="text-2xl md:text-4xl mt-3 text-center font-semibold text-white-400  ">
              <span className="text-white">{text}</span>
              <span className="animate-blink">|</span>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Profile />
      </motion.div>
      <motion.div
        ref={refResume}
        initial={{ opacity: 0, y: 50 }}
        animate={isInViewResume ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Resume />
      </motion.div>
      <Portfolio/>
      
    </div>
  );
};

export default HomeScreen;
