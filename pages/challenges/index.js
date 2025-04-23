// components
import Circles from "../../components/Circles";
import { motion } from 'framer-motion';
import { useState } from 'react';

// data
export const challengesData = [
  {
    title: 'Challenges',
    info: [
      {
        title: 'Time Management',
        stage: 'Balancing academics, personal projects, and personal life',
      },
      {
        title: 'Technical Skills',
        stage: 'Keeping up with rapidly evolving technologies',
      },
      {
        title: 'Workload',
        stage: 'Managing heavy course requirements in Computer Science',
      },
    ],
  },
  {
    title: "How I've Overcame it",
    info: [
      {
        title: 'Time Management',
        stage: 'I started by prioritizing tasks, separating/scheduling urgent tasks.',
      },
      {
        title: 'Technical Skills',
        stage: 'The fast-paced nature of tech was overwhelming at first. Instead of chasing every new trend, I focused on mastering fundamentals.',
      },
      {
        title: 'Workload',
        stage: 'Computer Science courses like Computer Programming, Algorithms and Operating Systems demanded intense effort. To manage, I balanced my semester workload, pairing difficult subjects with lighter electives.',
      },
      
    ],
  },
];

// animation variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Challenges = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-primary/60 h-full">
      <div className="min-h-screen w-full bg-[#111823]">
        <Circles />
        <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6 px-4">
          {/* Left Column - Title/Navigation */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:w-[30%] flex flex-col pt-20 xl:pt-32"
          >
            <h1 className="text-4xl text-[#ff4654] font-bold mb-8">Challenges</h1>
            <div className="flex flex-col gap-y-4 xl:gap-y-6 mb-4">
              {challengesData.map((item, itemIndex) => {
                return (
                  <div 
                    key={itemIndex} 
                    className={`
                      ${index === itemIndex ? 
                        "text-[#ff4654] after:w-full after:bg-[#ff4654]" : 
                        "text-white/70 hover:text-white/90"}
                      cursor-pointer capitalize xl:text-xl relative 
                      after:w-8 after:h-[2px] after:bg-white 
                      after:absolute after:-bottom-1 after:left-0 
                      after:transition-all after:duration-300
                      py-2 px-4 rounded-lg transition-colors
                      ${index === itemIndex ? "bg-[#282f38]" : ""}
                    `}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="w-full xl:w-[65%] flex items-start pt-10 xl:pt-32 xl:pl-0"
          >
            <div className="bg-[#282f38] w-full py-8 px-6 xl:px-8 rounded-lg flex flex-col gap-y-4">
              {challengesData[index].info.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="flex flex-col md:flex-row gap-x-4 items-start border-b border-white/10 pb-4 last:border-0"
                >
                  <div className="font-bold text-[#ff4654] min-w-[180px] text-lg">
                    {item.title}
                  </div>
                  <div className="text-white/80 mt-1 md:mt-0">
                    {item.stage}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Learnings Section */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full container mx-auto mt-16 px-4 flex flex-col items-center"
        >
          <h2 className="text-4xl text-[#ff4654] font-bold mb-8">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {/* Technical Skills */}
            <div className="bg-[#282f38] p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl text-[#ff4654] font-semibold mb-2">Technical Skills</h3>
              <p className="text-white/70 text-sm">
                The importance of writing clean, maintainable code and how proper documentation saves time in the long run.
              </p>
            </div>

            {/* Teamwork */}
            <div className="bg-[#282f38] p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl text-[#ff4654] font-semibold mb-2">Teamwork</h3>
              <p className="text-white/70 text-sm">
                How effective communication and collaboration can make or break a project's success.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="bg-[#282f38] p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl text-[#ff4654] font-semibold mb-2">Problem Solving</h3>
              <p className="text-white/70 text-sm">
                Breaking down complex problems into smaller, manageable parts leads to better solutions.
              </p>
            </div>

            {/* Personal Growth */}
            <div className="bg-[#282f38] p-6 rounded-lg flex flex-col items-center text-center shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl text-[#ff4654] font-semibold mb-2">Personal Growth</h3>
              <p className="text-white/70 text-sm">
                The value of persistence and how failure is often just a stepping stone to success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Challenges;
