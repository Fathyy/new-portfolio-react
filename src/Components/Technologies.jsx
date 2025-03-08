import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaPhp, FaCss3Alt, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiFirebase, SiRedux, SiShadcnui } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { useContext } from "react";
import { DarkModeContext } from "../context/theme-context";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { darkMode } = useContext(DarkModeContext);

  const techIcons = [
    { icon: <FaReact className="text-[#61DAFB] text-7xl" />, name: "React", duration: 2.5 },
    { icon: <SiNextdotjs className="text-white text-7xl" />, name: "Next.js", duration: 3 }, 
    { icon: <FaJs className="text-[#F7DF1E] text-7xl" />, name: "JavaScript", duration: 5 }, 
    { icon: <SiTypescript className="text-[#3178C6] text-7xl" />, name: "TypeScript", duration: 2 }, 
    { icon: <SiTailwindcss className="text-[#38B2AC] text-7xl" />, name: "Tailwind CSS", duration: 6 },
    { icon: <FaBootstrap className="text-[#7952B3] text-7xl" />, name: "Bootstrap", duration: 4 },
    { icon: <FaPhp className="text-[#777BB4] text-7xl" />, name: "PHP", duration: 3 },
    { icon: <FaCss3Alt className="text-[#1572B6] text-7xl" />, name: "CSS", duration: 5 },
    { icon: <GrMysql className="text-[#4479A1] text-7xl" />, name: "MySQL", duration: 2 },
    { icon: <FaNodeJs className="text-[#339933] text-7xl" />, name: "Node.js", duration: 4 },
    { icon: <SiExpress className="text-white text-7xl" />, name: "Express.js", duration: 5 },
    { icon: <SiMongodb className="text-[#47A248] text-7xl" />, name: "MongoDB", duration: 3 },
    { icon: <SiFirebase className="text-[#FFCA28] text-7xl" />, name: "Firebase", duration: 4 },
    { icon: <SiRedux className="text-[#764ABC] text-7xl" />, name: "Redux", duration: 5 },
    { icon: <SiShadcnui className="text-[#38BDF8] text-7xl" />, name: "Shadcn UI", duration: 3 },
  ];

  return (
    <div className="py-20 sm:py-32">
      <div>
        <h3
          className={`text-${darkMode ? "white" : "lighterBlack"} text-3xl sm:text-4xl font-bold mb-12 underline decoration-PrimaryBlue underline-offset-8 text-center`}
        >
          Technologies
        </h3>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-6 flex-wrap"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className={`group relative ${darkMode ? 'border-neutral-800' : 'border-neutral-500'} rounded-2xl border-4 p-4`}
          >
            {tech.icon}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] scale-0 transition-transform duration-200 group-hover:scale-100 bg-black text-white text-xs px-2 py-1 rounded-lg">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
