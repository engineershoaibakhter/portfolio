'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, Linkedin, Building2, User } from 'lucide-react';

export default function Recommendations() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const recommendations = [
    {
      name: "Sarah Johnson",
      position: "Senior Engineering Manager",
      company: "Tech Innovations Inc.",
      relationship: "Direct Manager",
      image: "👩‍💼",
      rating: 5,
      date: "January 2024",
      recommendation: "Shoaib is an exceptional full-stack developer with remarkable problem-solving skills. During his time on my team, he consistently delivered high-quality code and showed great leadership potential. His ability to mentor junior developers while handling complex technical challenges made him invaluable to our projects. I highly recommend him for any senior development role.",
      highlights: [
        "Exceptional technical skills",
        "Strong leadership qualities",
        "Excellent mentoring abilities",
        "Reliable project delivery"
      ],
      linkedinUrl: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Solutions Ltd.",
      relationship: "Former Supervisor",
      image: "👨‍💻",
      rating: 5,
      date: "December 2023",
      recommendation: "Working with Shoaib was a pleasure. He has a deep understanding of modern web technologies and consistently produces clean, maintainable code. His contributions to our e-commerce platform significantly improved performance and user experience. Shoaib is someone you can count on to deliver excellent results under tight deadlines.",
      highlights: [
        "Deep technical expertise",
        "Performance optimization",
        "Clean code practices",
        "Deadline-oriented"
      ],
      linkedinUrl: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "Creative Web Studio",
      relationship: "Cross-functional Colleague",
      image: "👩‍🎨",
      rating: 5,
      date: "November 2023",
      recommendation: "Shoaib's collaboration skills are outstanding. As a Product Manager, I appreciated his ability to translate business requirements into technical solutions effectively. He always asked the right questions and provided valuable insights that improved our product strategy. His communication skills make him an ideal team player.",
      highlights: [
        "Excellent communication",
        "Business acumen",
        "Strategic thinking",
        "Cross-functional collaboration"
      ],
      linkedinUrl: "https://linkedin.com/in/emilyrodriguez"
    },
    {
      name: "David Kim",
      position: "Senior Full Stack Developer",
      company: "StartUp Solutions",
      relationship: "Peer/Colleague",
      image: "👨‍🔬",
      rating: 5,
      date: "October 2023",
      recommendation: "Shoaib and I worked together on several challenging projects. His knowledge of both frontend and backend technologies is impressive, and he's always willing to help solve complex problems. He brings innovative solutions to the table and has a keen eye for detail. Any team would be lucky to have him.",
      highlights: [
        "Full-stack expertise",
        "Problem-solving skills",
        "Innovation mindset",
        "Attention to detail"
      ],
      linkedinUrl: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Lisa Thompson",
      position: "UI/UX Designer",
      company: "Tech Innovations Inc.",
      relationship: "Design Collaborator",
      image: "👩‍🎨",
      rating: 5,
      date: "September 2023",
      recommendation: "Shoaib has an excellent understanding of user experience principles. He consistently implemented my designs with pixel-perfect accuracy while suggesting improvements that enhanced usability. His frontend skills are top-notch, and he's one of the few developers who truly understands the importance of good design.",
      highlights: [
        "Pixel-perfect implementation",
        "UX understanding",
        "Design collaboration",
        "Frontend excellence"
      ],
      linkedinUrl: "https://linkedin.com/in/lisathompson"
    },
    {
      name: "Robert Wilson",
      position: "DevOps Engineer",
      company: "Digital Solutions Ltd.",
      relationship: "Infrastructure Colleague",
      image: "👨‍🔧",
      rating: 5,
      date: "August 2023",
      recommendation: "Shoaib's understanding of cloud technologies and deployment processes is remarkable. He actively participated in our DevOps initiatives and helped streamline our CI/CD pipelines. His code is always deployment-ready, and he understands the importance of scalable, maintainable infrastructure.",
      highlights: [
        "Cloud technologies",
        "DevOps practices",
        "Scalable solutions",
        "Infrastructure awareness"
      ],
      linkedinUrl: "https://linkedin.com/in/robertwilson"
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="recommendations" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Recommendations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              What colleagues, managers, and clients say about working with me. 
              These testimonials reflect my professional relationships and work quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 relative"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-purple-400/30">
                  <Quote size={32} />
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{rec.image}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {rec.name}
                    </h3>
                    <p className="text-purple-300 text-sm font-semibold mb-1">
                      {rec.position}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <Building2 size={12} />
                      <span>{rec.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <User size={12} />
                      <span>{rec.relationship}</span>
                    </div>
                  </div>
                </div>

                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(rec.rating)}
                  </div>
                  <span className="text-gray-500 text-xs">{rec.date}</span>
                </div>

                {/* Recommendation text */}
                <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  "{rec.recommendation}"
                </blockquote>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {rec.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn link */}
                <motion.a
                  href={rec.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                >
                  <Linkedin size={16} />
                  <span>View LinkedIn Profile</span>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                6
              </div>
              <p className="text-gray-300 text-sm">
                Professional Recommendations
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                5.0
              </div>
              <p className="text-gray-300 text-sm">
                Average Rating
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-cyan-400 to-purple-400 mb-2">
                4
              </div>
              <p className="text-gray-300 text-sm">
                Different Companies
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                100%
              </div>
              <p className="text-gray-300 text-sm">
                Recommendation Rate
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to Add Your Recommendation?
              </h3>
              <p className="text-gray-300 mb-6">
                If we've worked together, I'd appreciate your professional recommendation 
                on LinkedIn. It helps build trust with potential collaborators and clients.
              </p>
              <motion.a
                href="https://linkedin.com/in/shoaibakhter"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Linkedin size={20} />
                <span>Recommend on LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
