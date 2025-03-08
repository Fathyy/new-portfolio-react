import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../context/theme-context";
import { useContext } from "react";
import { awsCCP, developerBot } from "../assets";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-10 py-20 sm:py-32 sm:h-[800px]"
      id="about"
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
        <a
          href="https://www.credly.com/badges/0915ff34-eae5-4ee9-9aea-f543fcd28011/public_urlA" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={awsCCP} 
            alt="AWS Certified Cloud Practitioner"
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </a>
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
          } text-base sm:text-xl text-center sm:text-left`}
        >
          In my current role as an implementation engineer, I test and support
          enterprise financial applications, ensuring they run smoothly for
          users. I also act as a bridge between developers and users, handling
          queries and facilitating seamless communication for issue resolution.
          Additionally, I am AWS Certified Cloud Practitioner (CCP), expanding
          my knowledge in cloud computing and scalable infrastructure. If you
          have a project in mind, I’d love to work on it with you. Feel free to
          reach out!.
        </p>
        <div className="flex items-center sm:items-start justify-center sm:justify-start mt-8">
          <button className="px-6 py-3 sm:px-12 sm:py-6 bg-PrimaryBlue outline-none border-none text-white font-bold">
            CONTACT ME
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
