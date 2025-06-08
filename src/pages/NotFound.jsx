
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.8)",
                "0 0 10px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>
        </motion.div>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 mb-8 max-w-md mx-auto"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved,
          deleted, or you entered the wrong URL.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg transition-all duration-300"
          >
            <ArrowUp size={20} className="rotate-180" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl mb-4"
          >
            🚀
          </motion.div>
          <p className="text-gray-400 text-sm">
            Let's get you back on track to explore my portfolio!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
