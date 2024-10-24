'use client'
import { useState } from 'react';

interface DropdownProps {
    content: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
    // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-[667px] mt-4">
            <button
                className="w-full h-[62px] bg-[rgba(51,103,41,0.18)] border-[4px] border-[#336729] 
                rounded-[29.167px] text-left pl-4 pr-10 flex items-center font-bold justify-between cursor-pointer text-green-700"
                onClick={toggleDropdown}
            >
                {title}
                <span className="ml-auto pr-4">{isOpen ? '▲' : '▼'}</span>
            </button>
            <p className='mt-1'></p>
            {isOpen && (
                <div className="bg-[rgba(51,103,41,0.18)] w-full border-t-[4px] border-x-[4px] border-b-[4px] border-[#336729] 
                rounded-[29.167px] py-2 shadow-lg text-green-700">

                    <p className="px-4 py-2 cursor-pointer">{content}</p>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
