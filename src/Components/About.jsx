import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myImage from "../assets/myImage.jpeg";
import { DarkModeContext } from "../context/theme-context";
import { useContext } from "react";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust this value as needed
  });

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-10 py-20 sm:py-32 sm:h-[800px]"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex-1"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          alt="my-profile"
          className="h-full w-full object-cover rounded-[50%]"
        />
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center sm:text-left">
          Discover
        </p>
        <h3
          className={`text-${
            darkMode ? "white" : "lighterBlack"
          } text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center sm:text-left `}
        >
          About Me
        </h3>
        <p
          className={`text-${
            darkMode ? "lighterText" : "slate-500"
          } text-lg sm:text-xl text-center sm:text-left`}
        >
          Hello, I am a skilled front-end developer skilled at making good
          looking UI, responsive websites and modern looking websites. My
          proficiency spans a diverse range of programming and design
          technologies, including React, Tailwind, MUI, Bootstrap, and
          PHP. These tools are the foundation of my work, enabling me to create
          innovative digital solutions that seamlessly blend functionality with
          aesthetics.
        </p>
        <div className="flex items-center sm:items-start justify-center sm:justify-start mt-8">
          <button className="px-6 py-3 sm:px-12 sm:py-6 bg-PrimaryBlue outline-none border-none text-white font-bold">
            DOWNLOAD CV
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
