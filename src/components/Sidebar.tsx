"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sidebarItems } from '@/utils/SidebarList';
import IconArrow from '../../public/icons/IconArrow';
import IconLogout from '../../public/icons/IconLogout';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<boolean>
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const [currentPage, setCurrentPage] = useState<string>('home');
    const [logoutHovered, setLogoutHovered] = useState<boolean>(false);

    const variants = {
        open: { width: "250px" },
        closed: { width: "60px" }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-screen fixed z-20 bg-white p-3">
            <div className='flex flex-col h-full justify-between'>
                <div>
                    <div className='flex items-center justify-between relative'>
                        <p className='font-bold text-violet-700 text-2xl'>LO {isOpen && 'MARCA'}</p>
                        <button onClick={() => setIsOpen(!isOpen)} className='absolute z-20 bg-violet-700 p-[5px] right-[-25px] rounded-full'>
                            <IconArrow rotation={isOpen ? 180 : 90} color="#fcfcfc" />
                        </button>
                    </div>
                    <motion.div
                        className="w-full mt-12"
                        variants={variants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col">
                            {sidebarItems.map((item, index) => (
                                <ul
                                    key={index}
                                    className={`flex items-center cursor-pointer ${isOpen ? 'gap-3 justify-start' : 'gap-0 justify-center'} p-4 ${currentPage === item.name.toLowerCase() ? 'bg-violet-700 text-white' : 'hover:bg-gray-100'}`}
                                    onClick={() => setCurrentPage(item.name.toLowerCase())}
                                >
                                    <li>{<item.icon color={currentPage === item.name.toLowerCase() ? '#FFFFFF' : '#000000'} />}</li>
                                    <span>{isOpen && item.name}</span>
                                </ul>
                            ))}

                        </div>
                    </motion.div>
                </div>
                <button className={`p-4 hover:bg-red-400 hover:text-white flex items-center ${isOpen ? 'justify-start gap-3' : 'justify-center gap-0'}`}
                    onMouseEnter={() => setLogoutHovered(true)}
                    onMouseLeave={() => setLogoutHovered(false)}>
                    <IconLogout color={logoutHovered ? '#FFFFFF' : '#000000'} />
                    <span>{isOpen && 'Logout'}</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
