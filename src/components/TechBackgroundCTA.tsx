"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Tech logos data with positioning and animation variations
const techLogos = [
  { name: "React", src: "/images/logos/react.svg", delay: 0 },
  { name: "Next.js", src: "/images/logos/nextjs.svg", delay: 0.5 },
  { name: "Node.js", src: "/images/logos/nodejs.svg", delay: 1 },
  { name: "Express.js", src: "/images/logos/express.svg", delay: 1.5 },
  { name: "MongoDB", src: "/images/logos/mongodb.svg", delay: 2 },
  { name: "Firebase", src: "/images/logos/firebase.svg", delay: 2.5 },
  { name: "Flutter", src: "/images/logos/flutter.svg", delay: 3 },
  { name: "WordPress", src: "/images/logos/wordpress.svg", delay: 3.5 },
  { name: "WooCommerce", src: "/images/logos/woocommerce.svg", delay: 4 },
  { name: "Elementor", src: "/images/logos/elementor.svg", delay: 4.5 },
  { name: "Shopify", src: "/images/logos/shopify.svg", delay: 5 },
  { name: "HTML5", src: "/images/logos/html5.svg", delay: 5.5 },
  { name: "CSS3", src: "/images/logos/css3.svg", delay: 6 },
  { name: "JavaScript", src: "/images/logos/javascript.svg", delay: 6.5 },
  { name: "TypeScript", src: "/images/logos/typescript.svg", delay: 7 },
  { name: "Tailwind CSS", src: "/images/logos/tailwind.svg", delay: 7.5 },
  { name: "PHP", src: "/images/logos/php.svg", delay: 8 },
  { name: "Python", src: "/images/logos/python.svg", delay: 8.5 },
  { name: "Java", src: "/images/logos/java.svg", delay: 9 },
  { name: "Swift", src: "/images/logos/swift.svg", delay: 9.5 },
  { name: "GitHub", src: "/images/logos/github.svg", delay: 10 },
  { name: "Netlify", src: "/images/logos/netlify.svg", delay: 10.5 },
  { name: "Vercel", src: "/images/logos/vercel.svg", delay: 11 },
];

// Professional grid-based positioning to prevent overlapping
const logoPositions = [
  // Top row - 5 logos
  { top: "8%", left: "8%", scale: 0.9, rotation: -3 },
  { top: "12%", left: "25%", scale: 1.0, rotation: 2 },
  { top: "10%", left: "45%", scale: 0.8, rotation: -1 },
  { top: "14%", left: "65%", scale: 1.1, rotation: 4 },
  { top: "9%", left: "85%", scale: 0.9, rotation: -2 },
  
  // Second row - 5 logos
  { top: "28%", left: "5%", scale: 1.0, rotation: 1 },
  { top: "32%", left: "22%", scale: 0.9, rotation: -3 },
  { top: "30%", left: "42%", scale: 1.1, rotation: 2 },
  { top: "34%", left: "62%", scale: 0.8, rotation: -1 },
  { top: "29%", left: "82%", scale: 1.0, rotation: 3 },
  
  // Third row - 5 logos
  { top: "52%", left: "12%", scale: 0.9, rotation: -2 },
  { top: "56%", left: "28%", scale: 1.1, rotation: 1 },
  { top: "54%", left: "48%", scale: 0.8, rotation: 3 },
  { top: "58%", left: "68%", scale: 1.0, rotation: -1 },
  { top: "53%", left: "88%", scale: 0.9, rotation: 2 },
  
  // Fourth row - 5 logos
  { top: "76%", left: "8%", scale: 1.0, rotation: 1 },
  { top: "80%", left: "25%", scale: 0.8, rotation: -2 },
  { top: "78%", left: "45%", scale: 1.1, rotation: 3 },
  { top: "82%", left: "65%", scale: 0.9, rotation: -1 },
  { top: "77%", left: "85%", scale: 1.0, rotation: 2 },
  
  // Additional scattered positions for remaining logos
  { top: "18%", left: "15%", scale: 0.8, rotation: 2 },
  { top: "22%", left: "35%", scale: 1.0, rotation: -1 },
  { top: "20%", left: "55%", scale: 0.9, rotation: 3 },
];

export default function TechBackgroundCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}></div>
      </div>

      {/* Floating Tech Logos Background */}
      <div className="absolute inset-0">
        {techLogos.map((logo, index) => {
          const position = logoPositions[index % logoPositions.length];
          return (
            <motion.div
              key={logo.name}
              className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              style={{
                top: position.top,
                left: position.left,
                zIndex: 1,
              }}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [position.scale, position.scale * 1.05, position.scale],
                rotate: [position.rotation, position.rotation + 3, position.rotation],
                y: [0, -8, 0],
                x: [0, 3, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: logo.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-2 hover:shadow-xl transition-all duration-300 group">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main CTA Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
              🚀 Modern Web Development
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We Build Websites, Apps &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brands That Scale.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in modern websites, powerful mobile apps, and strong brand identities that help businesses grow and succeed in the digital world.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">100% Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">Fast Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">Modern Tech Stack</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 