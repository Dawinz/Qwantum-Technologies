import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className={`min-h-screen bg-white pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 