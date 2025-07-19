"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "EcomFi",
    description: "A fashion eCommerce store built with WooCommerce and a custom theme.",
    image: "/images/portfolio/ecomfi.jpg",
    tags: ["WooCommerce", "WordPress", "UI/UX"],
    link: "#"
  },
  {
    id: 2,
    title: "SwiftEstate",
    description: "A modern real estate platform with property listings and booking.",
    image: "/images/portfolio/swiftestate.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 3,
    title: "KiliPay",
    description: "A mobile-first payment dashboard with Flutter and Firebase.",
    image: "/images/portfolio/kilipay.jpg",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "#"
  },
  {
    id: 4,
    title: "Gatty Nutrition",
    description: "A brand and e-store for healthy supplements.",
    image: "/images/portfolio/gatty.jpg",
    tags: ["Shopify", "Brand Design", "SEO"],
    link: "#"
  },
  {
    id: 5,
    title: "TechFlow",
    description: "A SaaS dashboard for project management and team collaboration.",
    image: "/images/portfolio/techflow.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    id: 6,
    title: "LocalEats",
    description: "A food delivery app connecting local restaurants with customers.",
    image: "/images/portfolio/localeats.jpg",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the amazing projects we&apos;ve recently completed.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">
                    {project.title} Preview
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Link
                  href={project.link}
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 