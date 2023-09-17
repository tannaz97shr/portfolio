import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse p-6 lg:flex-row bg-primary-teal lg:bg-gradient-to-r from-primary-teal to-secondary-teal md:aspect-video xl:aspect-[5/2] items-center justify-center pt-20">
      <div className="flex flex-col w-64 lg:w-fit text-secondary-navi text-lg font-medium">
        <div className="text-2xl mb-4 flex flex-col lg:flex-row items-baseline w-fit">
          <span>Hello, I&apos;m </span>
          <span className="drop-shadow-xl text-3xl font-semibold lg:ml-2">
            Tannaz Shirzadi
          </span>
        </div>
        <div className="mb-4 flex flex-col lg:flex-row items-baseline w-fit">
          <span>Passionate </span>
          <span className="drop-shadow-xl text-2xl font-semibold lg:ml-2">
            Front-End Developer
          </span>
        </div>
        <span>Bridging Design and Technology for Impactful Websites.</span>
      </div>
      <div className="drop-shadow-xl h-52 w-52 mb-4 lg:mb-0 relative ml-5 rounded-full overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="profile"
          layout="fill"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
