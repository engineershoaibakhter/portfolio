'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, Calendar, ExternalLink, Star, Trophy } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const certifications = [
    {
      title: "Web & Mobile App Development Course",
      issuer: "SMIT Saylani",
      date: "Feb 2022 – Mar 2023",
      credentialId: "SMIT-WMAD-2023-001",
      category: "Full Stack Development",
      level: "Professional",
      description: "Comprehensive course covering modern web and mobile app development technologies including React, React Native, Node.js, and database management.",
      skills: ["React", "React Native", "Node.js", "JavaScript", "HTML5", "CSS3", "MongoDB"],
      verified: true,
      badge: "🚀"
    },
    {
      title: "JavaScript Crash Course",
      issuer: "SMIT Saylani",
      date: "June 2023 – Sep 2023",
      credentialId: "SMIT-JS-2023-002",
      category: "Programming",
      level: "Intermediate",
      description: "Intensive JavaScript course covering ES6+, async programming, DOM manipulation, and modern JavaScript frameworks and libraries.",
      skills: ["JavaScript", "ES6+", "Async Programming", "DOM Manipulation", "JSON", "APIs"],
      verified: true,
      badge: "⚡"
    },
    {
      title: "Generative AI & Chatbot",
      issuer: "SMIT Saylani",
      date: "Nov 2024 – April 2025",
      credentialId: "SMIT-AI-2025-003",
      category: "Artificial Intelligence",
      level: "Advanced",
      description: "Advanced course in Generative AI and Chatbot development covering machine learning, natural language processing, and AI integration in applications.",
      skills: ["Generative AI", "Chatbot Development", "Machine Learning", "NLP", "AI Integration"],
      verified: true,
      badge: "🤖"
    },
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB University",
      date: "Jun 2025 – July 2025",
      credentialId: "MDB-NODEJS-2025-004",
      category: "Database",
      level: "Professional",
      description: "Comprehensive MongoDB certification focusing on Node.js integration, database design, aggregation pipelines, and performance optimization.",
      skills: ["MongoDB", "Node.js", "Database Design", "Aggregation", "Performance Optimization"],
      verified: true,
      badge: "🍃"
    },
    {
      title: "Introduction to TCP/IP",
      issuer: "Yonsei University",
      date: "Sep 2023 – Oct 2023",
      credentialId: "YU-TCPIP-2023-005",
      category: "Networking",
      level: "Foundational",
      description: "Foundational course covering TCP/IP protocol suite, network architecture, and internet communication protocols.",
      skills: ["TCP/IP", "Network Protocols", "Internet Architecture", "Network Security", "Routing"],
      verified: true,
      badge: "🌐"
    },
    {
      title: "Node.js & MongoDB: Developing Back-end Database",
      issuer: "IBM",
      date: "May 2024 – July 2025",
      credentialId: "IBM-NODE-2025-006",
      category: "Backend Development",
      level: "Professional",
      description: "IBM certification focusing on backend development using Node.js and MongoDB, covering API development, database integration, and cloud deployment.",
      skills: ["Node.js", "MongoDB", "Backend Development", "REST APIs", "Cloud Deployment"],
      verified: true,
      badge: "🔧"
    },
    // {
    //   title: "Git and GitHub Essentials",
    //   issuer: "GitHub",
    //   date: "2022",
    //   credentialId: "GH-ESS-2022-667788",
    //   category: "Version Control",
    //   level: "Intermediate",
    //   description: "Certification in Git version control system covering branching, merging, collaboration workflows, and GitHub best practices.",
    //   skills: ["Git", "GitHub", "Version Control", "Branching", "Collaboration"],
    //   verified: true,
    //   badge: "�"
    // },
    // {
    //   title: "Digital Marketing Fundamentals",
    //   issuer: "Google Digital Garage",
    //   date: "2023",
    //   credentialId: "GDG-DMF-2023-990011",
    //   category: "Digital Marketing",
    //   level: "Foundational",
    //   description: "Comprehensive digital marketing certification covering SEO, SEM, social media marketing, and analytics for business growth.",
    //   skills: ["SEO", "SEM", "Social Media Marketing", "Content Marketing", "Analytics"],
    //   verified: true,
    //   badge: "📱"
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const getCategoryColor = (category) => {
    const colors = {
      "Cloud Computing": "from-blue-400 to-blue-600",
      "DevOps": "from-green-400 to-green-600",
      "Database": "from-purple-400 to-purple-600",
      "Frontend Development": "from-cyan-400 to-cyan-600",
      "Backend Development": "from-orange-400 to-orange-600",
      "Project Management": "from-pink-400 to-pink-600"
    };
    return colors[category] || "from-gray-400 to-gray-600";
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'Professional':
        return <Trophy className="w-5 h-5" />;
      case 'Associate':
        return <Award className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise 
              and commitment to continuous learning in the tech industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.badge}</div>
                  <div className="flex items-center gap-2">
                    {cert.verified && (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle size={14} />
                        <span>Verified</span>
                      </div>
                    )}
                    <div className={`flex items-center gap-1 text-yellow-400`}>
                      {getLevelIcon(cert.level)}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <Award size={14} />
                  <span className="font-semibold">{cert.issuer}</span>
                </div>

                <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} text-white text-xs rounded-full`}>
                    {cert.level}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-purple-400 mb-4 flex justify-center">
                <Trophy className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                6+
              </h3>
              <p className="text-gray-300">
                Professional Certifications
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-cyan-400 mb-4 flex justify-center">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                100%
              </h3>
              <p className="text-gray-300">
                Verification Rate
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center">
              <div className="text-green-400 mb-4 flex justify-center">
                <Star className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                6+
              </h3>
              <p className="text-gray-300">
                Technology Domains
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-gray-300 mb-6">
                These certifications represent my dedication to staying current with 
                industry standards and continuously improving my skills to deliver 
                exceptional results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                  Currently Learning: Advanced React & Next.js
                </span>
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-500/30">
                  Next Goal: Cloud Architecture Certification
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
