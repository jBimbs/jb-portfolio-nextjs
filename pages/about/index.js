import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiInkscape,
  SiPython,
  SiGamemaker,
  SiCsharp,
  SiTailwindcss,
} from "react-icons/si";


//  about data
export const aboutData = [
  {
    title: 'about',
    info: [
      {
        title: 'Name',
        stage: 'John Benjamin F. Santillan',
      },
      {
        title: 'Age',
        stage: '22',
      },
      {
        title: 'Birthdate',
        stage: 'March 30, 2003',
      },
      {
        title: 'Email',
        stage: 'santillanjb033@gmail.com',
      },
      {
        title: 'Birth Order',
        stage: 'Eldest',
      },
      {
        title: 'Guardian',
        stage: 'Margie F. Santillan',
      },
      {
        title: 'Contact No. of Guardian',
        stage: '09537935518',
      },
    ],
  },
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
          <FaLaravel />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiInkscape />, <SiAdobephotoshop />],
      },
      {
        title: 'Application',
        icons: [<FaJava />, <SiPython />, <SiCsharp />],
      },
    ],
  },
  {
    title: 'school',
    info: [
      {
        title: 'Cavite State University - Bacoor Campus(Bachelor Of Science In Computer Science)',
        stage: '2022 - PRESENT',
      },
      {
        title: 'Informatics College - Northgate Alabang(ICT Programming)',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'Trainings',
    info: [
      {
        title: 'UNESCO IT Basic Training - Adamson University',
        stage: '2016 - 2017',
      },
    ],
  },
  {
    title: 'Awards',
    info: [
      {
        title: 'Grade 11 and Grade 12 - Informatics College Northgate Alabang',
        stage: 'Consecutively With Honors',
      },
      {
        title: '1st Year to PRESENT - Cavite State University Bacoor Campus',
        stage: "Consecutively Dean's Lister",
      },
    ],
  },
  {
    title: 'fun facts',
    info: [
      {
        title: 'Favourite Filipino Dish',
        stage: 'Sinigang',
      },
      {
        title: 'I love to',
        stage: [
          'Play a guitar, ',
          'Draw and Sketch, ',
          'Play online games (Valorant & League Of Legends)',
        ],
      },
      {
        title: 'Business Owner',
        stage: 'Boba Haus',
      },
    ],
  },
];


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counters
import CountUp from "react-countup";

const About = () => {
  const[index, setIndex] = useState(0);
  console.log(index)

  const getIconName = (icon) => {
    try {
      
      const iconName = 
        icon?.type?.displayName || 
        icon?.type?.name || 
        icon?.props?.icon?.type?.name || 
        '';
      
     
      if (typeof iconName === 'string') {
        return iconName.replace(/^Fa|^Si/, '').replace(/Icon$/, '');
      }
      return '';
    } catch (error) {
      console.error('Error getting icon name:', error);
      return '';
    }
  };
  return (
  <div className=" h-full bg-[#111823] py-32 text-center xl:text-left">
    <Circles />
    {/* avatar img*/}
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex flex-1 flex-col justify-center ">
        <motion.h2 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2">Algorithms to <span className="text-[#ff4654]">Aesthetics</span> My Journey in Computer Science</motion.h2>
        <motion.p 
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        {"3 years ago, I took my first steps into the world of Computer Science wide-eyed, curious, and slightly intimidated by the sea of code, algorithms, and complex theories ahead of me. What began as a challenge soon became a passion, as I discovered the thrill of solving problems, the creativity behind software design, and the endless possibilities of technology."}
        </motion.p>
        {/* counters */}
        <motion.div 
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8" >
          <div className="flex flex-1 xl:gap-x-6">

            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">            <div className="text-2xl xl:text-4xl font-extrabold text-[#ff4654] mb-2 ">
              <CountUp start={0} end={3} duration={5} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
            </div>

            {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">            <div className="text-2xl xl:text-4xl font-extrabold text-[#ff4654] mb-2 ">
              <CountUp start={0} end={6} duration={5} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
            </div>

            {/* projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">            <div className="text-2xl xl:text-4xl font-extrabold text-[#ff4654] mb-2 ">
              <CountUp start={0} end={6} duration={5} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
            </div>

            {/* awards */}
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-[#ff4654] mb-2 ">
              <CountUp start={0} end={5} duration={5} />+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
                key={itemIndex} 
                className={`${index === itemIndex ? "text-[#ff4654] after:w-full after:bg-[#ff4654]" : ""} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`} 
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        
        <div className="bg-[#282f38] py-4 xl:py-8 px-4 rounded-lg flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        {aboutData[index].info.map((item, itemIndex) => {
  if (aboutData[index].title === 'skills') {
    // SKILLS section logic remains the same
    return (
      <div key={itemIndex} className="w-full">
        <h3 className="text-[#ff4654] text-lg font-bold mb-4 text-center xl:text-left">
          {item.title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {item.icons.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="bg-[#1e232b] p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(255, 70, 84, 0.3)"
              }}
            >
              <div className="text-3xl mb-2 text-white">
                {icon}
              </div>
              <span className="text-xs text-white/80 capitalize">
                {getIconName(icon)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  } else {
    // Non-skills section (e.g., about, school, fun facts, etc.)
    return (
      <div
        key={itemIndex}
        className="flex-1 flex-col flex md:flex-row max-w-max gap-x-2 items-center text-white/60"
      >
        <div className="font-bold text-[#ff4654] mb-2 md:mb-0">{item.title}</div>
        <div className="hidden md:flex">
          {aboutData[index].title === 'about' ? ':' : '-'}
        </div>
        <div className="hidden md:flex flex-col">
          {Array.isArray(item.stage) ? (
            item.stage.map((line, i) => <div key={i}>{line}</div>)
          ) : (
            <div>{item.stage}</div>
          )}
        </div>
      </div>
    );
  }
})}

        </div>
      </motion.div>
    </div>
  </div>
    );
};

export default About;
