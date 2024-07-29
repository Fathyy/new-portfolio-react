import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
// import { FaWordpress } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "../context/theme-context";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="py-20 sm:py-32">
      <div>
        <h3
          className={`text-${
            darkMode ? "white" : "lighterBlack"
          } text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center`}
        >
          Technologies
        </h3>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <FaReact className="text-[#61DAFB] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <SiTailwindcss className="text-[#38B2AC] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <FaBootstrap className="text-[#7952B3] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <FaPhp className="text-[#777BB4] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <FaCss3Alt className="text-[#1572B6] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className={`${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4  p-4`}
        >
          <GrMysql className="text-[#4479A1] text-7xl" />
        </motion.div>


        {/* <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className={`${
            darkMode ? "border-neutral-800" : "border-neutral-500"
          } rounded-2xl border-4 p-4`}
        >
          <FaWordpress className="text-[#21759B] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className={`${
            darkMode ? "border-neutral-800" : "border-neutral-500"
          } rounded-2xl border-4 p-4`}
        >
          <RiNextjsFill className="text-[#000000] text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`${
            darkMode ? "border-neutral-800" : "border-neutral-500"
          } rounded-2xl border-4 p-4`}
        >
          <FaNodeJs className="text-[#339933] text-7xl" />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
