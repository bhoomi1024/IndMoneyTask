//src/component//AccordionItem
import React, { useState } from 'react';
import AccordionSubItem from './AccordionSubItem';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type AccordionItemProps = {
  title: string;
  url?: string; // Optional URL for direct links
  subItems?: {
    title: string;
    links?: { name: string, url: string }[]; // Optional links within subItems
    url?: string; // Optional URL for direct links within subItems
  }[];
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, url, subItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSubItems = subItems.length > 0;

  const handleClick = () => {
    if (url) {
      window.location.href = url; // Open link in the same window
    } else {
      setIsOpen(!isOpen); // Toggle dropdown for subItems
    }
  };

  return (
    <div className='border-b w-full'>
      <button
        className="w-full flex justify-between items-center text-left py-2 px-4 font-light bg-white border-0 focus:outline-none focus:ring-0"
        onClick={handleClick}
      >
        <span>{title}</span>
        {hasSubItems && (isOpen ? <FiChevronUp size={20} color='#737373' /> : <FiChevronDown size={20} color='#737373' />)}
      </button>

      {isOpen && hasSubItems && (
        <div className="w-full font-light">
          {subItems.map((subItem, index) => (
            <AccordionSubItem key={index} title={subItem.title} links={subItem.links} url={subItem.url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
