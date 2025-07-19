"use client";
import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Settings, 
  FileText, 
  Code 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom-built websites optimized for performance, speed, and conversions."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Launch a powerful online store with WooCommerce or Shopify."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform apps built with Flutter and modern backend support."
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Logos, brand kits, business cards — crafted to leave a lasting impression."
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Rank higher on Google and convert better with proven marketing strategies."
  },
  {
    icon: Settings,
    title: "Website Maintenance & Support",
    description: "Ongoing updates, security, and performance tuning — we've got you covered."
  },
  {
    icon: FileText,
    title: "WordPress Customization",
    description: "Themes, plugins, Elementor, ACF — we specialize in all things WordPress."
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Automation tools, dashboards, booking systems — built to fit your workflow."
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

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
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
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We offer modern digital solutions tailored for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 