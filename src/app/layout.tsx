import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QwantumTech - Web Development & Digital Solutions",
  description: "We build fast, scalable websites, apps, and custom digital solutions that help businesses grow and succeed in the digital world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
