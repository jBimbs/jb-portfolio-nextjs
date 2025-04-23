// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiCodeBracket,
  HiAcademicCap,
  HiTrophy,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/work', icon: <HiCodeBracket /> },
  { name: 'challenges', path: '/challenges', icon: <HiAcademicCap /> },
  { name: 'future plans', path: '/future_plans', icon: <HiTrophy />  },
  {
    name: 'resume',
    path: '/resume',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
//next Link
import Link from 'next/link';

//next Router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className='fixed top-2 left-0 right-0 w-full z-50 flex justify-center'>
      <div className='flex items-center justify-center gap-x-4 xl:gap-x-10 h-16 px-6 py-1 bg-white/10 backdrop-blur-sm text-2xl xl:text-xl rounded-full max-w-[90vw] xl:max-w-[80vw] overflow-hidden'>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname ? 'text-[#ff4654]' : ''} relative flex items-center group hover:text-[#ff4654] transition-all duration-300 p-2`}
              href={link.path}
              key={index}
            >
              {/* Tooltip */}
              <div className='absolute top-full mt-2 hidden xl:group-hover:block left-1/2 transform -translate-x-1/2 z-20'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[6px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
                  <div className='border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute -top-2 left-1/2 transform -translate-x-1/2'></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Nav;