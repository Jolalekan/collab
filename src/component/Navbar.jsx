import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { menuItems } from "../data/menu";
import OutsideClickHandler from "react-outside-click-handler";
import { FaChevronDown, FaRocket, FaChartLine, FaShieldAlt, FaCogs } from "react-icons/fa"; // Icons for submenu

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu state
  const [scrolledPastHero, setScrolledPastHero] = useState(false); // Scroll state
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered menu item
  const menuRef = useRef(null);
  const tl = useRef(null);
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  // Handle scroll to detect if user has scrolled past the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Assuming hero section is 100vh
      if (window.scrollY > heroHeight) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle responsive behavior (mobile menu animation)
  useEffect(() => {
    if (menuRef.current && !tl.current) {
      tl.current = gsap.timeline({ paused: true }).to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Play or reverse the menu animation based on `open` state
  useEffect(() => {
    if (tl.current) {
      if (open) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Handle navigation with menu close
  const handleNavigation = (path) => {
    setOpen(false);
    navigate(path);
  };

  // Handle hover with delay
  const handleMouseEnter = (itemName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setHoveredItem(itemName); // Set hovered item
  };

  const handleMouseLeave = () => {
    // Set a delay before clearing the hovered item
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay
  };

  return (
    <header className="w-full">
      {/* Navbar */}
      <div
        className={`bg-blue-950 flex-wrap fixed w-full z-50 flex justify-between items-center px-4 md:px-8 lg:px-24 transition-colors duration-300 ${
          open ? "bg-blue-950" : scrolledPastHero
        }`}
      >
        {/* Logo */}
        <div className="">
          <a href="#" onClick={() => navigate("/")} className="text-xl font-medium">
            <div className="flex gap-2 items-center">
              <img src="/assets/logo.png" height={100} width={100} alt="Logo" />
              <span className="text-sm lg:text-lg leading-tight text-white font-bold">
                Collab
              </span>
            </div>
          </a>
        </div>

        {/* Toggle button for mobile view */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <img src="/assets/cancel.png" alt="Close menu" className="w-8 h-8" />
            ) : (
              <svg width="32" height="32" viewBox="0 0 23 23">
                <path strokeWidth="3" stroke="white" strokeLinecap="round" d="M 5 2.5 L 20 2.5" />
                <path strokeWidth="3" stroke="white" strokeLinecap="round" d="M 4 9.423 L 20 9.423" />
                <path strokeWidth="3" stroke="white" strokeLinecap="round" d="M 2 16.346 L 20 16.346" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-medium text-lg">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)} // Set hover state with delay
                onMouseLeave={handleMouseLeave} // Clear hover state with delay
              >
                <div className="flex items-center gap-x-2 text-white font-medium text-sm hover:opacity-80 transition-colors duration-300 cursor-pointer">
                  <a onClick={() => handleNavigation(item.path)}>{item.name}</a>
                  {item.submenu && (
                    <span>
                      <FaChevronDown className="text-sm" />
                    </span>
                  )}
                </div>
                {item.submenu && hoveredItem === item.name && ( // Render submenu if hovered
                  <ul
                       className="text-sm cursor-pointer absolute top-full left-0 bg-gradient-to-b from-blue-50 to-white shadow-2xl rounded-lg mt-2 z-50 flex flex-col py-2 px-4 w-28"
                    onMouseEnter={() => handleMouseEnter(item.name)} // Keep submenu open when hovering over it
                    onMouseLeave={handleMouseLeave} // Close submenu with delay
                  >
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem.name}
                        className="px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                      >
                        <a
                          onClick={() => handleNavigation(subItem.path)}
                          className="flex items-center gap-3"
                        >
                          <div>
                            <p className="font-semibold text-gray-800">{subItem.name}</p>
                            <p className="text-sm text-gray-500">{subItem.description}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="hidden md:block">
          <div className="md:flex gap-x-2">
            <div className="hover:opacity-90  cursor-pointer border px-2 rounded-full py-1 font-medium text-sm text-white">
              Login
            </div>
            <div className="hover:opacity-90 cursor-pointer border px-2 rounded-full py-1 bg-white text-black font-medium text-sm">
              Create account
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div
          ref={menuRef}
          className="bg-gradient-to-b from-blue-50 to-white fixed top-20 left-0 w-full shadow-lg z-40 overflow-hidden lg:hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <ul className="flex flex-col items-center gap-5 font-medium text-xl p-6">
            {menuItems.map((item) => (
              <li key={item.name} className="py-2 w-full text-center border-b border-gray-100">
                <a onClick={() => handleNavigation(item.path)}>{item.name}</a>
                {item.submenu && ( // Render submenu in mobile view
                  <ul className="mt-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name} className="py-1">
                        <a onClick={() => handleNavigation(subItem.path)}>
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </header>
  );
};

export default Navbar;


// import React from 'react'
// import { menuItems } from '../data/menu'

// const Navbar = () => {
//   return (
//     <div className='relative p-6 border-b'>
//       <div className='flex justify-between text-white leading-tight '>
//         {/* LEFT */}
//         <div>
//           <div className='flex gap-x-2 items-center'>
//             <div className='flex'>

//             <span><img src="/assets/logo.png" className='flex w-16 h-16' alt="" /></span>
//             </div>
//             <span>2</span>
//           </div>
//         </div>
//         {/* MIDDLE */}
//         <div >
//           <div className='flex gap-x-4'>
//           {menuItems.map((menu)=>(
//               <div className='flex items-center gap-x-2 cursor-pointer  '>{menu.name} <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div>
//           ))}
// {/* 
//           <div className='flex items-center gap-x-2 cursor-pointer  '>Product <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div>
//           <div className='flex items-center gap-x-2 cursor-pointer '> Resources <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div>
//           <div className='flex items-center gap-x-2 cursor-pointer  '>Pricing <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div>
//           <div className='flex items-center gap-x-2 cursor-pointer ' >Security <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div>
//           <div className='flex items-center gap-x-2 cursor-pointer  '>Contact <span><img src="/assets/chevrondown.png" height={12} width={12} alt=""  /></span> </div> */}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div >
//           <div className='flex gap-x-2'>

//           <div className='border px-2 rounded-full py-1 font-medium text-sm'>Login</div>
//           <div className='border px-2 rounded-full py-1 bg-white text-black font-medium text-sm'>Create account</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar