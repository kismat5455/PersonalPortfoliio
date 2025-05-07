import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload, FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [speechText, setSpeechText] = useState('Hey there! Hope you\'re doing well today! 😊');
    const sectionRef = useRef(null);

    const speechBubbles = [
        "Check out my awesome projects! 🚀",
        "I love building cool stuff! ✨",
        "React is amazing! Let's create! 💯",
        "Looking for a great developer? That's me! 😄",
        "I'm super passionate about clean code! 🔥",
        "Let's build something amazing together! 🙌",
        "Performance and creativity matter! 💪",
        "I turn coffee into awesome code! ☕",
        "Great UX is my superpower! ⚡",
        "Let's make the web more beautiful! 🌈"
    ];

    useEffect(() => {
        setIsLoaded(true);


        const initialDelay = setTimeout(() => {

            const intervalId = setInterval(() => {
                setSpeechText(speechBubbles[Math.floor(Math.random() * speechBubbles.length)]);
            }, 5000);

            return () => clearInterval(intervalId);
        }, 6000);

        return () => clearTimeout(initialDelay);
    }, []);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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


    const textVariants = {
        animate: {
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
            }
        }
    };

    const buttonVariants = {
        rest: {
            scale: 1,
            backgroundColor: "rgb(59, 130, 246)",
            boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
        },
        hover: {
            scale: 1.05,
            backgroundColor: "rgb(37, 99, 235)",
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
        },
        tap: {
            scale: 0.95,
            backgroundColor: "rgb(29, 78, 216)"
        },
        pulse: {
            scale: [1, 1.05, 1],
            boxShadow: [
                "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
            ]
        }
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900  py-12 px-4 sm:px-6 lg:px-8"
        >



            <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGg0djRoLTR6bTAtMTJWMThoNHY0aC00eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjQiLz48cGF0aCBkPSJNMjAgNTBWMThoMnYzMmgtMnptMjAgMFYxOGgydjMyaC0yek0wIDIwaDYwdjJIMHYtMnptMCAyMGg2MHYySDB2LTJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMTUiLz48L2c+PC9zdmc+')]"></div>



            {isLoaded && (
                <motion.div
                    className="fixed bottom-8 right-8 md:bottom-16 md:right-16 z-20 hidden md:block"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                >

                    <motion.div className="absolute -top-5 -left-5 w-full h-full">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute text-yellow-300"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    fontSize: `${Math.random() * 10 + 10}px`
                                }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    rotate: [0, 180]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                    repeatDelay: Math.random() * 2
                                }}
                            >
                                <FaStar />
                            </motion.div>
                        ))}
                    </motion.div>


                    <motion.div
                        className="relative mb-4 px-5 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl rounded-br-none shadow-lg max-w-xs"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            boxShadow: ["0px 0px 5px rgba(192, 132, 252, 0.5)", "0px 0px 20px rgba(192, 132, 252, 0.8)", "0px 0px 5px rgba(192, 132, 252, 0.5)"]
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            boxShadow: {
                                repeat: Infinity,
                                duration: 2
                            }
                        }}
                    >
                        <motion.p
                            className="text-base font-bold"
                            variants={textVariants}
                            animate="animate"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #fff, #f0f0f0, #fff)",
                                backgroundSize: "200% auto",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            {speechText}
                        </motion.p>


                        <motion.div className="absolute inset-0 overflow-hidden rounded-xl rounded-br-none pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                                    initial={{ x: "50%", y: "50%" }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        opacity: [0.7, 0.3, 0.7]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            ))}
                        </motion.div>


                        <div className="absolute -bottom-3 right-4 w-6 h-6 bg-pink-500 transform rotate-45"></div>
                    </motion.div>


                    <motion.div
                        className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg ml-auto"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            scale: { repeat: Infinity, duration: 2 },
                            rotate: { repeat: Infinity, duration: 2.5 },
                            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                        }}
                        style={{
                            filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))"
                        }}
                    >

                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                                boxShadow: [
                                    "0 0 5px rgba(251, 191, 36, 0.5)",
                                    "0 0 20px rgba(251, 191, 36, 0.8)",
                                    "0 0 5px rgba(251, 191, 36, 0.5)"
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}
                        />


                        <div className="absolute flex space-x-4 md:space-x-5 -mt-2">
                            <motion.div
                                className="w-3 h-4 md:w-4 md:h-5 bg-gray-900 rounded-full"
                                animate={{
                                    scaleY: [1, 0.6, 1],
                                    y: [0, -1, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    repeatDelay: 1
                                }}
                                style={{
                                    borderRadius: "50% 50% 0 0"
                                }}
                            />
                            <motion.div
                                className="w-3 h-4 md:w-4 md:h-5 bg-gray-900 rounded-full"
                                animate={{
                                    scaleY: [1, 0.6, 1],
                                    y: [0, -1, 0]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    repeatDelay: 1
                                }}
                                style={{
                                    borderRadius: "50% 50% 0 0"
                                }}
                            />
                        </div>


                        <motion.div
                            className="absolute w-10 h-5 md:w-12 md:h-6 mt-5 md:mt-6"
                            style={{
                                background: "transparent",
                                borderBottom: "3px solid #111827",
                                borderRadius: "0 0 100px 100px"
                            }}
                            animate={{
                                scaleX: [1, 1.2, 1],
                                scaleY: [1, 1.3, 1]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                repeatDelay: 0.5
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}


            <div className="container mx-auto relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {/* Text content */}
                    <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
                        <div>
                            <motion.p
                                className="text-xl text-blue-400 font-mono mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Hello, my name is
                            </motion.p>
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                                variants={itemVariants}
                            >
                                <span className="block"> Kismat Ali</span>
                                <span className=" mt-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                    Software Engineer
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 max-w-2xl"
                            variants={itemVariants}
                        >
                            I build exceptional digital experiences with a focus on performance,
                            accessibility, and cutting-edge technologies. Specializing in full-stack
                            development and cloud solutions.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            variants={itemVariants}
                        >

                            <motion.div
                                className="relative"
                                initial="rest"
                                animate="pulse"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                                transition={{
                                    pulse: {
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 2
                                    }
                                }}
                            >

                                <motion.div
                                    className="absolute inset-0 rounded-lg bg-blue-400 blur-xl opacity-40"
                                    animate={{
                                        scale: [0.85, 1.05, 0.85],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut"
                                    }}
                                />


                                <motion.button
                                    className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center gap-2 overflow-hidden group"
                                >
                                    <span>View My Work</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <FaArrowRight />
                                    </motion.span>


                                    <motion.div
                                        className="absolute top-0 -left-full w-20 h-full transform rotate-45 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                        animate={{ left: ["100%", "-100%"] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            ease: "easeInOut",
                                            repeatDelay: 1
                                        }}
                                    />
                                </motion.button>
                            </motion.div>

                            <motion.button
                                className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Download Resume</span>
                                <FaDownload />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex gap-5 pt-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="https://github.com/kismat5455"
                                className="text-gray-400 hover:text-white transition-colors"
                                whileHover={{ y: -3, scale: 1.2 }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/kismat-ali-2ba3b8232"
                                className="text-gray-400 hover:text-white transition-colors"
                                whileHover={{ y: -3, scale: 1.2 }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="text-gray-400 hover:text-white transition-colors"
                                whileHover={{ y: -3, scale: 1.2 }}
                            >
                                <FaEnvelope size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Visual element on the right */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80"
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{
                                type: "spring",
                                damping: 15,
                                delay: 0.8
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"></div>

                            {/* Code blocks floating inside */}
                            <motion.div
                                className="absolute -top-4 -left-12 bg-gray-800/80 p-3 rounded-lg font-mono text-blue-300 text-sm border border-blue-500/30 shadow-xl"
                                animate={{
                                    y: [0, -10, 0],
                                    rotateZ: [-1, 2, -1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "easeInOut"
                                }}
                            >
                                <div>{'function() {'}</div>
                                <div className="pl-4 text-purple-300">{'return <Portfolio />'}</div>
                                <div>{'}'}</div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-10 -right-5 bg-gray-800/80 p-3 rounded-lg font-mono text-green-300 text-sm border border-green-500/30 shadow-xl"
                                animate={{
                                    y: [0, 10, 0],
                                    rotateZ: [1, -1, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            >
                                <div>{'const dev = {'}</div>
                                <div className="pl-4">{'passion: true,'}</div>
                                <div className="pl-4">{'skills: [...]'}</div>
                                <div>{'}'}</div>
                            </motion.div>

                            {/* Central element */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
                                <motion.div
                                    className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        scale: {
                                            repeat: Infinity,
                                            duration: 3,
                                            ease: "easeInOut"
                                        },
                                        rotate: {
                                            repeat: Infinity,
                                            duration: 20,
                                            ease: "linear"
                                        }
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
