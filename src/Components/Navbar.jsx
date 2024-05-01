import { useState } from "react";
import { motion } from "framer-motion";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div className="flex justify-between items-center mt-8"
      initial={{ x: -1000, rotate: -180 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="">
        <p className="text-PrimaryBlue text-4xl font-bold">Fathi</p>
      </div>
      <div className="">
        <ul className="hidden sm:flex gap-4 uppercase text-xl">
          <li
            className="text-white font-bold
          cursor-pointer
          text-[16px]"
          >
            Home
          </li>
          <li
            className="text-white font-bold
          cursor-pointer
          text-[16px]"
          >
            About
          </li>
          <li
            className="text-white font-bold
          cursor-pointer
          text-[16px]"
          >
            Services
          </li>
          <li
            className="text-white font-bold
          cursor-pointer
          text-[16px]"
          >
            My Work
          </li>
          <li
            className="text-white font-bold
          cursor-pointer
          text-[16px]"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* navbar on small screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <motion.div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-darkerBlack absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: toggle ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li
                className="text-white font-bold
          cursor-pointer
          text-[16px] mb-4"
              >
                Home
              </li>
              <li
                className="text-white font-bold
          cursor-pointer
          text-[16px] mb-4"
              >
                About
              </li>
              <li
                className="text-white font-bold
          cursor-pointer
          text-[16px] mb-4"
              >
                Services
              </li>
              <li
                className="text-white font-bold
          cursor-pointer
          text-[16px] mb-4"
              >
                My Work
              </li>
              <li
                className="text-white font-bold
          cursor-pointer
          text-[16px] mb-4"
              >
                Contact
              </li>
            </ul>
        </motion.div>
        </div>
    </motion.div>
  );
};

export default Navbar;
