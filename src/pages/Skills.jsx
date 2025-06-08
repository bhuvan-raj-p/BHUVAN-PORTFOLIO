import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "HTML5", level: 95, icon: "🔗" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React Router", level: 80, icon: "🛣️" },
        { name: "Next.js", level: 60, icon: "▲" },
        { name: "Framer Motion", level: 70, icon: "🎭" },
        { name: "GSAP", level: 60, icon: "🎲" },
        { name: "Redux", level: 70, icon: "🔄" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 80, icon: "📝" },
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "npm", level: 85, icon: "📋" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "GitHub", level: 95, icon: "📝" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
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
              My Skills
            </span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            across various frontend technologies and development tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700"
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.span
                          className="text-xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous
              learning. Currently exploring GSAP, Framer Motion, Next.js and
              advanced React patterns to stay at the forefront of frontend
              development.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full flex justify-center mt-12">
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          Contact Me
        </Link>
      </div>
    </motion.div>
  );
};

export default Skills;
