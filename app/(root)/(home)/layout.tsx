import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <section className="min-h-screen flex flex-1 flex-col px-6 pb-6 pt-32 max-md:pb-14 sm:px-14">
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
