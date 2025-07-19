"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@qwantumtech.com",
    href: "mailto:hello@qwantumtech.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 750 285 659",
    href: "tel:+255750285659"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+255 750 285 659",
    href: "https://wa.me/255750285659"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanzania",
    href: "#"
  }
];

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      console.log("Form data:", data);
      
      // Show success message (you can replace this with actual form submission)
      alert("Thank you for your message! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear about your project or answer your questions.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to start your next project? Reach out to us through any of these channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Our Location</h4>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">
                  [ Map Placeholder ]
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.name ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                    errors.message ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Tell us about your project or ask us anything..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 