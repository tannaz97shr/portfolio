import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <div
        className="flex flex-col  bg-red-300
      xl:w-[1200px] lg:w-[1000px] lg:mx-auto w-full px-4
      "
      >
        <div>this is experience section</div>
      </div>
    </main>
  );
}
