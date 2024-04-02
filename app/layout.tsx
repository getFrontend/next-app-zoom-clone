import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Barlow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POOM - usefull video calling app",
  description:
    "Poom - a lite version of ZOOM, which has the same functionality for private communication!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      // appearance={{
      //   layout: {
      //     socialButtonsVariant: "iconButton",
      //     logoImageUrl: "/icons/poom-logo.png",
      //   },
      //   variables: {
      //     colorText: "#fff",
      //     colorPrimary: "#0E78F9",
      //     colorBackground: "#1C1F2E",
      //     colorInputBackground: "#252A41",
      //     colorInputText: "#fff",
      //   },
      // }}
      >
        <body className={`${roboto.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
