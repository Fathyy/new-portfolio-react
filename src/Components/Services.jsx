import { FaCloud, FaCode, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../context/theme-context";
import { useContext } from "react";

const Services = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div id="services">
      <div className="py-20 sm:py-32">
        <div>
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center">What I do</p>
          <h3
            className={`text-${darkMode ? "white" : "lighterBlack"} text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center`}
          >
            My Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="group border border-PrimaryBlue p-10 space-y-4 flex flex-col transition-all duration-300 hover:bg-PrimaryBlue"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FaCloud className="text-PrimaryBlue text-6xl self-center group-hover:text-white" />
            <h4 className={`text-${darkMode ? "white" : "slate-700"} text-2xl font-bold text-center`}>Cloud Computing</h4>
            <p className={`text-${darkMode ? "lighterText" : "slate-500"} text-lg sm:text-xl text-center sm:text-left`}>
              Leveraging cloud infrastructure to deploy scalable, secure, and efficient applications. I specialize in cloud services like AWS, Firebase, and Vercel, ensuring high availability and performance.
            </p>
          </motion.div>

          <motion.div
            className="group border border-PrimaryBlue p-10 space-y-4 flex flex-col transition-all duration-300 hover:bg-PrimaryBlue"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaServer className="text-PrimaryBlue text-6xl self-center group-hover:text-white" />
            <h4 className={`text-${darkMode ? "white" : "slate-700"} text-2xl font-bold text-center`}>Software Implementation</h4>
            <p className={`text-${darkMode ? "lighterText" : "slate-500"} text-lg sm:text-xl text-center sm:text-left`}>
              I help businesses integrate and implement software solutions tailored to their needs, ensuring seamless deployment, compatibility, and optimization for business growth.
            </p>
          </motion.div>

          <motion.div
            className="group border border-PrimaryBlue p-10 space-y-4 flex flex-col transition-all duration-300 hover:bg-PrimaryBlue"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaCode className="text-PrimaryBlue text-6xl self-center group-hover:text-white" />
            <h4 className={`text-${darkMode ? "white" : "slate-700"} text-2xl font-bold text-center`}>Full Stack Development</h4>
            <p className={`text-${darkMode ? "lighterText" : "slate-500"} text-lg sm:text-xl text-center sm:text-left`}>
              Building modern web applications using React, Next.js, Node.js, and databases like MongoDB and PostgreSQL. From frontend to backend, I ensure seamless user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
