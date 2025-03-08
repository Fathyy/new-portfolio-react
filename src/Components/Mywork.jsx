import WorkItem from "./WorkItem";
import { workItems } from "../data";
import { DarkModeContext } from "../context/theme-context";
import { useContext, useState } from "react";

const MyWork = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("MERN");

  // Filter workItems based on selectedCategory
  const filteredWorkItems = workItems.filter(
    (item) => item.category === selectedCategory
  );

  // Slice the filteredWorkItems array based on showMore state
  const displayedItems = showMore ? filteredWorkItems : filteredWorkItems.slice(0, 3);

  return (
    <div id="myWork">
      <div className="py-20 sm:py-32">
        <div className="">
          <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center">
            What I have done so far
          </p>
          <h3
            className={`text-${
              darkMode ? "white" : "lighterBlack"
            } text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center`}
          >
            My Work
          </h3>
        </div>

        <div className="text-center mb-6">
          <button
            className={`mx-2 p-2 rounded ${
              selectedCategory === "MERN" ? "bg-PrimaryBlue text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory("MERN")}
          >
            MERN
          </button>
          <button
            className={`mx-2 p-2 rounded ${
              selectedCategory === "nextjs" ? "bg-PrimaryBlue text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory("nextjs")}
          >
            Next.js
          </button>
          <button
            className={`mx-2 p-2 rounded ${
              selectedCategory === "wordpress" ? "bg-PrimaryBlue text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory("wordpress")}
          >
            WordPress
          </button>
          <button
            className={`mx-2 p-2 rounded ${
              selectedCategory === "react" ? "bg-PrimaryBlue text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory("react")}
          >
            React
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayedItems.map((item) => (
            <WorkItem key={item.id} {...item} />
          ))}
        </div>

        {/* Show More button is only displayed when there are more than 3 items in Next.js or React */}
        {filteredWorkItems.length > 3 &&
          (selectedCategory === "nextjs" || selectedCategory === "react") && (
            <div className="flex justify-center items-center">
              <button
                className="px-6 py-3 bg-PrimaryBlue outline-none border-none text-white font-bold mt-7"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "SHOW LESS" : "SHOW MORE"}
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default MyWork;
