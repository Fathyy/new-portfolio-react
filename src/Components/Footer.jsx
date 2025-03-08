import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Let's Connect</p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com/in/fathi-abdi-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition duration-300"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Fathyy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-red-500 hover:bg-red-400 transition duration-300"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mb-6">
          <a href="#home" className="mx-3 text-gray-400 hover:text-white">Home</a>
          <a href="#about" className="mx-3 text-gray-400 hover:text-white">About</a>
          <a href="#myWork" className="mx-3 text-gray-400 hover:text-white">Projects</a>
          <a href="#contact" className="mx-3 text-gray-400 hover:text-white">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Fathi Abdi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
