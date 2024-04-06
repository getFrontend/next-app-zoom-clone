"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const Main = () => {
  const router = useRouter();

  const slogan = "«POOM POOM POOM»".split(" ");

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
            className="animate-bounce-slow relative z-30 opacity-90 pointer-events-none"
            src="/icons/webcam.png"
            width={150}
            height={150}
            alt="webcamera icon"
          />
        </motion.div>
        <h1 className="heading font-bold text-4xl text-green-1 relative z-20 md:text-7xl xl:text-9xl">
          POOM
        </h1>
        <div className="glassmorphism3 p-2 rounded-2xl flex-center flex-col max-sm:max-w-[300px] lg:rounded-[32px] lg:p-8">
          <p className="text-center mt-5 text-sky-1 relative z-20 text-xl xl:text-3xl">
            Free{" "}
            <span className="inline-block relative text-sky-2">
              video calling app
              <Image
                src="/icons/curve.png"
                className="absolute top-full left-0 w-full"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
            based on Next & Stream
          </p>
          <p className="text-center mt-5 text-sky-1 relative z-20 text-xl xl:text-3xl">
            It&apos;s simple to use as say:{" "}
            {slogan.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </div>
        <motion.button
          onClick={clickHandler}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="group relative z-20 flex items-center gap-2 w-fit mt-10 py-4 px-6 rounded-2xl bg-green-2 hover:bg-blue-1 text-dark-1 uppercase"
        >
          Get Started
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </main>
  );
};

export default Main;
