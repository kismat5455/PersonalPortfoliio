import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const AnimatedCharacter = () => {

 
const [speechText, setSpeechText] = useState('Hey there! Hope you\'re doing well today! 😊');
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


(
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
    {/* Stars around character */}
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
    
    {/* Speech Bubble */}
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
        
        {/* Animated particles in speech bubble */}
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
        
        {/* Speech bubble pointer */}
        <div className="absolute -bottom-3 right-4 w-6 h-6 bg-pink-500 transform rotate-45"></div>
    </motion.div>
    
    {/* Cartoon Character */}
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
        {/* Glowing effect */}
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
        
        {/* Eyes - Happy curved eyes */}
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
        
        {/* Mouth - Happy curved mouth */}
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
)
}