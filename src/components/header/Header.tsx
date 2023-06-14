import React, { useEffect, useState } from "react";
import { InstagramIcon } from "../utils/icons/InstagramIcon";
import { LinkedinIcon } from "../utils/icons/LinkedinIcon";
import { EmailIcon } from "../utils/icons/EmailIcon";

// ********** BASIC HEADER
// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-slate-200">
//       <div className="container mx-auto px-6 py-3">
//         <div className="flex justify-between items-center md:px-10">
//           <div className="hidden md:block md:w-1/3">
//             <nav>
//               <ul className="flex justify-start">
//                 <li className="px-2">Work</li>
//                 <li className="px-2">Misc</li>
//                 <li className="px-2">About</li>
//                 <li className="px-2">Contact</li>
//               </ul>
//             </nav>
//           </div>
//           <div className="text-center md:w-1/3">Logo</div>
//           <div className="flex md:w-1/3 justify-end">
//             <ul className="hidden md:flex my-auto">
//               <li className="px-2">
//                 <InstagramIcon />
//               </li>
//               <li className="px-2">
//                 <LinkedinIcon />
//               </li>
//               <li className="px-2">
//                 <EmailIcon />
//               </li>
//             </ul>
//             <div className="md:hidden">
//               <button onClick={() => setIsOpen(!isOpen)}>Hamburger</button>
//             </div>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="md:hidden text-center">
//             <ul>
//               <li className="px-2">Work</li>
//               <li className="px-2">Misc</li>
//               <li className="px-2">About</li>
//               <li className="px-2">Contact</li>
//               <li className="px-2">
//                 <InstagramIcon />
//               </li>
//               <li className="px-2">
//                 <LinkedinIcon />
//               </li>
//               <li className="px-2">
//                 <EmailIcon />
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };
// **********

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed w-full z-50 bg-slate-200 transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center md:px-10">
          <div className="hidden md:block md:w-1/3">
            <nav>
              <ul className="flex justify-start">
                <li className="px-2">Work</li>
                <li className="px-2">Misc</li>
                <li className="px-2">About</li>
                <li className="px-2">Contact</li>
              </ul>
            </nav>
          </div>
          <div className="relative text-center md:w-1/3 z-50">Logo</div>
          <div className="flex md:w-1/3 justify-end">
            <ul className="hidden md:flex my-auto">
              <li className="px-2">
                <InstagramIcon />
              </li>
              <li className="px-2">
                <LinkedinIcon />
              </li>
              <li className="px-2">
                <EmailIcon />
              </li>
            </ul>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>Hamburger</button>
            </div>
          </div>
        </div>
        <div
          style={{
            transition: "opacity 0.5s",
            opacity: isOpen ? "100" : "0",
            visibility: isOpen ? "visible" : "hidden",
          }}
          className={`fixed top-0 left-0 w-full h-screen pt-20 bg-slate-200 z-40 flex flex-col justify-center items-center`}
        >
          <ul className="space-y-4 text-center">
            <li className="px-2 py-1 text-lg">Work</li>
            <li className="px-2 py-1 text-lg">Misc</li>
            <li className="px-2 py-1 text-lg">About</li>
            <li className="px-2 py-1 text-lg">Contact</li>
          </ul>
          <ul className="absolute bottom-0 mb-10 flex space-x-4">
            <li className="px-2 py-1 text-lg">
              <InstagramIcon />
            </li>
            <li className="px-2 py-1 text-lg">
              <LinkedinIcon />
            </li>
            <li className="px-2 py-1 text-lg">
              <EmailIcon />
            </li>
          </ul>
          <button
            className="absolute top-0 right-0 mt-6 mr-6"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </header>
  );
};
