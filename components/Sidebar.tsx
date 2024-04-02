"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BsRecordCircleFill } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex flex-shrink-0 flex-col justify-between bg-dark-1 p-6 pt-32 text-white max-sm:hidden lg:w-[260px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "p-4 flex gap-4 items-center justify-start rounded-lg text-3xl hover:bg-green-2",
                {
                  "bg-green-2": isActive,
                }
              )}
            >
              <span className="text-3xl text-sky-1">
                {link.id === "1" ? (
                  <MdDashboard />
                ) : link.id === "2" ? (
                  <LuCalendarClock />
                ) : link.id === "3" ? (
                  <BiSolidSkipPreviousCircle />
                ) : link.id === "4" ? (
                  <BsRecordCircleFill />
                ) : (
                  <FaUserLock />
                )}
              </span>
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
