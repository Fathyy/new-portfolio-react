import { useContext } from "react";
import { DarkModeContext } from "../context/theme-context";

const WorkItem = ({ image, heading, description, technology }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div
        className={`text-${
          darkMode ? "bg-lighterBlack" : ""
        } p-10 space-y-4 border border-PrimaryBlue`}
      >
        <div>
          <img src={image} alt="" />
        </div>
        <h4
          className={`text-${
            darkMode ? "white" : "slate-700"
          } text-2xl font-bold text-center sm:text-left`}
        >
          {heading}
        </h4>
        <p
          className={`text-${
            darkMode ? "lighterText" : "slate-500"
          } text-lg sm:text-xl text-center sm:text-left`}
        >
          {description}
        </p>
        {technology.map((techItem, index) => (
          <span
            key={index}
            className="inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-PrimaryBlue"
          >
            {techItem}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkItem;
