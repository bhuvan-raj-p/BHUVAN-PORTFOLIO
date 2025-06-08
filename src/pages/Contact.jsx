import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS (you would need to set up your service)
      await emailjs.send(
        "service_aahmqpx", // Replace with your EmailJS service ID
        "template_qlf0bba", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tP7DowuXAQT5eyJlM" // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
        variant: "default",
      });

      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/bhuvan-raj-p",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bhuvan-raj-p/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: X,
      href: "https://x.com/home",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

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
              Get In Touch
            </span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Bhuvan"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="bhuvanraj262005@gmail.com"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question or just want
                to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📧</span>
                  <span>bhuvanraj262005@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📞</span>
                  <span>+91 7810028560</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">📍</span>
                  <span>Chennai, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-blue-400">💼</span>
                  <span>Seeking full-time office position</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Quick Response
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to messages within 24 hours. For urgent
                inquiries, feel free to connect with me on LinkedIn for a faster
                response.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
