"use client";
import Layout from '../../components/Layout';
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
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
                className="mx-auto h-48 w-auto"
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About QwantumTech
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a passionate team of developers, designers, and digital strategists 
              dedicated to building exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                QwantumTech is a forward-thinking digital agency based in Tanzania, 
                specializing in creating cutting-edge websites, mobile applications, 
                and custom software solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines technical expertise with creative vision to deliver 
                solutions that not only meet our clients&apos; needs but exceed their expectations. 
                We believe in the power of technology to transform businesses and create 
                meaningful impact in the digital world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 h-96 w-full rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-gray-500 text-lg font-medium">
                  [Team Working Image Placeholder]
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, 
              enhance user experiences, and create lasting value in an ever-evolving 
              technological landscape.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-200 h-64 w-full rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-gray-500 text-lg font-medium">
                [Mission Statement Background Image Placeholder]
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          
          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 h-80 w-full rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-lg font-medium">
                    [Founding Team Image Placeholder]
                  </span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2020 - The Beginning</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a vision to bridge the gap between technology and business needs. 
                  We started as a small team of passionate developers with big dreams.
                </p>
              </motion.div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 h-80 w-full rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-lg font-medium">
                    [Growth Milestone Image Placeholder]
                  </span>
                </div>
              </motion.div>
              
              <motion.div
                className="lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2022 - Rapid Growth</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Expanded our services and team to meet growing client demands. 
                  Launched our first major e-commerce and mobile app projects.
                </p>
              </motion.div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 h-80 w-full rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-gray-500 text-lg font-medium">
                    [Current Team Image Placeholder]
                  </span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2024 - Innovation Leader</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we&apos;re proud to be a leading digital agency in Tanzania, 
                  serving clients across East Africa with cutting-edge solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
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
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "Sarah" },
              { name: "Michael Chen", role: "Lead Developer", image: "Michael" },
              { name: "Emily Rodriguez", role: "UI/UX Designer", image: "Emily" },
              { name: "David Kim", role: "Backend Engineer", image: "David" },
              { name: "Lisa Thompson", role: "Project Manager", image: "Lisa" },
              { name: "Alex Wilson", role: "Marketing Specialist", image: "Alex" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">
                    [{member.image} Team Member Image Placeholder]
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 