import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact">
      <div className="py-20 sm:py-32">
        <div className=" flex gap-6 items-center">
          <p className="text-xl text-white">Follow me through</p>
          <div className="border border-blue-500 rounded-full p-4">
            <a
              href="https://linkedin.com/in/fathi-abdi-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-[30px] h-[30px] text-white text-6xl" />
            </a>
          </div>
          <div className="border border-blue-500 rounded-full p-4">
            <a
              href="https://github.com/Fathyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-[30px] h-[30px] text-white text-6xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
