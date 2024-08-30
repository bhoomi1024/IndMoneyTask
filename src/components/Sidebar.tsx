import React from 'react';
import AccordionItem from './AccordionItem';
import { sidebarData } from '../data/sidebarData';
import appleLogo from '../assets/appleLogo.jpg';
import playstoreLogo from '../assets/playstoreLogo.png';
import rating from '../assets/ratingfourpointseven.png';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-40 lg:hidden`}
      style={{ maxHeight: '100vh', marginTop: '56px' }}
    >
      <div className="overflow-y-auto h-full py-4 flex flex-col">
        {/* Sidebar Content */}
        <div className="flex-grow mb-16">
          <div className="lg:hidden flex justify-center mt-6 mb-4">
            <button className="w-30 py-2 px-3 rounded-full bg-[#33A34D] text-white text-sm font-normal shadow-md transition duration-300">
              Open Demat Account
            </button>
          </div>

          {/* Map through sidebar data */}
          <div className='border-b'>
            {sidebarData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                url={item.url}
                subItems={item.subItems}
              />
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gray-100 mx-4 mb-12 h-300 rounded-lg p-4">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-lg font-medium">DOWNLOAD APP</h3>
              <p className="text-sm text-[#33A34D]">1 Crore+ Downloads</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <img
                src={appleLogo}
                alt="Apple Logo"
                className="h-6"  // Reduced size
              />
              <div className="flex items-center ml-2">
                <img
                  src={rating}
                  alt="Apple Rating"
                  className="h-4 mr-1"  // Reduced size
                />
                <span className="text-sm">4.7</span>  
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={playstoreLogo}
                alt="Play Store Logo"
                className="h-6"  // Reduced size
              />
              <div className="flex items-center ml-2">
                <img
                  src={rating}
                  alt="Play Store Rating"
                  className="h-4 mr-1"  // Reduced size
                />
                <span className="text-sm">4.6</span>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
