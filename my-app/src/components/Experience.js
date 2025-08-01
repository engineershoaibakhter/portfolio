'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Founder & Full Stack Developer",
      company: "BlogNetwork SAAS Product",
      link:"https://blognetwork.live",
      location: "Remote",
      period: "Jan 2024 - Present",
      type: "Entrepreneurship",
      description: "Founded and developed a comprehensive SAAS platform for blog network management,Ads Management System, featuring automated content distribution, analytics dashboard, and multi-site management capabilities.",
      achievements: [
        "Built scalable SAAS architecture serving 5100+ registered users",
        "Implemented automated content syndication across multiple blog networks",
        "Developed real-time analytics dashboard with custom metrics",
        "Achieved 95% uptime with robust cloud infrastructure",
        "50+ Ads Spots where 50+ Ads are showing on Website and 100+ Ads are in Queue",
      ],
      technologies: ["React.js","Next.js", "Node.js", "Express.js", "Mongo DB", "Firebase Storage", "React Icons", "Tailwind CSS"]
    },
    {
      title: "Mid Level Software Engineer",
      company: "Onde.Digital (Buildies.io)",
      link:"https://buildies.io",
      location: "Remote",
      period: "May 2024 - July 2025",
      type: "Full-time",
      description: "Developed cutting-edge digital solutions for enterprise clients, focusing on web applications, e-commerce platforms, and custom software development.",
      achievements: [
        "Delivered 12+ enterprise-level web applications",
        "Improved client application performance by 60% through optimization",
        "Integrated complex third-party APIs and payment gateways",
        "Led technical discussions with international clients",
        "Implemented modern CI/CD pipelines reducing deployment time by 70%"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      company: "4DMagic Company",
      link:"https://www.4dmagic.pk/",
      location: "Remote",
      period: "July 2023 - Sep 2023",
      type: "Full-time",
      description: "Specialized in creating immersive web experiences and interactive applications. Worked on AR/VR web solutions and complex 3D visualizations for various industries.",
      achievements: [
        "Developed 8+ interactive 3D web applications",
        "Created AR/VR experiences with WebXR technologies",
        "Optimized 3D rendering performance for mobile devices",
        "Built custom content management systems for multimedia content",
        "Collaborated with designers on innovative user experiences"
      ],
      technologies: ["Jira", "Angular", "React", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      link:"https://www.fiverr.com/shoaibakhter18/buying?source=avatar_menu_profile",
      location: "Remote",
      period: "2022 - Present",
      type: "Freelance",
      description: "Provided end-to-end web development services for diverse clients including startups, small businesses, and agencies. Specialized in modern web technologies and responsive design.",
      achievements: [
        "Successfully completed 2+ client projects with 100% satisfaction rate",
        // "Built e-commerce platforms generating $500K+ in client revenue",
        // "Developed custom CMS solutions for content-heavy websites",
        // "Established long-term partnerships with 5+ agencies",
        // "Maintained 4.9/5 average rating across freelancing platforms"
      ],
      technologies: ["HTML", "CSS","Tailwind CSS","Bootstrap","Material UI","Typescript","Javascript","React JS","Next JS", "Node JS","Express JS","Angular","Mongodb","Firebase","Vercel","Netlify"]
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

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A journey through my professional career, showcasing growth, achievements, 
              and the impact I've made in various roles.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-purple-400 to-cyan-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>

                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 h-full"
                    >
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-300 mb-1">
                            <Building2 size={16} />
                            <span className="font-semibold"><Link href={exp.link} target='_blank'>{exp.company} </Link></span>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <span className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm border border-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
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

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                Currently building innovative SAAS solutions while being open to exciting 
                freelance projects and collaboration opportunities. Let's create something extraordinary together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <span>Let's Work Together</span>
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  href="https://blognetwork.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <span>View BlogNetwork SAAS</span>
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
