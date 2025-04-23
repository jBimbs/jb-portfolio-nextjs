// components 
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  // Function to handle download
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/path/to/your/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'John_Santillan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <div className="bg-primary/60 h-full">
      <div className="h-full w-full bg-[#111823]">
        <Circles />
        <div className='flex justify-center items-center h-full container mx-auto px-4'> 
          
          <motion.div 
          variants={fadeIn('up', 0.2)}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
          className="bg-white/10 backdrop-blur-lg rounded-lg p-8 w-full max-w-6xl text-white flex flex-col md:flex-row gap-8">
            {/* Left Column - Personal Info */}
            <motion.div 
            variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="md:w-1/3 space-y-6 border-r border-white/20 pr-6">
              <div>
                <h1 className="text-3xl  text-[#ff4654] font-bold">JOHN BENJAMIN F. SANTILLAN</h1>
                <p className="text-lg text-primary-200">3rd Year Computer Science Student</p>
              </div>
              
              <div>
                <h2 className="text-xl   text-[#ff4654] font-bold mb-3 border-b border-white/30 pb-1">Details</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="block w-24 font-semibold">Birthdate:</span>
                    <span>March 30, 2003</span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-24 font-semibold">Address:</span>
                    <span>18 Doña Josefa Ave, Almanza Uno, Las Piñas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-24 font-semibold">Contact:</span>
                    <span>09612143188</span>
                  </li>
                  <li className="flex items-start">
                    <span className="block w-24 font-semibold">Email:</span>
                    <span>santillanjb033@gmail.com</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3 border-b border-white/30 pb-1">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Web Development', 
                    'Mobile Development',
                    'UI/UX Design',
                    'MS Office',
                    'Adaptability',
                    'Customer Service',
                    'Multilingual',
                    'Time Management'
                  ].map((skill) => (
                    <span key={skill} className="bg-primary/30 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Education & Achievements */}
            <motion.div 
            variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
            className="md:w-2/3 space-y-6">
              <div>
                <h2 className="text-2xl font-bold  text-[#ff4654] mb-4 border-b border-white/30 pb-1">Education</h2>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-primary">
                    <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">Cavite State University - Bacoor Campus</h3>
                    <p className="text-primary-200">Bachelor of Science in Computer Science</p>
                    <p className="text-sm">2022 - Present</p>
                    <p className="text-yellow-300 text-sm mt-1">• Dean's Lister (1st Year to Present)</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-primary">
                    <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">Informatics College - Northgate Alabang</h3>
                    <p className="text-primary-200">Senior High School</p>
                    <p className="text-sm">2019 - 2021</p>
                    <p className="text-yellow-300 text-sm mt-1">• With Honors (Grade 11 & 12)</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-primary">
                    <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">Las Piñas National Highschool Almanza</h3>
                    <p className="text-primary-200">High School</p>
                    <p className="text-sm">2015 - 2019</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-primary">
                    <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary"></div>
                    <h3 className="text-lg font-semibold">Almanza Uno Elementary School</h3>
                    <p className="text-primary-200">Elementary</p>
                    <p className="text-sm">2009 - 2015</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-3  text-[#ff4654] border-b border-white/30 pb-1">Achievements</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Consistent Dean's Lister at Cavite State University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Academic Excellence Award in Senior High School</span>
                  </li>
                </ul>
              </div>

             {/* Download Button */}
             <motion.a
                href="/RESUME.pdf"
                download="Santillan_John_Benjamin_Resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#ff4654] hover:bg-[#e63e4d] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div> 
    </div>
  );
};

export default Services