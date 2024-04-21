"use client"
import { useState } from 'react';
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { NextUIProvider } from "@nextui-org/react";
import { Chart, registerables } from 'chart.js';

export default function RootLayout({ children }: any) {
    const [isOpen, setIsOpen] = useState(true);

    Chart.register(...registerables);
    return (
        <html lang="en">
            <body className='bg-gray-200'>
                <NextUIProvider>
                    <div className="flex h-full">
                        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                        <div className={`flex-grow ${isOpen ? 'pl-[286px]' : 'pl-24'} transition-all duration-500`}>
                            {children}
                        </div>
                    </div>
                </NextUIProvider>
            </body>
        </html>
    );
}
