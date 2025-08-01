'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Heart, Award } from 'lucide-react';

export default function About() {
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

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "42+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "26+", label: "Technologies" }
  ];

  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Analytical mindset with ability to break down complex problems into manageable solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate Developer",
      description: "Continuously learning and staying updated with the latest technologies and best practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Focused",
      description: "Committed to writing clean, maintainable code and delivering high-quality solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-purple-300" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SA</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated Full Stack Developer with a passion for creating innovative 
                digital solutions. With extensive experience in modern web technologies, 
                I specialize in building scalable applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across frontend and backend development, with a strong 
                foundation in JavaScript, React, Node.js,Generative AI,Chatbot and cloud technologies. I enjoy 
                collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-full">
                  Backend Development
                </span>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full">
                  Cloud Solutions
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {highlight.title}
                </h4>
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
