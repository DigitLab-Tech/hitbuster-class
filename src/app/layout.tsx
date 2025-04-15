import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitbuster",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`bg-black flex text-white ${inter.className}`}>
        <div className="w-full relative">
          {session?.user?.email && <nav className="sticky bg-black z-10 top-0 left-0">
            <form className="flex justify-end p-6" action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}>
              <Button>Disconnect</Button>
            </form>
          </nav>}
          {children}
        </div>
      </body>
    </html>
  );
}
