import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="w-full flex-between fixed z-50 bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          className="max-sm:w-16"
          src="/icons/poom-logo.png"
          alt="Poom logo"
          width={200}
          height={75}
        />
      </Link>

      <div className="flex-between gap-5">
        User
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
