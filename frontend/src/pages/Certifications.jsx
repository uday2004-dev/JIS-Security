// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// /* ---- apne data se replace karo ---- */
// const heroImage = "/images/hero-housekeeping.jpg"; // hero background photo

// // certifications: { title, authority, image }
// // Tumhare paas already `certifications` array hai to ise hata ke wahi use karo.
// const certifications = [
//   { title: "Udyam Registration Certificate", authority: "Govt. of India • MSME", image: "/images/certs/udyam.png" },
//   // ...baaki certificates
// ];

// const services = ["Housekeeping", "Security Services", "Manpower Supply", "Other"];

// const inputCls =
//   "w-full rounded-full border border-slate-200 bg-slate-50 px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-[#14246b] focus:bg-white focus:ring-2 focus:ring-[#14246b]/15 sm:px-8 sm:py-5 sm:text-lg";

// export default function HeroCertifications() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const total = certifications.length;
//   const current = certifications[index];

//   const prev = () => setIndex((i) => (i - 1 + total) % total);
//   const next = () => setIndex((i) => (i + 1) % total);

//   // auto-slide
//   useEffect(() => {
//     if (paused || total < 2) return;
//     const t = setInterval(next, 4000);
//     return () => clearInterval(t);
//   }, [paused, total]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     console.log("Quote request:", data); // yahan apni API call lagao
//   };

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative isolate overflow-hidden bg-slate-700">
//         <img
//           src={heroImage}
//           alt=""
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
//         />
//         <div className="absolute inset-0 -z-10 bg-black/65" />

//         <div className="mx-auto max-w-6xl px-5 pb-56 pt-28 text-center sm:px-8 sm:pb-72 sm:pt-36 lg:pb-96 lg:pt-44">
//           <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
//             <span className="text-[#14246b]">One Solution</span> for All Your
//             Housekeeping, Security, and Manpower Needs
//           </h1>
//         </div>
//       </section>

//       {/* CERTIFICATIONS + QUOTE (overlaps hero) */}
//       <section className="relative z-10 -mt-44 px-3 pb-16 sm:-mt-60 sm:px-6 lg:-mt-80 lg:px-10 lg:pb-24">
//         <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b0b0b] p-5 shadow-2xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">
//           <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
//             {/* LEFT: certificates carousel */}
//             <div className="lg:pt-6">
//               <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
//                 Our Certifications
//               </h2>
//               <div className="mt-4 h-1 w-24 bg-[#14246b]" />

//               <div
//                 className="mt-8 overflow-hidden rounded-[2rem] bg-slate-50 sm:mt-10"
//                 onMouseEnter={() => setPaused(true)}
//                 onMouseLeave={() => setPaused(false)}
//               >
//                 <div className="relative flex h-[420px] items-center justify-center sm:h-[560px] lg:h-[620px]">
//                   {/* certificate image */}
//                   <img
//                     key={current.image}
//                     src={current.image}
//                     alt={current.title}
//                     className="h-[88%] w-auto max-w-[70%] rounded-md object-contain shadow-lg"
//                   />

//                   {/* dots */}
//                   <div className="absolute right-4 top-6 flex items-center gap-2.5 rounded-full bg-slate-500/80 px-4 py-2 sm:right-6">
//                     {certifications.map((c, i) => (
//                       <button
//                         key={c.title + i}
//                         onClick={() => setIndex(i)}
//                         aria-label={`Show certificate ${i + 1}`}
//                         className={`h-3 w-3 rounded-full transition ${
//                           i === index ? "bg-[#d5a63c]" : "bg-white/90 hover:bg-white"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* arrows */}
//                   <button
//                     onClick={prev}
//                     aria-label="Previous"
//                     className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:left-5 sm:h-14 sm:w-14"
//                   >
//                     <ChevronLeft size={26} />
//                   </button>
//                   <button
//                     onClick={next}
//                     aria-label="Next"
//                     className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:right-5 sm:h-14 sm:w-14"
//                   >
//                     <ChevronRight size={26} />
//                   </button>
//                 </div>

//                 {/* caption bar */}
//                 <div className="bg-[#14295f] px-6 py-5 text-center">
//                   <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#d5a63c] sm:text-base">
//                     {current.authority}
//                   </p>
//                   <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{current.title}</h3>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: request a quote */}
//             <div className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10 lg:mt-12">
//               <h2 className="text-3xl font-extrabold text-[#0f1f4d] sm:text-5xl">
//                 Request <span className="text-[#14246b]">A Quote</span>
//               </h2>

//               <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
//                 <input name="name" type="text" required placeholder="Your Name" className={inputCls} />
//                 <input name="email" type="email" required placeholder="Email" className={inputCls} />
//                 <input name="mobile" type="tel" required placeholder="Mobile" className={inputCls} />

//                 <select name="service" required defaultValue="" className={`${inputCls} appearance-none`}>
//                   <option value="" disabled>
//                     Looking for?
//                   </option>
//                   {services.map((s) => (
//                     <option key={s} value={s}>
//                       {s}
//                     </option>
//                   ))}
//                 </select>

//                 <input name="location" type="text" placeholder="Your Location" className={inputCls} />

//                 <button
//                   type="submit"
//                   className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#0f1f4d] px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-[#14246b] sm:py-6 sm:text-xl"
//                 >
//                   Send Message <ArrowRight size={22} />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// import { useState } from "react";
// import {
//   ArrowRight,
//   BadgeCheck,
//   ShieldCheck,
//   Award,
//   FileCheck,
//   Landmark,
//   GraduationCap,
//   CheckCircle2,
//   X,
//   ZoomIn,
//   ChevronRight,
//   ClipboardCheck,
//   Users,
// } from "lucide-react";

// const ASSETS = "https://ptpgs.in/assets/img";

// const certifications = [
//   {
//     image: `${ASSETS}/cert_udyam.png`,
//     authority: "Govt. of India • MSME",
//     badge: "Active & Verified",
//     title: "Udyam Registration Certificate",
//     description:
//       "Issued by the Ministry of Micro, Small & Medium Enterprises, Government of India, recognising PTPGS India Private Limited.",
//     tags: ["MSME Certified", "Enterprise Verification"],
//   },
//   {
//     image: `${ASSETS}/cert_gst.png`,
//     authority: "Govt. of India • GST",
//     badge: "Tax Compliant",
//     title: "GST Registration (Form GST REG-06)",
//     description:
//       "Statutory GST registration confirming the company's registration under the applicable Goods and Services Tax framework.",
//     tags: ["GST REG-06", "Tax Compliance"],
//   },
//   {
//     image: `${ASSETS}/cert_incorporation.png`,
//     authority: "Ministry of Corporate Affairs",
//     badge: "Incorporated Entity",
//     title: "Certificate of Incorporation",
//     description:
//       "Official incorporation certificate for PTPGS India Private Limited under the Companies Act, 2013.",
//     tags: ["Companies Act 2013", "Corporate Registration"],
//   },
//   {
//     image: `${ASSETS}/cert_startupindia.png`,
//     authority: "DPIIT • Govt. of India",
//     badge: "Startup India",
//     title: "#StartupIndia Recognition Certificate",
//     description:
//       "Recognition by the Department for Promotion of Industry and Internal Trade, Government of India.",
//     tags: ["DPIIT Recognition", "Public Citizen Safety"],
//   },
//   {
//     image: `${ASSETS}/cert_army.png`,
//     authority: "Indian Army • Defence Experience",
//     badge: "28 Years Service",
//     title: "Security Training & Service Certificate",
//     description:
//       "Certificate documenting the director's Indian Army service and relevant security, personnel management and operational experience.",
//     tags: ["Defence Experience", "Security Training"],
//   },
//   {
//     image: `${ASSETS}/cert_psara.png`,
//     authority: "Controlling Authority Haryana • PSARA 2005",
//     badge: "PSARA Compliant",
//     title: "Security Training Institute MoU",
//     description:
//       "Memorandum of Understanding with Eagle Pledge Security Training Institute for the prescribed security guard training requirements.",
//     tags: ["160 Hrs Training", "PSARA 2005"],
//   },
//   {
//     image: `${ASSETS}/cert_ncvet.png`,
//     authority: "Govt. of India • NCVET & MEPSC",
//     badge: "Grade A Qualified",
//     title: "Upskilling Certification (Security Supervisor)",
//     description:
//       "Professional upskilling certification for security supervisor duties at NSQF Level 4.",
//     tags: ["NSQF Level 4", "Supervisor Training"],
//   },
// ];

// const highlights = [
//   {
//     icon: Landmark,
//     eyebrow: "Government Recognition",
//     title: "MSME, MCA & DPIIT",
//     description: "Official registration and recognition credentials.",
//   },
//   {
//     icon: ShieldCheck,
//     eyebrow: "PSARA 2005 MoU",
//     title: "Training Institute Partner",
//     description: "Security training and compliance documentation.",
//   },
//   {
//     icon: Award,
//     eyebrow: "Defence Experience",
//     title: "28 Years of Service",
//     description: "Leadership experience rooted in the Indian Army.",
//   },
//   {
//     icon: GraduationCap,
//     eyebrow: "NCVET & MEPSC",
//     title: "NSQF Level 4",
//     description: "Professional security supervisor certification.",
//   },
// ];

// const complianceItems = [
//   "Police verification and character attestation for staff",
//   "PF, ESI and GST compliance documentation",
//   "Security training and statutory records",
//   "Regular audits and supporting documentation",
// ];

// function Eyebrow({ children, light = false }) {
//   return (
//     <span
//       className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] sm:text-xs ${
//         light
//           ? "border-white/20 bg-white/10 text-amber-300"
//           : "border-blue-200 bg-white text-[#14246b]"
//       }`}
//     >
//       <span className="h-2 w-2 rounded-full bg-[#d5a63c]" />
//       {children}
//     </span>
//   );
// }

// function SectionHeading({ eyebrow, title, description, light = false }) {
//   return (
//     <div className="mx-auto mb-12 max-w-3xl text-center">
//       <Eyebrow light={light}>{eyebrow}</Eyebrow>

//       <h2
//         className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
//           light ? "text-white" : "text-[#10213e]"
//         }`}
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className={`mt-5 text-base leading-8 sm:text-lg ${
//             light ? "text-slate-300" : "text-slate-600"
//           }`}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function Certifications() {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <main className="overflow-hidden bg-[#f3f6fb] text-[#10213e]">
//       {/* ================= HERO ================= */}

//       <section className="relative isolate overflow-hidden bg-[#061226] text-white">
//         <img
//           src={`${ASSETS}/banner-img.jpg`}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
//         />

//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061226]/95 via-[#10213e]/85 to-[#14246b]/65" />

//         <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[110px]" />
//         <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/15 blur-[110px]" />

//         <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-32 lg:pt-36">
//           <div className="max-w-4xl">
//             <Eyebrow light>Verified Credentials & Accreditations</Eyebrow>

//             <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
//               Our{" "}
//               <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-[#d5a63c] bg-clip-text text-transparent">
//                 Certifications
//               </span>
//             </h1>

//             <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
//               Committed to statutory compliance, government recognition,
//               PSARA training standards, and professional security excellence.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
//               <a
//                 href="/"
//                 className="transition hover:text-amber-300"
//               >
//                 Home
//               </a>

//               <ChevronRight size={16} className="text-amber-300" />

//               <span className="font-semibold text-white">
//                 Certifications
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-[#d5a63c] to-indigo-700" />
//       </section>

//       {/* ================= HIGHLIGHTS ================= */}

//       <section className="relative z-10 px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-12">
//         <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {highlights.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.title}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
//               >
//                 <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

//                 <div className="relative">
//                   <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#14246b] text-white shadow-lg shadow-blue-950/15 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
//                     <Icon size={26} strokeWidth={1.8} />
//                   </div>

//                   <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#14246b]">
//                     {item.eyebrow}
//                   </p>

//                   <h3 className="mt-2 text-lg font-black text-[#10213e] sm:text-xl">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </div>

//                 <div
//                   className={`absolute bottom-0 left-0 h-1 w-full ${
//                     index % 2 === 0 ? "bg-[#14246b]" : "bg-[#d5a63c]"
//                   }`}
//                 />
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* ================= CERTIFICATES ================= */}

//       <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-[110px]" />
//         <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-200/25 blur-[110px]" />

//         <div className="relative mx-auto max-w-7xl">
//           <SectionHeading
//             eyebrow="Compliance & Accreditation"
//             title="All Official Company Certificates"
//             description="Explore our company registrations, government recognitions and professional training credentials. Select any certificate to view the document in a larger format."
//           />

//           <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
//             {certifications.map((certificate, index) => (
//               <article
//                 key={certificate.title}
//                 className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_55px_rgba(15,23,42,0.13)]"
//               >
//                 {/* Certificate preview */}

//                 <button
//                   type="button"
//                   onClick={() => setSelectedCertificate(certificate)}
//                   aria-label={`View ${certificate.title}`}
//                   className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-[#edf1f8] p-5 sm:h-[320px]"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-amber-100/30" />

//                   <img
//                     src={certificate.image}
//                     alt={certificate.title}
//                     loading="lazy"
//                     className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
//                   />

//                   <div className="absolute inset-0 flex items-center justify-center bg-[#061226]/0 transition-colors duration-300 group-hover:bg-[#061226]/30">
//                     <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#14246b] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//                       <ZoomIn size={17} />
//                       View Certificate
//                     </span>
//                   </div>

//                   <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide text-[#14246b] shadow-sm sm:text-xs">
//                     <BadgeCheck size={15} className="text-[#d5a63c]" />
//                     Verified Document
//                   </span>
//                 </button>

//                 {/* Card content */}

//                 <div className="flex flex-1 flex-col p-6 sm:p-7">
//                   <p className="text-xs font-extrabold uppercase leading-6 tracking-[0.08em] text-[#14246b]">
//                     {certificate.authority}
//                   </p>

//                   <h3 className="mt-3 text-xl font-black leading-snug text-[#10213e] transition-colors group-hover:text-[#14246b]">
//                     {certificate.title}
//                   </h3>

//                   <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
//                     {certificate.description}
//                   </p>

//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {certificate.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-[#14246b]"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedCertificate(certificate)}
//                     className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#14246b]/15 bg-[#14246b]/5 px-5 py-3.5 text-sm font-extrabold text-[#14246b] transition hover:bg-[#14246b] hover:text-white"
//                   >
//                     View Full Certificate
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </button>
//                 </div>

//                 <div
//                   className={`h-1 w-full ${
//                     index % 2 === 0 ? "bg-[#14246b]" : "bg-[#d5a63c]"
//                   }`}
//                 />
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= COMPLIANCE ================= */}

//       <section className="relative isolate overflow-hidden bg-[#0b1428] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[110px]" />
//         <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[110px]" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
//           <div>
//             <Eyebrow light>PTPGS Statutory Standards</Eyebrow>

//             <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
//               Compliance Is Not Optional.
//               <span className="mt-2 block text-amber-300">
//                 It Is Our Responsibility.
//               </span>
//             </h2>

//             <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
//               Choosing a security and staffing partner requires attention
//               to documentation, statutory requirements and operational
//               responsibilities. We focus on maintaining the relevant
//               records and compliance documentation for our services.
//             </p>

//             <a
//               href="/contact"
//               className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/10 transition duration-300 hover:-translate-y-1 hover:shadow-amber-400/25"
//             >
//               <ClipboardCheck size={19} />
//               Request Audit Docket
//               <ArrowRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </a>
//           </div>

//           <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-9">
//             <div className="mb-7 flex items-center gap-4">
//               <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400 text-[#10213e]">
//                 <ShieldCheck size={29} />
//               </div>

//               <div>
//                 <h3 className="text-xl font-black sm:text-2xl">
//                   Our Compliance Checklist
//                 </h3>
//                 <p className="mt-1 text-sm text-slate-400">
//                   Documentation and verification
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-5">
//               {complianceItems.map((item) => (
//                 <div key={item} className="flex items-start gap-3">
//                   <CheckCircle2
//                     size={21}
//                     className="mt-0.5 shrink-0 text-amber-300"
//                   />

//                   <p className="text-sm leading-7 text-slate-200 sm:text-base">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 border-t border-white/10 pt-6">
//               <div className="flex items-center gap-3 text-sm font-bold text-amber-300">
//                 <FileCheck size={19} />
//                 Compliance documentation available for discussion
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}

//       <section className="relative overflow-hidden bg-gradient-to-br from-[#e8edf7] via-white to-[#f5ead4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-5xl rounded-[30px] bg-[#14246b] px-6 py-10 text-center shadow-[0_25px_65px_rgba(20,36,107,0.2)] sm:px-12 sm:py-14 lg:px-16">
//           <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-amber-300">
//             <Users size={31} />
//           </div>

//           <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300 sm:text-sm">
//             Get In Touch
//           </p>

//           <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
//             Need Verified & Compliant Security Services?
//           </h2>

//           <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
//             Let us safeguard your corporate facilities, warehouses,
//             industrial units and institutions with professional security
//             and facility staff.
//           </p>

//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//               href="/contact"
//               className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold text-[#10213e] transition duration-300 hover:-translate-y-1 sm:text-base"
//             >
//               Get Free Quote
//               <ArrowRight
//                 size={19}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </a>

//             <a
//               href="tel:+919716380301"
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10 sm:text-base"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ================= CERTIFICATE MODAL ================= */}

//       {selectedCertificate && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061226]/90 p-3 backdrop-blur-sm sm:p-6"
//           onClick={() => setSelectedCertificate(null)}
//           role="dialog"
//           aria-modal="true"
//           aria-label={selectedCertificate.title}
//         >
//           <div
//             className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-[#10213e] px-5 py-4 text-white sm:px-7">
//               <div className="min-w-0">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300 sm:text-xs">
//                   Official Document
//                 </p>

//                 <h3 className="mt-1 truncate text-base font-extrabold sm:text-xl">
//                   {selectedCertificate.title}
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedCertificate(null)}
//                 aria-label="Close certificate preview"
//                 className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-100 p-4 sm:p-8">
//               <img
//                 src={selectedCertificate.image}
//                 alt={selectedCertificate.title}
//                 className="max-h-[72vh] max-w-full rounded-md object-contain shadow-lg"
//               />
//             </div>

//             <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-4 sm:px-7">
//               <p className="text-xs font-semibold text-slate-600 sm:text-sm">
//                 {selectedCertificate.authority}
//               </p>

//               <a
//                 href={selectedCertificate.image}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-full bg-[#14246b] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#10213e] sm:text-sm"
//               >
//                 Open Original Image
//                 <ArrowRight size={16} />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Award,
  FileCheck,
  Landmark,
  GraduationCap,
  CheckCircle2,
  X,
  ZoomIn,
  ChevronRight,
  ClipboardCheck,
  Users,
  LockKeyhole,
} from "lucide-react";

const ASSETS = "https://ptpgs.in/assets/img";

/* =========================================================
   PAGE BACKGROUND IMAGES
   These are only for the section backgrounds.
   Certificate/document images remain official assets.
========================================================= */

const PAGE_IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2200&q=85",

  compliance:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85",

  cta:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85",
};

/* =========================================================
   CERTIFICATES
========================================================= */

const certifications = [
  {
    image: `${ASSETS}/cert_udyam.png`,
    authority: "Govt. of India • MSME",
    badge: "Active & Verified",
    title: "Udyam Registration Certificate",
    description:
      "Issued by the Ministry of Micro, Small & Medium Enterprises, Government of India, recognising PTPGS India Private Limited.",
    tags: ["MSME Certified", "Enterprise Verification"],
  },

  {
    image: `${ASSETS}/cert_gst.png`,
    authority: "Govt. of India • GST",
    badge: "Tax Compliant",
    title: "GST Registration (Form GST REG-06)",
    description:
      "Statutory GST registration confirming the company's registration under the applicable Goods and Services Tax framework.",
    tags: ["GST REG-06", "Tax Compliance"],
  },

  {
    image: `${ASSETS}/cert_incorporation.png`,
    authority: "Ministry of Corporate Affairs",
    badge: "Incorporated Entity",
    title: "Certificate of Incorporation",
    description:
      "Official incorporation certificate for PTPGS India Private Limited under the Companies Act, 2013.",
    tags: ["Companies Act 2013", "Corporate Registration"],
  },

  {
    image: `${ASSETS}/cert_startupindia.png`,
    authority: "DPIIT • Govt. of India",
    badge: "Startup India",
    title: "#StartupIndia Recognition Certificate",
    description:
      "Recognition by the Department for Promotion of Industry and Internal Trade, Government of India.",
    tags: ["DPIIT Recognition", "Government Recognition"],
  },

  {
    image: `${ASSETS}/cert_army.png`,
    authority: "Indian Army • Defence Experience",
    badge: "28 Years Service",
    title: "Security Training & Service Certificate",
    description:
      "Certificate documenting the director's Indian Army service and relevant security, personnel management and operational experience.",
    tags: ["Defence Experience", "Security Training"],
  },

  {
    image: `${ASSETS}/cert_psara.png`,
    authority: "Controlling Authority Haryana • PSARA 2005",
    badge: "PSARA Compliant",
    title: "Security Training Institute MoU",
    description:
      "Memorandum of Understanding with Eagle Pledge Security Training Institute for prescribed security guard training requirements.",
    tags: ["160 Hrs Training", "PSARA 2005"],
  },

  {
    image: `${ASSETS}/cert_ncvet.png`,
    authority: "Govt. of India • NCVET & MEPSC",
    badge: "Grade A Qualified",
    title: "Upskilling Certification (Security Supervisor)",
    description:
      "Professional upskilling certification for security supervisor duties at NSQF Level 4.",
    tags: ["NSQF Level 4", "Supervisor Training"],
  },
];

/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
  {
    icon: Landmark,
    eyebrow: "Government Recognition",
    title: "MSME, MCA & DPIIT",
    description:
      "Official registration and recognition credentials.",
  },

  {
    icon: ShieldCheck,
    eyebrow: "PSARA 2005 MoU",
    title: "Training Institute Partner",
    description:
      "Security training and compliance documentation.",
  },

  {
    icon: Award,
    eyebrow: "Defence Experience",
    title: "28 Years of Service",
    description:
      "Leadership experience rooted in the Indian Army.",
  },

  {
    icon: GraduationCap,
    eyebrow: "NCVET & MEPSC",
    title: "NSQF Level 4",
    description:
      "Professional security supervisor certification.",
  },
];

/* =========================================================
   COMPLIANCE ITEMS
========================================================= */

const complianceItems = [
  "Police verification and character attestation for staff",
  "PF, ESI and GST compliance documentation",
  "Security training and statutory records",
  "Regular audits and supporting documentation",
];

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.17em] sm:text-xs ${
        light
          ? "border-white/15 bg-white/[0.07] text-amber-300"
          : "border-[#d5a63c]/30 bg-[#d5a63c]/10 text-[#80631d]"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#d5a63c]" />

      {children}
    </span>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`text-3xl font-black leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl ${
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
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  return (
    <main className="overflow-hidden text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

   {/* =====================================================
    HERO — CERTIFICATIONS
===================================================== */}

<section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061126] via-[#143967] to-[#352052] text-white">

  {/* Custom background image */}
  <img
    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=85"
    alt=""
    aria-hidden="true"
    fetchPriority="high"
    className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
  />

  {/* Dark overlay matching About page */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#061126]/95 via-[#143967]/90 to-[#352052]/90" />

  <div className="absolute inset-0 -z-10 bg-[#061126]/30" />

  {/* Decorative glows */}
  <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[120px]" />

  <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[130px]" />

  <div className="pointer-events-none absolute right-[20%] top-10 h-52 w-52 rounded-full bg-[#d5a63c]/10 blur-[100px]" />

  <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-2 lg:min-h-[680px] lg:px-10 lg:py-32">

    {/* LEFT CONTENT */}
    <div className="relative z-10">

      <Eyebrow light>
        Verified Credentials & Accreditations
      </Eyebrow>

      <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">

        Our{" "}

        <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-[#d5a63c] bg-clip-text text-transparent">
          Certifications
        </span>

      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg lg:text-xl">
        Our credentials reflect our commitment to corporate
        responsibility, statutory documentation, professional
        training and security service standards.
      </p>

      {/* Feature pills */}
      <div className="mt-9 flex flex-wrap gap-3">

        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md sm:text-sm">
          <ShieldCheck size={16} className="text-[#e3b84f]" />
          Verified Credentials
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md sm:text-sm">
          <LockKeyhole size={16} className="text-[#e3b84f]" />
          Statutory Compliance
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md sm:text-sm">
          <Award size={16} className="text-[#e3b84f]" />
          Professional Standards
        </div>

      </div>

      {/* CTA buttons */}
      <div className="mt-9 flex flex-wrap gap-4">

        <button
          type="button"
          onClick={() =>
            document.getElementById("certificates-list")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="group inline-flex items-center gap-3 rounded-full bg-[#d5a63c] px-7 py-4 text-sm font-extrabold text-[#101827] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#e5ba58] sm:text-base"
        >
          Explore Certificates

          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-[#d5a63c]/50 hover:bg-white/[0.12] sm:text-base"
        >
          Contact Us
          <ChevronRight size={17} className="text-[#e3b84f]" />
        </a>

      </div>

      {/* Breadcrumb */}
      <div className="mt-9 flex items-center gap-3 text-sm text-slate-300">

        <a
          href="/"
          className="transition hover:text-[#e5bd5c]"
        >
          Home
        </a>

        <ChevronRight size={15} className="text-[#d5a63c]" />

        <span className="font-semibold text-white">
          Certifications
        </span>

      </div>

    </div>

    {/* RIGHT IMAGE CARD */}
    <div className="relative mx-auto w-full max-w-xl">

      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-blue-400/30 via-transparent to-[#d5a63c]/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/[0.08] p-2 shadow-[0_35px_90px_rgba(0,0,0,0.4)] backdrop-blur-sm">

        <div className="relative h-[330px] overflow-hidden rounded-[24px] sm:h-[440px]">

          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
            alt="Professional reviewing business documents"
            className="h-full w-full object-cover object-center"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061126]/95 via-[#061126]/15 to-transparent" />

          {/* Image content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

            <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#e6bf5e]">
              <BadgeCheck size={17} />
              Compliance & Trust
            </div>

            <h2 className="max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
              Built on Standards. Backed by Credentials.
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
              Our registrations, recognitions and training records
              support our commitment to professional operations.
            </p>

          </div>

        </div>
      </div>

      {/* Floating information card */}
      <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl border border-white/80 bg-white p-4 text-slate-900 shadow-2xl sm:-left-7 sm:p-5">

        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#10213e] to-[#352052] text-[#e4bb58]">
          <FileCheck size={25} />
        </div>

        <div>
          <p className="font-extrabold">
            Official Credentials
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Registration. Training. Compliance.
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Bottom gold accent */}
  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#d5a63c] to-transparent" />

</section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#c7d3e9] via-[#d2c5e4] to-[#ead3b1] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* subtle overlay */}

        <div className="pointer-events-none absolute inset-0 bg-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 p-6 shadow-[0_18px_45px_rgba(36,45,80,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/55 sm:p-7"
              >

                {/* corner glow */}

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d5a63c]/15 blur-2xl transition duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#10213e] to-[#352052] text-[#e4bb58] shadow-lg">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#735616]">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-2 text-lg font-black text-[#10213e] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#40516b]">
                    {item.description}
                  </p>

                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[3px] w-full ${
                    index % 2 === 0
                      ? "bg-[#d5a63c]"
                      : "bg-[#352052]"
                  }`}
                />

              </article>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          CERTIFICATES
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#c7d3e9] via-[#d2c5e4] to-[#ead3b1] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        {/* background decorative blobs */}

        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-400/15 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-300/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Compliance & Accreditation"
            title="All Official Company Certificates"
            description="Explore our company registrations, government recognitions and professional training credentials. Select any certificate to view the document in a larger format."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {certifications.map((certificate, index) => (
              <article
                key={certificate.title}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white/65 shadow-[0_20px_55px_rgba(35,45,75,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/80 hover:shadow-[0_30px_70px_rgba(35,45,75,0.22)]"
              >

                {/* DOCUMENT */}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                  aria-label={`View ${certificate.title}`}
                  className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef3fa] via-white to-[#f8edda] p-5 sm:h-[320px]"
                >

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]"
                  />

                  {/* hover */}

                  <div className="absolute inset-0 flex items-center justify-center bg-[#10213e]/0 transition duration-300 group-hover:bg-[#10213e]/35">

                    <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#14246b] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                      <ZoomIn size={17} />

                      View Certificate

                    </span>

                  </div>

                  {/* Badge */}

                  <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide text-[#14246b] shadow-sm sm:text-xs">

                    <BadgeCheck
                      size={15}
                      className="text-[#d5a63c]"
                    />

                    Verified Document

                  </span>

                </button>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  <p className="text-[10px] font-black uppercase leading-6 tracking-[0.09em] text-[#80631d]">
                    {certificate.authority}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-snug text-[#10213e] transition-colors group-hover:text-[#352052]">
                    {certificate.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#536177]">
                    {certificate.description}
                  </p>

                  {/* tags */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#10213e]/10 bg-[#10213e]/[0.045] px-3 py-1.5 text-[10px] font-bold text-[#40516b]"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  {/* button */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(certificate)
                    }
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#10213e] via-[#142f55] to-[#352052] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    View Full Certificate

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>

                </div>

                {/* bottom accent */}

                <div
                  className={`h-[3px] w-full ${
                    index % 2 === 0
                      ? "bg-[#d5a63c]"
                      : "bg-[#352052]"
                  }`}
                />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          COMPLIANCE
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061126] via-[#143967] to-[#352052] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        {/* Our separate background image */}

        <img
          src={PAGE_IMAGES.compliance}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Theme overlay */}

        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#061126]/95 via-[#143967]/92 to-[#352052]/93" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-[130px]" />

        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#d5a63c]/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}

          <div>

            <Eyebrow light>
              PTPGS Statutory Standards
            </Eyebrow>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">

              Compliance Is Not Optional.

              <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-200 to-[#d5a63c] bg-clip-text text-transparent">
                It Is Our Responsibility.
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Choosing a security and staffing partner requires attention
              to documentation, statutory requirements and operational
              responsibilities. We focus on maintaining the relevant
              records and compliance documentation for our services.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d5a63c] px-7 py-4 text-sm font-extrabold text-[#101827] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#e5ba58]"
            >
              <ClipboardCheck size={19} />

              Request Audit Docket

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* RIGHT */}

          <div className="rounded-[28px] border border-white/15 bg-[#061126]/60 p-6 shadow-2xl backdrop-blur-xl sm:p-9">

            <div className="mb-7 flex items-center gap-4">

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#d5a63c] to-[#b88620] text-[#101827] shadow-lg">
                <ShieldCheck size={29} />
              </div>

              <div>

                <h3 className="text-xl font-black sm:text-2xl">
                  Our Compliance Checklist
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Documentation and verification
                </p>

              </div>

            </div>

            <div className="space-y-5">

              {complianceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#e0b64f]"
                  />

                  <p className="text-sm leading-7 text-slate-200 sm:text-base">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-8 border-t border-white/10 pt-6">

              <div className="flex items-center gap-3 text-sm font-bold text-[#e0b64f]">

                <FileCheck size={19} />

                Compliance documentation available for discussion

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

     

      {/* =====================================================
          CERTIFICATE MODAL
      ===================================================== */}

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020712]/95 p-3 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
        >

          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Header */}

            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-[#061126] via-[#143967] to-[#352052] px-5 py-4 text-white sm:px-7">

              <div className="min-w-0">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d5a63c] sm:text-xs">
                  Official Document
                </p>

                <h3 className="mt-1 truncate text-base font-extrabold sm:text-xl">
                  {selectedCertificate.title}
                </h3>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedCertificate(null)
                }
                aria-label="Close certificate preview"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <X size={22} />
              </button>

            </div>

            {/* Document */}

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-gradient-to-br from-[#eef3fa] via-white to-[#f8edda] p-4 sm:p-8">

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[72vh] max-w-full rounded-md object-contain shadow-lg"
              />

            </div>

            {/* Footer */}

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-4 sm:px-7">

              <p className="text-xs font-semibold text-slate-600 sm:text-sm">
                {selectedCertificate.authority}
              </p>

              <a
                href={selectedCertificate.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10213e] to-[#352052] px-5 py-3 text-xs font-extrabold text-white transition hover:opacity-90 sm:text-sm"
              >
                Open Original Image

                <ArrowRight size={16} />

              </a>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}