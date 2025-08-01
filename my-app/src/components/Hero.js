'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6 flex items-center justify-center text-6xl font-bold text-white">
            SA
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Shoaib Akhter
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-purple-300 mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span>Full Stack Developer</span>
            <span className="text-cyan-400">|</span>
            <span>Software Engineer</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 text-gray-300 mb-8 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Karachi, Pakistan</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+92 (334) 014-0472</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>shoaibakhter181422@gmail.com</span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Passionate developer with expertise in modern web technologies, creating 
          innovative solutions that drive business growth and deliver exceptional user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            href="/Shoaib-Akhter-Resume.pdf"
            download="Shoaib-Akhter-Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-12"
        >
          <motion.a
            href="https://github.com/engineershoaibakhter"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/shoaib1814"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:shoaibakhter181422@gmail.com"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
