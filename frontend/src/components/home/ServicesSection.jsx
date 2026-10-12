// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { services } from "../../data/services";

// const ServicesSection = () => {
//   return (
//     <section className="bg-white px-5 py-20 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
//               Our Services
//             </p>

//             <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
//               Professional Services
//             </h2>
//           </div>

//           <Link
//             to="/services"
//             className="flex items-center gap-2 font-semibold text-gray-900 hover:text-yellow-600"
//           >
//             View All Services
//             <ArrowUpRight size={18} />
//           </Link>
//         </div>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group overflow-hidden rounded-2xl border border-gray-200"
//             >
//               <div className="h-52 bg-gray-200 transition duration-500 group-hover:scale-105" />

//               <div className="relative bg-white p-6">
//                 <h3 className="text-xl font-bold">{service.title}</h3>

//                 <p className="mt-3 text-sm leading-7 text-gray-600">
//                   {service.description}
//                 </p>

//                 <Link
//                   to="/services"
//                   className="mt-5 inline-block text-sm font-bold text-yellow-600"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;