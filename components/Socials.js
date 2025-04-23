//links 
import Link  from "next/link";

//icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiGithubLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine, RiGoogleLine} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-x-6 text-3xl z-50">
      <div className="flex items-center gap-x-6  backdrop-blur-sm px-6 py-3 rounded-full">
        <Link href='' className="hover:text-[#ff4654] transition-all duration-300">
          <RiInstagramLine />
        </Link>
        <Link href='https://www.facebook.com/jb.santillan.556882/' className="hover:text-[#ff4654] transition-all duration-300">
          <RiFacebookBoxLine />
        </Link>
        <Link href="https://github.com/yourusername" className="hover:text-[#ff4654] transition-all duration-300">
          <RiGithubLine />
        </Link>
        <Link href='mailto:santillanjb033@gmail.com' className="hover:text-[#ff4654] transition-all duration-300">
          <RiGoogleLine />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
