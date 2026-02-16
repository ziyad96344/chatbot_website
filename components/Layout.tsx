import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;

