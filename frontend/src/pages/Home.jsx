

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





import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Eye,
  Clock3,
  UserCheck,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  LockKeyhole,
  Siren,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Headset,
  Award,
  ScanEye,
  Radio,
  Shield,
} from "lucide-react";

/* =========================
   ANIMATION SETTINGS
========================= */

const ease = [0.22, 1, 0.36, 1];

const revealUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const revealLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Reveal({
  children,
  className = "",
  variants = revealUp,
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
        light
          ? "border-white/20 bg-white/10 text-white"
          : "border-blue-100 bg-blue-50 text-blue-700"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  centered = true,
}) {
  return (
    <Reveal
      className={`mb-12 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[46px] ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* =========================
   REUSABLE IMAGE
========================= */

function ImageSlot({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      {!imageFailed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className={className}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={`flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-600 ${fallbackClassName}`}
        >
          <ShieldCheck
            className="h-20 w-20 text-white/70"
            strokeWidth={1.2}
          />
        </div>
      )}
    </>
  );
}

/* =========================
   HERO SECTION
========================= */

const heroSlides = [
  {
    eyebrow: "Professional Security Solutions",
    title: "Your Safety.",
    highlight: "Our Responsibility.",
    description:
      "Reliable security guards, disciplined protection and professional security support for businesses, residential societies and commercial properties.",
    image: "https://ptpgs.in/assets/img/security-img.avif",
    label: "Professional Guard Services",
  },
  {
    eyebrow: "Trained. Alert. Dependable.",
    title: "Protection You",
    highlight: "Can Trust.",
    description:
      "Build a safer environment with security personnel focused on access control, surveillance support and day-to-day site security.",
    image: "https://ptpgs.in/assets/img/security-img2.webp",
    label: "Trained Security Personnel",
  },
  {
    eyebrow: "Security That Works Around You",
    title: "Safety Starts",
    highlight: "With JIS.",
    description:
      "From entry gates to commercial premises, we help you maintain order, monitor activity and protect the people and property that matter.",
    image: "https://ptpgs.in/assets/img/security-services.jpg",
    label: "Security for Every Site",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const slide = heroSlides[activeSlide];

  return (
    <section 
    // className="relative isolate overflow-hidden bg-[#07152d] text-white"
    className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#16345d] to-[#30205f] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20 lg:min-h-[720px] lg:px-10">
        <div className="relative z-10 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease }}
            >
              <Eyebrow light>{slide.eyebrow}</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[66px]">
                {slide.title}
                <span className="mt-1 block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:shadow-amber-400/40"
                >
                  Request a Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  Discover JIS
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                {["Professional Personnel", "Site-Specific Security", "Reliable Support"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-amber-300"
                      />
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero image */}
        <div className="relative order-1 mx-auto w-full max-w-xl md:order-2">
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-blue-400/40 via-transparent to-amber-400/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/5 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.4)] backdrop-blur-sm">
              <div className="relative h-[340px] overflow-hidden rounded-[23px] sm:h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.image}
                    initial={{ opacity: 0, scale: 1.07 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <ImageSlot
                      src={slide.image}
                      alt={slide.label}
                      className="h-full w-full object-cover"
                      fallbackClassName="h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#07152d] via-[#07152d]/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                        JIS Security
                      </div>
                      <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">
                        {slide.label}
                      </h3>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={previousSlide}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                      >
                        <ChevronLeft size={19} />
                      </button>

                      <button
                        type="button"
                        aria-label="Next slide"
                        onClick={nextSlide}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                      >
                        <ChevronRight size={19} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-2">
                    {heroSlides.map((item, index) => (
                      <button
                        type="button"
                        key={item.label}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? "w-10 bg-amber-300"
                            : "w-5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating information card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-5 -left-1 flex items-center gap-3 rounded-2xl border border-white/60 bg-white p-4 text-slate-900 shadow-2xl sm:-left-8 sm:gap-4 sm:p-5"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <ShieldCheck size={25} />
            </div>

            <div>
              <p className="text-sm font-extrabold sm:text-base">
                Security Comes First
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Professional protection
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-amber-300 to-indigo-500" />
    </section>
  );
}

/* =========================
   STATISTICS
========================= */

const stats = [
  { icon: ShieldCheck, number: "01", title: "Safety First", color: "blue" },
  { icon: UserCheck, number: "02", title: "Trained Personnel", color: "amber" },
  { icon: Eye, number: "03", title: "Alert & Vigilant", color: "violet" },
  { icon: Clock3, number: "04", title: "Reliable Support", color: "teal" },
];

const statColors = {
  blue: "from-blue-500 to-indigo-600 shadow-blue-500/25",
  amber: "from-amber-400 to-orange-500 shadow-amber-500/25",
  violet: "from-violet-500 to-purple-600 shadow-violet-500/25",
  teal: "from-teal-400 to-emerald-600 shadow-teal-500/25",
};

function Statistics() {
  return (
    <section 
    // className="relative z-10 bg-gradient-to-b from-[#f0f5ff] via-white to-white px-5 pb-16 pt-16 sm:px-8 lg:px-10"
    className="relative z-10 bg-gradient-to-b from-[#dce8ff] via-[#f5f7ff] to-white px-5 pb-16 pt-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <Reveal key={stat.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.25 }}
                className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-white bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(37,99,235,0.15)] sm:p-6"
              >
                <div
                  className={`absolute -right-7 -top-7 h-24 w-24 rounded-full bg-gradient-to-br opacity-[0.08] blur-xl ${statColors[stat.color]}`}
                />

                <div
                  className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${statColors[stat.color]}`}
                >
                  <Icon size={25} />
                </div>

                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                    {`0${index + 1}`}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-slate-900 sm:text-lg">
                    {stat.title}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* =========================
   ABOUT JIS SECURITY
========================= */

function AboutSection() {
  const features = [
    "Professional and disciplined security personnel",
    "Access control and visitor monitoring",
    "Security practices tailored to each site",
    "Focus on safety, alertness and accountability",
  ];

  return (
    <section
    //  className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/80 to-indigo-100/70 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"

    className="relative overflow-hidden bg-gradient-to-br from-[#edf5ff] via-[#f0ebff] to-[#fff0d7] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
     >
      <div className="pointer-events-none absolute -left-36 top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={revealLeft}>
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[40px] border-l-4 border-t-4 border-amber-400 sm:-left-7 sm:-top-7" />

            <div className="relative overflow-hidden rounded-[30px] border-4 border-white shadow-[0_30px_75px_rgba(15,23,42,0.18)]">
              <ImageSlot
                src="https://ptpgs.in/assets/img/security-img.avif"
                alt="Professional security guard"
                className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[490px]"
                fallbackClassName="h-[380px] w-full sm:h-[490px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                  <ShieldCheck size={17} />
                  JIS Security
                </div>
                <p className="max-w-sm text-2xl font-black leading-tight sm:text-3xl">
                  Building Safer Spaces, Every Day.
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 right-3 max-w-[240px] rounded-2xl border border-white bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.16)] sm:-right-7 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                  <BadgeCheck size={25} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900">
                    Trust & Discipline
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    A responsible approach to security
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal variants={revealRight}>
          <Eyebrow>Who We Are</Eyebrow>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[45px]">
            Security Is More Than Presence.
            <span className="mt-1 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              It Is Responsibility.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            JIS Security focuses on professional security guard services that
            help protect people, property and everyday operations. Our approach
            is built around alertness, discipline, clear responsibilities and
            security arrangements suited to each location.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Whether you manage a residential society, an office or a commercial
            establishment, we understand the importance of a secure and
            well-managed environment.
          </p>

          <div className="mt-7 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                  <CheckCircle2 size={16} />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#10274b] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-900/15 transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-blue-900/25"
          >
            More About JIS Security
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   SECURITY SERVICES
========================= */

const services = [
  {
    icon: Building2,
    title: "Corporate Security",
    description:
      "Security guard support for offices, business premises and corporate buildings, with attention to entry points and visitor movement.",
    number: "01",
    gradient: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/15",
  },
  {
    icon: Users,
    title: "Residential Security",
    description:
      "Support for residential societies and apartment communities through gate security, visitor checks and everyday site monitoring.",
    number: "02",
    gradient: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/15",
  },
  {
    icon: ScanEye,
    title: "Access Control",
    description:
      "Help manage authorised entry, record visitor details where required and maintain orderly access to your premises.",
    number: "03",
    gradient: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Eye,
    title: "Site Surveillance Support",
    description:
      "Visible security presence, routine observation and timely escalation of suspicious activity or safety concerns.",
    number: "04",
    gradient: "from-teal-400 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/15",
  },
  {
    icon: Radio,
    title: "Gate & Perimeter Security",
    description:
      "Attention to designated gates, boundary areas, entry procedures and movement in and out of the premises.",
    number: "05",
    gradient: "from-sky-400 to-blue-600",
    glow: "group-hover:shadow-sky-500/15",
  },
  {
    icon: Siren,
    title: "Security Response Support",
    description:
      "A clear escalation approach for reported incidents, unusual activity and site concerns, in line with agreed procedures.",
    number: "06",
    gradient: "from-rose-500 to-red-600",
    glow: "group-hover:shadow-rose-500/15",
  },
];

function SolutionsSection() {
  return (
    <section
    // className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    className="relative overflow-hidden bg-gradient-to-br from-[#f0f6ff] via-[#f4f0ff] to-[#fff7eb] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.09),_transparent_40%),radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.10),_transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="What We Do"
          title={
            <>
              Security Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Every Environment.
              </span>
            </>
          }
          description="Practical security guard services designed to support safer premises, more orderly access and greater peace of mind."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={revealUp}
                whileHover={{ y: -9, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className={`group relative overflow-hidden rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:border-blue-100 hover:shadow-[0_24px_60px_rgba(15,23,42,0.13)] ${service.glow} sm:p-7`}
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${service.gradient}`}
                  >
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-blue-100">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-800">
                  {service.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  aria-label={`Enquire about ${service.title}`}
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700"
                >
                  Enquire Now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${service.gradient}`}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   WHY CHOOSE US
========================= */

const reasons = [
  {
    icon: UserCheck,
    title: "Professional Conduct",
    text: "A focus on discipline, courtesy and responsible conduct while performing security duties.",
  },
  {
    icon: Eye,
    title: "Alert Observation",
    text: "Attention to access points, visitor movement and unusual activity around your premises.",
  },
  {
    icon: Clock3,
    title: "Clear Site Procedures",
    text: "Security duties and reporting expectations aligned with the needs of your location.",
  },
  {
    icon: Headset,
    title: "Communication & Support",
    text: "A practical communication and escalation process for security-related concerns.",
  },
];

function WhyChooseUs() {
  return (
    <section 
    // className="relative overflow-hidden bg-gradient-to-br from-[#09172f] via-[#102b52] to-[#20245b] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"

    className="relative overflow-hidden bg-gradient-to-br from-[#07152e] via-[#174579] to-[#422569] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-400/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={revealLeft}>
          <Eyebrow light>Why JIS Security</Eyebrow>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[48px]">
            Confidence Begins With
            <span className="mt-1 block text-amber-300">
              The Right Protection.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Effective security is about having clear procedures, responsible
            personnel and an alert presence. JIS Security aims to help clients
            establish that foundation at their premises.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
              <Shield size={28} />
            </div>
            <div>
              <p className="font-extrabold text-white">
                Security With Responsibility
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                A consistent, site-focused approach to protection.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                variants={revealUp}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-white/[0.12] hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)] sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-400/25 to-indigo-400/20 text-amber-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <span className="text-xl font-black text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   OUR PROCESS
========================= */

const processSteps = [
  {
    number: "01",
    title: "Understand Your Needs",
    text: "We discuss your location, entry points, operating hours and security concerns.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Plan the Requirements",
    text: "We define the security duties, personnel requirements and relevant site procedures.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Coordinate Deployment",
    text: "The proposed arrangement is coordinated around the agreed responsibilities and schedule.",
    icon: Users,
  },
  {
    number: "04",
    title: "Maintain Communication",
    text: "We establish clear reporting and communication expectations for ongoing security support.",
    icon: Radio,
  },
];

function WorkProcess() {
  return (
    <section 
    // className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
className="relative overflow-hidden bg-gradient-to-br from-[#fff0d6] via-[#edf4ff] to-[#ddf8f4] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"    
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="How We Work"
          title={
            <>
              A Clear Path to a{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Safer Premises.
              </span>
            </>
          }
          description="A straightforward process that keeps your security requirements and responsibilities at the centre."
        />

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-blue-200 via-amber-300 to-indigo-200 lg:block" />

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full rounded-3xl border border-white bg-white/90 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.07)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(37,99,235,0.13)] sm:p-7"
                >
                  <div className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <Icon size={30} />
                  </div>

                  <span className="mt-6 block text-xs font-black uppercase tracking-[0.2em] text-amber-600">
                    Step {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>

                  <div className="absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}



/* =========================
   TRUST SECTION
========================= */

function TrustSection() {
  const highlights = [
    "Professional approach to site security",
    "Clear entry and visitor procedures",
    "Attention to safety and incident reporting",
    "Security requirements tailored to your site",
  ];

  return (
    <section
    //  className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
    className="relative overflow-hidden bg-gradient-to-br from-[#e8f0ff] via-[#f5f0ff] to-[#fff3e6] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
     
     >
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-100/70 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={revealLeft}>
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-800 p-7 shadow-[0_30px_75px_rgba(30,58,138,0.23)] sm:p-10">
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute -right-3 -top-3 h-36 w-36 rounded-full border border-white/10" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-400/10 blur-2xl" />

            <div className="relative">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-xl shadow-amber-400/20">
                <LockKeyhole size={30} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                Your Premises. Your People. Your Peace of Mind.
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Make Security a Part of Your Everyday Operations.
              </h3>

              <p className="mt-5 max-w-lg text-base leading-8 text-blue-100/90">
                Start with a conversation about your site, the risks you need
                to address and the type of security guard support you require.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
              >
                Discuss Your Requirements
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal variants={revealRight}>
          <Eyebrow>Our Commitment</Eyebrow>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
            The Details Matter.
            <span className="mt-1 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              So Does the People You Trust.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Security arrangements work best when expectations are clear and
            everyone understands their responsibilities. We keep that
            principle at the heart of our service approach.
          </p>

          <div className="mt-8 space-y-5">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-700 shadow-sm">
                  <CheckCircle2 size={21} />
                </div>
                <p className="text-sm font-bold leading-6 text-slate-700 sm:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   FAQ SECTION
========================= */

const faqs = [
  {
    question: "What types of locations can JIS Security support?",
    answer:
      "Our security guard offering is designed for settings such as offices, commercial premises and residential societies. Availability and suitability depend on your requirements and location.",
  },
  {
    question: "Can security arrangements be tailored to our premises?",
    answer:
      "Yes, the requirements can be discussed based on the type of premises, entry points, operating schedule, visitor movement and the responsibilities agreed for the site.",
  },
  {
    question: "How can we request security guard services?",
    answer:
      "Use the Contact page to share your name, contact details, location and security requirements. The team can then discuss the proposed arrangement with you.",
  },
  {
    question: "Can we discuss the number of guards required?",
    answer:
      "Yes. Share details about your site, the hours when security is needed and the entry points that require coverage so your requirements can be reviewed.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
    //  className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/60 to-amber-50/70 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"

    className="relative overflow-hidden bg-gradient-to-br from-[#e6efff] via-[#f0eaff] to-[#ffefd2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
     
     >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal variants={revealLeft}>
          <Eyebrow>Frequently Asked Questions</Eyebrow>

          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-[46px]">
            Questions About Your Security Needs?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Here are a few useful details to help you understand our security
            guard service approach.
          </p>

          <div className="mt-8 rounded-2xl border border-white bg-white/80 p-5 shadow-lg shadow-blue-900/5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Headset size={24} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Need More Information?
                </p>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-indigo-700"
                >
                  Contact JIS Security
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                variants={revealUp}
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-[0_18px_45px_rgba(37,99,235,0.10)]"
                    : "border-white shadow-[0_8px_25px_rgba(15,23,42,0.05)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-extrabold leading-6 text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-blue-700 text-white"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    <span className="text-2xl font-light leading-none">+</span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <p className="px-5 pb-6 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   FINAL CTA
========================= */

function GoldCallout() {
  return (
    <section 
    // className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    className="relative overflow-hidden bg-gradient-to-b from-[#f0eaff] via-white to-[#e4eeff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"

    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-800 p-7 shadow-[0_30px_80px_rgba(30,58,138,0.22)] sm:p-10 lg:p-14">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
        <div className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Eyebrow light>Let's Talk Security</Eyebrow>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[45px]">
              Looking for Reliable Security Guards?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
              Tell us about your premises and security requirements. Let's
              discuss an arrangement that works for your site.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition duration-300 hover:bg-white/20"
            >
              <PhoneCall size={17} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   CERTIFICATIONS / VALUES
========================= */

function CertificationsSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Responsibility",
      text: "A strong focus on protecting people and property.",
    },
    {
      icon: Award,
      title: "Professionalism",
      text: "Respectful conduct and clear responsibilities.",
    },
    {
      icon: Eye,
      title: "Vigilance",
      text: "Attention to surroundings and security procedures.",
    },
    {
      icon: Users,
      title: "Coordination",
      text: "Communication aligned with your site's needs.",
    },
  ];

  return (
    <section 
    // className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-blue-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-20"

    className="relative overflow-hidden bg-gradient-to-r from-[#e5edff] via-[#fff5e1] to-[#eee7ff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our Values"
          title="The Principles Behind Our Service"
          description="Our approach is built around the everyday practices that matter in professional security."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.11)]"
                >
                  <div
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-500/20"
                        : "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/20"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const homeCertifications = [
  {
    image: "https://ptpgs.in/assets/img/cert_udyam.png",
    authority: "Govt. of India • MSME",
    title: "Udyam Registration Certificate",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_gst.png",
    authority: "Govt. of India • GST",
    title: "GST Registration Certificate (Form GST REG-06)",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_incorporation.png",
    authority: "Ministry of Corporate Affairs",
    title: "Certificate of Incorporation",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_startupindia.png",
    authority: "DPIIT • Govt. of India",
    title: "Startup India Recognition Certificate",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_army.png",
    authority: "Indian Army • Defence Experience",
    title: "Security Training & Service Certificate",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_psara.png",
    authority: "Controlling Authority Haryana • PSARA 2005",
    title: "Security Training Institute MoU",
  },
  {
    image: "https://ptpgs.in/assets/img/cert_ncvet.png",
    authority: "Govt. of India • NCVET & MEPSC",
    title: "Upskilling Certification (Security Supervisor)",
  },
];


function CertificateCarouselSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = homeCertifications.length;
  const current = homeCertifications[index];

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    setIndex((i) => (i + 1) % total);
  };

  useEffect(() => {
    if (paused || total < 2) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <section
    // className="relative overflow-hidden bg-gradient-to-br from-[#eef4ff] via-white to-amber-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    className="relative overflow-hidden bg-gradient-to-br from-[#e4ecff] via-[#f3eaff] to-[#ffefd8] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-300/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
              <ShieldCheck size={15} />
              Trust & Recognition
            </span>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore the registrations, certifications and training
              credentials relevant to our security services.
            </p>
          </div>
        </Reveal>

        {/* Carousel container */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white bg-[#0b1730] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.20)] sm:rounded-[36px] sm:p-5 lg:p-7">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="overflow-hidden rounded-[22px] bg-white shadow-inner sm:rounded-[28px]"
          >
            {/* Certificate image area */}
            <div className="relative flex h-[390px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 sm:h-[520px] lg:h-[570px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="h-[82%] max-w-[72%] rounded-md object-contain shadow-xl"
                />
              </AnimatePresence>

              {/* Slide counter */}
              <div className="absolute right-4 top-4 rounded-full bg-[#0b1730]/85 px-4 py-2 text-xs font-bold text-white shadow-lg sm:right-6 sm:top-6 sm:text-sm">
                {index + 1} / {total}
              </div>

              {/* Previous button */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous certificate"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-blue-800 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-blue-600 sm:left-5 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={23} />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={next}
                aria-label="Next certificate"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-blue-800 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-blue-600 sm:right-5 sm:h-12 sm:w-12"
              >
                <ChevronRight size={23} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 flex max-w-[85%] -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-full bg-slate-900/75 px-4 py-3 backdrop-blur-sm sm:bottom-5">
                {homeCertifications.map((certificate, i) => (
                  <button
                    key={certificate.image}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show certificate ${i + 1}`}
                    aria-pressed={i === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-7 bg-amber-400"
                        : "w-2.5 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Certificate caption */}
            <div className="bg-gradient-to-r from-[#10274b] via-[#173b72] to-indigo-800 px-5 py-6 text-center sm:px-8 sm:py-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-300 sm:text-sm">
                {current.authority}
              </p>

              <AnimatePresence mode="wait">
                <motion.h3
                  key={current.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="mt-2 text-lg font-extrabold leading-snug text-white sm:text-2xl"
                >
                  {current.title}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   HOME PAGE
========================= */

// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-[#f8faff] text-slate-900">
//       <Hero />
//       <Statistics />
//       <AboutSection />
//       <SolutionsSection />
//       <WhyChooseUs />
//       <WorkProcess />
//       <TrustSection />
//       <CertificationsSection />
//       <FAQSection />
//       <GoldCallout />
//     </main>
//   );
// }


// export default function Home() {
//   return (
//     // <main className="overflow-hidden bg-[#f8faff] text-slate-900">
//     <main className="overflow-hidden bg-gradient-to-br from-[#f4f7ff] via-[#f9f7ff] to-[#fff6e9] text-slate-900">
//       <Hero />
//       <Statistics />
//       <AboutSection />
//       <SolutionsSection />
//       <WhyChooseUs />
//       <WorkProcess />
//       <TrustSection />
//       <CertificationsSection />
//       <FAQSection />

//       {/* NEW: FAQ ke immediately baad */}
//       <CertificateCarouselSection />

//       <GoldCallout />
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="jis-home-theme overflow-hidden bg-[#f8faff] text-slate-900">

      {/* Background theme directly inside Home.jsx */}
      <style>{`
        .jis-home-theme {
          background: linear-gradient(
            135deg,
            #c7d3e9 0%,
            #d2c5e4 50%,
            #ead3b1 100%
          ) !important;
        }

        /* 1. Hero */
        .jis-home-theme > section:nth-of-type(1) {
          background: linear-gradient(
            125deg,
            #061126 0%,
            #143967 55%,
            #352052 100%
          ) !important;
        }

        /* 2. Statistics */
        .jis-home-theme > section:nth-of-type(2) {
          background: linear-gradient(
            135deg,
            #becde5 0%,
            #d0d8eb 55%,
            #e4d7c5 100%
          ) !important;
        }

        /* 3. About */
        .jis-home-theme > section:nth-of-type(3) {
          background: linear-gradient(
            125deg,
            #b7cbe7 0%,
            #cec2e4 52%,
            #e8cda5 100%
          ) !important;
        }

        /* 4. Security Services */
        .jis-home-theme > section:nth-of-type(4) {
          background: linear-gradient(
            135deg,
            #c5d4e9 0%,
            #d0c5e3 50%,
            #e8d5ba 100%
          ) !important;
        }

        /* 5. Why Choose Us */
        .jis-home-theme > section:nth-of-type(5) {
          background: linear-gradient(
            130deg,
            #050f23 0%,
            #15345e 55%,
            #35204f 100%
          ) !important;
        }

        /* 6. Work Process */
        .jis-home-theme > section:nth-of-type(6) {
          background: linear-gradient(
            125deg,
            #e4c797 0%,
            #bdcfea 53%,
            #afd9d2 100%
          ) !important;
        }

        /* 7. Trust Section */
        .jis-home-theme > section:nth-of-type(7) {
          background: linear-gradient(
            135deg,
            #b9cbe6 0%,
            #d0c3e3 52%,
            #e9d0b1 100%
          ) !important;
        }

        /* 8. Our Values */
        .jis-home-theme > section:nth-of-type(8) {
          background: linear-gradient(
            120deg,
            #b9c9e6 0%,
            #e4d1ae 50%,
            #c9bee4 100%
          ) !important;
        }

        /* 9. FAQ */
        .jis-home-theme > section:nth-of-type(9) {
          background: linear-gradient(
            135deg,
            #b8c9e5 0%,
            #cec0e3 52%,
            #e7cba0 100%
          ) !important;
        }

        /* 10. Certifications carousel */
        .jis-home-theme > section:nth-of-type(10) {
          background: linear-gradient(
            125deg,
            #b8c9e5 0%,
            #d1c1e3 52%,
            #e7c69a 100%
          ) !important;
        }

        /* 11. Final CTA outer background */
        .jis-home-theme > section:nth-of-type(11) {
          background: linear-gradient(
            135deg,
            #d1c4e5 0%,
            #c1d1ea 55%,
            #e9d2ae 100%
          ) !important;
        }

        /* White cards stand out against the richer backgrounds */
        .jis-home-theme article,
        .jis-home-theme .bg-white {
          transition:
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .jis-home-theme article,
          .jis-home-theme .bg-white {
            transition: none;
          }
        }
      `}</style>

      <Hero />
      <Statistics />
      <AboutSection />
      <SolutionsSection />
      <WhyChooseUs />
      <WorkProcess />
      <TrustSection />
      <CertificationsSection />
      <FAQSection />

      {/* Certifications carousel after FAQ */}
      <CertificateCarouselSection />

      <GoldCallout />
    </main>
  );
}