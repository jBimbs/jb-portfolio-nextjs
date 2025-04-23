//import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  SiGamedeveloper,
} from "react-icons/si";



// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules 
import { FreeMode, Pagination} from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Software Developer',
    description: 'My primary goal is to become a skilled Software Developer, working on complex systems.',
  },
  {
    icon: <SiGamedeveloper />,
    title: 'Game Developer',
    description: 'Game development fascinates me because it blends storytelling, art, and programming.',
  },
  {
    icon: <RxDesktop />,
    title: 'UI/UX Designer',
    description: ' I aim to work on real-world projects to improve usability and accessibility to explore UI/UX design.',
  },
  {
    icon: <RxReader />,
    title: 'Front-End Developer',
    description: 'Frontend development excites me because it combines aesthetics with functionality. ',
  },
  {
    icon: <RxRocket />,
    title: 'Web Developer',
    description: 'Web development is the foundation of the internet, and I want to excel in both frontend and backend.',
  },
];

const ServiceSlider = () => {
  return <Swiper
  breakpoints={{
    320:{
      slidesPerView: 1,
      spaceBetween: 15
    },
    640:{
      slidesPerView: 3,
      spaceBetween: 15
    }
  }}
  freeMode={true}
  pagination={{
    clickable:true,
  }}
  modules={[FreeMode,Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index)=>{
        return <SwiperSlide key={index}>
          <div className='bg-[#282f38] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6  sm:gap-x-0 group cursor-pointer hover:bg-[#3d434b] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-[#ff4654] mb-4'>{item.icon}</div>
            {/* Title and Description */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-[#ff4654] transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
