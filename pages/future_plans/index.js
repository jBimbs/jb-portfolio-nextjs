// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Future_plans = () => {
  return (
  <div className="bg-[#111823] h-full py-36 flex items-center">
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0s'>
          <motion.h2 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-8'>My Future <span className='text-[#ff4654]'>Plans?</span></motion.h2>
          <motion.p 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>These are my future plans and what I can do as a BSCS student.</motion.p>
        </div>
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          {/* slider */}
          <ServiceSlider />
        </motion.div>
      </div>
    </div>
  </div>

  );
};

export default Future_plans;
