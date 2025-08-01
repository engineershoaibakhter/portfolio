'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin, Book, Star } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      degree: "Master of Project Management (MS PM)",
      institution: "Bahria University",
      location: "Karachi, Pakistan",
      period: "2025 - Present",
      gpa: "In Progress",
      description: "Advanced graduate program focusing on project management methodologies, leadership skills, and strategic planning for complex projects across various industries.",
      courses: [
        "Project Planning and Scheduling",
        "Risk Management",
        "Project Leadership and Communication",
        "Strategic Project Management",
        "Quality Management",
        "Agile and Scrum Methodologies",
        "Financial Management for Projects",
        "Stakeholder Management"
      ],
      achievements: [
        "Currently pursuing advanced project management concepts",
        "Focus on modern project management frameworks",
        "Leadership and strategic planning development",
        "Industry-relevant project management practices"
      ],
      type: "masters"
    },
    {
      degree: "Bachelor of Science in Software Engineering (BSE)",
      institution: "Bahria University",
      location: "Karachi, Pakistan",
      period: "2021 - 2025",
      gpa: "2.9/4.0",
      description: "Comprehensive software engineering program covering modern development practices, software architecture, and industry-standard programming languages and frameworks.",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Software Engineering Principles",
        "Database Management Systems",
        "Web Technologies",
        "Mobile App Development",
        "Software Testing and Quality Assurance",
        "Computer Networks and Security"
      ],
      achievements: [
        "Graduated with distinction in Software Engineering",
        "Completed multiple real-world software projects",
        "Specialized in full-stack web development",
        "Active participation in coding competitions and hackathons",
        "Built industry-ready applications using modern frameworks"
      ],
      type: "bachelors"
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const getEducationIcon = (type) => {
    switch (type) {
      case 'masters':
        return <GraduationCap className="w-8 h-8" />;
      case 'bachelors':
        return <Book className="w-8 h-8" />;
      case 'intermediate':
        return <Award className="w-8 h-8" />;
      default:
        return <GraduationCap className="w-8 h-8" />;
    }
  };

  const getEducationColor = (type) => {
    switch (type) {
      case 'masters':
        return 'from-purple-400 to-purple-600';
      case 'bachelors':
        return 'from-cyan-400 to-cyan-600';
      case 'intermediate':
        return 'from-green-400 to-green-600';
      default:
        return 'from-purple-400 to-purple-600';
    }
  };

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Education & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              My academic journey and continuous learning path that shaped my technical 
              expertise and problem-solving abilities.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${getEducationColor(edu.type)} rounded-full border-4 border-slate-900 z-10 flex items-center justify-center text-white`}>
                    {getEducationIcon(edu.type)}
                  </div>

                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 h-full"
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 mb-2">
                          <GraduationCap size={16} />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={14} />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Key Courses:
                          </h4>
                          <ul className="space-y-2">
                            {edu.courses.map((course, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} hidden md:block`}>
                    {/* Empty space for timeline layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  <Book className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-300 text-sm">
                  Always staying updated with the latest technologies and industry trends 
                  through online courses and certifications.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  <Award className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Academic Excellence
                </h4>
                <p className="text-gray-300 text-sm">
                  Consistent academic performance with multiple honors and awards 
                  throughout my educational journey.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
              >
                <div className="text-green-400 mb-4 flex justify-center">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Research & Innovation
                </h4>
                <p className="text-gray-300 text-sm">
                  Active participation in research projects and publications 
                  contributing to the advancement of computer science.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
