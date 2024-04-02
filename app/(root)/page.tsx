"use client";

import { Boxes } from "@/components/ui/background-boxes";

const Main = () => {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="fade-in glassmorphism3 p-4 rounded-2xl flex-center flex-col lg:rounded-[32px] lg:p-8">
        <h1 className="text-2xl text-white relative z-20 md:text-4xl xl:text-7xl">
          POOM POOM POOM
        </h1>
        <p className="text-center mt-4 text-sky-1 relative z-20">
          Framer motion is the best animation library ngl
        </p>
      </div>
    </main>
  );
};

export default Main;
