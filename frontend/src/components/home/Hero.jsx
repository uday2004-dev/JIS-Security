// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
//   Users,
//   Building2,
//   ClipboardCheck,
//   Phone,
//   Mail,
//   Quote,
//   Image as ImageIcon,
//   Sparkles,
// } from "lucide-react";

// /* ----------------------------------
//    SHARED ANIMATION SETTINGS
// ---------------------------------- */

// const ease = [0.22, 1, 0.36, 1];

// const revealUp = {
//   hidden: { opacity: 0, y: 35 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
// };

// const revealLeft = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
// };

// const revealRight = {
//   hidden: { opacity: 0, x: 40 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
// };

// function Reveal({ children, className = "", direction = "up", delay = 0 }) {
//   const variants = { up: revealUp, left: revealLeft, right: revealRight };

//   return (
//     <motion.div
//       variants={variants[direction]}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       transition={{ delay }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function SectionTitle({
//   eyebrow,
//   title,
//   description,
//   centered = false,
//   light = false,
// }) {
//   return (
//     <Reveal className={`mb-12 ${centered ? "mx-auto text-center" : ""} max-w-4xl`}>
//       <p
//         className={`mb-4 text-sm font-bold uppercase tracking-[0.22em] sm:text-base ${
//           light ? "text-[#e4bd60]" : "text-[#bd902d]"
//         }`}
//       >
//         {eyebrow}
//       </p>

//       <h2
//         className={`text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px] xl:text-[60px] ${
//           light ? "text-white" : "text-[#202b36]"
//         }`}
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className={`mt-5 text-lg leading-8 sm:text-xl ${
//             light ? "text-white/80" : "text-gray-600"
//           }`}
//         >
//           {description}
//         </p>
//       )}
//     </Reveal>
//   );
// }

// /* ----------------------------------
//    IMAGE SLOT
// ---------------------------------- */

// function ImageSlot({
//   src,
//   className = "",
//   label = "Add your image here",
//   fit = "cover",
// }) {
//   return (
//     <div
//       className={`relative isolate overflow-hidden bg-[#edf0f2] ${className}`}
//       aria-label={label}
//     >
//       {src ? (
//         <img
//           src={src}
//           alt={label}
//           loading="lazy"
//           className={`absolute inset-0 h-full w-full transition-transform duration-500 hover:scale-[1.03] ${
//             fit === "contain" ? "object-contain p-3" : "object-cover"
//           }`}
//         />
//       ) : (
//         <>
//           <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#dce2e6]/70" />
//           <div className="relative flex flex-col items-center gap-2 text-gray-400">
//             <ImageIcon size={28} strokeWidth={1.3} />
//             <span className="text-xs font-semibold uppercase tracking-[0.16em]">
//               {label}
//             </span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// /* ----------------------------------
//    HERO SLIDER
// ---------------------------------- */

// const slides = [
//   {
//     eyebrow: "STAFFING SOLUTIONS",
//     title: "Skilled Workforce You Can Trust",
//     description:
//       "From housekeeping to corporate staffing, we provide trained professionals tailored to meet your operational needs.",
//     image: "https://ptpgs.in/assets/img/banner1.avif",
//     background: "#f0f2f3",
//   },
//   {
//     eyebrow: "FACILITY MANAGEMENT",
//     title: "Complete Facility Management Services",
//     description:
//       "Delivering efficient housekeeping, maintenance, manpower, and support services to keep your facilities running smoothly.",
//     image: "https://ptpgs.in/assets/img/banner-img2.jpg",
//     background: "#e9edef",
//   },
//   {
//     eyebrow: "SECURITY SERVICES",
//     title: "Trusted Protection For Every Space",
//     description:
//       "Professional security solutions designed to safeguard businesses, residences, events, and institutions with reliability and excellence.",
//     image: "https://ptpgs.in/assets/img/wave-img.jpg",
//     background: "#e4e9ec",
//   },
// ];

// function Hero() {
//   const [active, setActive] = useState(0);
//   const slide = slides[active];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((current) => (current + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const next = () => setActive((current) => (current + 1) % slides.length);
//   const previous = () =>
//     setActive((current) => (current - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative isolate overflow-hidden bg-[#edf0f2]">
//       {/* Hero background image only */}
//       <AnimatePresence mode="sync" initial={false}>
//         <motion.div
//           key={slide.image}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="pointer-events-none absolute inset-0 z-0"
//           style={{ backgroundColor: slide.background }}
//         >
//           <img
//             src={slide.image}
//             alt=""
//             className="absolute inset-0 h-full w-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center px-5 py-20 sm:min-h-[590px] sm:px-8 lg:min-h-[660px] lg:px-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.title}
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="max-w-[700px] pb-8"
//           >
//             <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-[#bd902d] sm:text-base">
//               <span className="h-[2px] w-9 bg-[#bd902d]" />
//               {slide.eyebrow}
//             </p>

//             <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#202b36] sm:text-5xl md:text-6xl lg:text-[72px]">
//               {slide.title}
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700 sm:text-xl">
//               {slide.description}
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <Link
//                 to="/services"
//                 className="group inline-flex items-center gap-3 bg-[#d5a63c] px-7 py-4 text-base font-bold uppercase tracking-wide text-[#202b36] transition-colors duration-300 hover:bg-[#e8bd5c]"
//               >
//                 Our Services
//                 <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-3 border border-[#202b36]/30 bg-white/20 px-7 py-4 text-base font-bold text-[#202b36] transition duration-300 hover:bg-[#202b36] hover:text-white"
//               >
//                 Get A Quote
//               </Link>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="absolute bottom-7 right-5 z-20 flex items-center gap-3 sm:right-8 lg:right-10">
//           <span className="mr-1 text-base font-semibold text-[#202b36]">
//             0{active + 1}<span className="mx-2 text-gray-500">/</span>0{slides.length}
//           </span>
//           <button
//             type="button"
//             onClick={previous}
//             aria-label="Previous slide"
//             className="flex h-10 w-10 items-center justify-center border border-[#202b36]/20 bg-white/85 text-[#202b36] transition hover:bg-[#d5a63c]"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next slide"
//             className="flex h-10 w-10 items-center justify-center border border-[#202b36]/20 bg-white/85 text-[#202b36] transition hover:bg-[#d5a63c]"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         <div className="absolute bottom-11 left-5 z-20 flex gap-2 sm:left-8 lg:left-10">
//           {slides.map((item, index) => (
//             <button
//               key={item.eyebrow}
//               type="button"
//               aria-label={`Open slide ${index + 1}`}
//               aria-current={index === active ? "true" : undefined}
//               onClick={() => setActive(index)}
//               className={`h-[3px] transition-all duration-300 ${
//                 index === active ? "w-10 bg-[#bd902d]" : "w-5 bg-[#202b36]/35"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    EXPERIENCE / STATS
// ---------------------------------- */

// const stats = [
//   { number: "5+", label: "Years of Experience" },
//   { number: "100+", label: "Professional Team" },
//   { number: "25+", label: "Happy Clients" },
//   { number: "4+", label: "Awards" },
//   { number: "5+", label: "Cities" },
// ];

// function Statistics() {
//   return (
//     <section className="relative z-10 border-y border-gray-100 bg-white">
//       <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
//         {stats.map((item, index) => (
//           <Reveal
//             key={item.label}
//             delay={index * 0.08}
//             className={`flex min-h-[125px] flex-col justify-center border-gray-100 px-4 py-6 sm:px-6 lg:min-h-[145px] ${
//               index !== 0 ? "border-l" : ""
//             } ${index === 4 ? "col-span-2 md:col-span-1" : ""}`}
//           >
//             <h3 className="text-4xl font-bold text-[#202b36] sm:text-5xl">{item.number}</h3>
//             <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-gray-600 sm:text-sm sm:tracking-[0.14em]">
//               {item.label}
//             </p>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    ABOUT US
// ---------------------------------- */

// function AboutSection() {
//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
//         <Reveal direction="left">
//           <div className="relative pr-5 pb-5 sm:pr-8 sm:pb-8">
//             <ImageSlot
//               src="https://ptpgs.in/assets/img/pexels-tima-miroshnichenko-6195129.jpg"
//               label="Housekeeping team"
//               className="min-h-[330px] w-full sm:min-h-[430px]"
//             />
//             <div className="absolute bottom-0 right-0 flex h-36 w-36 flex-col items-center justify-center bg-[#d5a63c] text-[#202b36] shadow-xl sm:h-44 sm:w-44">
//               <span className="text-5xl font-bold sm:text-6xl">15</span>
//               <span className="mt-1 text-sm font-bold uppercase tracking-[0.16em]">Years</span>
//               <span className="text-sm font-medium">Experience</span>
//             </div>
//             <div className="absolute left-0 top-8 -z-0 h-28 w-28 border-l-2 border-t-2 border-[#d5a63c] sm:top-10" />
//           </div>
//         </Reveal>

//         <div>
//           <SectionTitle
//             eyebrow="About Us"
//             title="Trusted Security & Staffing Solutions For Every Industry"
//           />
//           <Reveal>
//             <h3 className="text-xl font-bold text-[#202b36] sm:text-2xl">
//               About Protectors Guild And Staffing
//             </h3>
//             <p className="mt-4 text-lg leading-8 text-gray-600">
//               Protectors Guild And Staffing is committed to delivering reliable
//               security, staffing, and facility management services tailored to
//               the unique needs of businesses, residential communities,
//               corporate offices, and institutions.
//             </p>
//             <p className="mt-4 text-lg leading-8 text-gray-600">
//               From security guards and housekeeping staff to manpower support
//               and facility solutions, we provide dependable services that help
//               organizations operate smoothly.
//             </p>
//             <div className="mt-7 grid grid-cols-2 gap-4">
//               {[
//                 { icon: ShieldCheck, title: "Professionalism" },
//                 { icon: Users, title: "Reliability" },
//               ].map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={item.title}
//                     className="flex items-center gap-3 border border-gray-100 bg-[#f7f8f9] p-4 transition duration-300 hover:border-[#d5a63c]"
//                   >
//                     <Icon size={25} className="shrink-0 text-[#bd902d]" />
//                     <span className="text-base font-bold text-[#202b36] sm:text-lg">{item.title}</span>
//                   </div>
//                 );
//               })}
//             </div>
//             <Link
//               to="/about"
//               className="group mt-8 inline-flex items-center gap-3 text-base font-bold uppercase tracking-wide text-[#202b36]"
//             >
//               Read More
//               <ArrowRight size={19} className="text-[#bd902d] transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    SOLUTIONS
// ---------------------------------- */

// const solutions = [
//   {
//     number: "01",
//     title: "Reliable Staffing Solutions",
//     image: "https://ptpgs.in/assets/img/service2.jpg",
//     icon: Users,
//     description:
//       "Our staffing services deliver skilled and professional manpower for housekeeping, administration, support services, and operational roles tailored to your business needs.",
//   },
//   {
//     number: "02",
//     title: "Facility Management",
//     image: "https://ptpgs.in/assets/img/banner-img2.jpg",
//     icon: Building2,
//     description:
//       "We offer end-to-end facility management solutions including maintenance, housekeeping, support staff, and operational assistance.",
//   },
//   {
//     number: "03",
//     title: "Security Services",
//     image: "https://ptpgs.in/assets/img/security-services.jpg",
//     icon: ShieldCheck,
//     description:
//       "We provide trained and disciplined security personnel for residential societies, offices, industries, events, and commercial properties.",
//   },
// ];

// function SolutionsSection() {
//   return (
//     <section className="bg-[#f5f6f7] py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionTitle
//           centered
//           eyebrow="Our Solutions"
//           title="Smart Security & Staffing Solutions For Every Need"
//         />
//         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//           {solutions.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <Reveal key={item.title} delay={index * 0.1}>
//                 <article className="group h-full overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
//                   <ImageSlot
//                     src={item.image}
//                     label={item.title}
//                     className="aspect-[4/3] w-full transition duration-500 group-hover:brightness-[0.98]"
//                   />
//                   <div className="relative px-6 pb-7 pt-8 sm:px-8">
//                     <div className="absolute -top-7 right-7 flex h-14 w-14 items-center justify-center bg-[#d5a63c] text-[#202b36] shadow-md transition-transform duration-300 group-hover:-translate-y-1">
//                       <Icon size={27} strokeWidth={1.7} />
//                     </div>
//                     <p className="text-sm font-bold tracking-[0.15em] text-[#bd902d]">{item.number}</p>
//                     <h3 className="mt-3 text-2xl font-bold leading-8 text-[#202b36]">{item.title}</h3>
//                     <p className="mt-4 text-base leading-7 text-gray-600">{item.description}</p>
//                     <Link
//                       to="/services"
//                       className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#202b36]"
//                     >
//                       Explore Service
//                       <ArrowRight size={17} className="text-[#bd902d] transition-transform group-hover/link:translate-x-1" />
//                     </Link>
//                   </div>
//                 </article>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    GOLD CTA STRIP
// ---------------------------------- */

// function GoldCallout() {
//   return (
//     <section className="relative overflow-hidden bg-[#d5a63c]">
//       <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#202b36]/10 sm:h-80 sm:w-80" />
//       <div className="absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#202b36]/10 sm:h-64 sm:w-64" />
//       <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-10">
//         <Reveal>
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#202b36]/75 sm:text-base">
//               Complete Support Solutions
//             </p>
//             <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#202b36] sm:text-4xl lg:text-5xl">
//               One Solution for All Your Housekeeping, Security, and Manpower Needs
//             </h2>
//           </div>
//         </Reveal>
//         <Reveal delay={0.1} className="shrink-0">
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-3 bg-[#202b36] px-7 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#344656]"
//           >
//             Contact Us
//             <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    CERTIFICATIONS
// ---------------------------------- */

// const certifications = [
//   {
//     authority: "Govt. of India • MSME",
//     title: "Udyam Registration Certificate",
//     image: "https://ptpgs.in/assets/img/cert_udyam.png",
//   },
//   {
//     authority: "Govt. of India • GST",
//     title: "GST Registration Certificate (Form GST REG-06)",
//     image: "https://ptpgs.in/assets/img/cert_gst.png",
//   },
//   {
//     authority: "Ministry of Corporate Affairs",
//     title: "Certificate of Incorporation",
//     image: "https://ptpgs.in/assets/img/cert_incorporation.png",
//   },
//   {
//     authority: "DPIIT • Govt. of India",
//     title: "Startup India Recognition Certificate",
//     image: "https://ptpgs.in/assets/img/cert_startupindia.png",
//   },
//   {
//     authority: "Indian Army • Defence Experience",
//     title: "Security Training & Service Certificate",
//     image: "https://ptpgs.in/assets/img/cert_army.png",
//   },
//   {
//     authority: "Controlling Authority Haryana • PSARA 2005",
//     title: "Security Training Institute MoU",
//     image: "https://ptpgs.in/assets/img/cert_psara.png",
//   },
// ];

// function CertificationsSection() {
//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionTitle centered eyebrow="Verified Credentials" title="Our Certifications" />
//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {certifications.map((item, index) => (
//             <Reveal key={item.title} delay={index * 0.07}>
//               <article className="group h-full border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#d5a63c] hover:shadow-lg sm:p-6">
//                 <ImageSlot
//                   src={item.image}
//                   fit="contain"
//                   label={item.title}
//                   className="mb-5 aspect-[4/2.8] w-full"
//                 />
//                 <p className="text-sm font-bold uppercase tracking-wide text-[#bd902d]">{item.authority}</p>
//                 <h3 className="mt-3 text-xl font-bold leading-7 text-[#202b36]">{item.title}</h3>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    REQUEST A QUOTE
// ---------------------------------- */

// const serviceOptions = [
//   "House Keeping Services",
//   "Office Boy Supplies",
//   "Warehouse Picker",
//   "Front Office Assistant",
//   "Supervisor Supplies",
//   "Executives Recruitment",
//   "Security Guard Service",
//   "House Maid Service",
// ];

// const fieldClass =
//   "w-full border border-gray-200 bg-white px-4 py-4 text-base text-[#202b36] outline-none transition placeholder:text-gray-400 focus:border-[#bd902d] focus:ring-2 focus:ring-[#d5a63c]/15";

// function QuoteSection() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section className="bg-[#f5f6f7] py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
//         <Reveal direction="left">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#bd902d] sm:text-base">Let's Get Started</p>
//           <h2 className="mt-4 text-4xl font-bold leading-tight text-[#202b36] sm:text-5xl lg:text-[56px]">Request A Quote</h2>
//           <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600 sm:text-xl">
//             Tell us about your requirements. Our team provides tailored staffing, security, and facility support solutions for your organization.
//           </p>
//           <div className="mt-8 space-y-5">
//             <a href="tel:+919716380301" className="flex items-center gap-4">
//               <span className="flex h-12 w-12 items-center justify-center bg-white text-[#bd902d] shadow-sm"><Phone size={22} /></span>
//               <span>
//                 <span className="block text-sm text-gray-600">Call Us</span>
//                 <span className="mt-1 block text-base font-bold text-[#202b36] sm:text-lg">+91 9716380301</span>
//               </span>
//             </a>
//             <a href="mailto:yogendrakumar@ptpgs.in" className="flex items-center gap-4">
//               <span className="flex h-12 w-12 items-center justify-center bg-white text-[#bd902d] shadow-sm"><Mail size={22} /></span>
//               <span className="min-w-0">
//                 <span className="block text-sm text-gray-600">Email Us</span>
//                 <span className="mt-1 block break-all text-base font-bold text-[#202b36] sm:text-lg">yogendrakumar@ptpgs.in</span>
//               </span>
//             </a>
//           </div>
//         </Reveal>

//         <Reveal direction="right" delay={0.1}>
//           <form onSubmit={handleSubmit} className="border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <input className={fieldClass} type="text" name="name" placeholder="Your Name" aria-label="Your Name" required />
//               <input className={fieldClass} type="email" name="email" placeholder="Email" aria-label="Email" required />
//               <input className={fieldClass} type="tel" name="mobile" placeholder="Mobile" aria-label="Mobile" required />
//               <select className={fieldClass} name="service" aria-label="Select service" defaultValue="" required>
//                 <option value="" disabled>Select Service</option>
//                 {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
//               </select>
//             </div>
//             <input className={`${fieldClass} mt-4`} type="text" name="location" placeholder="Your Location" aria-label="Your Location" required />
//             <button type="submit" className="group mt-5 inline-flex items-center gap-3 bg-[#d5a63c] px-7 py-4 text-base font-bold uppercase tracking-wide text-[#202b36] transition hover:bg-[#e7bd5b]">
//               Send Message
//               <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//             {submitted && (
//               <p className="mt-4 text-base text-amber-700">Backend connect karne ke baad quote request bheji ja sakegi. Abhi form sirf frontend par hai.</p>
//             )}
//           </form>
//         </Reveal>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    PROFESSIONAL SERVICES
// ---------------------------------- */

// const professionalServices = [
//   {
//     number: "01",
//     title: "Corporate Staffing",
//     icon: Users,
//     description: "Skilled and reliable manpower for administrative, operational, and support roles.",
//   },
//   {
//     number: "02",
//     title: "Facility Management",
//     icon: Building2,
//     description: "Comprehensive facility support, maintenance, and day-to-day operations.",
//   },
//   {
//     number: "03",
//     title: "Security Guard Services",
//     icon: ShieldCheck,
//     description: "Trained security personnel for offices, residential societies, industries, and events.",
//   },
//   {
//     number: "04",
//     title: "Housekeeping Services",
//     icon: Sparkles,
//     description: "Professional housekeeping solutions for clean, hygienic, and organized spaces.",
//   },
//   {
//     number: "05",
//     title: "Manpower Support Services",
//     icon: ClipboardCheck,
//     description: "Flexible staffing solutions for logistics, maintenance, operations, and support.",
//   },
// ];

// function ProfessionalServices() {
//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionTitle
//           eyebrow="Our Services"
//           title="Professional Services"
//           description="We provide trusted security, staffing, and facility management solutions tailored to meet the operational and safety needs of businesses, institutions, and residential communities."
//         />
//         <div className="grid items-stretch gap-7 lg:grid-cols-2">
//           <Reveal direction="left" className="flex">
//             <article className="flex w-full flex-col border border-gray-100 bg-[#f5f6f7]">
//               <ImageSlot src="https://ptpgs.in/assets/img/service.avif" label="Professional services" className="min-h-[260px] flex-1 sm:min-h-[330px]" />
//               <div className="p-6 sm:p-8">
//                 <h3 className="text-3xl font-bold leading-tight text-[#202b36] sm:text-4xl">Reliable Services Delivered Professionally</h3>
//                 <p className="mt-4 text-lg leading-7 text-gray-600">We combine professional staffing, consistent service quality, and dependable support to meet the needs of every client.</p>
//                 <Link to="/services" className="group mt-6 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide text-[#202b36]">
//                   Read More
//                   <ArrowRight size={18} className="text-[#bd902d] transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//               </div>
//             </article>
//           </Reveal>
//           <div className="grid gap-4 sm:grid-cols-2">
//             {professionalServices.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <Reveal key={item.title} delay={index * 0.07}>
//                   <article className="group h-full border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d5a63c] hover:shadow-md sm:p-6">
//                     <div className="flex h-12 w-12 items-center justify-center bg-[#d5a63c]/15 text-[#bd902d] transition-colors duration-300 group-hover:bg-[#d5a63c] group-hover:text-[#202b36]"><Icon size={25} /></div>
//                     <p className="mt-5 text-sm font-bold tracking-widest text-[#bd902d]">{item.number}</p>
//                     <h3 className="mt-2 text-xl font-bold leading-7 text-[#202b36]">{item.title}</h3>
//                     <p className="mt-3 text-base leading-7 text-gray-600">{item.description}</p>
//                   </article>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    WORK PROCESS
// ---------------------------------- */

// const process = [
//   {
//     number: "01",
//     title: "Understand Client Needs",
//     image: "https://ptpgs.in/assets/img/process_card_1.jpg",
//     description: "We carefully evaluate your security, staffing, and facility requirements for customized solutions.",
//   },
//   {
//     number: "02",
//     title: "Strategic Service Planning",
//     image: "https://ptpgs.in/assets/img/process_card_2.jpg",
//     description: "Our experts create a professional operational plan focused on efficiency, safety, and quality service.",
//   },
//   {
//     number: "03",
//     title: "Professional Team Deployment",
//     image: "https://ptpgs.in/assets/img/process_card_3.jpg",
//     description: "Skilled and trained personnel are assigned to deliver reliable security and staffing services.",
//   },
//   {
//     number: "04",
//     title: "Ongoing Support & Supervision",
//     image: "https://ptpgs.in/assets/img/process_card_4.jpg",
//     description: "We ensure continuous monitoring and client support to maintain high service standards.",
//   },
// ];

// function WorkProcess() {
//   return (
//     <section className="bg-[#f5f6f7] py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionTitle centered eyebrow="Work Process" title="How We Works" description="A structured approach to understanding your needs, planning the service, deploying the right team, and maintaining quality." />
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//           {process.map((item, index) => (
//             <Reveal key={item.number} delay={index * 0.1}>
//               <article className="group h-full bg-white">
//                 <div className="relative">
//                   <ImageSlot src={item.image} label={item.title} className="aspect-[4/3] w-full" />
//                   <span className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center bg-[#d5a63c] text-xl font-bold text-[#202b36] transition-colors duration-300 group-hover:bg-[#202b36] group-hover:text-white">{item.number}</span>
//                 </div>
//                 <div className="p-5 sm:p-6">
//                   <h3 className="text-2xl font-bold leading-8 text-[#202b36]">{item.title}</h3>
//                   <p className="mt-3 text-base leading-7 text-gray-600">{item.description}</p>
//                 </div>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    TESTIMONIALS
// ---------------------------------- */

// const testimonials = [
//   {
//     quote: "They are very polite and professional. We will definitely recommend their services to our friends as well. Good job and thank you for the work.",
//     name: "Mohit Topno",
//     role: "Happy Customer",
//     heading: "Excellent Service Quality",
//   },
//   {
//     quote: "Fantastic experience working with this team! Their support staff was responsive, and the field workforce executed the task flawlessly. Highly recommended.",
//     name: "Sarah Jenkins",
//     role: "Operations Director",
//     heading: "Reliable Partnership",
//   },
//   {
//     quote: "They provided manpower solutions right on time when we were facing critical deadlines. Professional, prompt, and exceptionally managed.",
//     name: "Rajesh Kumar",
//     role: "Project Manager",
//     heading: "Professional Manpower Support",
//   },
// ];

// function Testimonials() {
//   const [start, setStart] = useState(0);
//   const visibleTestimonials = [
//     ...testimonials.slice(start),
//     ...testimonials.slice(0, start),
//   ];

//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
//           <SectionTitle eyebrow="Testimonials" title="Client Feedback Data" />
//           <div className="mb-12 flex gap-3">
//             <button type="button" aria-label="Previous testimonials" onClick={() => setStart((current) => (current - 1 + testimonials.length) % testimonials.length)} className="flex h-11 w-11 items-center justify-center border border-gray-200 text-[#202b36] transition hover:border-[#d5a63c] hover:bg-[#d5a63c]"><ChevronLeft size={21} /></button>
//             <button type="button" aria-label="Next testimonials" onClick={() => setStart((current) => (current + 1) % testimonials.length)} className="flex h-11 w-11 items-center justify-center border border-gray-200 text-[#202b36] transition hover:border-[#d5a63c] hover:bg-[#d5a63c]"><ChevronRight size={21} /></button>
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div key={start} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease }} className="grid gap-6 md:grid-cols-3">
//             {visibleTestimonials.map((item) => (
//               <article key={item.name} className="flex h-full flex-col border border-gray-100 bg-[#f8f9fa] p-6 sm:p-8">
//                 <div className="flex items-center justify-between">
//                   <div className="flex gap-1 text-lg text-[#c99b33]">{Array.from({ length: 5 }).map((_, index) => <span key={index}>★</span>)}</div>
//                   <Quote size={29} className="text-[#d5a63c]" />
//                 </div>
//                 <h3 className="mt-6 text-xl font-bold text-[#202b36]">{item.heading}</h3>
//                 <p className="mt-4 flex-1 text-base leading-7 text-gray-600">“{item.quote}”</p>
//                 <div className="mt-7 flex items-center gap-4 border-t border-gray-200 pt-5">
//                   <ImageSlot label="Client photo" className="h-12 w-12 shrink-0 rounded-full" />
//                   <div>
//                     <h4 className="text-base font-bold text-[#202b36]">{item.name}</h4>
//                     <p className="mt-1 text-sm text-gray-600">{item.role}</p>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    GALLERY
// ---------------------------------- */

// function GallerySection() {
//   const galleryImages = [
//     { src: "https://ptpgs.in/assets/img/security-img.avif", alt: "Security and professional services" },
//     { src: "https://ptpgs.in/assets/img/security-img2.webp", alt: "Security monitoring services" },
//     { src: "https://ptpgs.in/assets/img/banner1.avif", alt: "Professional staffing services" },
//     { src: "https://ptpgs.in/assets/img/service.avif", alt: "Facility and manpower services" },
//     { src: "https://ptpgs.in/assets/img/service-housekeeping.avif", alt: "Housekeeping services" },
//   ];

//   return (
//     <section className="bg-[#f5f6f7] py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//           <SectionTitle eyebrow="Some Of Our Works" title="Our Gallery" />
//           <Reveal>
//             <Link to="/gallery" className="group mb-12 inline-flex items-center gap-2 text-base font-bold uppercase tracking-wide text-[#202b36]">
//               View More
//               <ArrowRight size={19} className="text-[#bd902d] transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </Reveal>
//         </div>
//         <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
//           {galleryImages.map((image, index) => (
//             <Reveal key={image.src} delay={index * 0.08}>
//               <Link to="/gallery" className={`group relative block overflow-hidden bg-[#e8ecef] ${index === 1 || index === 4 ? "lg:mt-8" : ""}`}>
//                 <div className="aspect-[3/4] w-full overflow-hidden">
//                   <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
//                 </div>
//                 <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#202b36]/80 via-[#202b36]/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
//                   <span className="flex translate-y-3 items-center gap-2 text-base font-bold text-white transition-transform duration-300 group-hover:translate-y-0">View More <ArrowRight size={18} /></span>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    CLIENTS
// ---------------------------------- */

// function ClientsSection() {
//   return (
//     <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//         <SectionTitle centered eyebrow="Clients" title="Brief List of Our Customers" />
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {Array.from({ length: 10 }).map((_, index) => (
//             <Reveal key={index} delay={(index % 5) * 0.06}>
//               <div className="flex h-24 items-center justify-center border border-gray-100 bg-white p-4 transition duration-300 hover:border-[#d5a63c] hover:shadow-sm sm:h-28">
//                 <ImageSlot src={`https://ptpgs.in/assets/img/client${index + 1}.png`} fit="contain" label={`Client logo ${index + 1}`} className="h-full w-full bg-white" />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ----------------------------------
//    HOME PAGE
// ---------------------------------- */

// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-white text-[#202b36]">
//       <Hero />
//       <Statistics />
//       <AboutSection />
//       <SolutionsSection />
//       <GoldCallout />
//       <CertificationsSection />
//       <QuoteSection />
//       <ProfessionalServices />
//       <WorkProcess />
//       <Testimonials />
//       <GallerySection />
//       <ClientsSection />
//     </main>
//   );
// }
