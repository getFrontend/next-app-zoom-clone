import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "POOM dashboard",
  description:
    "Poom - a lite version of ZOOM, which has the same functionality for private communication!",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <section className="min-h-screen flex flex-1 flex-col px-6 pb-2 pt-32 sm:px-14">
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
