import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex bg-gradient-to-r from-primary-teal to-secondary-teal aspect-video xl:aspect-[5/2] items-center justify-center">
      <div className="flex flex-col w-fit text-secondary-navi text-lg font-medium">
        <div className="text-2xl mb-4">
          Hello, I&apos;m{" "}
          <span className="drop-shadow-xl text-3xl font-semibold">
            Tannaz Shirzadi
          </span>
        </div>
        <div className="mb-4">
          Passionate{" "}
          <span className="drop-shadow-xl text-2xl font-semibold">
            Front-End Developer
          </span>
          ,
        </div>
        <span>Bridging Design and Technology for Impactful Websites.</span>
      </div>
      <div className="drop-shadow-xl h-52 w-52 relative ml-5 rounded-full overflow-hidden">
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
