"use client";
import Layout from '../../../components/Layout';
import { motion } from "framer-motion";
import Image from "next/image";
import { HelpCircle, Mail, MessageCircle, Clock, FileText, CheckCircle, AlertCircle, BookOpen, Smartphone, Users } from "lucide-react";

export default function LearnAndGrowSupportPage() {
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
                Learn & Grow Support
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We&apos;re here to help! Get assistance with your Learn & Grow app, 
                report issues, or share your feedback. Our support team is ready to assist you.
              </p>
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Response within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Available Monday - Friday</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 w-full rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-32 h-32 text-white/90" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">

            {/* Contact Information */}
            <motion.div
              className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Contact Us</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Need help with Learn & Grow? We&apos;re here to assist you. Reach out to us through 
                any of the following channels:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Support Email</h3>
                  </div>
                  <a 
                    href="mailto:support@qwantumtech.com" 
                    className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors duration-200 block mb-2"
                  >
                    support@qwantumtech.com
                  </a>
                  <p className="text-gray-600 text-sm">
                    For technical issues, bug reports, and app-related questions
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">General Contact</h3>
                  </div>
                  <a 
                    href="mailto:contact@qwantumtech.com" 
                    className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors duration-200 block mb-2"
                  >
                    contact@qwantumtech.com
                  </a>
                  <p className="text-gray-600 text-sm">
                    For general inquiries, partnerships, and business matters
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Response Time</p>
                    <p className="text-gray-600 text-sm">
                      We typically respond to all inquiries within 24-48 hours during business days 
                      (Monday - Friday, 9:00 AM - 6:00 PM EAT). For urgent matters, please include 
                      &quot;URGENT&quot; in your subject line.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What to Include */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">What to Include in Your Message</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                    For Bug Reports & Technical Issues
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Device Information:</strong> Device model, operating system version (iOS/Android version)</li>
                    <li><strong>App Version:</strong> The version of Learn & Grow you&apos;re using</li>
                    <li><strong>Description:</strong> Clear description of the issue or bug</li>
                    <li><strong>Steps to Reproduce:</strong> What you were doing when the issue occurred</li>
                    <li><strong>Screenshots:</strong> If applicable, attach screenshots or screen recordings</li>
                    <li><strong>Account Information:</strong> Your username (not password) to help us investigate</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <HelpCircle className="w-6 h-6 text-purple-600 mr-2" />
                    For General Questions & Feedback
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Your Question:</strong> Clear and detailed question</li>
                    <li><strong>Context:</strong> Any relevant background information</li>
                    <li><strong>Feature Requests:</strong> If suggesting a new feature, explain how it would help</li>
                    <li><strong>Feedback:</strong> Share your thoughts, suggestions, or concerns</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Common Issues */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Common Issues & Solutions</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">App Won&apos;t Launch or Crashes</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Make sure your device meets the minimum system requirements</li>
                    <li>Check if you have the latest version of the app installed</li>
                    <li>Try restarting your device</li>
                    <li>Clear the app cache (Settings → Apps → Learn & Grow → Clear Cache)</li>
                    <li>If the issue persists, try uninstalling and reinstalling the app</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Not Syncing</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Check your internet connection</li>
                    <li>Make sure you&apos;re logged into your account</li>
                    <li>Try logging out and logging back in</li>
                    <li>Wait a few minutes and check again - syncing may take time</li>
                    <li>If using multiple devices, ensure you&apos;re using the same account</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can&apos;t Log In</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Double-check your username and password</li>
                    <li>Use the &quot;Forgot Password&quot; feature if available</li>
                    <li>Ensure your account hasn&apos;t been suspended or deleted</li>
                    <li>Check if you have a stable internet connection</li>
                    <li>Try clearing the app data and logging in again</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Notifications Not Working</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Check notification permissions in your device settings</li>
                    <li>Verify notification settings within the app (Settings → Notifications)</li>
                    <li>Make sure Do Not Disturb mode is not enabled</li>
                    <li>Check if battery optimization is affecting the app</li>
                    <li>Try toggling notifications off and on again</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Account & Privacy */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Account & Privacy Support</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Account Management</h3>
                  <p className="text-gray-700 mb-3">
                    Need help with your account? We can assist with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Account recovery and password reset</li>
                    <li>Updating profile information</li>
                    <li>Account deletion requests</li>
                    <li>Transferring progress between devices</li>
                    <li>Merging duplicate accounts</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy & Data</h3>
                  <p className="text-gray-700 mb-3">
                    For privacy-related inquiries, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Data access requests</li>
                    <li>Privacy policy questions</li>
                    <li>Data deletion requests</li>
                    <li>GDPR and privacy rights</li>
                    <li>Third-party data sharing inquiries</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Note:</strong> For detailed information about our privacy practices, 
                    please review our <a href="/learn-and-grow/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Before Contacting */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Before Contacting Support</h2>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border border-green-200">
                <p className="text-gray-700 mb-4 text-lg">
                  To help us assist you more efficiently, please try these steps first:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4 text-lg">
                  <li><strong>Check for Updates:</strong> Make sure you have the latest version of Learn & Grow installed</li>
                  <li><strong>Restart the App:</strong> Close and reopen the app to see if the issue resolves</li>
                  <li><strong>Check Your Connection:</strong> Ensure you have a stable internet connection</li>
                  <li><strong>Review Documentation:</strong> Check if your question is answered in our FAQ or help section</li>
                  <li><strong>Search Previous Messages:</strong> If you&apos;ve contacted us before, check your email for previous responses</li>
                </ol>
              </div>
            </motion.div>

            {/* Additional Resources */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Additional Resources</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <FileText className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Privacy Policy</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Learn about how we collect, use, and protect your personal information.
                  </p>
                  <a 
                    href="/learn-and-grow/privacy-policy" 
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 inline-flex items-center"
                  >
                    Read Privacy Policy →
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">App Information</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Learn more about Learn & Grow features, updates, and how to get the most out of the app.
                  </p>
                  <p className="text-gray-500 text-sm">
                    More resources coming soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              className="text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Thank You for Using Learn & Grow!
              </h2>
              <p className="text-lg text-blue-100">
                Your feedback helps us improve the app and provide a better learning experience for everyone. 
                We appreciate your patience and understanding.
              </p>
            </motion.div>

            {/* Quick Contact CTA */}
            <motion.div
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Don&apos;t hesitate to reach out. We&apos;re here to help you succeed in your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@qwantumtech.com"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </a>
                <a
                  href="mailto:contact@qwantumtech.com"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

