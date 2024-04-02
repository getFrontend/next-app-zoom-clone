"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "group px-6 py-6 flex flex-col justify-between w-full 2xl:min-w-[290px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px] group-hover:scale-[1.2] transition-transform duration-300">
        <Image src={img} alt={title} width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
