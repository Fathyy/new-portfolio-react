import { FaCode } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // When 50% of the element is visible
  });

  return (
    <div>
      <div className="py-20 sm:py-32">
        <div className="">
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center sm:text-left">
            What I do
          </p>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 underline decoration-PrimaryBlue underline-offset-8 text-center sm:text-left">
            My Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <motion.div className="border border-PrimaryBlue p-10 space-y-4"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <FaCode className="text-PrimaryBlue text-6xl text-center sm:text-left" />
            <h4 className="text-2xl text-white font-bold text-center sm:text-left">
              Frontend Development
            </h4>
            <p className="text-lg sm:text-xl text-lighterText text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              nihil in ipsa numquam minus facilis dolorum eaque laudantium
              deserunt impedit.
            </p>
          </motion.div>

          <motion.div className="border border-PrimaryBlue p-10 space-y-4"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <IoBuildOutline className="text-PrimaryBlue text-6xl text-center sm:text-left" />
            <h4 className="text-2xl text-white font-bold text-center sm:text-left">
              Frontend Development
            </h4>
            <p className="text-lg sm:text-xl text-lighterText text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              nihil in ipsa numquam minus facilis dolorum eaque laudantium
              deserunt impedit.
            </p>
          </motion.div>

          <motion.div className="border border-PrimaryBlue p-10 space-y-4"
            ref={ref}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <IoDocumentsOutline className="text-PrimaryBlue text-6xl text-center sm:text-left" />
            <h4 className="text-2xl text-white font-bold text-center sm:text-left">
              Frontend Development
            </h4>
            <p className="text-lg sm:text-xl text-lighterText text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              nihil in ipsa numquam minus facilis dolorum eaque laudantium
              deserunt impedit.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
