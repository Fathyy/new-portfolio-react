import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../context/theme-context";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center mt-[14rem]">
      <motion.div variants={textVariants} initial="initial" animate="animate"
       className="max-w-[600px] text-center">
        <motion.h1
          variants={textVariants}
          className="text-white text-center text-4xl sm:text-5xl mb-6"
        >
          Hi, I am <span className="text-PrimaryBlue">Fathi Abdi</span>
        </motion.h1>
        <motion.p
          variants={textVariants}
          className={`${
            darkMode ? "text-lighterText" : "text-white"
          } text-center text-xl`}
        >
          Hello! Nice to meet you. I am Fathi Abdi, a full-stack developer specializing in the MERN stack. I enjoy building dynamic and scalable web applications using React, Node.js, Express, and MongoDB, along with tools like Tailwind CSS, Shadcn, TypeScript, Firebase, and Redux to enhance performance and user experience.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-5 mt-6">
          <motion.div className="border border-blue-500 rounded-full p-4">
            <a
              href="https://linkedin.com/in/fathi-abdi-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-[30px] h-[30px] text-white text-6xl" />
            </a>
          </motion.div>
          <motion.div className="border border-blue-500 rounded-full p-4">
            <a
              href="https://github.com/Fathyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-[30px] h-[30px] text-white text-6xl" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
