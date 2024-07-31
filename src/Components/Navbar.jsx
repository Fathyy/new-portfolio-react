import { useContext, useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { DarkModeContext } from "../context/theme-context";
import { navLinks } from "../data";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between items-center mt-8">
      <div className="">
        <p className="text-PrimaryBlue text-4xl font-bold">Fathi</p>
      </div>
      <div className="">
        <ul className="hidden sm:flex gap-4 uppercase text-xl">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`
                text-white
           font-bold
          cursor-pointer
          text-[16px]
          ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}
          `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Dark mode toggle button */}
          <button type="button" onClick={toggleDarkMode} className="text-3xl">
            {darkMode ? (
              <IoMdSunny style={{ color: "#168fba" }} />
            ) : (
              <IoMdMoon style={{ color: "#168fba" }} />
            )}
          </button>
        </ul>
      </div>

      {/* navbar on small screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-darkerBlack absolute top-20 right-0
        mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`
          text-white font-bold
          cursor-pointer
          text-[16px]
          ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}
          `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
