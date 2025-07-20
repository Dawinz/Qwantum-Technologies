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

// Professional grid-based positioning
const logoPositions = [
  // Top row
  { top: "10%", left: "10%", scale: 0.8 },
  { top: "15%", left: "25%", scale: 0.9 },
  { top: "12%", left: "45%", scale: 0.7 },
  { top: "18%", left: "65%", scale: 0.8 },
  { top: "14%", left: "85%", scale: 0.9 },
  
  // Second row
  { top: "30%", left: "5%", scale: 0.9 },
  { top: "35%", left: "22%", scale: 0.8 },
  { top: "32%", left: "42%", scale: 0.7 },
  { top: "38%", left: "62%", scale: 0.9 },
  { top: "34%", left: "82%", scale: 0.8 },
  
  // Third row
  { top: "55%", left: "12%", scale: 0.8 },
  { top: "60%", left: "28%", scale: 0.9 },
  { top: "57%", left: "48%", scale: 0.7 },
  { top: "63%", left: "68%", scale: 0.8 },
  { top: "58%", left: "88%", scale: 0.9 },
  
  // Fourth row
  { top: "80%", left: "8%", scale: 0.9 },
  { top: "85%", left: "25%", scale: 0.8 },
  { top: "82%", left: "45%", scale: 0.7 },
  { top: "88%", left: "65%", scale: 0.9 },
  { top: "83%", left: "85%", scale: 0.8 },
  
  // Additional positions
  { top: "22%", left: "15%", scale: 0.7 },
  { top: "27%", left: "35%", scale: 0.8 },
  { top: "25%", left: "55%", scale: 0.9 },
];

export default function TechBackgroundCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #000 1px, transparent 1px),
                           linear-gradient(-45deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Tech Logos Background */}
      <div className="absolute inset-0">
        {techLogos.map((logo, index) => {
          const position = logoPositions[index % logoPositions.length];
          return (
            <motion.div
              key={logo.name}
              className="absolute w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              style={{
                top: position.top,
                left: position.left,
                zIndex: 1,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.15, 0.25, 0.15],
                scale: [position.scale, position.scale * 1.02, position.scale],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: logo.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-1.5">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain opacity-60"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Professional Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Professional Web Development
            </div>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            We Build Websites, Apps &{" "}
            <span className="text-blue-600">
              Brands That Scale.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We specialize in modern websites, powerful mobile apps, and strong brand identities that help businesses grow and succeed in the digital world.
          </p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200 transform hover:-translate-y-0.5"
            >
              View Our Work
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Responsive</h3>
              <p className="text-sm text-gray-600 text-center">Works perfectly on all devices</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Performance</h3>
              <p className="text-sm text-gray-600 text-center">Optimized for speed and efficiency</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Modern Tech Stack</h3>
              <p className="text-sm text-gray-600 text-center">Built with cutting-edge technologies</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 