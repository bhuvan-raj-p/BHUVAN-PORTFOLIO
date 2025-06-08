import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10 pt-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Bhuvan
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Creating beautiful, interactive, and user-friendly web experiences
            with modern technologies and elegant design principles.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg transition-all duration-300"
            >
              Download Resume
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 block"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNextSection}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          >
            <Link to="/about">
              <ArrowDown size={24} />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
