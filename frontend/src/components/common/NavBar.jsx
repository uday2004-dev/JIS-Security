// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, Phone, Mail } from "lucide-react";
// import { navigation } from "../../data/navigation";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       {/* Top Bar */}
//       <div className="hidden bg-[#111827] text-white md:block">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
//           <div className="flex items-center gap-6">
//             <a
//               href="tel:+919716380301"
//               className="flex items-center gap-2 hover:text-yellow-400"
//             >
//               <Phone size={15} />
//               +91 9716380301
//             </a>

//             <a
//               href="mailto:yogendrakumar@ptpgs.in"
//               className="flex items-center gap-2 hover:text-yellow-400"
//             >
//               <Mail size={15} />
//               yogendrakumar@ptpgs.in
//             </a>
//           </div>

//           <span>Professional Security & Staffing Solutions</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
//         <Link to="/" onClick={closeMenu}>
//           <div className="text-xl font-bold tracking-tight text-[#111827]">
//             P.T.P.G.S
//           </div>
//         </Link>

//         {/* Desktop */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navigation.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition ${
//                   isActive
//                     ? "text-yellow-600"
//                     : "text-gray-700 hover:text-yellow-600"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           <Link
//             to="/contact"
//             className="rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-400"
//           >
//             Get A Quote
//           </Link>
//         </nav>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="rounded-lg p-2 text-gray-800 md:hidden"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="border-t bg-white px-5 py-5 md:hidden">
//           <nav className="flex flex-col gap-4">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `border-b pb-3 text-sm font-medium ${
//                     isActive ? "text-yellow-600" : "text-gray-700"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             <Link
//               to="/contact"
//               onClick={closeMenu}
//               className="rounded-full bg-yellow-500 px-5 py-3 text-center font-semibold text-black"
//             >
//               Get A Quote
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 bg-white">
      {/* Top contact bar */}
      <div className="bg-[#172333] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="tel:+919716380301"
              className="flex items-center gap-2 transition hover:text-amber-400"
            >
              <Phone size={14} />
        {/* +91 92053 00460 */}
        +91 88001 74283
            </a>

            <a
              href="mailto:yogendrakumar@ptpgs.in"
              className="flex items-center gap-2 break-all transition hover:text-amber-400"
            >
              <Mail size={14} />
              jaiprakash02800@gmail.com
            </a>
          </div>

          <span className="hidden text-slate-300 lg:block">
            Professional Security & Staffing Solutions
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-slate-100">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0"
            aria-label="P.T.P.G.S home"
          >
            <span className="block text-2xl font-extrabold tracking-tight text-[#172333]">
              JIS Security
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-amber-600">
              Security 
            </span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden items-center gap-5 xl:gap-7 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-[13px] font-semibold transition ${
                    isActive
                      ? "text-amber-600"
                      : "text-slate-700 hover:text-amber-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-amber-400 px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-[#172333] transition hover:bg-amber-300"
            >
              Get A Quote
              <span>→</span>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 text-[#172333] transition hover:border-amber-400 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-5 py-5 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "text-amber-600"
                      : "text-slate-700 hover:text-amber-600"
                  }`
                }
              >
                {item.name}
                <ChevronDown
                  size={15}
                  className="-rotate-90 text-slate-400"
                />
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 bg-amber-400 px-5 py-3.5 text-sm font-bold text-[#172333]"
            >
              Get A Quote <span>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;