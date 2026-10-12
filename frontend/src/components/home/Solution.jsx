
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    eyebrow: "STAFFING SOLUTIONS",
    title: "Skilled Workforce You Can Trust",
    description:
      "From housekeeping to corporate staffing, we provide trained professionals tailored to meet your operational needs.",
    image: "https://ptpgs.in/assets/img/banner1.avif",
    theme: "light",
  },
  {
    eyebrow: "FACILITY MANAGEMENT",
    title: "Complete Facility Management Services",
    description:
      "Delivering efficient housekeeping, maintenance, manpower, and support services to keep your facilities running smoothly.",
    image: "https://ptpgs.in/assets/img/banner-img2.jpg",
    theme: "light",
  },
  {
    eyebrow: "SECURITY SERVICES",
    title: "Trusted Protection For Every Space",
    description:
      "Professional security solutions designed to safeguard businesses, residences, events, and institutions.",
    image: "https://ptpgs.in/assets/img/wave-img.jpg",
    theme: "dark",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];
  const isDark = currentSlide.theme === "dark";

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.eyebrow}
            className="h-full w-full object-cover object-center"
          />

          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-r from-[#111827]/95 via-[#111827]/75 to-[#111827]/20"
                : "bg-gradient-to-r from-white via-white/95 to-white/10"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center px-5 py-20 sm:min-h-[600px] sm:px-8 lg:min-h-[680px] lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p
              className={`mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
                isDark ? "text-[#e6b84a]" : "text-[#a77b20]"
              }`}
            >
              <span className="h-[2px] w-8 bg-current" />
              {currentSlide.eyebrow}
            </p>

            <h1
              className={`max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px] ${
                isDark ? "text-white" : "text-[#202b36]"
              }`}
            >
              {currentSlide.title}
            </h1>

            <p
              className={`mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${
                isDark ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {currentSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-[#d5a63c] px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#202b36] transition hover:bg-[#e7bd5d]"
              >
                Our Services
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 border px-6 py-4 text-sm font-bold transition ${
                  isDark
                    ? "border-white/50 text-white hover:bg-white hover:text-[#202b36]"
                    : "border-[#202b36]/30 text-[#202b36] hover:bg-[#202b36] hover:text-white"
                }`}
              >
                Get A Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 right-5 z-20 flex items-center gap-3 sm:bottom-8 sm:right-8 lg:right-12">
        <span
          className={`mr-2 text-sm font-semibold ${
            isDark ? "text-white" : "text-[#202b36]"
          }`}
        >
          0{activeSlide + 1}
          <span className="mx-2 opacity-50">/</span>
          0{slides.length}
        </span>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-current/30 bg-white/80 text-[#202b36] transition hover:bg-[#d5a63c]"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center border border-current/30 bg-white/80 text-[#202b36] transition hover:bg-[#d5a63c]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-5 z-20 flex gap-2 sm:left-8 lg:left-10">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-[3px] transition-all duration-300 ${
              activeSlide === index
                ? "w-10 bg-[#d5a63c]"
                : `w-5 ${isDark ? "bg-white/50" : "bg-[#202b36]/30"}`
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

