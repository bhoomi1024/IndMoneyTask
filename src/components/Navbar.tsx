//src//component//navbar

import React from 'react';
import { FiSearch,  FiX  } from 'react-icons/fi';
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import INDmoney from '../assets/indmoneyLogo.png';

type NavbarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50 flex items-center justify-between">
      {/* Logo */}
      <img
        src= {INDmoney}
        alt="INDmoney Logo"
        className="h-12 w-12"
      />

      {/* Mobile Nav Items */}
      <div className="flex items-center lg:hidden">
        <button className="bg-white text-[#33A34D] border h-8 flex items-center border-[#33A34D] px-4 py-2 rounded-full">
          Login
        </button>
        <div className="ml-4 flex items-center space-x-4">
          <RiCustomerServiceLine size={24} color='#737373'/>
          <FiSearch size={24} color='#737373'/>
          <div onClick={toggleSidebar} className="cursor-pointer">
            {isSidebarOpen ? <FiX size={24} color='#737373'/> : <HiOutlineMenuAlt3 size={24} color='#737373' />}
          </div>
        </div>
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden lg:flex items-center space-x-4">
        <FiSearch size={24} color='#737373' />
        <RiCustomerServiceLine size={24} color='#737373' />
        <button className="bg-white text-[#33A34D] border h-8 flex items-center border-[#33A34D] px-4 py-2 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
