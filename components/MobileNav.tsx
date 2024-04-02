"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BsRecordCircleFill } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              className="w-[100px]"
              src="/icons/poom-logo.png"
              alt="Poom logo"
              width={200}
              height={75}
            />
          </Link>
          <div className="h-[calc(100dvh-72px)] flex-between flex-col overflow-y-auto">
            <SheetClose asChild>
              <section className="h-full flex flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={cn(
                        "w-full max-w-64 p-4 px-10 flex items-center gap-4 rounded-lg hover:bg-green-2",
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
                      <span className="font-semibold">{link.label}</span>
                    </Link>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
