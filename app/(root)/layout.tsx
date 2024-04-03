import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Barlow } from "next/font/google";
import { Metadata } from "next";
import { ReactNode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "@/components/ui/toaster";

const barlow = Barlow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POOM - usefull video calling app",
  description:
    "Poom - a lite version of ZOOM, which has the same functionality for private communication!",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`${barlow.className}`}>
      <StreamVideoProvider>{children}</StreamVideoProvider>
      <Toaster />
    </main>
  );
};

export default RootLayout;
