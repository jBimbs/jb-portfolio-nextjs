import { useState } from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules 
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
  FaLaravel,
  FaGithub,
  FaPhp,
  FaUnity,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiSupabase
} from "react-icons/si";

import { BsArrowRight, BsPlayCircle } from 'react-icons/bs';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'KulturAR',
          path: '/KulturARLogo.png',
          subImages: ['/KulturAR1.jpg', '/KulturAR2.jpg', '/KulturAR3.jpg', '/KulturAR4.jpg', '/KulturAR5.jpg', '/KulturAR6.png', '/KulturAR7.png'],
          description: 'An immersive interactive augmented reality mobile application for exploring, preserving, and showcasing culture and heritage landmarks in Cavite.',
          github: 'https://github.com/ultra066/Kultur-AR',
          hasLiveDemo: true,
          isVideoDemo: true,
          videoUrl: 'https://drive.google.com/file/d/18OzALHbsKfMkB-qHKemoBH46IKwmLQJk/preview'
        },
        {
          title: 'CvSU - Online Enrollment System',
          path: '/EnrollmentSystem1.png',
          subImages: ['/EnrollmentSystem1.png', '/EnrollmentSystem2.png', '/EnrollmentSystem3.jpg', '/EnrollmentSystem4.jpg'],
          description: 'A comprehensive enrollment system for students with features like course registration, payment processing, and class scheduling. Developed using Laravel and MySQL.',
          github: '', // Left empty to cleanly flag as unavailable
          hasLiveDemo: false
        },
        {
          title: 'Batang Kalye E-Commerce',
          path: '/batangkalye.jpg',
          subImages: ['/batangkalye.jpg','/project4slider1.jpg', '/project4slider2.jpg', '/project4slider3.jpg'],
          description: 'An e-commerce storefront designed for a local streetwear apparel line, utilizing customizable display feeds and seamless product presentation.',
          github: 'https://github.com/jBimbs/Collection/tree/main/BatangKalye',
          hasLiveDemo: false
        },
        {
          title: 'CvSU - Bacoor Website',
          path: '/CVSU.png',
          subImages: ['/project1slider1.jpg', '/project1slider2.jpg', '/project1slider3.jpg'],
          description: 'Official website for Cavite State University - Bacoor Campus featuring information about programs, faculty, and campus events.',
          github: 'https://github.com/jBimbs/Collection/tree/main/CVSU',
          hasLiveDemo: false
        },
      ],
    },
    {
      images: [
        {
          title: 'Batang Kalye Admin System',
          path: '/adminsystem.jpg',
          subImages: ['/project5slider1.jpg', '/project5slider2.jpg', '/project5slider3.jpg'],
          description: 'Inventory management dashboard software for a small equipped with real-time stock tracking, mutation logs, and system reporting features.',
          github: 'https://github.com/jBimbs/Collection/tree/main/BatangKalye',
          hasLiveDemo: false
        },
        {
          title: 'CVSU - Checklist',
          path: '/checklist.jpg',
          subImages: ['/project2slider1.jpg', '/project2slider2.jpg'],
          description: 'An academic course evaluation checklist and tracking dashboard engineered to help BSCS students organize and record subject grades.',
          github: 'https://github.com/jBimbs/Collection/tree/main/checklist',
          hasLiveDemo: false
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);

  const projectTechnologies = {
    'CvSU - Bacoor Website': [FaHtml5, FaCss3, FaJs],
    'CvSU - Online Enrollment System': [FaLaravel, FaJs, FaPhp, FaHtml5, SiTailwindcss],
    'Batang Kalye E-Commerce': [FaJs, FaPhp, FaHtml5, FaCss3],
    'Batang Kalye Admin System': [FaJs, FaHtml5, FaCss3, SiMongodb, FaReact],
    'KulturAR': [FaUnity, FaReact, FaPython, FaReact, SiSupabase, SiTailwindcss],
    'CVSU - Checklist': [FaPhp, FaHtml5, FaCss3, SiMongodb]
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

  const openVideoModal = (e, project) => {
    e.stopPropagation(); // Stop click from firing openModal on container parent
    setCurrentProject(project);
    setIsVideoOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    if (!isModalOpen) setCurrentProject(null);
  };

  const goToNextImage = () => {
    setActiveSubImageIndex(prev => (prev + 1) % currentProject.subImages.length);
  };

  const goToPrevImage = () => {
    setActiveSubImageIndex(prev => (prev - 1 + currentProject.subImages.length) % currentProject.subImages.length);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {workSlides.slides.map((slide, slideIdx) => {
          return (
            <SwiperSlide key={slideIdx}>
              <div className='grid grid-cols-2 grid-rows-2 auto-rows-fr gap-4 cursor-pointer h-full'>
                {slide.images.map((image, imgIdx) => {
                  const isGithubDisabled = !image.github;
                  const isLiveDisabled = !image.hasLiveDemo;

                  return (
                    <div 
                      className='relative rounded-lg overflow-hidden flex justify-center items-center group' 
                      key={imgIdx}
                      onClick={() => openModal(image)}
                    >
                      <div className='relative h-full w-full transition-all duration-300 group-hover:scale-105'>
                        {/* Project Thumbnail Image */}
                        <Image 
                          src={image.path} 
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 500px"
                          priority={slideIdx === 0} 
                          alt={image.title} 
                          className='object-cover' 
                        />
                        
                        {/* Overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-br from-[#94000b]/0 via-[#ba3a46]/0 to-[#ff4654]/0 opacity-0 group-hover:opacity-90 group-hover:from-[#94000b]/80 group-hover:via-[#ba3a46]/80 group-hover:to-[#ff4654]/80 transition-all duration-300'></div>
                        
                        {/* Sliding Content */}
                        <div className='absolute text-center bottom-0 translate-y-full group-hover:-translate-y-10 transition-all delay-100 duration-300 left-0 p-4 text-white opacity-0 group-hover:opacity-100 w-full'>
                          <div className='text-lg font-bold'>{image.title}</div>
                          <p className='text-sm mb-2 line-clamp-2'>{image.description}</p>
                          
                          {/* Hover Actions */}
                          <div className='flex justify-center gap-4'>
                            {isLiveDisabled ? (
                              <div 
                                className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 bg-white/5 text-gray-400 px-3 py-1 rounded-lg cursor-not-allowed select-none'
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className='line-through decoration-red-500/70'>Live Project</span>
                                <BsArrowRight className='text-xl opacity-40' />
                              </div>
                            ) : (
                              <div 
                                onClick={(e) => openVideoModal(e, image)}
                                className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg'
                              >
                                <span>Video Demo</span>
                                <BsPlayCircle className='text-xl text-[#ff4654]' />
                              </div>
                            )}
                            
                            {isGithubDisabled ? (
                              <div 
                                className='flex items-center gap-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300 bg-white/5 text-gray-400 px-3 py-1 rounded-lg cursor-not-allowed select-none'
                                onClick={(e) => e.stopPropagation()}
                                title="Repository is private"
                              >
                                <span className='line-through decoration-red-500/70'>View Code</span>
                                <FaGithub className='text-xl opacity-40' />
                              </div>
                            ) : (
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
                            )}
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

      {/* Video Player Lightbox Modal */}
      {isVideoOpen && currentProject && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeVideoModal}
              className="absolute top-3 right-3 text-white text-3xl z-50 hover:text-[#ff4654] transition-colors bg-black/40 px-2 rounded-md"
            >
              &times;
            </button>
            <iframe
              src={currentProject.videoUrl}
              title={`${currentProject.title} Video Demo`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Image Gallery Lightbox Modal */}
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
              className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-[#ff4654] transition-colors"
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
                  onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10"
                >
                  &larr;
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors z-10"
                >
                  &rarr;
                </button>
              </>
            )}
            
            {/* Thumbnail Carousel Strip */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2 px-4">
              {currentProject.subImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSubImageIndex(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    activeSubImageIndex === idx ? 'border-[#ff4654] scale-110' : 'border-transparent'
                  }`}
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
            
            {/* Project Info Panel overlay */}
            <div className="absolute bottom-20 left-0 right-0 text-center bg-black/70 p-4 mx-auto max-w-2xl rounded-lg">
              <h3 className="text-xl font-bold text-[#ff4654] mb-1">{currentProject.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{currentProject.description}</p>
              
              {/* Technology Icon render tier */}
              <div className="flex justify-center gap-3 mb-3">
                {projectTechnologies[currentProject.title]?.map((IconComponent, index) => (
                  <div key={index} className="text-2xl text-[#ff4654]">
                    <IconComponent />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-4">
                {!currentProject.hasLiveDemo ? (
                  <span className="flex items-center gap-1 text-gray-500 cursor-not-allowed select-none line-through">
                    <BsArrowRight /> Live Demo
                  </span>
                ) : (
                  <button
                    onClick={(e) => openVideoModal(e, currentProject)}
                    className="flex items-center gap-1 text-[#ff4654] hover:underline"
                  >
                    <BsPlayCircle /> Video Demo
                  </button>
                )}
                
                {!currentProject.github ? (
                  <span 
                    className="flex items-center gap-1 text-gray-500 cursor-not-allowed select-none line-through"
                    title="Repository is private"
                  >
                    <FaGithub /> View Code
                  </span>
                ) : (
                  <Link
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#ff4654] hover:underline"
                  >
                    <FaGithub /> View Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;