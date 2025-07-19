"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, Gatty Nutrition",
    text: "QwantumTech turned our ideas into a stunning app — fast, functional, and beautiful. Their attention to detail exceeded all expectations.",
    photo: "/images/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, SwiftEstate",
    text: "Their support was amazing throughout the entire branding project. From concept to delivery, the team was professional and incredibly talented.",
    photo: "/images/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, EcomFi",
    text: "I highly recommend them for any website work. They delivered our eCommerce platform on time and it's been driving sales ever since.",
    photo: "/images/testimonials/emily.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, TechFlow",
    text: "Working with QwantumTech was a game-changer. They built a scalable SaaS platform that's helping us serve thousands of users daily.",
    photo: "/images/testimonials/david.jpg"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Owner, LocalEats",
    text: "The mobile app they developed has transformed our business. It's intuitive, fast, and our customers love the seamless experience.",
    photo: "/images/testimonials/lisa.jpg"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Trusted by entrepreneurs, startups, and small businesses.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-64 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="flex gap-4 px-2">
                  {/* First Testimonial */}
                  <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Testimonial Text */}
                                      <blockquote className="text-sm md:text-base text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-gray-500 text-xs font-medium">
                            Photo
                          </span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Testimonial (hidden on mobile) */}
                  <div className="hidden md:block flex-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-sm md:text-base text-gray-700 italic mb-6 leading-relaxed">
                        &ldquo;{testimonials[(currentIndex + 1) % testimonials.length].text}&rdquo;
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-gray-500 text-xs font-medium">
                            Photo
                          </span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonials[(currentIndex + 1) % testimonials.length].name}
                          </h4>
                          <p className="text-gray-500 text-xs">
                            {testimonials[(currentIndex + 1) % testimonials.length].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 