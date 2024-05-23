import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../context/theme-context";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center mt-[14rem]">
      <motion.div variants={textVariants} initial="initial" animate="animate">
      <motion.h1 variants={textVariants} className="text-white text-center text-4xl sm:text-5xl mb-6">
        Hi, I am <span className="text-PrimaryBlue">Fathi Abdi</span>
      </motion.h1>
      <motion.p variants={textVariants} className={`${darkMode ? 'text-lighterText' : 'text-white'} text-center text-xl`}>
        I am a frontend Developer with one year experience <br /> developing
        applications using React and Tailwind CSS
      </motion.p>

      <motion.div className="flex items-center justify-center gap-5 mt-6">
        <motion.div className="border border-blue-500 rounded-full p-4">
          <FaLinkedinIn className="w-[30px] h-[30px] text-white text-6xl" />
        </motion.div>
        <motion.div className="border border-blue-500 rounded-full p-4">
          <FaGithub className="w-[30px] h-[30px] text-white text-6xl" />
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Hero;
