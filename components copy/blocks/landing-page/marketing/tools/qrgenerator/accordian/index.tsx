import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React from "react";
import { IconType } from "react-icons/lib";

// Define the interface for Accordion props
interface AccordionProps {
  icon: IconType; // React elements like icons
  title: string; // The title for the accordion
  children: React.ReactNode; // The content within the accordion
  openAccordion: string; // Whether the accordion is open or closed
  setIsOpen: (title: string) => void; // Function to toggle accordion state
}

const Accordion: React.FC<AccordionProps> = ({ icon, title, children, openAccordion, setIsOpen }) => {
  // The Accordion component with appropriate types and a tab index for accessibility
  const Icon = icon
  const isOpen = openAccordion===title
  
  return (
    <div>
      <div
        className="w-full bg-white hover:bg-slate-100 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(title)} // Toggle open/close based on the title
        tabIndex={0} // Set tab index for keyboard accessibility
      >
        <div className="flex items-center text-gray-600 ">
          <span className={`w-12 h-12 ${isOpen? 'bg-primary text-white' : 'bg-slate-100'} flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </span>
          <div className="px-2 mx-4 rounded-sm">{title}</div>
        </div>
        <button
          className="  w-10 h-10 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation(); // Prevent propagation to avoid toggling twice
            setIsOpen(title);
          }}
        >
          {isOpen ? <MinusIcon className="h-5 w-5 text-brand-orange-main stroke-2"/> : <PlusIcon className="w-5 h-5 stroke-2"/>} {/* Toggle icon depending on open state */}
        </button>
      </div>
      {isOpen && (
        <div className=" py-4 space-y-2 text-gray-700">
          {children} {/* Content displayed when accordion is open */}
        </div>
      )}
    </div>
  );
};

export default Accordion;
