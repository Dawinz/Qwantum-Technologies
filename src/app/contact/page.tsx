"use client";
import Layout from '../../components/Layout';
import ContactSection from '../../components/ContactSection';
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/logo.svg"
                alt="QwantumTech"
                width={600}
                height={200}
                className="mx-auto h-40 w-auto"
                priority
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We&apos;d love to hear from you and 
              discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have a project in mind or just want to learn more about 
                  our services, we&apos;re here to help. Reach out to us through any of 
                  these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a 
                      href="mailto:hello@qwantumtech.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      hello@qwantumtech.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a 
                      href="tel:+255750285659" 
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      +255 750 285 659
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Available Monday to Friday, 9 AM - 6 PM EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">Tanzania</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Schedule a meeting at our office
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Image and Map */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Office Image */}
              <div className="bg-gray-200 h-64 w-full rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-gray-500 text-lg font-medium">
                  [Office Image Placeholder]
                </span>
              </div>

              {/* Map */}
              <div className="bg-gray-200 h-80 w-full rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-gray-500 text-lg font-medium">
                  [Map Placeholder]
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What is your development process?",
                answer: "We follow a proven 4-step process: Discovery (understanding your needs), Planning (creating roadmap), Development (building your solution), and Launch (deployment and support)."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support packages including website maintenance, updates, security monitoring, and performance optimization to ensure your digital solution continues to perform optimally."
              },
              {
                question: "Can you work with existing systems?",
                answer: "Absolutely! We can integrate with your existing systems, databases, and third-party services. We'll assess your current setup and recommend the best approach for seamless integration."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </Layout>
  );
} 