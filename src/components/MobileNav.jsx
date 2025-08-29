'use client'
import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="flex cursor-pointer text-[#ffb900]" onClick={toggleMenu}>
                {!isOpen ? <Menu /> : <X />}
            </div>
            
            <div className={`absolute right-4 top-20 origin-top transition-all duration-300 
                ${isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"}
                w-48 bg-white/90 backdrop-blur-lg border border-white/20 rounded-xl p-4 z-50`}>
                <nav className="flex flex-col space-y-3 font-semibold tracking-wide">
                    {navLinks.map((link, index) => (
                        <Link 
                            key={index}
                            href={link.href}
                            className="py-2 px-4 rounded-lg text-black hover:bg-[#ffb900]"
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default MobileNav;
