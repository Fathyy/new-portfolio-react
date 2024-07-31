import { FaCode } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../context/theme-context";
import { useContext } from "react";

const Services = () => {
  const { darkMode } = useContext(DarkModeContext);

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // When 50% of the element is visible
  });

  return (
    <div>
      <div className="py-20 sm:py-32">
        <div className="">
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center">
            What I do
          </p>
          <h3
            className={`text-${
              darkMode ? "white" : "lighterBlack"
            } text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center `}
          >
            My Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="border border-PrimaryBlue p-10 space-y-4 flex flex-col"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FaCode className="text-PrimaryBlue text-6xl self-center" />
            <h4
              className={`text-${
                darkMode ? "white" : "slate-700"
              } text-2xl font-bold text-center`}
            >
              Web Development
            </h4>
            <p
              className={`text-${
                darkMode ? "lighterText" : "slate-500"
              } text-lg sm:text-xl text-center sm:text-left`}
            >
              Creating high-quality, dynamic websites is my passion.
              Specialising in React, Next.js, and full-stack development, I
              deliver robust and scalable web solutions tailored to your needs.
              With innovative and efficient web applications, let us bring your
              vision to life.
            </p>
          </motion.div>

          <motion.div
            className="border border-PrimaryBlue p-10 space-y-4 flex flex-col"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <IoBuildOutline className="text-PrimaryBlue text-6xl self-center" />
            <h4
              className={`text-${
                darkMode ? "white" : "slate-700"
              } text-2xl font-bold text-center`}
            >
              Technical Writing
            </h4>
            <p
              className={`text-${
                darkMode ? "lighterText" : "slate-500"
              } text-lg sm:text-xl text-center sm:text-left`}
            >
              Crafting clear and concise technical documentation is essential
              for effective communication and user satisfaction. I
              ensure your projects are well-documented and accessible. Let us
              enhance your technical documentation to empower your users and
              streamline your processes.
            </p>
          </motion.div>

          <motion.div
            className="border border-PrimaryBlue p-10 space-y-4 flex flex-col"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <IoDocumentsOutline className="text-PrimaryBlue text-6xl self-center" />
            <h4
              className={`text-${
                darkMode ? "white" : "slate-700"
              } text-2xl font-bold text-center `}
            >
              SEO
            </h4>
            <p
              className={`text-${
                darkMode ? "lighterText" : "slate-500"
              } text-lg sm:text-xl text-center sm:text-left`}
            >
              Boosting your online presence with effective SEO strategies is key
              to your success. I specialise in optimising websites to rank
              higher in search engine results, driving more organic traffic to
              your site. Let us enhance your visibility and connect you with your
              target audience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
