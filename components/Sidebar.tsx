"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[260px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "p-4 flex gap-4 items-center justify-start rounded-lg hover:bg-blue-1",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <span className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
