import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 relative z-10"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Frontend Specialist
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate frontend developer with expertise in React,
                  JavaScript, Tailwind CSS and modern web technologies. I love
                  creating intuitive user interfaces that provide exceptional
                  user experiences.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Creative Problem Solver
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With a keen eye for design and attention to detail, I
                  transform complex problems into elegant, user-friendly
                  solutions that make a real impact.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  Continuous Learner
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The tech world evolves rapidly, and I stay current with the
                  latest trends, frameworks, and best practices to deliver
                  cutting-edge solutions.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1"
              >
                <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/Bhuvan.jpeg"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-8 space-y-4"
              >
                <h3 className="text-2xl font-bold text-white">
                  Bhuvan Raj Developer
                </h3>
                <p className="text-gray-400">Frontend Developer</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>📍 Chennai, India</span>
                  <span> Passionate Learner </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          View My Projects
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
