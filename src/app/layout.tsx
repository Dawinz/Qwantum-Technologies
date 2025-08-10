import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QwantumTech - Web Development & Digital Solutions",
  description: "We build fast, scalable websites, apps, and custom digital solutions that help businesses grow and succeed in the digital world.",
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
