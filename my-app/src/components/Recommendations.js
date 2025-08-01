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
      name: "Ahmed Rao",
      position: "Software Engineer | Backend Developer NodeJs | NestJ | MySql | PostgreSQL",
      relationship: "University Peer",
      image: "👨‍💻",
      date: "July 7, 2025",
      recommendation: `I’m happy to recommend Shoaib, a junior from my university who has shown great initiative in building his skills as a front-end developer. He’s passionate about web development and has already worked on impressive real-world projects like Buildies.io and BlogNetwork.live, which clearly reflect his ability to apply what he’s learned beyond the classroom.

Through these projects, Shoaib has demonstrated a solid understanding of front-end technologies like HTML, CSS, JavaScript, and modern frameworks. He has an eye for clean design and a strong focus on building user-friendly interfaces — skills that are essential for any developer today.

He is proactive, eager to learn, and has a positive attitude that makes him a great person to collaborate with. I believe he has a lot of potential and would be a valuable addition to any front-end or web development team. Looking forward to seeing all he achieves in the years ahead!`,
      linkedinUrl: 'https://www.linkedin.com/in/ahmed-rao/'
    },
    {
      name: "Urooj Fatima",
      position: "Guest Blogger || Content Writer || Off-page SEO Expert || Link-Builder",
      relationship: "Professional Acquaintance",
      image: "👩‍💼",
      date: "July 6, 2025",
      recommendation: `I've had the pleasure of working with Engineer Shoaib, and I can confidently say he is a highly skilled, dedicated, and solution-oriented professional. His deep understanding of engineering principles, combined with his ability to think critically and communicate effectively, sets him apart.

What I admire most about Shoaib is his commitment to delivering quality results under pressure. Whether it's troubleshooting complex systems or leading a project with precision, he brings both technical expertise and leadership to the table. He's also a great team player, always willing to collaborate and support others.

I highly recommend Engineer Shoaib to anyone looking for a reliable and talented professional who consistently goes above and beyond.`,
      linkedinUrl: 'https://www.linkedin.com/in/urooj-f-6838941a1/'
    },
    {
      name: "Mahnoor Waseem",
      position: "Software Engineer | Angular | ASP.NET | Agile scrum methodologies | SQA",
      relationship: "Team Member",
      image: "👩‍💻",
      date: "September 7, 2024",
      recommendation: `Shoaib is highly dedicated and adapts quickly to new tasks and challenges. With a strong ability to take initiative, he consistently delivers quality work and collaborates well with the team. I’m confident that his skills and work ethic will lead him to great success in the future.`,
      linkedinUrl: 'https://www.linkedin.com/in/mahnoor--waseem/'
    },
    {
      name: "Mian Khuram Ali",
      position: "CEO at 4dMagic Company",
      relationship: "Direct Manager",
      image: "👨‍💼",
      date: "September 4, 2024",
      recommendation: `Hardworking Developer and a quick learner of new stacks, With a foundation of MER/MEAN Stack.`,
      linkedinUrl: 'https://www.linkedin.com/in/mian-khuram-ali-964314270/'
    },
    {
      name: "Mah Rukh",
      position: "Computer Engr. at GIKI | DevelopersHub Corporation© | Digital Empowerment Network | ISX Pvt Ltd | Full-Stack Web developer | Software Engineer | HTML5, JavaScript, MongoDB, Express.js, Node.js, Tailwind CSS, Bootstrap",
      relationship: "Senior Colleague",
      image: "👩‍💼",
      date: "September 2, 2024",
      recommendation: `I had the pleasure of working with Shoaib Akhter, who impressed me with his expertise and dedication in the field of software engineering. As a MERN/MEAN developer, Shoaib consistently demonstrated a deep understanding of full-stack development, seamlessly integrating front-end and back-end technologies to deliver robust and scalable web applications.

Shoaib's proficiency in generative AI was particularly noteworthy. He not only stayed updated with the latest advancements in AI but also applied this knowledge to create innovative solutions that added significant value to our projects. His ability to think creatively and solve complex problems made him an invaluable asset to our team.

In addition to his technical skills, Shoaib is a strong communicator and a team player. He always approached challenges with a positive attitude and was eager to collaborate, making sure that the team achieved its goals efficiently. His passion for learning and continuous improvement was evident in his work, and I have no doubt that he will continue to excel in his career.

I highly recommend Shoaib Akhter for any role that requires a skilled and dedicated software engineer. He is a true professional who brings both technical excellence and a collaborative spirit to any team.`,
      linkedinUrl: 'https://www.linkedin.com/in/mah-rukh-a7078826a/'
    },
    {
      name: "Hifza Arshad",
      position: "WordPress/Frontend Developer",
      relationship: "Client",
      image: "👩‍💼",
      date: "July 28, 2024",
      recommendation: `As a dedicated and knowledgeable employee and an all-around great person, I know that he will be a beneficial addition to your organization. I highly recommend him without any reservations.`,
      linkedinUrl: 'https://www.linkedin.com/in/hifza-arshad-0031/'
    },
    {
      name: "Muhammad Amjad",
      position: "Software Engineer",
      relationship: "University Senior",
      image: "👨‍💻",
      date: "July 25, 2024",
      recommendation: `I had the pleasure of knowing Shoaib during our time at Bahria University. He demonstrated exceptional skills in web and mobile app development, particularly with his work on the BCA-Corp Website and an E-commerce Mobile App. Shoaib is technically proficient, dedicated, and a great team player. I highly recommend him for any opportunity he pursues.`,
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-amjad-003579213/'
    },
    {
      name: "Muhammad Taha Hussain",
      position: "MERN Stack Developer",
      relationship: "University Peer",
      image: "👨‍💻",
      date: "July 21, 2024",
      recommendation: `I highly recommend Shoaib, a skilled software engineer who excels in both MERN and MEAN stacks. He has consistently demonstrated his expertise in developing robust websites and web applications. His ability to create efficient software solutions is commendable. Shoaib would be a valuable asset to any team.`,
      linkedinUrl: 'https://www.linkedin.com/in/muhammad-taha-hussain-438234235/'
    },
    {
      name: "Engr. Osama Naeem",
      position: "SQA Engineer at ICT Systems Pvt. Ltd. | PEC Registered Engineer | Manual & Web App Testing | Bug Lifecycle | Agile | QA Enthusiast",
      relationship: "Senior Colleague",
      image: "👨‍💻",
      date: "July 21, 2024",
      recommendation: `Shoaib akhtar is an exceptional professional and a valuable asset to any team. I’ve had the pleasure of working closely with him , and during that time, he consistently impressed me with his front end development skill. I highly recommend him ,he has exceptional soft skills and hard skills.`,
      linkedinUrl: 'https://www.linkedin.com/in/theosamanaeem/'
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
    <section id="recommendations" className="py-20 px-6 bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Recommendations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              What colleagues, managers, and clients say about working with me. 
              These testimonials reflect my professional relationships and work quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {recommendations?.map((rec, index) => (
              <div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4 text-purple-400/30">
                  <Quote size={32} />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{rec.image}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {rec.name}
                    </h3>
                    <p className="text-purple-300 text-sm font-semibold mb-1">
                      {rec.position}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <User size={12} />
                      <span>{rec.relationship}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(5)}
                  </div>
                  <span className="text-gray-500 text-xs">{rec.date}</span>
                </div>

                <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                  "{rec.recommendation}"
                </blockquote>

                {rec.linkedinUrl && (
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
                )}
              </div>
            ))}
          </div>

          <div variants={itemVariants} className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                9
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
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                6+
              </div>
              <p className="text-gray-300 text-sm">
                Different Organizations
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
          </div>

          <div variants={itemVariants} className="text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to Add Your Recommendation?
              </h3>
              <p className="text-gray-300 mb-6">
                If we've worked together, I'd appreciate your professional recommendation 
                on LinkedIn. It helps build trust with potential collaborators and clients.
              </p>
              <motion.a
                href="https://www.linkedin.com/in/shoaib1814/"
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
          </div>
        </div>
      </div>
    </section>
  );
}
