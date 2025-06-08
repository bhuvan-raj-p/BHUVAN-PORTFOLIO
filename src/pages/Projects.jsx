import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Amazon-inspired cloned E-Commerce Website",
      description:
        "A full-featured cloned e-commerce platform built with JavaScript and modern web technologies. Features include shopping cart, user authentication, and payment integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "Json"],
      image:
        "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QW1hem9uJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/bhuvan-raj-p/Amazon-web-inspired",
      demo: "https://amazon-web-inspired.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Apple-Inspired Product Landing Page Clone",
      description:
        "Built an Apple iPhone landing page clone with React.js, Vite, Tailwind CSS, and GSAP, featuring smooth animations and modern UI for a rich user experience.",
      tech: ["React", "Tailwind CSS", "GSAP", "Vite"],
      image:
        "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFwcGxlfGVufDB8fDB8fHww",
      github: "https://github.com/bhuvan-raj-p/Apple_iPhone",
      demo: "https://apple-i-phone-theta.vercel.app/",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my frontend development work, featuring modern web
            applications built with cutting-edge technologies and thoughtful
            user experience design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <ArrowUp size={16} className="rotate-45" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full flex justify-center mt-12">
        <Link
          to="/skills"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          View My Skills
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
