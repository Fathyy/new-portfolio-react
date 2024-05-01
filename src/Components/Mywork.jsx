import WorkItem from "./WorkItem";
import { workItems } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mywork = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // When 10% of the element is visible
  });

  return (
    <div>
      <div className="py-20 sm:py-32">
        <div className="">
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center sm:text-left">
            What I have done so far
          </p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-3 underline decoration-PrimaryBlue underline-offset-8 text-center sm:text-left">
            My Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {workItems.map((item, index) => (
            <motion.div
              ref={ref}
              key={index}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <WorkItem key={item.id} {...item}/>
            </motion.div>
          ))}

        </div>
        <div className="flex justify-center items-center">
          <button className="px-6 py-3 bg-PrimaryBlue outline-none border-none text-white font-bold mt-7">
            SHOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
