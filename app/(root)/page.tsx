"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Main = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/dashboard");
  };
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="animate-bounce-slow cursor-grabbing relative z-30 opacity-90"
            src="/icons/webcam.png"
            width={150}
            height={150}
            alt="webcamera icon"
          />
        </motion.div>
        <div className="glassmorphism3 p-4 rounded-2xl flex-center flex-col max-sm:max-w-[300px] lg:rounded-[32px] lg:p-8">
          <h1 className="font-bold text-4xl text-green-1 relative z-20 md:text-7xl xl:text-9xl">
            POOM
          </h1>
          <p className="text-center mt-5 text-sky-1 relative z-20 text-xl xl:text-3xl">
            Free video calling app based on Next.JS & Stream
          </p>
          <p className="text-center mt-5 text-sky-1 relative z-20 text-xl xl:text-3xl">
            It&apos;s simple to use as say: «POOM POOM POOM»
          </p>
          <motion.button
            onClick={clickHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative z-20 flex items-center gap-2 w-fit mt-10 py-4 px-6 rounded-2xl bg-green-2 hover:bg-blue-1 text-white uppercase"
          >
            Get Started
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
          I
        </div>
      </div>
    </main>
  );
};

export default Main;
