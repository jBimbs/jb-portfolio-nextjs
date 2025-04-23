// next image //
import Image from 'next/image';

// icon //
import { FaDownload } from 'react-icons/fa';

// components //
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Circles from '../components/Circles';
// framer motion //
import {easeInOut, motion} from 'framer-motion';

//variants //
import {fadeIn} from '../variants'


const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className='h-full w-full bg-[#111823]'>
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
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto '>
        {/* title */}
        <motion.h1 
        variants={fadeIn('down', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className='h1'> Santillan, <br /> John Benjamin{' '} <br/><span className='text-[#ff4654]'>BSCS Student</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'> An aspiring 3rd Year BSCS student | Full-stack enthusiast | Turning algorithms into applications. Building the future, one line of code at a time.</motion.p>
        {/* NEW SECONDARY BUTTON - UPDATED STYLE */}
        <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col xl:flex-row gap-4 mb-10 xl:mb-16 justify-center xl:justify-start"
          >
            {/* Combined button group */}
  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 overflow-hidden">
    {/* About Me button */}
    <a 
      href="/about" 
      className="px-6 py-3 text-white bg-[#ff4654] hover:bg-[#ff4654] transition-all duration-300"
    >
      About Me
    </a>
    
    {/* Divider */}
    <div className="h-6 w-px bg-white/20"></div>
    
    {/* Resume Download button */}
    <a 
      href="/RESUME.pdf"
      download = "Santillan_John_Benjamin_Resume"
      className="px-6 py-3 text-white hover:bg-[#ff4654] transition-all duration-300 flex items-center gap-2"
    >
      Resume <FaDownload className="text-sm" />
    </a>
  </div>
          </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* bg image */}
      <div className='bg-none w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        {/*image*/}
      </div>

      {/* avatar image*/}
      <motion.div 
      variants={fadeIn('up', 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      transition={{duration:1, ease: 'easeInOut'}}
      className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-[25%] lg:right-[30%] lg:transform lg:-translate-x-1/2 rounded-full bg-[#ff4654] hover:transition-y-[-5px] overflow-hidden"
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.5 } 
      }}
      >
        <Avatar />
      </motion.div>
    </div>
  </div>
  );
};

export default Home;
