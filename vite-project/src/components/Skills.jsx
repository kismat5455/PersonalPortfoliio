import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase, SiMongodb } from 'react-icons/si';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400', bg: 'bg-blue-900/20' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', bg: 'bg-green-900/20' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', bg: 'bg-yellow-900/20' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', bg: 'bg-blue-900/20' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', bg: 'bg-orange-900/20' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', bg: 'bg-blue-900/20' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', bg: 'bg-cyan-900/20' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', bg: 'bg-gray-900/40' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', bg: 'bg-yellow-900/20' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bg: 'bg-green-900/20' },
    { name: 'SQL', icon: FaDatabase, color: 'text-blue-300', bg: 'bg-blue-900/20' },
    { name: 'Git', icon: FaGit, color: 'text-orange-600', bg: 'bg-orange-900/20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-white  mb-4">
            My Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are the technologies I specialize in and love working with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative"
              >
                <motion.div
                  variants={cardVariants}
                  className={`h-full flex flex-col items-center justify-center p-6 rounded-xl border border-gray-700 ${skill.bg} backdrop-blur-sm transition-all duration-300`}
                >
                  <Icon className={`text-4xl ${skill.color} mb-3`} />
                  <h3 className="text-gray-200 font-medium text-center">{skill.name}</h3>
                  
                  {hoveredSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2"
                    >
                      <span className="flex h-4 w-4">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative rounded-full h-4 w-4 bg-purple-500"></span>
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 