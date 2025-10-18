"use client";
import Layout from '../../../components/Layout';
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Eye, Lock, FileText, Users, Globe, Mail, Bell, Database, AlertCircle, BookOpen, Smartphone, BarChart } from "lucide-react";

export default function LearnAndGrowPrivacyPolicyPage() {
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
                Learn & Grow Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We are committed to protecting your privacy and ensuring transparency about
                how we collect, use, and safeguard your personal information when you use our Learn & Grow mobile application.
              </p>
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Version 2.0.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>Effective: October 18, 2025</span>
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
                  <Shield className="w-32 h-32 text-white/90" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <motion.div
              className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Introduction</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to Learn & Grow (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding data collection and usage when you use our Learn & Grow mobile application (the &ldquo;App&rdquo;).
              </p>
              <p className="text-gray-700 leading-relaxed">
                By downloading, installing, or using the Learn & Grow App, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use the App.
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
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">1. Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 text-blue-600 mr-2" />
                    1.1 Personal Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Account Information</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>User Authentication Data:</strong> Username, email address, and encrypted password</li>
                        <li><strong>Profile Information:</strong> Display name, profile picture (if provided), user preferences</li>
                        <li><strong>Account Identifiers:</strong> Unique user ID assigned to your account</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Learning Activity Data</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Progress Information:</strong> Lessons completed, quizzes taken, quiz scores and results</li>
                        <li><strong>Experience Points (XP):</strong> XP earned, current XP balance, level information</li>
                        <li><strong>Achievements and Badges:</strong> Earned achievements, badges, milestones reached</li>
                        <li><strong>Streaks and Statistics:</strong> Daily login streaks, learning time, completion rates</li>
                        <li><strong>Leaderboard Data:</strong> Your ranking, competitive scores (displayed with username only)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Smartphone className="w-6 h-6 text-blue-600 mr-2" />
                    1.2 Automatically Collected Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Device Information</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Device model, operating system version, Android version</li>
                        <li>App version, build number, installation ID</li>
                        <li>Language preferences, timezone, screen resolution</li>
                        <li>Available storage space, memory usage</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Features accessed, time spent in app, navigation patterns</li>
                        <li>Login times, logout times, session duration</li>
                        <li>Buttons clicked, screens viewed, actions performed</li>
                        <li>App crashes, errors, loading times, response times</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Network and Connectivity Information</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Network Type: WiFi, mobile data, connection quality</li>
                        <li>IP Address: For security and fraud prevention purposes</li>
                        <li>Connectivity Status: Online/offline status</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="w-6 h-6 text-blue-600 mr-2" />
                    1.3 Local Storage Data
                  </h3>
                  <p className="text-gray-700 mb-3">The following information is stored locally on your device:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Cached Content: Lessons, quiz questions, learning materials</li>
                    <li>Preferences: App settings, notification preferences, theme choices</li>
                    <li>Temporary Data: Session tokens, authentication credentials</li>
                    <li>Progress Sync Data: Pending progress updates awaiting synchronization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart className="w-6 h-6 text-orange-600 mr-2" />
                    1.4 Third-Party Data Collection
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Google AdMob</h4>
                  <p className="text-gray-700 mb-3">Our App displays advertisements through Google AdMob. AdMob may collect:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-4">
                    <li>Advertising ID: Your device&apos;s advertising identifier</li>
                    <li>Ad Interaction Data: Ads viewed, ads clicked, ad engagement metrics</li>
                    <li>Device Information: For ad targeting and personalization</li>
                    <li>Location Data: Approximate location (if permitted) for geo-targeted ads</li>
                  </ul>
                  <p className="text-gray-700">For more information, please review:</p>
                  <ul className="list-disc list-inside text-blue-600 space-y-1 ml-4">
                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">Google AdMob Privacy Policy</a></li>
                    <li><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Advertising Privacy & Terms</a></li>
                  </ul>
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
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">2. How We Use Your Information</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.1 Core App Functionality</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Account Management:</strong> Creating, maintaining, and securing your account</li>
                    <li><strong>Learning Experience:</strong> Delivering educational content, lessons, and quizzes</li>
                    <li><strong>Progress Tracking:</strong> Recording your learning progress, XP, achievements, and streaks</li>
                    <li><strong>Personalization:</strong> Customizing content based on your learning level and preferences</li>
                    <li><strong>Synchronization:</strong> Syncing your progress across multiple devices (if applicable)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.2 App Improvement and Analytics</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Performance Monitoring:</strong> Identifying and fixing bugs, crashes, and errors</li>
                    <li><strong>Usage Analysis:</strong> Understanding how users interact with the App</li>
                    <li><strong>Feature Development:</strong> Improving existing features and developing new ones</li>
                    <li><strong>Quality Assurance:</strong> Testing and optimizing App performance</li>
                    <li><strong>User Experience Enhancement:</strong> Making the App more intuitive and user-friendly</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.3 Communication</h3>
                  <p className="text-gray-700 mb-2"><strong>Notifications:</strong> Sending push notifications about:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-8 mb-3">
                    <li>Learning reminders and daily streak maintenance</li>
                    <li>Achievement unlocks and milestone celebrations</li>
                    <li>New content availability</li>
                    <li>Important updates or changes to the App</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Support:</strong> Responding to your inquiries, feedback, and support requests</li>
                    <li><strong>Administrative Messages:</strong> Sending important notices about policy changes or account issues</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2.4 Security and Fraud Prevention</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Account Security:</strong> Protecting your account from unauthorized access</li>
                    <li><strong>Fraud Detection:</strong> Identifying and preventing fraudulent activities</li>
                    <li><strong>Abuse Prevention:</strong> Detecting and preventing misuse of the App</li>
                    <li><strong>Compliance:</strong> Meeting legal obligations and regulatory requirements</li>
                  </ul>
                </div>
              </div>
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
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">3. How We Share Your Information</h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                We respect your privacy and limit information sharing to the following circumstances:
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3.1 Third-Party Service Providers</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Google AdMob (Advertising)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Purpose:</strong> Displaying advertisements within the App</li>
                        <li><strong>Data Shared:</strong> Device identifiers, ad interaction data, approximate location (if permitted)</li>
                        <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Cloud Service Providers (Backend Services)</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Purpose:</strong> Storing user data, managing authentication, syncing progress</li>
                        <li><strong>Data Shared:</strong> Account information, learning progress, user-generated content</li>
                        <li><strong>Security:</strong> All data is encrypted in transit and at rest</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Services</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li><strong>Purpose:</strong> Understanding app usage and improving user experience</li>
                        <li><strong>Data Shared:</strong> Anonymous usage statistics, device information, performance metrics</li>
                        <li><strong>Privacy Commitment:</strong> Data is anonymized whenever possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.2 Legal Requirements</h3>
                  <p className="text-gray-700 mb-3">We may disclose your information when required by law or to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Comply with legal processes, court orders, or government requests</li>
                    <li>Enforce our Terms of Service and other agreements</li>
                    <li>Protect the rights, property, or safety of Learn & Grow, our users, or others</li>
                    <li>Investigate and prevent fraud, security issues, or technical problems</li>
                    <li>Respond to emergencies involving danger to personal safety</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3.5 Public Information</h3>
                  <p className="text-gray-700 mb-3">The following information may be visible to other users:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                    <li><strong>Username:</strong> Displayed on leaderboards and in competitive features</li>
                    <li><strong>Achievements:</strong> May be visible to other users for motivation and competition</li>
                    <li><strong>Leaderboard Rankings:</strong> Your position and score on public leaderboards</li>
                  </ul>
                  <p className="text-gray-900 font-semibold">
                    Note: We never share your email address, password, or other sensitive personal information with other users.
                  </p>
                </div>
              </div>
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
                <Lock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">4. Data Security</h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                We take the security of your information seriously and implement various measures to protect it:
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.1 Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Encryption:</strong> All data transmitted between the App and our servers is encrypted using industry-standard SSL/TLS protocols</li>
                    <li><strong>Secure Storage:</strong> User passwords are hashed using strong cryptographic algorithms</li>
                    <li><strong>Access Controls:</strong> Strict access controls limit who can access user data</li>
                    <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.3 Your Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Strong Passwords:</strong> Use strong, unique passwords for your account</li>
                    <li><strong>Device Security:</strong> Keep your device secure with a PIN, password, or biometric lock</li>
                    <li><strong>Account Monitoring:</strong> Regularly review your account activity for suspicious behavior</li>
                    <li><strong>Reporting:</strong> Immediately report any suspected unauthorized access to your account</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4.4 Limitations</h3>
                  <p className="text-gray-700">
                    While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to using commercially reasonable means to protect your personal information.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Your Privacy Rights */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">6. Your Privacy Rights</h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Eye className="w-5 h-5 text-indigo-600 mr-2" />
                    6.1 Access and Portability
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Request a copy of the personal information we hold about you</li>
                    <li>Download your learning progress, achievements, and account information</li>
                    <li>Receive your data in a structured, commonly used, machine-readable format</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-indigo-600 mr-2" />
                    6.2 Correction and Update
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Correct inaccurate or incomplete personal information</li>
                    <li>Update your profile, preferences, and settings within the App</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 text-indigo-600 mr-2" />
                    6.3 Deletion (Right to be Forgotten)
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Request deletion of your account and associated data</li>
                    <li>Account deletion can be initiated from the App settings</li>
                    <li>Deletion is processed within 30 days of request</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Lock className="w-5 h-5 text-indigo-600 mr-2" />
                    6.4 Restriction and Objection
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Request restriction of processing of your personal information</li>
                    <li>Object to processing based on legitimate interests</li>
                    <li>Opt out of marketing communications at any time</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-100 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6.6 How to Exercise Your Rights</h3>
                <p className="text-gray-700 mb-3">To exercise any of these rights:</p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>In-App Settings:</strong> Many rights can be exercised directly in the App settings</li>
                  <li><strong>Email Request:</strong> Contact us at privacy@learnandgrow.com</li>
                  <li><strong>Identity Verification:</strong> We may require identity verification to process requests</li>
                  <li><strong>Response Time:</strong> We will respond to requests within 30 days</li>
                </ol>
              </div>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">7. Children&apos;s Privacy</h2>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">7.1 Age Restrictions</h3>
                <p className="text-gray-700 text-lg mb-4">
                  Learn & Grow is designed for users aged <strong>13 and older</strong>. We do not knowingly collect personal information from children under 13 years of age.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">7.2 Parental Notice</h3>
                <p className="text-gray-700 mb-4">
                  If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at <strong>privacy@learnandgrow.com</strong>.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">7.3 Child Data Deletion</h3>
                <p className="text-gray-700 mb-2">Upon learning that we have collected personal information from a child under 13, we will:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Delete the information as quickly as possible</li>
                  <li>Terminate the associated account</li>
                  <li>Notify the parent or guardian (if contact information is available)</li>
                </ul>
              </div>
            </motion.div>

            {/* Push Notifications */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Bell className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">13. Push Notifications</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">13.1 Notification Types</h3>
                  <p className="text-gray-700 mb-3">The App may send you push notifications for:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Learning Reminders:</strong> Daily reminders to maintain your learning streak</li>
                    <li><strong>Achievement Notifications:</strong> Alerts when you unlock achievements or badges</li>
                    <li><strong>New Content:</strong> Notifications about new lessons, quizzes, or features</li>
                    <li><strong>App Updates:</strong> Important information about App updates or changes</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">13.2 Managing Notifications</h3>
                  <p className="text-gray-700 mb-3">You can control push notifications:</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">In-App Settings</h4>
                      <p className="text-gray-700 ml-4">Navigate to Settings → Notifications and toggle notification types on/off</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Device Settings</h4>
                      <p className="text-gray-700 ml-4">Android: Settings → Apps → Learn & Grow → Notifications</p>
                      <p className="text-gray-700 ml-4">Customize notification preferences at the system level</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">15. Changes to This Privacy Policy</h2>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">15.1 Policy Updates</h3>
                <p className="text-gray-700 mb-3">We may update this Privacy Policy from time to time to reflect:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>Changes in our data practices</li>
                  <li>New features or services</li>
                  <li>Legal or regulatory requirements</li>
                  <li>User feedback and concerns</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">15.2 Notification of Changes</h3>
                <p className="text-gray-700 mb-3">When we make changes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                  <li>The &ldquo;Last Updated&rdquo; date at the top will be revised</li>
                  <li>Material changes will be notified via in-app notifications and email</li>
                  <li>You will have time to review changes before they take effect</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-3">15.3 Continued Use</h3>
                <p className="text-gray-700">
                  Your continued use of the App after changes to this Privacy Policy constitutes acceptance of the updated policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">16. Contact Us</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
                <p className="text-gray-700 mb-6 text-lg">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">General Inquiries</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-600" />
                        <span>support@learnandgrow.com</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-blue-600" />
                        <span>www.learnandgrow.com</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Privacy-Specific Inquiries</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-600" />
                        <span>privacy@learnandgrow.com</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-600" />
                        <span>dpo@learnandgrow.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> We strive to respond to all inquiries within 3-5 business days. Complex requests may take up to 30 days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Consent and Acknowledgment */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-300">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 m-0">17. Consent and Acknowledgment</h2>
                </div>

                <p className="text-gray-700 mb-4 text-lg">
                  By using the Learn & Grow App, you acknowledge that:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4 text-lg">
                  <li>You have read and understood this Privacy Policy</li>
                  <li>You agree to the collection, use, and disclosure of your information as described</li>
                  <li>You consent to the processing of your data in accordance with this policy</li>
                  <li>You understand your rights and how to exercise them</li>
                  <li>You are at least 13 years of age (or the minimum age required in your jurisdiction)</li>
                </ol>
              </div>
            </motion.div>

            {/* Thank You Message */}
            <motion.div
              className="text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Thank you for trusting Learn & Grow with your educational journey.
              </h2>
              <p className="text-lg text-blue-100">
                We are committed to protecting your privacy while helping you achieve your learning goals.
              </p>
            </motion.div>

            {/* Version Information */}
            <motion.div
              className="mt-8 bg-gray-100 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Last Updated</p>
                  <p className="text-lg text-gray-900">October 18, 2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Version</p>
                  <p className="text-lg text-gray-900">2.0.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Effective Date</p>
                  <p className="text-lg text-gray-900">October 18, 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
