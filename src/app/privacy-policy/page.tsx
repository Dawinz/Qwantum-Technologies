"use client";
import Layout from '../../components/Layout';
import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText, Users, Globe, Mail, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Privacy Matters
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We are committed to protecting your privacy and ensuring the security 
                of your personal information. Learn how we collect, use, and safeguard your data.
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
                    [Privacy Banner Image Placeholder]
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                This Privacy Policy describes how Qwantum Technologies (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) 
                collects, uses, and protects your personal information when you visit our website 
                or use our services. By using our services, you agree to the collection and use 
                of information in accordance with this policy.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-gray-600">
                    We may collect personal information such as your name, email address, 
                    phone number, and company information when you contact us or use our services.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h4>
                  <p className="text-gray-600">
                    We automatically collect information about how you interact with our website, 
                    including your IP address, browser type, pages visited, and time spent on our site.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cookies</h4>
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to enhance your experience 
                    and analyze website traffic. You can control cookie settings through your browser.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• To provide and maintain our services</li>
                <li>• To communicate with you about our services</li>
                <li>• To improve our website and user experience</li>
                <li>• To send you marketing communications (with your consent)</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect against fraud and abuse</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Information Sharing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements</li>
                <li>• To protect our rights and safety</li>
                <li>• With trusted service providers who assist us in operating our business</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Data Security</h3>
              </div>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </motion.div>

            {/* International Transfers */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">International Data Transfers</h3>
              </div>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than 
                your own. We ensure that such transfers comply with applicable data protection 
                laws and implement appropriate safeguards to protect your information.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h3>
              <p className="text-gray-600 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Access:</strong> Request access to your personal information</li>
                <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                <li>• <strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li>• <strong>Objection:</strong> Object to processing of your personal information</li>
                <li>• <strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email: hello@qwantumtech.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Phone: +255 750 285 659</span>
                </div>
              </div>
            </motion.div>

            {/* Updates to Policy */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h3>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
              </p>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 