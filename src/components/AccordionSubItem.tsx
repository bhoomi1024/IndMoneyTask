// src/components/AccordionSubItem.tsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type AccordionSubItemProps = {
  title: string;
  links?: { name: string, url: string }[]; // Optional links
  url?: string; // Optional URL for direct links
};

const AccordionSubItem: React.FC<AccordionSubItemProps> = ({ title, links = [], url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (url) {
      window.location.href = url; // Open URL in the same window
    } else {
      setIsOpen(!isOpen); // Toggle dropdown for links
    }
  };

  return (
    <div className='border-b w-full'>
      <button
        className="w-full flex justify-between items-center text-left py-2 px-4 font-light bg-gray-100 border-0 focus:outline-none focus:ring-0"
        onClick={handleClick}
      >
        <span>{title}</span>
        {links.length > 0 && (isOpen ? <FiChevronUp size={18} color='#737373' /> : <FiChevronDown size={18} color='#737373' />)}
      </button>
      {isOpen && links.length > 0 && (
        <div className='w-full text-xs px-4'>
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block py-2 w-full text-sm"
              rel='noopener noreferrer'
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionSubItem;
