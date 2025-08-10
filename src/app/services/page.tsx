"use client";
import Layout from '../../components/Layout';
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Smartphone, Palette, TrendingUp, Settings, FileText, Code, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom-built websites optimized for performance, speed, and conversions. We create responsive, modern websites that drive results.",
    image: "Website Development"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Launch a powerful online store with WooCommerce or Shopify. Complete e-commerce solutions with payment processing and inventory management.",
    image: "E-Commerce Platform"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform apps built with Flutter and modern backend support. Native and hybrid mobile applications for iOS and Android.",
    image: "Mobile App Development"
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Logos, brand kits, business cards — crafted to leave a lasting impression. Complete brand identity and visual design solutions.",
    image: "Brand Design"
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Rank higher on Google and convert better with proven marketing strategies. Comprehensive digital marketing and SEO services.",
    image: "Digital Marketing"
  },
  {
    icon: Settings,
    title: "Website Maintenance & Support",
    description: "Ongoing updates, security, and performance tuning — we&apos;ve got you covered. Reliable maintenance and support services.",
    image: "Website Maintenance"
  },
  {
    icon: FileText,
    title: "WordPress Customization",
    description: "Themes, plugins, Elementor, ACF — we specialize in all things WordPress. Custom WordPress development and optimization.",
    image: "WordPress Development"
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Automation tools, dashboards, booking systems — built to fit your workflow. Tailored software solutions for your business needs.",
    image: "Custom Software"
  }
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Logo */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/logo-white.svg"
              alt="QwantumTech"
              width={600}
              height={200}
              className="mx-auto h-40 w-auto"
              priority
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Capabilities
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive digital solutions designed to elevate your business 
                and drive measurable results in the digital landscape.
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
                    [Services Banner Image Placeholder]
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end digital solutions 
              that help businesses thrive in the modern digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Service Image */}
                  <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium text-center px-4">
                      [{service.image} Image Placeholder]
                    </span>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and objectives" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and strategy" },
              { step: "03", title: "Development", description: "Building your solution with precision and care" },
              { step: "04", title: "Launch", description: "Deploying and supporting your digital success" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Let&apos;s discuss how we can help bring your vision to life
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="bg-gray-200 h-48 w-full rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">
                  [Project Discussion Image Placeholder]
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 