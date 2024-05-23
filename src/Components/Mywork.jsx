import WorkItem from "./WorkItem";
import { workItems } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DarkModeContext } from "../context/theme-context";
import { useContext, useState } from "react";


const Mywork = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showMore, setShowMore] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Slice the workItems array based on showMore state
  const displayedItems = showMore ? workItems : workItems.slice(0, 3);

  return (
    <div>
      <div className="py-20 sm:py-32">
        <div className="">
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center sm:text-left">
            What I have done so far
          </p>
          <h3 className={`text-${darkMode ? 'white' : 'lighterBlack'} text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center sm:text-left `}>
            My Work
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayedItems.map((item, index) => (
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
        <button
          className="px-6 py-3 bg-PrimaryBlue outline-none border-none text-white font-bold mt-7"
          onClick={() => setShowMore(!showMore)} 
        >
          {showMore ? "SHOW LESS" : "SHOW MORE"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
