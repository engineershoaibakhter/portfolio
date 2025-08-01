'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star, Users, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Builder Management System",
      description: "An advanced automation platform designed for customers and builders to efficiently create and manage projects. This Australian-based system streamlines workflows, enhances collaboration, and automates key construction management processes.",
      image: "/images/buildies.png",
      technologies: ["React","Next", "Node.js", "Express.js", "Tailwind CSS","Vercel","Firebase",],
      github: "https://github.com/engineershoaibakhter",
      demo: "https://www.buildies.io/",
      featured: true,
      stats: {
        stars: 145,
        contributors: 4,
        commits: 523
      },
      highlights: [
        "Australian-based construction platform",
        "Advanced automation workflows",
        "Real-time collaboration features",
        "Deployed on Vercel with high reliability"
      ]
    },
    {
      title: "BlogNetwork Application",
      description: "Multi-Admin Blogging Application & Ads Management Platform built with MENN stack featuring Redux Toolkit for state management and Firebase for backend services. A comprehensive platform for content creators and bloggers.",
      image: "/images/blognetwork.png",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "Mongo DB","Firebase"],
      github: "https://github.com/engineershoaibakhter",
      demo: "https://blognetwork.live/",
      featured: true,
      stats: {
        stars: 89,
        contributors: 3,
        commits: 456
      },
      highlights: [
        "Multi-admin functionality",
        "Ads Management System",
        "MERN stack with Redux Toolkit",
        "Firebase integration",
        "Live production deployment"
      ]
    },
    {
      title: "BCA-Corp Website",
      description: "Corporate website built for client using Next.js featuring modern design, responsive layout, and optimized performance. Built during my time at Onde Digital, showcasing professional corporate online presence.",
      image: "/images/bcacorp.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/engineershoaibakhter/Property-Group-Client-Project",
      demo: "https://bcacorp.vercel.app/",
      featured: true,
      stats: {
        stars: 67,
        contributors: 2,
        commits: 158
      },
      highlights: [
        "Client project at Onde Digital",
        "Next.js corporate website",
        "Modern responsive design",
        "Professional business presence"
      ]
    },
    {
      title: "Full-Stack Auth Todo Application",
      description: "A modern, secure todo management application built with Next.js and Node.js, featuring JWT-based authentication, role-based permissions, password reset functionality, and a responsive dashboard. Supports admin and sub-admin roles with collaborative task management.",
      image: "/images/full-stack-todo.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Express.js", "bcrypt"],
      github: "https://github.com/engineershoaibakhter/learning-backend",
      demo: "https://todo-with-auth-blond.vercel.app/",
      featured: true,
      stats: {
        stars: 112,
        contributors: 1,
        commits: 24
      },
      highlights: [
        "JWT-based authentication system",
        "Role-based access control (RBAC)",
        "Admin and sub-admin roles",
        "Password reset functionality",
        "Collaborative task management"
      ]
    },
    {
      title: "AI-Fashion Website",
      description: "A modern AI-powered fashion website built as a sample project for AI software integration. Features cutting-edge design and showcases the potential of AI in the fashion industry with interactive elements and modern user experience.",
      image: "/images/aifashion.png",
      technologies: ["Next.js", "React", "CSS", "AI Integration"],
      github: "https://github.com/engineershoaibakhter/ai-fashion",
      demo: "https://ai-fashion-vert.vercel.app/",
      featured: false,
      stats: {
        stars: 89,
        contributors: 1,
        commits: 2
      },
      highlights: [
        "AI-powered fashion platform",
        "Modern interactive design",
        "Sample AI software integration",
        "Built at Onde Digital"
      ]
    },
    {
      title: "Dictionary Application",
      description: "Interactive dictionary application built with Next.js and Tailwind CSS. Features word definitions, audio pronunciation, and download functionality. Developed during SMIT training program for enhanced learning experience.",
      image: "/images/dictionary.png",
      technologies: ["Next.js", "Tailwind CSS", "Audio API", "React"],
      github: "https://github.com/engineershoaibakhter/AI-and-chatbot-course/tree/main/dictionary",
      demo: "https://dictionary-application-mocha.vercel.app/",
      featured: false,
      stats: {
        stars: 76,
        contributors: 1,
        commits: 98
      },
      highlights: [
        "Word definitions and meanings",
        "Audio pronunciation feature",
        "Download functionality",
        "SMIT training project"
      ]
    },
    {
      title: "Education Portal",
      description: "Comprehensive education portal built with Next.js, Tailwind CSS, Redux Toolkit and Firebase. Users can add class names and multiple project links under each class. Provides complete data access for educational management during SMIT training.",
      image: "/images/education.png",
      technologies: ["Next.js", "Firebase", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/engineershoaibakhter/AI-and-chatbot-course/tree/main/education",
      demo: "https://education-portal-beta.vercel.app/",
      featured: false,
      stats: {
        stars: 98,
        contributors: 2,
        commits: 3
      },
      highlights: [
        "Class and project management",
        "Firebase backend integration",
        "Redux Toolkit state management",
        "SMIT training project"
      ]
    },
    {
      title: "Advanced Todo Application",
      description: "Feature-rich todo application built with Next.js, Redux Toolkit, Tailwind CSS and React Toaster library. Developed at Onde Digital with modern state management and user-friendly notifications for enhanced productivity.",
      image: "/images/todo.png",
      technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "React Toaster"],
      github: "https://github.com/engineershoaibakhter/Leaning-Next-JS",
      demo: "https://todo-app-engineer.vercel.app/",
      featured: false,
      stats: {
        stars: 85,
        contributors: 1,
        commits: 124
      },
      highlights: [
        "Redux Toolkit state management",
        "React Toaster notifications",
        "Modern todo functionality",
        "Onde Digital project"
      ]
    },
    {
      title: "Resume Project",
      description: "Interactive resume website built with React and Tailwind CSS, deployed on Vercel. Created during SMIT training program to showcase modern web development skills and professional presentation techniques.",
      image: "/images/cv.png",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/engineershoaibakhter/AI-and-chatbot-course/tree/main/my-app",
      demo: "https://ai-and-chatbot-course.vercel.app/",
      featured: false,
      stats: {
        stars: 54,
        contributors: 1,
        commits: 87
      },
      highlights: [
        "Interactive resume design",
        "Modern React implementation",
        "Vercel deployment",
        "SMIT training project"
      ]
    },
    {
      title: "E-commerce Mobile App",
      description: "Full-stack e-commerce mobile application built with React Native, Redux, Node.js and MongoDB. University project featuring complete shopping experience with modern mobile UI/UX and robust backend architecture.",
      image: "/images/e-commerce.jpeg",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/engineershoaibakhter/Full-Stack-E-Commerce-App-with-REACT-NATIVE-using-Node-and-MongoDB",
      demo: "#",
      featured: false,
      stats: {
        stars: 127,
        contributors: 2,
        commits: 298
      },
      highlights: [
        "React Native mobile development",
        "Full-stack e-commerce solution",
        "Redux state management",
        "Bahria University project"
      ]
    },
    {
      title: "Voice Assistant News App",
      description: "Revolutionary voice-activated news application using Alan AI technology. Features hands-free navigation, multiple news categories, personalization, read-aloud functionality, and accessibility features. University project showcasing AI integration.",
      image: "/images/alan.jpeg",
      technologies: ["React", "Alan AI", "News APIs", "Voice Recognition"],
      github: "https://github.com/engineershoaibakhter/AI-React-App---Alan-AI",
      demo: "#",
      featured: false,
      stats: {
        stars: 156,
        contributors: 1,
        commits: 187
      },
      highlights: [
        "Alan AI voice recognition",
        "Hands-free news navigation",
        "Multiple news categories",
        "Read-aloud functionality",
        "Accessibility features"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A showcase of my best work, featuring innovative solutions and cutting-edge 
              technologies that solve real-world problems.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-20">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              🌟 Featured Work
            </motion.h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{project.stats.contributors}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{project.stats.commits} commits</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              🚀 Other Notable Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="relative h-32 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-lg mb-4 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={12} />
                      <span>{project.stats.contributors}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-600 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-300 mb-6">
                Check out my GitHub profile for more projects and contributions 
                to open-source communities.
              </p>
              <motion.a
                href="https://github.com/engineershoaibakhter"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
