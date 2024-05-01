import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import profileImage from "../assets/profileImage.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view.
  });

  return (
    <motion.div className="flex flex-col sm:flex-row justify-center gap-10 py-20 sm:py-32 sm:h-[800px]"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="flex-1"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImage}
          alt="my-profile"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div className="flex-1"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-PrimaryBlue text-2xl font-bold mb-3 text-center sm:text-left">
          Discover
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 underline decoration-PrimaryBlue underline-offset-8 text-center sm:text-left">
          About Me
        </h3>
        <p className="text-lighterText text-lg sm:text-xl text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          temporibus animi eos! Eius error laboriosam distinctio blanditiis
          porro quia maiores tempore iure culpa? Quas, incidunt deserunt.
          Maxime, est quo fuga iste in perspiciatis dolore blanditiis unde
          fugiat rerum cum, reprehenderit rem incidunt nulla dicta eaque.
          Asperiores voluptatibus quibusdam ex iste.
        </p>
        <div className="flex items-center sm:items-start justify-center sm:justify-start mt-8">
          <button className="px-6 py-3 sm:px-12 sm:py-6 bg-PrimaryBlue outline-none border-none text-white font-bold">
            DOWNLOAD CV
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
