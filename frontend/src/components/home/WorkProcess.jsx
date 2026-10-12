// const process = [
//   {
//     number: "01",
//     title: "Understand Client Needs",
//     description:
//       "We carefully evaluate your security, staffing and facility requirements.",
//   },
//   {
//     number: "02",
//     title: "Strategic Service Planning",
//     description:
//       "Our experts create a professional operational plan focused on efficiency and safety.",
//   },
//   {
//     number: "03",
//     title: "Professional Team Deployment",
//     description:
//       "Skilled and trained personnel are assigned according to your requirements.",
//   },
//   {
//     number: "04",
//     title: "Ongoing Support",
//     description:
//       "Continuous monitoring and support maintain high service standards.",
//   },
// ];

// const WorkProcess = () => {
//   return (
//     <section className="bg-gray-50 px-5 py-20 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600">
//             Work Process
//           </p>

//           <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
//             How We Work
//           </h2>
//         </div>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {process.map((item) => (
//             <div key={item.number} className="rounded-2xl bg-white p-7">
//               <span className="text-4xl font-bold text-yellow-500">
//                 {item.number}
//               </span>

//               <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

//               <p className="mt-3 text-sm leading-7 text-gray-600">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkProcess;