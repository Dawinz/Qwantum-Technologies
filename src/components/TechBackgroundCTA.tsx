"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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

// Logo positioning for different screen sizes
const logoPositions = [
  // Top row
  { top: "5%", left: "10%", scale: 0.8, rotation: -5 },
  { top: "8%", left: "25%", scale: 1.1, rotation: 3 },
  { top: "12%", left: "45%", scale: 0.9, rotation: -2 },
  { top: "6%", left: "65%", scale: 1.0, rotation: 4 },
  { top: "10%", left: "85%", scale: 0.7, rotation: -3 },
  
  // Middle rows
  { top: "25%", left: "5%", scale: 0.9, rotation: 2 },
  { top: "30%", left: "20%", scale: 1.2, rotation: -4 },
  { top: "35%", left: "40%", scale: 0.8, rotation: 1 },
  { top: "28%", left: "60%", scale: 1.0, rotation: -2 },
  { top: "32%", left: "80%", scale: 0.9, rotation: 3 },
  
  // Bottom rows
  { top: "55%", left: "8%", scale: 1.1, rotation: -1 },
  { top: "60%", left: "30%", scale: 0.8, rotation: 4 },
  { top: "65%", left: "50%", scale: 1.0, rotation: -3 },
  { top: "58%", left: "70%", scale: 0.9, rotation: 2 },
  { top: "62%", left: "90%", scale: 1.2, rotation: -1 },
  
  // Additional scattered positions
  { top: "75%", left: "15%", scale: 0.7, rotation: 3 },
  { top: "80%", left: "35%", scale: 1.0, rotation: -2 },
  { top: "85%", left: "55%", scale: 0.8, rotation: 1 },
  { top: "78%", left: "75%", scale: 1.1, rotation: -4 },
  { top: "82%", left: "95%", scale: 0.9, rotation: 2 },
];

export default function TechBackgroundCTA() {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Floating Tech Logos Background */}
      <div className="absolute inset-0">
        {techLogos.map((logo, index) => {
          const position = logoPositions[index % logoPositions.length];
          return (
            <motion.div
              key={logo.name}
              className="absolute w-16 h-16 md:w-20 md:h-20 opacity-20 md:opacity-30"
              style={{
                top: position.top,
                left: position.left,
                zIndex: 1,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
                scale: [position.scale, position.scale * 1.1, position.scale],
                rotate: [position.rotation, position.rotation + 5, position.rotation],
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: logo.delay,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
                <span className="text-xs font-semibold text-gray-600 text-center leading-tight">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Build Websites, Apps &{" "}
            <span className="text-blue-600">Brands That Scale.</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We specialize in modern websites, powerful mobile apps, and strong brand identities that help businesses grow and succeed in the digital world.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 