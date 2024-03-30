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
              className="w-[80px]"
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
                        "w-full max-w-60 p-4 flex gap-4 rounded-lg hover:bg-green-1",
                        {
                          "bg-green-1": isActive,
                        }
                      )}
                    >
                      <Image
                        src={link.imgURL}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
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
