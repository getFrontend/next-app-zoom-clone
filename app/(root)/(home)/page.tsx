"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Meteors } from "@/components/ui/meteors";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="size-full flex flex-col gap-10 text-white">
      <div className="relative overflow-hidden h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between items-end max-md:px-5 max-md:py-8 p-6 lg:p-11">
          <BackgroundGradient className="glassmorphism max-w-[273px] rounded-[20px] px-6 py-2">
          <h2 className="text-center text-base font-normal text-dark-1">
            Upcoming Meeting at: <span className="font-semibold">12:00</span>{" "}
          </h2>
          </BackgroundGradient>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-4xl font-extrabold lg:text-7xl">
              {time}
            </h3>
            <p className="text-center text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
        <Meteors number={33} />
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
