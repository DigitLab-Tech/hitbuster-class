import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import MenuLink from "@/components/MenuLink";
import { Button } from "@/components/ui/button";
import disconnect from "./actions/disconnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitbuster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const access = cookies().get("access");
  return (
    <html lang="en">
      <body className={`bg-black flex text-white ${inter.className}`}>
        {access && (
          <div className="flex flex-col justify-between border-r min-w-[200px] min-h-screen py-6 px-3 border-[rgba(255,255,255,0.3)]">
            <ul>
              <li>
                <MenuLink href="/">Dashboard</MenuLink>
              </li>
            </ul>
          </div>
        )}
        <div className="w-full relative">
          <nav className="sticky bg-black z-10 top-0 left-0">
            <form className="flex justify-end p-6" action={disconnect}>
              <Button>Disconnect</Button>
            </form>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
