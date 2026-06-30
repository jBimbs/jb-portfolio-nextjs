//next image
import Image from "next/image";

const Avatar = () => {
  return (
    // Outer container handles layout positioning
    <div className="hidden xl:flex xl:max-w-none relative w-[400px] h-[400px] xl:w-[480px] xl:h-[480px] max-w-full max-h-full mx-auto">
      <Image
        src={'/avatar_me.png'}
        fill
        quality={90}
        priority={true}
        sizes="(max-width: 1280px) 100vw, 480px"
        alt="A high-quality, professional portrait of John Benjamin Santillan"
        // Increased to translate-y-12 to lower the image more into the frame
        className="translate-z-0 translate-y-12 object-contain object-bottom select-none pointer-events-none"
      />
    </div>
  );
};

export default Avatar;