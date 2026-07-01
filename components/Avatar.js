//next image
import Image from "next/image";

const Avatar = () => {
  return (
    // Added 'rounded-full' and 'overflow-hidden' to create the circle frame
    // Added 'border' classes just in case you want a visual outline (optional)
    <div className="hidden xl:flex xl:max-w-none relative w-[400px] h-[400px] xl:w-[480px] xl:h-[480px] max-w-full max-h-full mx-auto rounded-full overflow-hidden border border-white/0">
      <Image
        src={'/avatar_me.png'}
        fill
        quality={90}
        priority={true}
        sizes="(max-width: 1280px) 100vw, 480px"
        alt="Avatar"
        // Switched 'object-contain' to 'object-cover' so it fills the circle nicely.
        // Removed 'translate-y-12' and 'object-bottom' to center the face, 
        // but you can re-adjust if your raw image has too much whitespace at the top.
        className="translate-z-0 object-cover object-center select-none pointer-events-none"
      />
    </div>
  );
};

export default Avatar;