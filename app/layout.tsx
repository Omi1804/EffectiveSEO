import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Mastery",
  description: "JS Mastery Resources",
};

//Outermost layout which we used to some metadatas displays and SEO things

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
