'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "Angular", level: 60, color: "from-red-400 to-gray-600" },
        { name: "TypeScript", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML5/CSS3", level: 92, color: "from-orange-400 to-orange-600" },
        { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "Bootstrap", level: 80, color: "from-purple-400 to-teal-600" },
        { name: "Material UI", level: 75, color: "from-primary-400 to-teal-600" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 90, color: "from-blue-500 to-gray-700" },
        { name: "Python", level: 30, color: "from-blue-400 to-yellow-400" },
        { name: "Firebase", level: 85, color: "from-yellow-600 to-blue-800" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-700" },
        { name: "REST APIs", level: 92, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 35, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 40, color: "from-blue-400 to-blue-600" },
        { name: "Git/GitHub", level: 95, color: "from-red-500 to-gray-600" },
        { name: "CI/CD", level: 50, color: "from-green-400 to-green-600" },
        { name: "Vercel", level: 88, color: "from-purple-500 to-gray-600" },
        { name: "Firebase", level: 82, color: "from-yellow-400 to-orange-500" },
        { name: "Netlify", level: 75, color: "from-pink-400 to-orange-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
        { name: "Jira", level: 85, color: "from-purple-500 to-blue-700" },
        { name: "Figma", level: 75, color: "from-purple-400 to-pink-400" },
        { name: "Agile/Scrum", level: 85, color: "from-green-400 to-green-600" },
        { name: "Testing", level: 60, color: "from-red-400 to-red-600" },
        { name: "SEO", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "Digital Marketing", level: 75, color: "from-pink-400 to-pink-600" },
        { name: "Guest Posting", level: 85, color: "from-yellow-400 to-pink-600" },
        { name: "Project Management", level: 65, color: "from-orange-400 to-pink-600" }
      ]
    }
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

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Always Learning
              </h3>
              <p className="text-gray-300 mb-6">
                Currently exploring and learning new technologies to stay ahead in the 
                rapidly evolving tech landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                  AI/Machine Learning
                </span>
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-full border border-cyan-500/30">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full border border-green-500/30">
                  Agentic AI
                </span>
                <span className="px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full border border-orange-500/30">
                  Docker
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
