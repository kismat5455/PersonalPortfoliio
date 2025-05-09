import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2 + custom * 0.1
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      x: -20
    }
  };

  const logoVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const navButtonVariants = {
    rest: { 
      scale: 1,
      backgroundColor: "rgba(31, 41, 55, 0.5)"
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(31, 41, 55, 0.8)",
      y: -2
    },
    tap: { 
      scale: 0.95
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <motion.div
        className="container mx-auto px-4"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <nav className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            variants={logoVariants}
            initial="rest"
            whileHover="hover"
          >
            <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <span className="text-white text-xl font-bold">K</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-base text-white font-medium rounded-md relative overflow-hidden border border-gray-700/50 shadow-md"
                variants={navButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-3"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg py-3 px-4 border border-gray-700/50">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block w-full mb-2 py-3 px-4 text-lg text-white font-medium rounded-md text-center border border-gray-700/50 bg-gray-800/80 shadow-md relative overflow-hidden"
                    variants={mobileItemVariants}
                    onClick={() => setIsOpen(false)}
                    whileHover={{
                      backgroundColor: "rgba(31, 41, 55, 0.8)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated highlight line for scrolled state */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </header>
  );
};

export default Navbar; 