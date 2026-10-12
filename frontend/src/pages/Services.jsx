// import { useState } from "react";
// import {
//   ArrowRight,
//   Check,
//   ChevronRight,
//   ClipboardCheck,
//   Users,
//   ShieldCheck,
//   Sparkles,
//   Phone,
//   Mail,
//   MapPin,
//   Building2,
//   Clock,
//   Send,
// } from "lucide-react";

// const ASSETS = "https://ptpgs.in/assets/img";

// const services = [
//   "House Keeping Services",
//   "Office Boy Supplies",
//   "Warehouse Picker",
//   "Front Office Assistant",
//   "Supervisor Supplies",
//   "Executives Recruitment",
//   "Security Guard Service",
//   "House Maid Service",
// ];

// const processSteps = [
//   {
//     number: "01",
//     title: "Requirement Understanding",
//     description:
//       "Understanding the client's property type, workforce requirement, cleaning standards, and operational expectations.",
//   },
//   {
//     number: "02",
//     title: "Staff Selection & Deployment",
//     description:
//       "Deployment of trained housekeeping staff according to site requirements and work schedules.",
//   },
//   {
//     number: "03",
//     title: "Supervision & Quality Monitoring",
//     description:
//       "Regular supervision and performance monitoring to maintain service quality and discipline.",
//   },
//   {
//     number: "04",
//     title: "Hygiene & Safety Compliance",
//     description:
//       "Following proper hygiene standards, cleaning protocols, and workplace safety measures.",
//   },
//   {
//     number: "05",
//     title: "Client Support & Service Improvement",
//     description:
//       "Continuous support, feedback management, and service improvements for long-term client satisfaction.",
//   },
// ];

// const housekeepingServices = [
//   "Office Housekeeping Services",
//   "Residential Apartment Cleaning",
//   "Commercial Facility Cleaning",
//   "Industrial Housekeeping Support",
//   "Hotel & Hospitality Housekeeping",
//   "Warehouse & Factory Cleaning Staff",
// ];

// const idealFor = [
//   "Corporate Offices",
//   "Residential Apartments & Societies",
//   "Hospitals & Clinics",
//   "Hotels & Restaurants",
//   "Warehouses & Factories",
//   "Schools & Institutions",
// ];

// const workProcess = [
//   {
//     image: `${ASSETS}/process_card_1.jpg`,
//     number: "01",
//     title: "Understand Client Needs",
//     description:
//       "We carefully evaluate your security, staffing, and facility requirements for customized solutions.",
//   },
//   {
//     image: `${ASSETS}/process_card_2.jpg`,
//     number: "02",
//     title: "Strategic Service Planning",
//     description:
//       "Our experts create a professional operational plan focused on efficiency, safety, and quality service.",
//   },
//   {
//     image: `${ASSETS}/process_card_3.jpg`,
//     number: "03",
//     title: "Professional Team Deployment",
//     description:
//       "Skilled and trained personnel are assigned to deliver reliable security and staffing services.",
//   },
//   {
//     image: `${ASSETS}/process_card_4.jpg`,
//     number: "04",
//     title: "Ongoing Support & Supervision",
//     description:
//       "We ensure continuous monitoring and client support to maintain high service standards.",
//   },
// ];

// const clientLogos = Array.from(
//   { length: 10 },
//   (_, index) => `${ASSETS}/client${index + 1}.png`
// );

// const inputClass =
//   "w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#d5a63c] focus:ring-2 focus:ring-[#d5a63c]/20";

// // function SectionHeading({ eyebrow, title, description, light = false }) {
// //   return (
// //     <div className="mb-10 max-w-3xl">
// //       {eyebrow && (
// //         <p
// //           className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
// //             light ? "text-[#e0b54d]" : "text-[#b88a25]"
// //           }`}
// //         >
// //           {eyebrow}
// //         </p>
// //       )}

// //       <h2
// //         className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px] ${
// //           light ? "text-white" : "text-[#202b36]"
// //         }`}
// //       >
// //         {title}
// //       </h2>

// //       {description && (
// //         <p
// //           className={`mt-4 max-w-2xl text-[15px] leading-7 ${
// //             light ? "text-gray-300" : "text-gray-600"
// //           }`}
// //         >
// //           {description}
// //         </p>
// //       )}
// //     </div>
// //   );
// // }



// function SectionHeading({ eyebrow, title, description, light = false }) {
//   return (
//     <div className="mb-12 max-w-4xl">
//       {eyebrow && (
//         <p
//           className={`mb-4 text-sm font-bold uppercase tracking-[0.22em] ${
//             light ? "text-[#e0b54d]" : "text-[#b88a25]"
//           }`}
//         >
//           {eyebrow}
//         </p>
//       )}

//       <h2
//         className={`text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[52px] xl:text-[58px] ${
//           light ? "text-white" : "text-[#202b36]"
//         }`}
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className={`mt-5 max-w-3xl text-base leading-8 sm:text-lg ${
//             light ? "text-gray-300" : "text-gray-600"
//           }`}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }



// function QuoteForm() {
//   const [submitted, setSubmitted] = useState(false);

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="grid gap-4 sm:grid-cols-2">
//         <input
//           className={inputClass}
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           aria-label="Your Name"
//           required
//         />

//         <input
//           className={inputClass}
//           type="email"
//           name="email"
//           placeholder="Email"
//           aria-label="Email"
//           required
//         />

//         <input
//           className={inputClass}
//           type="tel"
//           name="mobile"
//           placeholder="Mobile"
//           aria-label="Mobile"
//           required
//         />

//         <select
//           className={inputClass}
//           name="service"
//           aria-label="Select a service"
//           defaultValue=""
//           required
//         >
//           <option value="" disabled>
//             Select Service
//           </option>
//           {services.map((service) => (
//             <option key={service} value={service}>
//               {service}
//             </option>
//           ))}
//         </select>
//       </div>

//       <input
//         className={inputClass}
//         type="text"
//         name="location"
//         placeholder="Your Location"
//         aria-label="Your Location"
//         required
//       />

//       <button
//         type="submit"
//         className="inline-flex items-center gap-3 bg-[#d5a63c] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#202b36] transition hover:bg-[#e4ba58]"
//       >
//         Send Message <ArrowRight size={17} />
//       </button>

//       {submitted && (
//         <p className="text-sm text-green-700">
//           Form UI ready hai. Actual message receive karne ke liye backend/API
//           connect karna hoga.
//         </p>
//       )}
//     </form>
//   );
// }

// export default function Services() {
//   return (
//     <main className="overflow-hidden bg-white text-[#202b36]">
//       {/* PAGE TITLE / BREADCRUMB */}
//       <section className="relative border-b border-gray-100 bg-[#f5f6f7]">
//         <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
//           <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b88a25]">
//             Our Services
//           </p>

//           <h1 className="text-4xl font-bold sm:text-5xl lg:text-[58px]">
//             Service
//           </h1>

//           <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
//             <a href="/" className="transition hover:text-[#b88a25]">
//               Home
//             </a>
//             <ChevronRight size={15} />
//             <span className="font-medium text-[#202b36]">Service</span>
//           </div>
//         </div>
//       </section>

//       {/* HOUSEKEEPING INTRODUCTION */}
//       <section className="py-14 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
//             <div>
//               <p className="mb-4 text-sm font-bold tracking-[0.18em] text-[#b88a25]">
//                 01
//               </p>

//               {/* <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[43px]">
//                 House Keeping Services
//               </h2>  */}

//               <h2 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[52px] xl:text-[58px]">
//   House Keeping Services
// </h2>

//               <p className="mt-5 text-lg leading-8 text-gray-600">
//                 Professional housekeeping and facility support services for
//                 residential, commercial, and industrial spaces.
//               </p>

//               <div className="mt-7 space-y-4 text-[15px] leading-7 text-gray-600">
//                 <p>
//                   Protectors Guild And Staffing provides reliable and
//                   professional housekeeping services designed to maintain
//                   cleanliness, hygiene, and smooth day-to-day operations across
//                   offices, apartments, hospitals, warehouses, retail stores,
//                   and commercial establishments.
//                 </p>

//                 <p>
//                   Our housekeeping staff are trained to deliver quality
//                   cleaning, maintenance, and support services while following
//                   professional standards of discipline, safety, and efficiency.
//                   We focus on creating clean and organized environments that
//                   improve comfort and productivity.
//                 </p>

//                 <p>
//                   Whether you require housekeeping staff for corporate offices,
//                   residential societies, hotels, industrial units, or
//                   institutions, we provide customized manpower solutions based
//                   on your operational needs.
//                 </p>
//               </div>

//               <a
//                 href="/contact"
//                 className="mt-8 inline-flex items-center gap-3 bg-[#d5a63c] px-6 py-3.5 text-sm font-bold text-[#202b36] transition hover:bg-[#e4ba58]"
//               >
//                 Connect with Our Team <ArrowRight size={17} />
//               </a>
//             </div>

//             <div className="relative">
//               <div className="absolute -right-3 -top-3 h-full w-full border-2 border-[#d5a63c] sm:-right-5 sm:-top-5" />

//               <img
//                 src={`${ASSETS}/housemade.jpg`}
//                 alt="Housekeeping services"
//                 className="relative z-10 aspect-[4/4.2] w-full object-cover"
//                 loading="eager"
//               />

//               <div className="absolute bottom-5 left-5 z-20 bg-white px-5 py-4 shadow-lg sm:bottom-7 sm:left-7">
//                 <p className="text-xs font-bold uppercase tracking-widest text-[#b88a25]">
//                   Professional
//                 </p>
//                 <p className="mt-1 text-lg font-bold">Housekeeping Services</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OUR HOUSEKEEPING APPROACH */}
//       <section className="bg-[#f5f6f7] py-14 sm:py-20">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <SectionHeading
//             eyebrow="Our Housekeeping Service Approach"
//             title="Clean Spaces. Better Workplaces."
//             description="We believe housekeeping is more than just cleaning — it is about maintaining hygiene, discipline, and operational excellence. Our approach focuses on trained manpower, proper supervision, timely service delivery, and complete client satisfaction."
//           />

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: Users,
//                 title: "Trained Manpower",
//                 description:
//                   "Professional staff selected according to your site and operational requirements.",
//               },
//               {
//                 icon: ShieldCheck,
//                 title: "Safety & Hygiene",
//                 description:
//                   "Consistent attention to workplace hygiene, discipline, and safety standards.",
//               },
//               {
//                 icon: ClipboardCheck,
//                 title: "Quality Supervision",
//                 description:
//                   "Regular monitoring to support reliable service and consistent quality.",
//               },
//             ].map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
//                 >
//                   <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#d5a63c]/15 text-[#b88a25]">
//                     <Icon size={25} />
//                   </div>

//                   <h3 className="text-xl font-bold">{item.title}</h3>

//                   <p className="mt-3 text-sm leading-7 text-gray-600">
//                     {item.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* FIVE-STEP SERVICE PROCESS */}
//       <section className="py-14 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <SectionHeading
//             eyebrow="Our Service Process"
//             title="How We Deliver Our Services"
//             description="A structured approach to understanding requirements, deploying the right staff, and maintaining service quality."
//           />

//           <div className="grid gap-0 border-y border-gray-200 md:grid-cols-2 lg:grid-cols-5">
//             {processSteps.map((step, index) => (
//               <article
//                 key={step.number}
//                 className={`py-7 md:px-5 lg:px-5 ${
//                   index !== 0 ? "border-gray-200 md:border-l" : ""
//                 } ${index > 1 ? "lg:border-l" : ""}`}
//               >
//                 <span className="text-4xl font-light text-[#d5a63c]">
//                   {step.number}
//                 </span>

//                 <h3 className="mt-5 text-lg font-bold leading-6">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-gray-600">
//                   {step.description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES + WHY CHOOSE US */}
//       <section className="bg-[#f5f6f7] py-14 sm:py-20">
//         <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
//           <div>
//             <SectionHeading
//               eyebrow="What We Provide"
//               title="Housekeeping Services We Provide"
//             />

//             <div className="divide-y divide-gray-200 border-y border-gray-200">
//               {housekeepingServices.map((service) => (
//                 <div
//                   key={service}
//                   className="flex items-center gap-4 py-4 text-[15px] font-medium"
//                 >
//                   <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#d5a63c]/20 text-[#9a721d]">
//                     <Check size={16} />
//                   </span>
//                   {service}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <SectionHeading
//               eyebrow="Why Choose Our Services"
//               title="Reliable People. Professional Service."
//             />

//             <p className="mb-6 text-[15px] leading-7 text-gray-600">
//               Our goal is to provide dependable housekeeping solutions that
//               help businesses and residential communities maintain clean,
//               healthy, and well-managed environments.
//             </p>

//             <div className="space-y-4">
//               {[
//                 "Trained and verified housekeeping staff",
//                 "Reliable and disciplined workforce",
//                 "Customized service solutions",
//                 "Affordable and professional services",
//                 "Regular supervision and support",
//               ].map((item) => (
//                 <div key={item} className="flex items-start gap-3">
//                   <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d5a63c] text-[#202b36]">
//                     <Check size={14} />
//                   </span>
//                   <p className="text-[15px] leading-6 text-gray-700">{item}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-9 flex items-start gap-4 border-l-4 border-[#d5a63c] bg-white p-5 sm:p-6">
//               <Sparkles className="mt-1 shrink-0 text-[#b88a25]" size={23} />
//               <p className="text-sm leading-7 text-gray-600">
//                 We focus on cleanliness, discipline, timely service delivery,
//                 and complete client satisfaction.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* IDEAL FOR */}
//       <section className="bg-[#202b36] py-14 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <SectionHeading
//             eyebrow="Who We Serve"
//             title="Ideal For"
//             description="Our housekeeping manpower solutions can be customized for a range of residential, commercial, and institutional environments."
//             light
//           />

//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {idealFor.map((item, index) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-4 border border-white/15 bg-white/[0.04] p-5 transition hover:border-[#d5a63c] hover:bg-white/[0.07] sm:p-6"
//               >
//                 <span className="text-sm font-bold text-[#d5a63c]">
//                   0{index + 1}
//                 </span>
//                 <h3 className="text-base font-semibold text-white">{item}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICE CATEGORIES */}
//       <section className="py-14 sm:py-20">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <SectionHeading
//             eyebrow="Explore Our Services"
//             title="Categories"
//             description="Explore our staffing, security, and facility support services."
//           />

//           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//             {services.map((service, index) => (
//               <a
//                 key={service}
//                 href="/contact"
//                 className="group flex min-h-[78px] items-center justify-between gap-3 border border-gray-200 bg-white p-5 transition hover:border-[#d5a63c] hover:shadow-md"
//               >
//                 <span className="flex items-center gap-3 text-sm font-semibold text-[#202b36]">
//                   <span className="text-xs font-bold text-[#b88a25]">
//                     0{index + 1}
//                   </span>
//                   {service}
//                 </span>

//                 <ArrowRight
//                   size={17}
//                   className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#b88a25]"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* REQUEST A QUOTE */}
//       <section className="bg-[#f5f6f7] py-14 sm:py-20 lg:py-24">
//         <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
//           <div>
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b88a25]">
//               Let's Discuss Your Requirements
//             </p>

//             <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
//               Request A Quote
//             </h2>

//             <p className="mt-5 text-[15px] leading-7 text-gray-600">
//               Tell us about your staffing or housekeeping requirements. Our
//               team can help you find a solution suitable for your workplace.
//             </p>

//             <div className="mt-8 space-y-5">
//               <a
//                 href="tel:+919716380301"
//                 className="flex items-center gap-4"
//               >
//                 <span className="flex h-11 w-11 items-center justify-center bg-white text-[#b88a25] shadow-sm">
//                   <Phone size={19} />
//                 </span>
//                 <span>
//                   <span className="block text-xs text-gray-500">Call Us</span>
//                   <span className="mt-1 block text-sm font-semibold">
//                     +91 9716380301
//                   </span>
//                 </span>
//               </a>

//               <a
//                 href="mailto:yogendrakumar@ptpgs.in"
//                 className="flex items-center gap-4"
//               >
//                 <span className="flex h-11 w-11 items-center justify-center bg-white text-[#b88a25] shadow-sm">
//                   <Mail size={19} />
//                 </span>
//                 <span className="min-w-0">
//                   <span className="block text-xs text-gray-500">Email Us</span>
//                   <span className="mt-1 block break-all text-sm font-semibold">
//                     yogendrakumar@ptpgs.in
//                   </span>
//                 </span>
//               </a>
//             </div>
//           </div>

//           <div className="bg-white p-6 shadow-sm sm:p-9 lg:p-10">
//             <QuoteForm />
//           </div>
//         </div>
//       </section>

//       {/* WORK PROCESS */}
//       <section className="py-14 sm:py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <SectionHeading
//             eyebrow="Work Process"
//             title="How We Works"
//             description="From understanding your requirements to ongoing supervision, we follow a structured process to deliver dependable services."
//           />

//           <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//             {workProcess.map((item) => (
//               <article key={item.number} className="group">
//                 <div className="relative overflow-hidden bg-gray-100">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     loading="lazy"
//                     className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   <span className="absolute bottom-0 left-0 bg-[#d5a63c] px-5 py-3 text-lg font-bold text-[#202b36]">
//                     {item.number}
//                   </span>
//                 </div>

//                 <h3 className="mt-5 text-xl font-bold leading-7">
//                   {item.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-gray-600">
//                   {item.description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CLIENTS */}
//       <section className="border-y border-gray-100 bg-[#f8f9fa] py-14 sm:py-20">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <div className="mx-auto mb-10 max-w-2xl text-center">
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b88a25]">
//               Clients
//             </p>

//             <h2 className="text-3xl font-bold sm:text-4xl">
//               Brief List of Our Customers
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
//             {clientLogos.map((logo, index) => (
//               <div
//                 key={logo}
//                 className="flex h-24 items-center justify-center border border-gray-100 bg-white p-5 transition hover:shadow-md sm:h-28"
//               >
//                 <img
//                   src={logo}
//                   alt={`Client ${index + 1}`}
//                   loading="lazy"
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BOTTOM CTA */}
//       <section className="bg-[#d5a63c] py-12 sm:py-16">
//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center lg:px-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#202b36]/70">
//               Need Professional Support?
//             </p>
//             <h2 className="mt-3 text-2xl font-bold leading-tight text-[#202b36] sm:text-3xl">
//               Let's Find the Right Solution for You.
//             </h2>
//           </div>

//           <a
//             href="/contact"
//             className="inline-flex shrink-0 items-center gap-3 bg-[#202b36] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#344656]"
//           >
//             Contact Us <ArrowRight size={18} />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Users,
  ShieldCheck,
  Eye,
  Phone,
  Mail,
  Handshake,
  MapPin,
  Building2,
  Clock,
  Send,
  LockKeyhole,
  Radio,
  Siren,
  ScanEye,
  UserCheck,
  Headset,
  BadgeCheck,
  Target,
} from "lucide-react";

const ASSETS = "https://ptpgs.in/assets/img";
const ease = [0.22, 1, 0.36, 1];

/* =========================
   ANIMATION HELPERS
========================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const x = direction === "left" ? -32 : direction === "right" ? 32 : 0;
  const y = direction === "up" ? 28 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] sm:text-xs ${
        light
          ? "border-white/20 bg-white/10 text-amber-300"
          : "border-blue-200/70 bg-white/70 text-blue-800 shadow-sm"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <Reveal
      className={`mb-12 max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[46px] ${
          light ? "text-white" : "text-[#10213e]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
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
   IMAGE WITH FALLBACK
========================= */

function ImageSlot({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}) {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-gradient-to-br from-[#07152d] via-blue-900 to-indigo-800 ${fallbackClassName}`}
    >
      <ShieldCheck
        size={72}
        strokeWidth={1.2}
        className="text-white/70"
      />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* =========================
   SERVICE DATA
========================= */

const serviceOptions = [
  "Corporate Security Guards",
  "Residential Security Guards",
  "Commercial Security Guards",
  "Gate & Access Control",
  "Site Security",
  "Event Security",
];

const heroSlides = [
  {
    eyebrow: "Professional Security Services",
    title: "Your Safety.",
    highlight: "Our Responsibility.",
    description:
      "Security guard services for business premises, residential communities and commercial locations, focused on vigilance, discipline and clear responsibilities.",
    image: `${ASSETS}/security-img.avif`,
    label: "Professional Guard Services",
  },
  {
    eyebrow: "Alert. Disciplined. Dependable.",
    title: "Protection You",
    highlight: "Can Trust.",
    description:
      "Build a more secure environment with a visible security presence, access management and site-specific security arrangements.",
    image: `${ASSETS}/security-img2.webp`,
    label: "Security for Your Premises",
  },
  {
    eyebrow: "Security That Starts With Planning",
    title: "Safer Spaces.",
    highlight: "Greater Confidence.",
    description:
      "Discuss your security requirements and explore an arrangement suited to your property, access points and operating schedule.",
    image: `${ASSETS}/security-services.jpg`,
    label: "Security With Purpose",
  },
];

const securityServices = [
  {
    number: "01",
    icon: Building2,
    title: "Corporate Security",
    description:
      "Security guard support for office buildings and workplaces, with attention to entry points, visitors and assigned areas.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    number: "02",
    icon: Users,
    title: "Residential Security",
    description:
      "Support for apartment complexes and residential societies through gate security, visitor checks and site observation.",
    color: "from-violet-500 to-purple-700",
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "Access Control",
    description:
      "Assistance with authorised entry procedures, visitor movement and orderly access to designated premises.",
    color: "from-amber-400 to-orange-600",
  },
  {
    number: "04",
    icon: Radio,
    title: "Gate & Perimeter Security",
    description:
      "A visible security presence around designated gates, boundaries and other assigned areas.",
    color: "from-teal-400 to-emerald-700",
  },
  {
    number: "05",
    icon: ScanEye,
    title: "Site Monitoring",
    description:
      "Routine observation of assigned areas and timely reporting of unusual activity or potential security concerns.",
    color: "from-sky-400 to-blue-700",
  },
  {
    number: "06",
    icon: Siren,
    title: "Event Security Support",
    description:
      "Security presence and entry coordination for events, based on the location, expected attendance and agreed requirements.",
    color: "from-rose-500 to-red-700",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "A security-focused approach that prioritises people, property and the responsibilities assigned at each site.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: Eye,
    title: "Alert Observation",
    description:
      "Attention to the surroundings, access points and activity within assigned areas.",
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: Handshake,
    title: "Professional Conduct",
    description:
      "Respectful communication, discipline and clear responsibilities when interacting with visitors and clients.",
    color: "from-amber-400 to-orange-600",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Eye,
    title: "Understand Your Site",
    description:
      "Discuss your property, entry points, operating hours and security concerns.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Define Requirements",
    description:
      "Set out the expected duties, coverage and reporting responsibilities.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Plan Deployment",
    description:
      "Discuss the proposed guard coverage and schedule around your needs.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Coordinate Support",
    description:
      "Agree on communication channels and escalation procedures for the site.",
  },
];

const propertyTypes = [
  {
    icon: Building2,
    title: "Office Buildings",
    text: "A professional security presence and orderly visitor entry for workplaces.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: Users,
    title: "Residential Societies",
    text: "Gate security and visitor checks for shared residential environments.",
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: LockKeyhole,
    title: "Commercial Premises",
    text: "Security support for business locations and customer-facing premises.",
    color: "from-amber-400 to-orange-600",
  },
];

const faqs = [
  {
    question: "What types of locations can use security guard services?",
    answer:
      "Security requirements can vary for offices, residential societies, commercial buildings and other premises. The appropriate arrangement depends on the location and the responsibilities agreed with the client.",
  },
  {
    question: "Can the security arrangement be tailored to our premises?",
    answer:
      "Yes. The site's access points, operating hours, visitor movement and areas requiring attention can be discussed while defining the proposed security duties.",
  },
  {
    question: "How can we enquire about security guard services?",
    answer:
      "Use the Request a Quote form on this page to share your contact details, location and security requirements.",
  },
  {
    question: "Can we discuss how many guards are required?",
    answer:
      "Yes. Share details about the premises, required coverage hours and entry points so your requirements can be reviewed.",
  },
];

/* =========================
   QUOTE FORM
========================= */

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 sm:px-5";

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputClass}
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          autoComplete="name"
          required
        />

        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email Address"
          autoComplete="email"
          required
        />

        <input
          className={inputClass}
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          aria-label="Mobile Number"
          autoComplete="tel"
          required
        />

        <select
          className={inputClass}
          name="service"
          aria-label="Select security service"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select Security Service
          </option>

          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <input
        className={inputClass}
        type="text"
        name="location"
        placeholder="Your Location"
        aria-label="Your Location"
        autoComplete="address-level2"
        required
      />

      <textarea
        className={`${inputClass} min-h-[115px] resize-y`}
        name="message"
        placeholder="Tell us about your security requirements"
        aria-label="Security requirements"
        rows={4}
      />

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-slate-950 shadow-lg shadow-amber-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-amber-500/30"
      >
        Send Enquiry
        <Send
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      {submitted && (
        <p className="text-sm leading-6 text-amber-800">
          Your form is ready, but it does not send an enquiry yet. Connect
          your backend/API to receive submissions.
        </p>
      )}
    </form>
  );
}

/* =========================
   HERO
========================= */

function ServicesHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previous = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#12345e] to-[#382154] text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[630px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20 lg:min-h-[700px] lg:px-10">
        <div className="relative z-10 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease }}
            >
              <Eyebrow light>{slide.eyebrow}</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
                {slide.title}
                <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-amber-400/20 transition duration-300 hover:-translate-y-1"
                >
                  Request a Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#security-services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Explore Services
                  <ChevronRight size={17} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
                {[
                  "Security-Focused",
                  "Site-Specific Planning",
                  "Clear Responsibilities",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-amber-300"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

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
              <div className="relative h-[330px] overflow-hidden rounded-[23px] sm:h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.image}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.65 }}
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
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                        JIS Security
                      </p>
                      <h2 className="mt-2 text-xl font-extrabold sm:text-2xl">
                        {slide.label}
                      </h2>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={previous}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                      >
                        <ChevronLeft size={19} />
                      </button>

                      <button
                        type="button"
                        aria-label="Next slide"
                        onClick={next}
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

          <motion.div
            initial={{ opacity: 0, x: 20, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="absolute -bottom-5 -left-1 flex items-center gap-3 rounded-2xl border border-white/60 bg-white p-4 text-slate-900 shadow-2xl sm:-left-7 sm:p-5"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <ShieldCheck size={25} />
            </div>
            <div>
              <p className="font-extrabold">Security Comes First</p>
              <p className="mt-1 text-xs text-slate-500">
                People. Property. Protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-amber-300 to-purple-500" />
    </section>
  );
}

/* =========================
   QUICK HIGHLIGHTS
========================= */

const highlights = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: UserCheck,
    title: "Professional Conduct",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Eye,
    title: "Alert Observation",
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: Clock,
    title: "Site-Specific Planning",
    color: "from-teal-400 to-emerald-700",
  },
];

function QuickHighlights() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#c5d3e9] via-[#e2e5f2] to-[#d9cbea] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.div
                whileHover={{ y: -7, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-white/80 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(37,99,235,0.17)] sm:p-6"
              >
                <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-blue-100/70 blur-xl transition-transform duration-300 group-hover:scale-150" />

                <div className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${item.color}`}>
                  <Icon size={25} />
                </div>

                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-slate-900 sm:text-lg">
                    {item.title}
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
   SECURITY INTRODUCTION
========================= */

function SecurityIntroduction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#b6c9e7] via-[#c9bee0] to-[#e7cba2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[40px] border-l-4 border-t-4 border-amber-400 sm:-left-7 sm:-top-7" />

            <div className="relative overflow-hidden rounded-[30px] border-4 border-white/80 shadow-[0_30px_75px_rgba(15,23,42,0.2)]">
              <ImageSlot
                src={`${ASSETS}/security-img.avif`}
                alt="Professional security guard"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px]"
                fallbackClassName="h-[360px] w-full sm:h-[480px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                  Security With Purpose
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                  Building Safer Spaces, Every Day.
                </h3>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-right-6 sm:p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
                <BadgeCheck size={25} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Trust & Responsibility
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  A professional approach
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <Eyebrow>About Our Services</Eyebrow>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#10213e] sm:text-4xl lg:text-[46px]">
            Security Is More Than Presence.
            <span className="mt-2 block bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
              It Is Responsibility.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            Effective security requires awareness, clear responsibilities and
            professional conduct. The right security arrangement starts with
            understanding the premises, its access points and the client's
            expectations.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
            We focus on discussing site-specific requirements so security
            duties, schedules and communication expectations can be defined
            before deployment.
          </p>

          <div className="mt-7 space-y-4">
            {[
              "Attention to assigned access points",
              "Defined visitor and entry procedures",
              "Clear reporting and escalation expectations",
              "Professional interactions with visitors and staff",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-700">
                  <CheckCircle2 size={16} />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#10274b] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-900/15 transition duration-300 hover:-translate-y-1 hover:bg-blue-800"
          >
            Discuss Your Requirements
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   SERVICES GRID
========================= */

function SecurityServicesSection() {
  return (
    <section
      id="security-services"
      className="relative overflow-hidden bg-gradient-to-br from-[#c3d2e9] via-[#d7cce9] to-[#edddc2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-400/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Security Services"
          title={
            <>
              Protection Tailored to{" "}
              <span className="bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                Your Environment.
              </span>
            </>
          }
          description="Explore security guard services for different types of premises. The final arrangement depends on site conditions and agreed requirements."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {securityServices.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full overflow-hidden rounded-[24px] border border-white/80 bg-white/95 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.17)] sm:p-7"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/60 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">
                  <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${service.color}`}>
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-blue-100">
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold text-slate-900 transition-colors group-hover:text-blue-800">
                  {service.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800"
                >
                  Enquire Now
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${service.color}`} />
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

function WhyChooseUs() {
  const reasons = [
    {
      icon: Eye,
      title: "Alert Observation",
      text: "Attention to assigned areas, visitors and unusual activity.",
    },
    {
      icon: LockKeyhole,
      title: "Access Awareness",
      text: "Following the agreed entry procedures and site responsibilities.",
    },
    {
      icon: Clock,
      title: "Defined Duties",
      text: "Security responsibilities and schedules discussed around the premises.",
    },
    {
      icon: Headset,
      title: "Communication",
      text: "Clear reporting and escalation expectations for site concerns.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#14345f] to-[#362052] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-400/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <Eyebrow light>Why Professional Security Matters</Eyebrow>

          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[46px]">
            Confidence Begins With
            <span className="mt-2 block text-amber-300">
              The Right Approach.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Security arrangements work best when site responsibilities are
            understood, procedures are clear and communication is reliable.
            A visible security presence is one part of maintaining a more
            orderly environment.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
              <ShieldCheck size={28} />
            </div>

            <div>
              <p className="font-extrabold text-white">
                Security With Responsibility
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                A site-focused approach to protection.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-white/[0.12] hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)] sm:p-6"
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
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
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

/* =========================
   PROPERTY TYPES
========================= */

function PropertyTypesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#b8c9e6] via-[#d0c2e3] to-[#e9d1ae] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Where Security Matters"
          title="Security Support for Different Premises"
          description="Each location has its own access requirements, people flow and operating schedule. The right arrangements start by understanding those differences."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {propertyTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-[24px] border border-white/80 bg-white/95 p-7 shadow-[0_15px_40px_rgba(15,23,42,0.09)] transition-shadow duration-300 hover:shadow-[0_26px_55px_rgba(15,23,42,0.17)] sm:p-8"
                >
                  <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${item.color}`}>
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-900 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800"
                  >
                    Discuss Requirements
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   WORK PROCESS
========================= */

function WorkProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e6cfaa] via-[#c8d5eb] to-[#c7b9e0] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="A Clear Process for Security Planning"
          description="From understanding your site to agreeing on responsibilities, each step helps establish clear expectations."
        />

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-blue-300 via-amber-400 to-indigo-300 lg:block" />

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group relative h-full rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.09)] transition-all duration-300 hover:shadow-[0_25px_55px_rgba(37,99,235,0.16)] sm:p-7"
                >
                  <div className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/20 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <Icon size={30} />
                  </div>

                  <span className="mt-6 block text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                    Step {step.number}
                  </span>

                  <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ
========================= */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#b5c8e6] via-[#d3c5e5] to-[#edd5b2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal direction="left">
          <Eyebrow>Frequently Asked Questions</Eyebrow>

          <h2 className="text-3xl font-black leading-tight text-[#10213e] sm:text-4xl lg:text-[46px]">
            Questions About Your Security Requirements?
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700">
            Find answers to common questions about security guard services
            and how to discuss the requirements for your premises.
          </p>

          <div className="mt-8 rounded-2xl border border-white/80 bg-white/85 p-5 shadow-lg shadow-blue-900/10">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <Headset size={24} />
              </div>

              <div>
                <p className="font-extrabold text-slate-900">
                  Need More Information?
                </p>

                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-blue-800 hover:text-indigo-700"
                >
                  Contact Our Team
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-[0_18px_45px_rgba(37,99,235,0.12)]"
                      : "border-white/80 shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
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
                      <span className="text-2xl font-light leading-none">
                        +
                      </span>
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   REQUEST A QUOTE
========================= */

function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#c6d4eb] via-[#d5c8e6] to-[#ead3b1] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal direction="left">
          <Eyebrow>Let's Get Started</Eyebrow>

          <h2 className="text-3xl font-black leading-tight text-[#10213e] sm:text-4xl lg:text-[46px]">
            Request a Security Quote
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-700 sm:text-lg">
            Tell us about your premises and security requirements. Your
            location, operating hours and access needs will help establish
            what sort of arrangement may be appropriate.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white bg-white/80 text-blue-800 shadow-sm">
                <ShieldCheck size={22} />
              </span>

              <div>
                <p className="font-extrabold text-slate-900">
                  Security Requirements
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Share your site and guard coverage requirements.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white bg-white/80 text-amber-700 shadow-sm">
                <MapPin size={22} />
              </span>

              <div>
                <p className="font-extrabold text-slate-900">
                  Site Location
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Tell us where you need security support.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white bg-white/80 text-violet-700 shadow-sm">
                <Clock size={22} />
              </span>

              <div>
                <p className="font-extrabold text-slate-900">
                  Schedule & Coverage
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Include the expected hours and areas that require coverage.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_25px_65px_rgba(15,23,42,0.15)] sm:p-9 lg:p-10">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/60 blur-2xl" />

            <div className="relative">
              <div className="mb-7">
                <Eyebrow>Tell Us About Your Site</Eyebrow>

                <h3 className="text-2xl font-black text-[#10213e] sm:text-3xl">
                  How Can We Help?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Complete the form below to outline your security needs.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================
   FINAL CTA
========================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#c8bee1] via-[#c7d7ec] to-[#e8cfaa] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#061226] via-[#14345f] to-[#362052] p-7 shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Eyebrow light>Let's Talk Security</Eyebrow>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[45px]">
              Looking for Security Guards for Your Premises?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
              Share your location and security requirements so the appropriate
              arrangement can be discussed with you.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
          >
            Contact Us
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SERVICES PAGE
========================= */

export default function Services() {
  return (
    <main className="overflow-hidden bg-[#c8d4e9] text-[#10213e]">
      <ServicesHero />
      <QuickHighlights />
      <SecurityIntroduction />
      <SecurityServicesSection />
      <WhyChooseUs />
      <PropertyTypesSection />
      <WorkProcessSection />
      <FAQSection />
      <QuoteSection />
      <FinalCTA />
    </main>
  );
}

