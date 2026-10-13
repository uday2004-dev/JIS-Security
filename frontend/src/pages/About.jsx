// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ShieldCheck,
//   Target,
//   Handshake,
//   Users,
//   Award,
//   Phone,
//   Mail,
//   MapPin,
//   ChevronRight,
//   ChevronLeft,
//   Send,
// } from "lucide-react";

// const ASSETS = "https://ptpgs.in/assets/img";
// const ease = [0.22, 1, 0.36, 1];

// function Reveal({ children, className = "", delay = 0, direction = "up" }) {
//   const x = direction === "left" ? -28 : direction === "right" ? 28 : 0;
//   const y = direction === "up" ? 26 : 0;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x, y }}
//       whileInView={{ opacity: 1, x: 0, y: 0 }}
//       viewport={{ once: true, amount: 0.12 }}
//       transition={{ duration: 0.65, delay, ease }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function Eyebrow({ children, light = false }) {
//   return (
//     <p
//       className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] sm:text-sm ${
//         light ? "text-[#e4bd60]" : "text-[#b88a25]"
//       }`}
//     >
//       {children}
//     </p>
//   );
// }

// function SectionHeading({ eyebrow, title, description, centered = false, light = false }) {
//   return (
//     <Reveal className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
//       <Eyebrow light={light}>{eyebrow}</Eyebrow>
//       <h2
//         className={`text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[48px] ${
//           light ? "text-white" : "text-[#18283a]"
//         }`}
//       >
//         {title}
//       </h2>
//       {description && (
//         <p className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-white/75" : "text-slate-600"}`}>
//           {description}
//         </p>
//       )}
//     </Reveal>
//   );
// }

// const values = [
//   {
//     id: "vision",
//     eyebrow: "Our Vision",
//     title: "A trusted name in security and workforce support",
//     image: `${ASSETS}/banner-img.jpg`,
//     icon: Target,
//     paragraphs: [
//       "Our goal is to build a dependable presence across security, staffing, and facility management by keeping service standards high and continuously improving how our teams work.",
//       "We aim to be a long-term partner for organisations that value safety, consistency, and professional service.",
//     ],
//   },
//   {
//     id: "mission",
//     eyebrow: "Our Mission",
//     title: "The right people, prepared to serve",
//     image: `${ASSETS}/banner-img2.jpg`,
//     icon: ShieldCheck,
//     paragraphs: [
//       "We work to provide trained security personnel, housekeeping teams, and skilled manpower to suit the changing needs of every client.",
//       "Safety, discipline, responsive support, and smooth day-to-day operations guide the way we deliver our services.",
//     ],
//   },
//   {
//     id: "values",
//     eyebrow: "Our Values",
//     title: "Integrity in every relationship",
//     image: `${ASSETS}/about_1_1.jpg`,
//     icon: Handshake,
//     paragraphs: [
//       "Honesty, responsibility, discipline, and professionalism are at the centre of our work.",
//       "We value trust, transparent communication, and respectful partnerships with clients, team members, and the communities we serve.",
//     ],
//   },
//   {
//     id: "leadership",
//     eyebrow: "Our Leadership",
//     title: "Guided by experience and accountability",
//     image: `${ASSETS}/gallery2.jpg`,
//     icon: Users,
//     paragraphs: [
//       "Our leadership approach focuses on building capable teams, setting clear expectations, and maintaining a responsible working culture.",
//       "Through guidance and supervision, we support our people in delivering consistent service at every site.",
//     ],
//   },
// ];

// const awards = [
//   { image: `${ASSETS}/award1.webp`, title: "India Business Award 2025" },
//   { image: `${ASSETS}/award2.webp`, title: "Most Innovative Brand for HVAC Projects 2024–25" },
//   { image: `${ASSETS}/award3.webp`, title: "National Growth Partner Award" },
//   { image: `${ASSETS}/award4.webp`, title: "Gurugram Industrial Expo 2023" },
// ];
// const certifications = [
//   {
//     image: `${ASSETS}/cert_udyam.png`,
//     authority: "Govt. of India • MSME",
//     title: "Udyam Registration Certificate",
//   },
//   {
//     image: `${ASSETS}/cert_gst.png`,
//     authority: "Govt. of India • GST",
//     title: "GST Registration Certificate (Form GST REG-06)",
//   },
//   {
//     image: `${ASSETS}/cert_incorporation.png`,
//     authority: "Ministry of Corporate Affairs",
//     title: "Certificate of Incorporation",
//   },
//   {
//     image: `${ASSETS}/cert_startupindia.png`,
//     authority: "DPIIT • Govt. of India",
//     title: "#StartupIndia Recognition Certificate",
//   },
//   {
//     image: `${ASSETS}/cert_army.png`,
//     authority: "Indian Army • Defence Experience",
//     title: "Security Training & Service Certificate",
//   },
//   {
//     image: `${ASSETS}/cert_psara.png`,
//     authority: "Controlling Authority Haryana • PSARA 2005",
//     title: "Security Training Institute MoU (Eagle Pledge)",
//   },
//   {
//     image: `${ASSETS}/cert_ncvet.png`,
//     authority: "Govt. of India • NCVET & MEPSC",
//     title: "Upskilling Certification (Security Supervisor)",
//   },
// ];

// const serviceOptions = [
//   "House Keeping Services",
//   "Office Boy Supplies",
//   "Warehouse Picker",
//   "Front Office Assistant",
//   "Supervisor Supplies",
//   "Executives Recruitment",
//   "Security Guard Service",
//   "House Maid Services",
// ];

// const pillField =
//   "w-full appearance-none rounded-full border border-slate-200 bg-slate-50 px-6 py-4 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#14246b] focus:bg-white focus:ring-2 focus:ring-[#14246b]/15 sm:px-8 sm:py-5 sm:text-lg";

// /* HERO TEXT + CERTIFICATIONS CAROUSEL + REQUEST A QUOTE (single combined block) */
// function CertificationsQuoteSection() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const total = certifications.length;
//   const current = certifications[index];

//   const prev = () => setIndex((i) => (i - 1 + total) % total);
//   const next = () => setIndex((i) => (i + 1) % total);

//   useEffect(() => {
//     if (paused || total < 2) return;
//     const timer = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
//     return () => clearInterval(timer);
//   }, [paused, total]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <section>
//       {/* Dark image hero with heading */}
//       <div className="relative isolate overflow-hidden bg-slate-700">
//         <img
//           src={`${ASSETS}/banner-img.jpg`}
//           alt=""
//           aria-hidden="true"
//           loading="lazy"
//           className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
//         />
//         <div className="absolute inset-0 -z-10 bg-black/65" />
//         <div className="mx-auto max-w-6xl px-5 pb-56 pt-24 text-center sm:px-8 sm:pb-72 sm:pt-32 lg:pb-96 lg:pt-40">
//           <Reveal>
//             <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
//               <span className="text-[#14246b]">One Solution</span> for All Your Housekeeping, Security, and Manpower Needs
//             </h2>
//           </Reveal>
//         </div>
//       </div>

//       {/* Dark rounded container overlapping the hero */}
//       <div className="relative z-10 -mt-44 bg-gradient-to-b from-transparent via-transparent to-[#f4f7fa] px-3 pb-16 sm:-mt-60 sm:px-6 lg:-mt-80 lg:px-10 lg:pb-24">
//         <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b0b0b] p-5 shadow-2xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">
//           <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
//             {/* LEFT: Our Certifications carousel */}
//             <div className="lg:pt-6">
//               <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Our Certifications</h2>
//               <div className="mt-4 h-1 w-24 bg-[#14246b]" />

//               <div
//                 className="mt-8 overflow-hidden rounded-[2rem] bg-slate-50 sm:mt-10"
//                 onMouseEnter={() => setPaused(true)}
//                 onMouseLeave={() => setPaused(false)}
//               >
//                 <div className="relative flex h-[420px] items-center justify-center sm:h-[560px] lg:h-[620px]">
//                   <img
//                     key={current.image}
//                     src={current.image}
//                     alt={current.title}
//                     className="h-[88%] w-auto max-w-[70%] rounded-md object-contain shadow-lg"
//                   />

//                   {/* Dots */}
//                   <div className="absolute right-4 top-6 flex items-center gap-2.5 rounded-full bg-slate-500/80 px-4 py-2 sm:right-6">
//                     {certifications.map((item, i) => (
//                       <button
//                         key={item.title}
//                         onClick={() => setIndex(i)}
//                         aria-label={`Show certificate ${i + 1}`}
//                         className={`h-3 w-3 rounded-full transition ${
//                           i === index ? "bg-[#d5a63c]" : "bg-white/90 hover:bg-white"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* Arrows */}
//                   <button
//                     onClick={prev}
//                     aria-label="Previous certificate"
//                     className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:left-5 sm:h-14 sm:w-14"
//                   >
//                     <ChevronLeft size={26} />
//                   </button>
//                   <button
//                     onClick={next}
//                     aria-label="Next certificate"
//                     className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:right-5 sm:h-14 sm:w-14"
//                   >
//                     <ChevronRight size={26} />
//                   </button>
//                 </div>

//                 {/* Caption bar */}
//                 <div className="bg-[#14295f] px-6 py-5 text-center">
//                   <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#d5a63c] sm:text-base">
//                     {current.authority}
//                   </p>
//                   <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{current.title}</h3>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: Request A Quote */}
//             <div className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10 lg:mt-12">
//               <h2 className="text-3xl font-extrabold text-[#0f1f4d] sm:text-5xl">
//                 Request <span className="text-[#14246b]">A Quote</span>
//               </h2>

//               <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
//                 <input className={pillField} name="name" placeholder="Your Name" aria-label="Your Name" required />
//                 <input className={pillField} type="email" name="email" placeholder="Email" aria-label="Email" required />
//                 <input className={pillField} type="tel" name="mobile" placeholder="Mobile" aria-label="Mobile" required />
//                 <select className={pillField} name="service" aria-label="Looking for?" defaultValue="" required>
//                   <option value="" disabled>
//                     Looking for?
//                   </option>
//                   {serviceOptions.map((service) => (
//                     <option key={service} value={service}>
//                       {service}
//                     </option>
//                   ))}
//                 </select>
//                 <input className={pillField} name="location" placeholder="Your Location" aria-label="Your Location" required />

//                 <button
//                   type="submit"
//                   className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#0f1f4d] px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-[#14246b] sm:py-6 sm:text-xl"
//                 >
//                   Send Message <ArrowRight size={22} />
//                 </button>
//                 {submitted && (
//                   <p className="text-sm text-amber-700">
//                     The form UI is ready; connect your backend/API to submit enquiries.
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function About() {
//   const navigate = useNavigate();

//   return (
//     <main className="overflow-hidden bg-white text-[#18283a]">
//       {/* PAGE TITLE / FULL-WIDTH HERO */}
// <section className="relative isolate flex min-h-[320px] items-center overflow-hidden px-5 py-16 sm:min-h-[390px] sm:px-8 sm:py-20 lg:min-h-[460px] lg:px-10 lg:py-24">

//   {/* Full-width background image */}
//   <img
//     src={`${ASSETS}/banner-img2.jpg`}
//     alt=""
//     aria-hidden="true"
//     fetchPriority="high"
//     className="absolute inset-0 z-0 h-full w-full object-cover object-center"
//   />

//   {/* Subtle overlay: photo stays clearly visible */}
//   <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#101820]/70 via-[#101820]/25 to-transparent" />

//   {/* Heading and breadcrumb */}
//   <div className="relative z-20 mx-auto w-full max-w-7xl">
//     <Reveal>
//       <Eyebrow light>About Us</Eyebrow>

//       <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
//         About Us
//       </h1>

//       <p className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90">
//         <button
//           onClick={() => navigate("/")}
//           className="transition hover:text-[#e4bd60]"
//         >
//           Home
//         </button>

//         <ChevronRight size={15} className="text-[#e4bd60]" />

//         <span className="text-white">About Us</span>
//       </p>
//     </Reveal>
//   </div>
// </section>

//       {/* COMPANY INTRO */}
//       <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//           <Reveal direction="left">
//             <div className="relative pr-4 pb-4 sm:pr-7 sm:pb-7">
//               <img src={`${ASSETS}/banner1.avif`} alt="Protectors Guild and Staffing" className="relative z-10 h-[300px] w-full object-cover sm:h-[420px]" />
//               <div className="absolute bottom-0 right-0 z-20 bg-[#d5a63c] px-5 py-4 sm:px-7 sm:py-5">
//                 <p className="text-xl font-extrabold text-[#18283a] sm:text-2xl">Safety First</p>
//                 <p className="mt-1 text-sm font-medium text-slate-800">Every day, everywhere</p>
//               </div>
//               <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-[#d5a63c] sm:h-32 sm:w-32" />
//             </div>
//           </Reveal>

//           <Reveal direction="right" delay={0.08}>
//             <Eyebrow>About Protectors Guild And Staffing</Eyebrow>
//             <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[46px]">
//               We Provide Professional Security &amp; Staffing Solutions
//             </h2>
//             <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
//               Protectors Guild And Staffing supports residential, commercial, and industrial clients with security, staffing, and facility-management services designed around their operational needs.
//             </p>
//             <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
//               Our focus is on capable people, well-organised workforce management, dependable service, and a customer-first approach to help workplaces operate safely and smoothly.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               {values.map((item) => (
//                 <a key={item.id} href={`#${item.id}`} className="border border-slate-200 px-4 py-3 text-sm font-bold text-[#18283a] transition hover:border-[#d5a63c] hover:bg-[#fffaf0] sm:text-base">
//                   {item.eyebrow}
//                 </a>
//               ))}
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* VISION, MISSION, VALUES, LEADERSHIP */}
//       <section className="bg-[#f4f7fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             centered
//             eyebrow="What Guides Us"
//             title="The Foundation of Our Work"
//             description="The principles behind how we support our clients, teams, and working environments."
//           />
//           <div className="space-y-8 lg:space-y-10">
//             {values.map((item, index) => {
//               const Icon = item.icon;
//               const imageFirst = index % 2 === 0;
//               return (
//                 <Reveal key={item.id} delay={index * 0.04}>
//                   <article id={item.id} className={`grid scroll-mt-28 items-center gap-0 overflow-hidden border border-slate-200 bg-white shadow-sm lg:grid-cols-2 ${imageFirst ? "" : ""}`}>
//                     <div className={`relative min-h-[240px] sm:min-h-[330px] ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
//                       <img src={item.image} alt={item.eyebrow} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
//                     </div>
//                     <div className={`p-6 sm:p-9 lg:p-12 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
//                       <div className="flex h-14 w-14 items-center justify-center bg-[#d5a63c]/20 text-[#a77b20]"><Icon size={28} strokeWidth={1.7} /></div>
//                       <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#b88a25]">{item.eyebrow}</p>
//                       <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>
//                       {item.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{paragraph}</p>)}
//                     </div>
//                   </article>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* AWARDS AND RECOGNITIONS */}
//       <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             centered
//             eyebrow="Recognition"
//             title="Awards and Recognitions"
//             description="A selection of the awards and recognitions displayed by P.T.P.G.S."
//           />
//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {awards.map((award, index) => (
//               <Reveal key={award.image} delay={index * 0.07}>
//                 <article className="h-full overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//                   <img src={award.image} alt={award.title} loading="lazy" className="aspect-[3/4] w-full object-contain bg-[#f7f7f5]" />
//                   <div className="p-5">
//                     <div className="flex items-center gap-2 text-[#b88a25]"><Award size={18} /><span className="text-xs font-bold uppercase tracking-wide">Recognition</span></div>
//                     <h3 className="mt-3 text-lg font-bold leading-6">{award.title}</h3>
//                   </div>
//                 </article>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA STRIP + CERTIFICATIONS + REQUEST A QUOTE (combined, as per design) */}
//       <CertificationsQuoteSection />
//     </main>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CertificateOnInc from "../assets/Certificate_of_Incorporation_JIS.jpg"
import intimationLetter from "../assets/intimationLetter.jpg"
import PAN from "../assets/PAN_JIS.jpg"
import TAN from "../assets/TAN_JIS.jpg"
import Form34 from "../assets/Form_No_INC-34.pdf"
import memo from "../assets/e-memo.pdf"
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Handshake,
  Users,
  Award,
  ChevronRight,
  ChevronLeft,
  Eye,
  UserCheck,
  LockKeyhole,
  Clock3,
  Building2,
  Radio,
  BadgeCheck,
  Siren,
  ScanEye,
  CheckCircle2,
  Headset,
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
  const x = direction === "left" ? -35 : direction === "right" ? 35 : 0;
  const y = direction === "up" ? 28 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] sm:text-xs ${light
        ? "border-white/20 bg-white/10 text-amber-300"
        : "border-blue-200/70 bg-white/65 text-blue-800 shadow-sm"
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
      className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : ""
        }`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>

      <h2
        className={`text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[46px] ${light ? "text-white" : "text-[#10213e]"
          }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"
            }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* =========================
   SECURITY PAGE DATA
========================= */

const securityPrinciples = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "A security-focused approach that puts the protection of people and property at the centre of everyday operations.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: Eye,
    title: "Alert & Vigilant",
    description:
      "Attention to surroundings, access points and unusual activity helps support a more secure environment.",
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: Handshake,
    title: "Professional Conduct",
    description:
      "Respectful communication, clear responsibilities and disciplined conduct are important parts of security service.",
    color: "from-amber-400 to-orange-600",
  },
];

const securityServices = [
  {
    icon: Building2,
    number: "01",
    title: "Corporate Security Guards",
    description:
      "Security guard services for office buildings, corporate workplaces and business premises, with attention to entry points and visitor movement.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    number: "02",
    title: "Residential Security",
    description:
      "Support for residential societies and apartment complexes through gate security, visitor checks and general site observation.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: ScanEye,
    number: "03",
    title: "Access Control",
    description:
      "Support for authorised entry procedures, visitor management and orderly movement through designated access points.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Radio,
    number: "04",
    title: "Gate & Perimeter Security",
    description:
      "A visible security presence around gates, boundaries and other assigned areas, in line with agreed site responsibilities.",
    color: "from-teal-400 to-emerald-600",
  },
  {
    icon: Eye,
    number: "05",
    title: "Site Monitoring",
    description:
      "Routine observation of assigned areas and timely reporting of suspicious activity or potential safety concerns.",
    color: "from-sky-400 to-blue-600",
  },
  {
    icon: Siren,
    number: "06",
    title: "Incident Response Support",
    description:
      "Communication and escalation of incidents according to the site's established security procedures.",
    color: "from-rose-500 to-red-600",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Eye,
    title: "Understand Your Site",
    description:
      "We discuss your premises, access points, operating hours and specific security requirements.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Define Responsibilities",
    description:
      "Security duties, expected conduct and reporting procedures are discussed for the proposed arrangement.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Plan the Deployment",
    description:
      "The proposed guard coverage and schedule are planned around the requirements agreed with the client.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Maintain Communication",
    description:
      "Clear communication and escalation expectations help support ongoing security operations.",
  },
];

const propertyTypes = [
  {
    icon: Building2,
    title: "Office Buildings",
    description:
      "Entry management and a professional security presence for workplaces.",
    color: "from-blue-500 to-indigo-700",
  },
  {
    icon: Users,
    title: "Residential Societies",
    description:
      "Gate security, visitor checks and support for shared residential spaces.",
    color: "from-purple-500 to-violet-700",
  },
  {
    icon: LockKeyhole,
    title: "Commercial Premises",
    description:
      "Security support for customer-facing and operational business locations.",
    color: "from-amber-400 to-orange-600",
  },
];

const securityFaqs = [
  {
    question: "What types of premises can require security guards?",
    answer:
      "Security guard requirements can vary across offices, residential societies, commercial buildings and other premises. The appropriate arrangement depends on the location and the responsibilities agreed with the client.",
  },
  {
    question: "Can security duties be tailored to our premises?",
    answer:
      "Yes. Site access points, visitor movement, working hours and areas requiring attention can be discussed while defining the proposed security duties.",
  },
  {
    question: "How do we enquire about security guard services?",
    answer:
      "You can use the Request a Quote section on this page to share your contact information, location and service requirement.",
  },
  {
    question: "Can we discuss the number of guards needed?",
    answer:
      "Yes. Share your site details, required coverage hours and entry points so the proposed guard requirements can be discussed.",
  },
];

/* =========================
   CERTIFICATION DATA
========================= */

const homeCertifications = [
  {
    pdf: Form34,
    authority: "e-AOA (e-Articles of Association)",
    title: "Form No. INC-34",
  },
  {
    pdf: memo,
    authority: "e-MOA (e-Memorandum of Association)",
    title: "Form No. INC-33",
  },
  {
    image: CertificateOnInc,
    authority: "GOVERNMENT OF INDIA MINISTRY OF CORPORATE AFFAIRS",
    title: "Certificate of Incorporation",
  },
  {
    image: intimationLetter,
    authority: "DPIIT • Govt. of India",
    title: "DPIIT Intimation Letter",
  },
  {
    image: PAN,
    authority: "Income Tax Department • Govt. of India",
    title: "Company PAN Card",
  },
  {
    image: TAN,
    authority: "Income Tax Department • Govt. of India",
    title: "Company TAN Certificate",
  },

];


const serviceOptions = [
  "House Keeping Services",
  "Office Boy Supplies",
  "Warehouse Picker",
  "Front Office Assistant",
  "Supervisor Supplies",
  "Executives Recruitment",
  "Security Guard Service",
  "House Maid Services",
];

const pillField =
  "w-full appearance-none rounded-full border border-slate-200 bg-slate-50 px-6 py-4 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#14246b] focus:bg-white focus:ring-2 focus:ring-[#14246b]/15 sm:px-8 sm:py-5 sm:text-lg";


const textareaField =
  "w-full resize-none rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-4 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#14246b] focus:bg-white focus:ring-2 focus:ring-[#14246b]/15 sm:px-8 sm:py-5 sm:text-lg";
/* =========================
   CERTIFICATIONS + QUOTE
   ORIGINAL COMPONENT KEPT
========================= */


// function CertificationsQuoteSection() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const total = homeCertifications.length;
//   const current = homeCertifications[index];

//   const prev = () => {
//     setIndex((i) => (i - 1 + total) % total);
//   };

//   const next = () => {
//     setIndex((i) => (i + 1) % total);
//   };

//   useEffect(() => {
//     if (paused || total < 2) return;

//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % total);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [paused, total]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitted(true);
//   }

function CertificationsQuoteSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

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

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      service: formData.get("service"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      // const res = await fetch("http://localhost:3000/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      const res = await fetch("https://jis-security.onrender.com/api/contact", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(payload),
});

      if (!res.ok) throw new Error("Request failed");

      setStatus({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }


  return (
    <section>
      {/* Hero Banner */}
      <div className="relative isolate overflow-hidden bg-slate-700">
        <img
          src={`${ASSETS}/banner-img.jpg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />

        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto max-w-6xl px-5 pb-56 pt-24 text-center sm:px-8 sm:pb-72 sm:pt-32 lg:pb-96 lg:pt-40">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="text-[#d5a63c]">One Solution</span> for All
              Your Housekeeping, Security, and Manpower Needs
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Certifications + Quote */}
      <div className="relative z-10 -mt-44 bg-gradient-to-b from-transparent via-transparent to-[#f4f7fa] px-3 pb-16 sm:-mt-60 sm:px-6 lg:-mt-80 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b0b0b] p-5 shadow-2xl sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">

            {/* LEFT: Certifications Carousel */}
            <div className="lg:pt-6">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Our Certifications
              </h2>

              <div className="mt-4 h-1 w-24 bg-[#d5a63c]" />

              <div
                className="mt-8 overflow-hidden rounded-[2rem] bg-slate-50 sm:mt-10"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Preview Area */}
                <div className="relative flex h-[420px] items-center justify-center overflow-hidden bg-slate-100 sm:h-[560px] lg:h-[620px]">

                  <AnimatePresence mode="wait">
                    {current.pdf ? (
                      <motion.div
                        key={current.pdf}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-3 sm:p-5"
                      >
                        <iframe
                          src={current.pdf}
                          title={current.title}
                          className="h-full w-full rounded-lg border-0 bg-white"
                        />
                      </motion.div>
                    ) : (
                      <motion.img
                        key={current.image}
                        src={current.image}
                        alt={current.title}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        className="h-[88%] max-w-[70%] rounded-md object-contain shadow-lg"
                      />
                    )}
                  </AnimatePresence>

                  {/* Slide Counter */}
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-900/80 px-3 py-2 text-xs font-bold text-white sm:left-6">
                    {index + 1} / {total}
                  </div>

                  {/* Dots */}
                  <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-2 sm:right-6">
                    {homeCertifications.map((item, i) => (
                      <button
                        key={item.pdf || item.image}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show certificate ${i + 1}`}
                        className={`h-3 w-3 rounded-full transition ${i === index
                          ? "bg-[#d5a63c]"
                          : "bg-white/80 hover:bg-white"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous certificate"
                    className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:left-5 sm:h-14 sm:w-14"
                  >
                    <ChevronLeft size={26} />
                  </button>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next certificate"
                    className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#14246b] text-white shadow-lg transition hover:bg-[#1c3190] sm:right-5 sm:h-14 sm:w-14"
                  >
                    <ChevronRight size={26} />
                  </button>
                </div>

                {/* Caption */}
                <div className="bg-[#14295f] px-5 py-6 text-center sm:px-6">
                  <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-[#d5a63c] sm:text-sm">
                    {current.authority}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {current.title}
                  </h3>

                  {/* Open PDF */}
                  {current.pdf && (
                    <a
                      href={current.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                    >
                      View Full PDF
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: Request a Quote */}
            <div className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10 lg:mt-12">
              <h2 className="text-3xl font-extrabold text-[#0f1f4d] sm:text-5xl">
                Request <span className="text-[#14246b]">A Quote</span>
              </h2>

              {/* <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-4 sm:mt-10 sm:space-y-5"
              >
                <input
                  className={pillField}
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                />
                <textarea
                  className={textareaField}
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  aria-label="Your Message"
                  required
                />

                <input
                  className={pillField}
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />

                <input
                  className={pillField}
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  aria-label="Mobile"
                  required
                />

                <select
                  className={pillField}
                  name="service"
                  aria-label="Looking for?"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Looking for?
                  </option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <input
                  className={pillField}
                  name="location"
                  placeholder="Your Location"
                  aria-label="Your Location"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#0f1f4d] px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-[#14246b] disabled:cursor-not-allowed disabled:opacity-60 sm:py-6 sm:text-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight size={22} />}
                </button>

                {status.text && (
                  <p
                    className={`text-sm font-semibold ${status.type === "success" ? "text-green-700" : "text-red-600"
                      }`}
                  >
                    {status.text}
                  </p>
                )}
              </form> */}



              <form
  onSubmit={handleSubmit}
  className="mt-8 space-y-4 sm:mt-10 sm:space-y-5"
>
  <input
    className={pillField}
    name="name"
    placeholder="Your Name"
    aria-label="Your Name"
    required
  />

  <input
    className={pillField}
    type="email"
    name="email"
    placeholder="Email"
    aria-label="Email"
    required
  />

  <input
    className={pillField}
    type="tel"
    name="mobile"
    placeholder="Mobile"
    aria-label="Mobile"
    required
  />

  <select
    className={pillField}
    name="service"
    aria-label="Looking for?"
    defaultValue=""
    required
  >
    <option value="" disabled>
      Looking for?
    </option>

    {serviceOptions.map((service) => (
      <option key={service} value={service}>
        {service}
      </option>
    ))}
  </select>

  <input
    className={pillField}
    name="location"
    placeholder="Your Location"
    aria-label="Your Location"
    required
  />

  <textarea
    className={textareaField}
    name="message"
    rows={4}
    placeholder="Your Message"
    aria-label="Your Message"
    required
  />

  <button
    type="submit"
    disabled={loading}
    className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#0f1f4d] px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-[#14246b] disabled:cursor-not-allowed disabled:opacity-60 sm:py-6 sm:text-xl"
  >
    {loading ? "Sending..." : "Send Message"}
    {!loading && <ArrowRight size={22} />}
  </button>

  {status.text && (
    <p
      className={`text-sm font-semibold ${
        status.type === "success" ? "text-green-700" : "text-red-600"
      }`}
    >
      {status.text}
    </p>
  )}
</form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================
   ABOUT PAGE
========================= */

export default function About() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-[#d8dff0] text-[#10213e]">

      {/* =========================
          1. HERO
      ========================= */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#12345e] to-[#382154] text-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-400/15 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20 lg:min-h-[690px] lg:px-10">
          <Reveal direction="left" className="relative z-10">
            <Eyebrow light>About Our Security Services</Eyebrow>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
              Protecting What
              <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                Matters Most.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Professional security guard services built around vigilance,
              disciplined conduct and the protection of people and property.
              We work with clients to understand their premises and security
              requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-xl shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:shadow-amber-400/40"
              >
                Discuss Your Security Needs
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("security-services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300">
              {[
                "Security-Focused",
                "Site-Specific Planning",
                "Clear Communication",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08} className="relative mx-auto w-full max-w-xl">
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-blue-400/35 via-transparent to-amber-400/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/10 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <div className="relative h-[330px] overflow-hidden rounded-[24px] sm:h-[440px]">
                  <img
                    src={`${ASSETS}/security-img2.webp`}
                    alt="Security guard services"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061226] via-[#061226]/5 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                      Professional Security
                    </span>
                    <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                      Safety Begins With Preparedness.
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-1 flex items-center gap-3 rounded-2xl border border-white/80 bg-white p-4 text-slate-900 shadow-2xl sm:-left-7 sm:p-5"
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
          </Reveal>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-amber-300 to-purple-500" />
      </section>

      {/* =========================
          2. INTRODUCTION
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#b7c9e5] via-[#c9bee0] to-[#e7cba1] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-sky-400/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/20 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[38px] border-l-4 border-t-4 border-amber-400 sm:-left-7 sm:-top-7 sm:h-36 sm:w-36" />

              <div className="relative overflow-hidden rounded-[28px] border-4 border-white/80 shadow-[0_30px_75px_rgba(15,23,42,0.22)]">
                <img
                  src={`${ASSETS}/security-img.avif`}
                  alt="Professional security guard on duty"
                  loading="lazy"
                  className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[470px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07152d]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                    Our Purpose
                  </p>
                  <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight sm:text-3xl">
                    Building Safer Spaces, Every Day.
                  </h3>
                </div>
              </div>

              <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white p-4 shadow-xl sm:-right-6 sm:p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-700">
                  <BadgeCheck size={25} />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900">
                    Trust & Responsibility
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    A site-focused approach
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <Eyebrow>Who We Are</Eyebrow>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#10213e] sm:text-4xl lg:text-[46px]">
              Security Is More Than Presence.
              <span className="mt-2 block bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                It Is Responsibility.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              Security is an important part of maintaining a safe and organised
              environment. It involves awareness, clear responsibilities,
              professional conduct and a considered response to situations
              that may affect people or property.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
              Our approach focuses on understanding each location and the
              client's expectations before discussing an appropriate security
              guard arrangement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Attention to assigned access points",
                "Clear communication and reporting expectations",
                "Security responsibilities suited to the site",
                "Professional conduct and respectful interactions",
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

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#10274b] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-950/15 transition duration-300 hover:-translate-y-1 hover:bg-blue-800"
            >
              Talk to Our Team
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* =========================
          3. OUR PRINCIPLES
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#c0cce4] via-[#d1c3e4] to-[#e9d3b5] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Guides Us"
            title="The Principles Behind Our Security Approach"
            description="Responsible security starts with clear expectations, awareness of the surroundings and professional conduct."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {securityPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full overflow-hidden rounded-[24px] border border-white/80 bg-white/90 p-7 shadow-[0_15px_40px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_26px_55px_rgba(15,23,42,0.17)] sm:p-8"
                  >
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100/70 transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative flex items-center justify-between">
                      <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${item.color}`}>
                        <Icon size={29} strokeWidth={1.8} />
                      </div>

                      <span className="text-3xl font-black text-slate-100">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="relative mt-7 text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="relative mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>

                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${item.color}`} />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          4. SECURITY SERVICES
      ========================= */}

      <section
        id="security-services"
        className="relative overflow-hidden bg-gradient-to-br from-[#d3def0] via-[#d6cbe8] to-[#f0dfc5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Security Guard Services"
            title={
              <>
                Protection Tailored to{" "}
                <span className="bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                  Your Environment.
                </span>
              </>
            }
            description="Different premises have different security needs. Explore the types of guard services that can be discussed for your location."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full overflow-hidden rounded-[24px] border border-white/80 bg-white p-6 shadow-[0_14px_38px_rgba(15,23,42,0.09)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.17)] sm:p-7"
                  >
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100/60 transition-transform duration-500 group-hover:scale-150" />

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

                    <button
                      type="button"
                      onClick={() => navigate("/contact")}
                      className="relative mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800"
                    >
                      Enquire Now
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${service.color}`} />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          5. WHY SECURITY MATTERS
      ========================= */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#14345f] to-[#362052] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-blue-400/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <Eyebrow light>Why a Professional Security Approach Matters</Eyebrow>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-[46px]">
              Good Security Starts With
              <span className="mt-2 block text-amber-300">
                Awareness and Accountability.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              A visible security presence works best when responsibilities
              are clear and observations are communicated appropriately.
              Defined procedures help people understand how to manage access
              and raise concerns at the right time.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Eye,
                  title: "Attention to Surroundings",
                  text: "Observe assigned areas and stay attentive to unusual activity.",
                },
                {
                  icon: LockKeyhole,
                  title: "Access Awareness",
                  text: "Follow the agreed procedures for visitors and authorised entry.",
                },
                {
                  icon: Radio,
                  title: "Clear Communication",
                  text: "Report concerns and escalate incidents according to site procedures.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-300 ring-1 ring-white/10">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-br from-blue-400/30 to-amber-400/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="relative h-[340px] overflow-hidden rounded-[22px] sm:h-[450px]">
                  <img
                    src={`${ASSETS}/security-services.jpg`}
                    alt="Security guard service in a professional environment"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061226]/90 via-[#061226]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
                      <ShieldCheck size={17} />
                      A Responsible Approach
                    </div>
                    <h3 className="max-w-md text-2xl font-black leading-tight sm:text-3xl">
                      Every Site Deserves Thoughtful Security Planning.
                    </h3>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-1 rounded-2xl bg-amber-400 p-4 text-slate-950 shadow-2xl sm:-left-6 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck size={28} />
                  <div>
                    <p className="font-extrabold">Safety First</p>
                    <p className="mt-1 text-xs font-medium">
                      People & property
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================
          6. PROPERTY TYPES
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#c2d0e8] via-[#d8cbea] to-[#ead2ae] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where Security Matters"
            title="Support for Different Types of Premises"
            description="The security requirements of a property depend on how it is used, who accesses it and which areas need attention."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {propertyTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <motion.article
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full overflow-hidden rounded-[24px] border border-white/80 bg-white/90 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition-shadow duration-300 hover:shadow-[0_26px_55px_rgba(15,23,42,0.18)] sm:p-8"
                  >
                    <div className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.color}`}>
                      <Icon size={29} />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => navigate("/contact")}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800"
                    >
                      Discuss Requirements
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          7. HOW WE WORK
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#e5cba1] via-[#c9d6ec] to-[#c5b8df] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-400/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="A Clear Process for Discussing Security Needs"
            description="From understanding the site to agreeing on responsibilities, each step helps set expectations before a security arrangement begins."
          />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-blue-300 via-amber-400 to-purple-300 lg:block" />

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="group relative h-full rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_15px_40px_rgba(15,23,42,0.09)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(15,23,42,0.17)] sm:p-7"
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

      {/* =========================
          8. FAQ
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#b9cbe8] via-[#d5c8e8] to-[#efd8b5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
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

                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-blue-800 hover:text-indigo-700"
                  >
                    Contact Our Team
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {securityFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen
                      ? "border-blue-200 shadow-[0_18px_45px_rgba(37,99,235,0.14)]"
                      : "border-white/80 shadow-[0_8px_25px_rgba(15,23,42,0.06)]"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-extrabold leading-6 text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-300 ${isOpen
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

      {/* =========================
          9. FINAL CTA
      ========================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#d5c9e8] via-[#cbd9ee] to-[#e7d2b0] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#07152d] via-[#143660] to-[#352052] p-7 shadow-[0_30px_80px_rgba(15,23,42,0.25)] sm:p-10 lg:p-14">
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
                Share your site location and security requirements so the
                appropriate service arrangement can be discussed with you.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          10. ORIGINAL CERTIFICATE + QUOTE COMPONENT
          DO NOT CHANGE THIS COMPONENT
      ========================= */}

      <CertificationsQuoteSection />
    </main>
  );
}
