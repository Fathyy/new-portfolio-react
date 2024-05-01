import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="py-20 sm:py-32">
        <div className=" flex gap-6 items-center">
          <p className="text-xl text-white">Follow me through</p>
          <div className="border border-blue-500 rounded-full p-4">
            <FaLinkedinIn className="w-[30px] h-[30px] text-white text-6xl" />
          </div>
          <div className="border border-blue-500 rounded-full p-4">
            <FaGithub className="w-[30px] h-[30px] text-white text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
