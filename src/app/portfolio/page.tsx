"use client";
import Layout from '../../components/Layout';
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "EcomFi",
    category: "E-Commerce",
    description: "A fashion eCommerce store built with WooCommerce and a custom theme. Features advanced product filtering, secure payment processing, and mobile-responsive design.",
    image: "EcomFi Screenshot",
    tags: ["WooCommerce", "WordPress", "UI/UX", "E-Commerce"],
    link: "#"
  },
  {
    id: 2,
    title: "SwiftEstate",
    category: "Real Estate",
    description: "A modern real estate platform with property listings and booking. Includes advanced search, virtual tours, and agent management system.",
    image: "SwiftEstate Screenshot",
    tags: ["React", "Node.js", "MongoDB", "Real Estate"],
    link: "#"
  },
  {
    id: 3,
    title: "KiliPay",
    category: "Fintech",
    description: "A mobile-first payment dashboard with Flutter and Firebase. Secure payment processing with real-time analytics and user management.",
    image: "KiliPay Screenshot",
    tags: ["Flutter", "Firebase", "Dart", "Fintech"],
    link: "#"
  },
  {
    id: 4,
    title: "Gatty Nutrition",
    category: "Health & Wellness",
    description: "A brand and e-store for healthy supplements. Complete branding package with e-commerce integration and marketing automation.",
    image: "Gatty Nutrition Screenshot",
    tags: ["Shopify", "Brand Design", "SEO", "Health"],
    link: "#"
  },
  {
    id: 5,
    title: "TechFlow",
    category: "SaaS",
    description: "A SaaS dashboard for project management and team collaboration. Features task tracking, time management, and team communication tools.",
    image: "TechFlow Screenshot",
    tags: ["Next.js", "TypeScript", "Tailwind", "SaaS"],
    link: "#"
  },
  {
    id: 6,
    title: "LocalEats",
    category: "Food Delivery",
    description: "A food delivery app connecting local restaurants with customers. Real-time tracking, order management, and restaurant dashboard.",
    image: "LocalEats Screenshot",
    tags: ["React Native", "Node.js", "PostgreSQL", "Food"],
    link: "#"
  },
  {
    id: 7,
    title: "EduTech Platform",
    category: "Education",
    description: "An online learning platform with video courses, progress tracking, and interactive assessments. Built for educational institutions.",
    image: "EduTech Screenshot",
    tags: ["Vue.js", "Laravel", "MySQL", "Education"],
    link: "#"
  },
  {
    id: 8,
    title: "GreenEnergy Dashboard",
    category: "Energy",
    description: "A renewable energy monitoring dashboard with real-time data visualization and predictive analytics for solar installations.",
    image: "GreenEnergy Screenshot",
    tags: ["React", "Python", "IoT", "Energy"],
    link: "#"
  }
];

const categories = ["All", "E-Commerce", "Real Estate", "Fintech", "Health & Wellness", "SaaS", "Food Delivery", "Education", "Energy"];

export default function PortfolioPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Explore our diverse collection of successful projects that showcase 
                our expertise across different industries and technologies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="bg-gray-200 h-64 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">
                    [Portfolio Banner Image Placeholder]
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="bg-gray-200 h-48 w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-500 text-sm font-medium text-center px-4">
                      [{project.image} Placeholder]
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Button */}
                  <Link
                    href={project.link}
                    className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s create something amazing together
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 