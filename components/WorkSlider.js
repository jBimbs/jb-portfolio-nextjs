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
  FaGithub,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiInkscape,
  SiPython,
  SiCsharp,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'CvSU - Bacoor Website',
          path: '/CVSU.png',
          subImages: ['/project1slider1.jpg', '/project1slider2.jpg', '/project1slider3.jpg'],
          description: 'Official website for Cavite State University - Bacoor Campus featuring information about programs, faculty, and campus events. Built with WordPress for easy content management.',
          github: 'https://github.com/username/cvsu-bacoor-website'
        },
        {
          title: 'CvSU - Online Enrollment System',
          path: '/thumb2.jpg',
          subImages: ['/enroll1.jpg', '/enroll2.jpg', '/enroll3.jpg'],
          description: 'A comprehensive enrollment system for students with features like course registration, payment processing, and class scheduling. Developed using Laravel and MySQL.',
          github: 'https://github.com/username/cvsu-enrollment-system'
        },
        
        {
          title: 'Batang Kalye E-Commerce',
          path: '/batangkalye.jpg',
          subImages: ['/project4slider1.jpg', '/project4slider2.jpg', '/project4slider3.jpg'],
          description: 'A customizable portfolio platform for creatives to showcase their work. Features drag-and-drop layout customization and social media integration. Built with Next.js and Tailwind CSS.',
          github: 'https://github.com/username/portfolio-platform'
        },
        {
          title: 'Batang Kalye Admin System',
          path: '/adminsystem.jpg',
          icons: '',
          subImages: ['/project5slider1.jpg', '/project5slider2.jpg', '/project5slider3.jpg'],
          description: 'Inventory management software for small businesses with barcode scanning, stock tracking, and reporting features. Created with React and Node.js.',
          github: 'https://github.com/username/quinqueware'
        },
      ],
    },
    {
      images: [
        {
          title: 'QuinqueWare',
          path: '/QuinqueWare.png',
          subImages: ['/project3slider1.jpg', '/project3slider2.jpg', '/project3slider3.jpg', '/project3slider4.jpg', '/project3slider5.jpg'],
          description: 'Inventory management software for small businesses with barcode scanning, stock tracking, and reporting features. Created with React and Node.js.',
          github: 'https://github.com/username/ecommerce-app'
        },
        {
          title: 'CVSU - Checklist',
          path: '/checklist.jpg',
          subImages: ['/project2slider1.jpg', '/project2slider2.jpg', ],
          description: 'Productivity dashboard with task management, team collaboration, and progress tracking features. Implemented with Vue.js and Django REST framework.',
          github: 'https://github.com/username/task-dashboard'
        },
        
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules 
import { Pagination } from 'swiper';

// icons 
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const WorkSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);

  // Project technology mappings
  const projectTechnologies = {
    'CvSU - Bacoor Website': [FaHtml5, FaCss3, FaJs],
    'CvSU - Online Enrollment System': [FaLaravel, FaJs, FaPhp, FaHtml5, SiTailwindcss],
    'Batang Kalye E-Commerce': [ FaJs, FaPhp, FaHtml5, FaCss3],
    'Batang Kalye Admin System': [ FaJs, FaHtml5, FaCss3, SiMongodb],
    'QuinqueWare': [ FaJs, FaHtml5, FaCss3],
    'CVSU - Checklist': [FaJava, FaHtml5, FaCss3, SiMongodb]
  };

  const openModal = (project) => {
    setCurrentProject(project);
    setActiveSubImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const goToNextImage = () => {
    setActiveSubImageIndex(prev => 
      (prev + 1) % currentProject.subImages.length
    );
  };

  const goToPrevImage = () => {
    setActiveSubImageIndex(prev => 
      (prev - 1 + currentProject.subImages.length) % currentProject.subImages.length
    );
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div 
                      className='relative rounded-lg overflow-hidden flex justify-center items-center group' 
                      key={index}
                      onClick={() => openModal(image)}
                    >
                      <div className='relative h-full w-full transition-all duration-300 group-hover:scale-105'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' className='object-cover w-full h-full' />
                        {/* Overlay gradient */}
                        <div className='absolute inset-0 
                          bg-gradient-to-br 
                          from-[#94000b]/0 via-[#ba3a46]/0 to-[#ff4654]/0 
                          opacity-0 
                          group-hover:opacity-90 
                          group-hover:from-[#94000b]/80 
                          group-hover:via-[#ba3a46]/80 
                          group-hover:to-[#ff4654]/80 
                          transition-all duration-300'></div>
                        
                        {/* Content */}
                        <div className='absolute text-center bottom-0 translate-y-full group-hover:-translate-y-10 transition-all delay-100 duration-300 left-0 p-4 text-white opacity-0 group-hover:opacity-100 w-full'>
                          <div className='text-lg font-bold'>{image.title}</div>
                          <p className='text-sm mb-2'>{image.description}</p>
                          
                          {/* Buttons */}
                          <div className='flex justify-center gap-4'>
                            <div className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg'>
                              <span>Live Project</span>
                              <BsArrowRight className='text-xl' />
                            </div>
                            
                            <Link 
                              href={image.github} 
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg'
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>View Code</span>
                              <FaGithub className='text-xl' />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Image Modal */}
      {isModalOpen && currentProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-primary transition-colors"
            >
              &times;
            </button>
            
            {/* Main Image Display */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={currentProject.subImages[activeSubImageIndex]}
                alt={currentProject.title}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            
            {/* Navigation Arrows */}
            {currentProject.subImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10"
                >
                  &rarr;
                </button>
              </>
            )}
            
            {/* Thumbnail Navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2 px-4">
              {currentProject.subImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSubImageIndex(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${activeSubImageIndex === idx ? 'border-primary scale-110' : 'border-transparent'}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
            
            {/* Project Info */}
            <div className="absolute bottom-20 left-0 right-0 text-center bg-black/70 p-4 mx-auto max-w-2xl rounded-lg">
              <h3 className="text-xl font-bold text-[#ff4654] mb-1">{currentProject.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{currentProject.description}</p>
              
              {/* Technology Icons */}
              <div className="flex justify-center gap-3 mb-3">
                {projectTechnologies[currentProject.title]?.map((IconComponent, index) => (
                  <div key={index} className="text-2xl text-[#ff4654] hover:text-primary transition-colors">
                    <IconComponent />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[#ff4654] hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BsArrowRight /> Live Demo
                </Link>
                <Link
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#ff4654] hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;