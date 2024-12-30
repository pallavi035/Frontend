import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import Login from "../pages/student/Login";

const Navbar = () => {

  // let userStore = useSelector()

    let dispatch = useDispatch()
    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate('/landingPage')
  }
  return (
    <nav className="bg-blue-600 fixed top-0 left-0 right-0 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              JobPortal
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/jobs" className="hover:text-gray-200">
              Jobs
            </a>
            <a href="/companies" className="hover:text-gray-200">
              Companies
            </a>
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:flex">
            { Login===false &&<a
              href="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"
            >
              Login
            </a>}
            <li
            onClick={handleLogout}
              href=""
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"
            >
              Logout
            </li>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a
            href="/"
            className="block px-4 py-2 text-sm hover:bg-blue-800"
          >
            Home
          </a>
          <a
            href="/jobs"
            className="block px-4 py-2 text-sm hover:bg-blue-800"
          >
            Jobs
          </a>
          <a
            href="/companies"
            className="block px-4 py-2 text-sm hover:bg-blue-800"
          >
            Companies
          </a>
          { login===false &&<a
            href="/login"
            className="block px-4 py-2 text-sm bg-white text-blue-600 hover:bg-gray-100"
          >
            Login
          </a>}
      { login===true &&<a
            href=""
            className="block px-4 py-2 text-sm bg-white text-blue-600 hover:bg-gray-100"
          >
            Logout
          </a>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../store/UserSlice";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const dispatch = useDispatch();


//   return (
//     <header className="bg-white fixed top-0 left-0 right-0">
//       <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="flex items-center">
//               <img
//                 src="https://cdn2.f-cdn.com/contestentries/2451618/58396217/66d48b766ea37_thumb900.jpg"
//                 alt="Job Portal Logo"
//                 className="h-20 "
//               />
//               {/* <span className="ml-2 text-lg font-bold text-gray-700">JobPortal</span> */}
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="md:flex md:items-center md:gap-12">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                   <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="/jobs"
//                   >
//                     Jobs
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="/companies"
//                   >
//                     Companies
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//             {/* Authentication Buttons */}
//             <div className="flex items-center gap-4">
//               <div className="sm:flex sm:gap-4">
//                 <a
//                   className="rounded-md bg-blue-300 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-green-500"
//                   href="/login"
//                 >
//                   Login
//                 </a>
//                 <button
//                   onClick={() => dispatch(logoutUser())}
//                   className="rounded-md bg-blue-300 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="block md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="size-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-100">
//           <a href="/" className="block px-4 py-2 text-sm text-gray-700">
//             Home
//           </a>
//           <a href="/jobs" className="block px-4 py-2 text-sm text-gray-700">
//             Jobs
//           </a>
//           <a href="/companies" className="block px-4 py-2 text-sm text-gray-700">
//             Companies
//           </a>
//           <a
//             href="/login  "
//             className="block px-4 py-2 text-sm bg-green-600 text-white hover:bg-green-700"
//           >
//             Login
//           </a>
//           <button
//             onClick={() => dispatch(logoutUser())}
//             className="block px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
