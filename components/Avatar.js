//next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar.png'}  width={300} height={300} alt="my image"
    className="translate-z-0 w-full h-full"/>
  </div>;
};

export default Avatar;
