// // import { Link } from "react-router-dom";
// // import { Phone, Mail, MapPin } from "lucide-react";

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#111827] text-white">
// //       <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
// //         {/* About */}
// //         <div>
// //           <h2 className="mb-5 text-2xl font-bold">P.T.P.G.S</h2>

// //           <p className="text-sm leading-7 text-gray-300">
// //             We provide trusted security, staffing and facility management
// //             solutions tailored to the operational and safety needs of
// //             businesses and institutions.
// //           </p>
// //         </div>

// //         {/* Quick Links */}
// //         <div>
// //           <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

// //           <div className="flex flex-col gap-3 text-sm text-gray-300">
// //             <Link to="/" className="hover:text-yellow-400">
// //               Home
// //             </Link>

// //             <Link to="/about" className="hover:text-yellow-400">
// //               About Us
// //             </Link>

// //             <Link to="/services" className="hover:text-yellow-400">
// //               Services
// //             </Link>

// //             <Link to="/certifications" className="hover:text-yellow-400">
// //               Certifications
// //             </Link>

// //             <Link to="/contact" className="hover:text-yellow-400">
// //               Contact
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Services */}
// //         <div>
// //           <h3 className="mb-5 text-lg font-semibold">Our Services</h3>

// //           <div className="flex flex-col gap-3 text-sm text-gray-300">
// //             <span>Security Services</span>
// //             <span>Housekeeping</span>
// //             <span>Facility Management</span>
// //             <span>Corporate Staffing</span>
// //             <span>Manpower Support</span>
// //           </div>
// //         </div>

// //         {/* Contact */}
// //         <div>
// //           <h3 className="mb-5 text-lg font-semibold">Contact</h3>

// //           <div className="flex flex-col gap-5 text-sm text-gray-300">
// //             <a
// //               href="tel:+919716380301"
// //               className="flex gap-3 hover:text-yellow-400"
// //             >
// //               <Phone size={18} />
// //               <span>+91 9716380301</span>
// //             </a>

// //             <a
// //               href="mailto:yogendrakumar@ptpgs.in"
// //               className="flex gap-3 break-all hover:text-yellow-400"
// //             >
// //               <Mail size={18} />
// //               <span>yogendrakumar@ptpgs.in</span>
// //             </a>

// //             <div className="flex gap-3">
// //               <MapPin size={18} className="shrink-0" />
// //               <span>
// //                 Near-Bani Camp, 25 Foota Road, Jai Vihar, South West Delhi
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="border-t border-gray-700 px-5 py-5 text-center text-sm text-gray-400">
// //         © 2026 P.T.P.G.S. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;




// import { useState } from "react";

// const Footer = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     service: "",
//     location: "",
//   });

//   const quickLinks = [
//     ["Home", "/"],
//     ["About Us", "/about"],
//     ["Services", "/services"],
//     ["Industries", "/industries"],
//     ["Certifications", "/certifications"],
//     ["Gallery", "/gallery"],
//     ["Blog", "/blog"],
//     ["Contact", "/contact"],
//   ];

//   const services = [
//     ["House Keeping", "/services"],
//     ["Office Boy Supplies", "/services"],
//     ["Warehouse Picker", "/services"],
//     ["Front Office Assistant", "/services"],
//     ["Supervisor Supplies", "/services"],
//     ["Executives Recruitment", "/services"],
//     ["Security Guard Service", "/services"],
//     ["House Maid Services", "/services"],
//   ];

//   const expertise = [
//     "House Keeping Services",
//     "Facility Management",
//     "Office Cleaning",
//     "Security Services",
//     "Manpower Supply",
//     "Contract Staffing",
//     "Industrial Cleaning",
//     "Corporate Services",
//     "Recruitment Solutions",
//     "Facility Outsourcing",
//     "Permanent Staffing",
//     "Support Services",
//   ];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Connect this form to your backend API to submit enquiries.
//     console.log("Quote request:", form);
//   };

//   const inputClass =
//     "w-full min-w-0 border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 transition focus:border-amber-400";

//   return (
//     <footer className="bg-[#101820] text-slate-300">
//       {/* QUOTE SECTION */}
//       <div className="border-b border-white/10">
//         <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10 lg:py-16">

//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
//               Get In Touch
//             </p>

//             <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
//               Request A <span className="text-amber-400">Quote</span>
//             </h2>

//             <div className="mt-5 h-1 w-16 bg-amber-400" />

//             <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
//               Tell us about your requirements. Our team can help you explore
//               security, staffing and facility management solutions tailored
//               to your business.
//             </p>

//             <div className="mt-8 flex items-start gap-4">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-amber-400/40 text-xl text-amber-400">
//                 ↗
//               </div>
//               <div>
//                 <p className="font-semibold text-white">
//                   Let's discuss your requirements
//                 </p>
//                 <p className="mt-1 text-sm text-slate-400">
//                   Professional solutions for your business.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your Name *"
//               aria-label="Your name"
//               autoComplete="name"
//               required
//               className={inputClass}
//             />

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email Address *"
//               aria-label="Email address"
//               autoComplete="email"
//               required
//               className={inputClass}
//             />

//             <input
//               type="tel"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               placeholder="Mobile Number *"
//               aria-label="Mobile number"
//               autoComplete="tel"
//               required
//               className={inputClass}
//             />

//             <select
//               name="service"
//               value={form.service}
//               onChange={handleChange}
//               aria-label="Select a service"
//               required
//               className={`${inputClass} ${
//                 form.service ? "text-white" : "text-slate-400"
//               }`}
//             >
//               <option value="" disabled className="bg-[#101820]">
//                 Select Service *
//               </option>
//               <option value="Security" className="bg-[#101820]">
//                 Security Services
//               </option>
//               <option value="Housekeeping" className="bg-[#101820]">
//                 Housekeeping
//               </option>
//               <option value="Staffing" className="bg-[#101820]">
//                 Manpower & Staffing
//               </option>
//               <option value="Facility Management" className="bg-[#101820]">
//                 Facility Management
//               </option>
//               <option value="Other" className="bg-[#101820]">
//                 Other
//               </option>
//             </select>

//             <input
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               placeholder="Your Location"
//               aria-label="Your location"
//               autoComplete="address-level2"
//               className={`${inputClass} sm:col-span-2`}
//             />

//             <button
//               type="submit"
//               className="flex items-center justify-center gap-3 bg-amber-400 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-[#101820] transition hover:bg-amber-300 sm:col-span-2 sm:justify-between"
//             >
//               Send Message <span className="text-lg">→</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
//         <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

//           {/* COMPANY INFO */}
//           <div>
//             <a href="/" className="inline-flex items-center gap-3">
//               <span className="flex h-12 w-12 items-center justify-center border-2 border-amber-400 text-xl font-black text-amber-400">
//                 S
//               </span>

//               <span className="text-xl font-extrabold tracking-wide text-white">
//                 YOUR COMPANY
//                 <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-400">
//                   Security & Staffing
//                 </span>
//               </span>
//             </a>

//             <p className="mt-6 text-sm leading-7 text-slate-400">
//               We are committed to providing dependable security, staffing
//               and facility management services with professionalism,
//               discipline and a focus on client satisfaction.
//             </p>

//             <div className="mt-6 flex gap-3">
//               {[
//                 ["Facebook", "f"],
//                 ["Instagram", "◎"],
//                 ["LinkedIn", "in"],
//               ].map(([label, symbol]) => (
//                 <a
//                   key={label}
//                   href="#"
//                   aria-label={label}
//                   className="flex h-10 w-10 items-center justify-center border border-white/15 text-sm font-bold text-white transition hover:border-amber-400 hover:bg-amber-400 hover:text-[#101820]"
//                 >
//                   {symbol}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               Quick Links
//             </h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <ul className="space-y-3">
//               {quickLinks.map(([label, href]) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     className="group flex items-center gap-2 text-sm transition hover:text-amber-400"
//                   >
//                     <span className="text-amber-400 transition group-hover:translate-x-1">
//                       ›
//                     </span>
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               Our Services
//             </h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <ul className="space-y-3">
//               {services.map(([label, href]) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     className="group flex items-start gap-2 text-sm leading-5 transition hover:text-amber-400"
//                   >
//                     <span className="text-amber-400">›</span>
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="text-lg font-bold text-white">
//               Contact
//             </h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <div className="space-y-6">
//               <div className="flex items-start gap-3">
//                 <span className="text-xl text-amber-400">☎</span>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Phone
//                   </p>
//                   <a
//                     href="tel:+910000000000"
//                     className="mt-2 block text-sm leading-6 text-slate-400 hover:text-amber-400"
//                   >
//                     +91 XXXXX XXXXX
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-xl text-amber-400">✉</span>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Email
//                   </p>
//                   <a
//                     href="mailto:info@example.com"
//                     className="mt-2 block break-all text-sm leading-6 text-slate-400 hover:text-amber-400"
//                   >
//                     info@example.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="text-xl text-amber-400">⌖</span>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Location
//                   </p>
//                   <p className="mt-2 text-sm leading-7 text-slate-400">
//                     Add your registered office address here.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* AREAS OF EXPERTISE */}
//         <div className="mt-14 border-t border-white/10 pt-8">
//           <h3 className="text-lg font-bold text-white">
//             Areas of Expertise
//           </h3>
//           <div className="mb-6 mt-3 h-1 w-10 bg-amber-400" />

//           <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
//             {expertise.map((item) => (
//               <div key={item} className="flex items-center gap-3 text-sm">
//                 <span className="text-amber-400">✓</span>
//                 <span className="transition hover:text-amber-400">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* COPYRIGHT BAR */}
//       <div className="border-t border-white/10 bg-[#0b1117]">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-400 sm:px-8 md:flex-row md:text-left lg:px-10">
//           <p>
//             © {new Date().getFullYear()} YOUR COMPANY. All Rights Reserved.
//           </p>

//           <div className="flex gap-5">
//             <a href="/privacy-policy" className="hover:text-amber-400">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="hover:text-amber-400">
//               Terms & Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

// const quickLinks = [
//   ["Home", "/"],
//   ["About Us", "/about"],
//   ["Services", "/services"],
//   ["Industries", "/industries"],
//   ["Certifications", "/certifications"],
//   ["Gallery", "/gallery"],
//   ["Blog", "/blog"],
//   ["Contact", "/contact"],
// ];

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

// const expertise = [
//   "House Keeping Services",
//   "Facility Management",
//   "Office Cleaning",
//   "Security Services",
//   "Manpower Supply",
//   "Contract Staffing",
//   "Industrial Cleaning",
//   "Corporate Services",
//   "Recruitment Solutions",
//   "Facility Outsourcing",
//   "Permanent Staffing",
//   "Support Services",
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-[#172333] text-slate-300">
//       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
//           {/* Company information */}
//           <div>
//             <Link to="/" className="inline-block">
//               <span className="block text-2xl font-extrabold text-white">
//                 JIS
//               </span>
//               <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
//                 Security & Staffing
//               </span>
//             </Link>

//             <p className="mt-5 text-sm leading-7 text-slate-400">
//               JIS offers facility management, housekeeping and staffing
//               services focused on professional support and client
//               requirements.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-white"
//             >
//               Contact Our Team <ArrowUpRight size={16} />
//             </Link>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h3 className="text-lg font-bold text-white">Quick Links</h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <ul className="space-y-3">
//               {quickLinks.map(([label, href]) => (
//                 <li key={label}>
//                   <Link
//                     to={href}
//                     className="group flex items-center gap-2 text-sm transition hover:text-amber-400"
//                   >
//                     <span className="text-amber-400 transition group-hover:translate-x-1">
//                       ›
//                     </span>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold text-white">Our Services</h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <Link
//                     to="/services"
//                     className="group flex items-start gap-2 text-sm leading-6 transition hover:text-amber-400"
//                   >
//                     <span className="text-amber-400">›</span>
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-bold text-white">Contact</h3>
//             <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

//             <div className="space-y-5">
//               <div className="flex items-start gap-3">
//                 <Phone size={18} className="mt-1 shrink-0 text-amber-400" />
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Phone
//                   </p>
//                   <a
//                     href="tel:+919716380301"
//                     className="mt-2 block text-sm leading-6 text-slate-400 hover:text-amber-400"
//                   >
//                     +91 870 010 4667
//                   </a>
//                   <a
//                     href="tel:+919217305046"
//                     className="block text-sm leading-6 text-slate-400 hover:text-amber-400"
//                   >
//                     +91 88001 74283
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Mail size={18} className="mt-1 shrink-0 text-amber-400" />
//                 <div className="min-w-0">
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Email
//                   </p>
//                   <a
//                     href="mailto:yogendrakumar@ptpgs.in"
//                     className="mt-2 block break-all text-sm leading-6 text-slate-400 hover:text-amber-400"
//                   >
//                     jaiprakash02800@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin size={18} className="mt-1 shrink-0 text-amber-400" />
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-white">
//                     Location
//                   </p>
//                   <p className="mt-2 text-sm leading-7 text-slate-400">
//                     H-8 G/F, Khata No. 51/21,
//                     Jai Vihar Phase-1, Najafgarh,
//                     New Delhi, Delhi - 110043
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Areas of expertise */}
//         <div className="mt-12 border-t border-white/10 pt-8">
//           <h3 className="text-lg font-bold text-white">
//             Areas of Expertise
//           </h3>
//           <div className="mb-6 mt-3 h-1 w-10 bg-amber-400" />

//           <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
//             {expertise.map((item) => (
//               <div key={item} className="flex items-center gap-3 text-sm">
//                 <span className="text-amber-400">✓</span>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-white/10 bg-[#111b28]">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-400 sm:px-8 md:flex-row lg:px-10">
//           <p>
//             © {new Date().getFullYear()} P.T.P.G.S. All Rights Reserved.
//           </p>
//           <Link to="/contact" className="hover:text-amber-400">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Security Services", "/services"],
  ["Certifications", "/certifications"],
  ["Contact Us", "/contact"],
];

const services = [
  "Security Guard Services",
  "Armed Security Services",
  "Unarmed Security Guards",
  "Corporate Security",
  "Industrial Site Security",
  "Residential Security",
  "Event Security",
  "Security Supervisors",
];

const expertise = [
  "Manned Guarding",
  "Corporate Security",
  "Industrial Security",
  "Residential Protection",
  "Access Control",
  "Visitor Management",
  "Security Supervision",
  "Site Security",
  "Patrolling Services",
  "Premises Monitoring",
  "Safety & Security Checks",
  "Security Personnel Deployment",
];

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Company Information */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber-400 text-[#111827]">
                <ShieldCheck size={27} />
              </span>

              <span>
                <span className="block text-2xl font-extrabold text-white">
                  JIS
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
                  Security Services
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              JIS provides professional security services focused on
              personnel protection, premises security, access control
              and dependable on-site security support.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-white"
            >
              Request Security Services
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="group flex items-center gap-2 text-sm transition hover:text-amber-400"
                  >
                    <span className="text-amber-400 transition group-hover:translate-x-1">
                      ›
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Services */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Security Services
            </h3>
            <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-start gap-2 text-sm leading-6 transition hover:text-amber-400"
                  >
                    <span className="text-amber-400">›</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <div className="mb-5 mt-3 h-1 w-10 bg-amber-400" />

            <div className="space-y-5">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Call Us
                  </p>

                  <a
                    href="tel:+918700104667"
                    className="mt-2 block text-sm leading-6 text-slate-400 transition hover:text-amber-400"
                  >
                    +91 870 010 4667
                  </a>

                  <a
                    href="tel:+918800174283"
                    className="block text-sm leading-6 text-slate-400 transition hover:text-amber-400"
                  >
                    +91 88001 74283
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Email Us
                  </p>

                  <a
                    href="mailto:jaiprakash02800@gmail.com"
                    className="mt-2 block break-all text-sm leading-6 text-slate-400 transition hover:text-amber-400"
                  >
                    jaiprakash02800@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-amber-400"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    Office Address
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    H-8 G/F, Khata No. 51/21,
                    Jai Vihar Phase-1, Najafgarh,
                    New Delhi, Delhi - 110043
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-lg font-bold text-white">
            Our Security Expertise
          </h3>
          <div className="mb-6 mt-3 h-1 w-10 bg-amber-400" />

          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <ShieldCheck
                  size={15}
                  className="shrink-0 text-amber-400"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-[#0b1220]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-400 sm:px-8 md:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} JIS Security All Rights Reserved.
          </p>

          <Link
            to="/contact"
            className="transition hover:text-amber-400"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;