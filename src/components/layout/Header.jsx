import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    const ref = useRef();
    const { width } = useWindowSize();
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menu = [
        { title: "Beranda", link: "Hero" },
        { title: "About", link: "About" },
        { title: "Service", link: "Service" },
        { title: "Pricing", link: "Pricing" },
        { title: "FAQ", link: "FAQ" },
        { title: "Contact", link: "Contact" },
    ];

    useOnClickOutside(ref, () => setNavOpen(false));

    useEffect(() => {
        if (width > 1024) {
            setNavOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle `scrolled` state based on scroll position
            setScrolled(window.scrollY >= 100);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar (only visible when not scrolled) */}
            {!scrolled && (
                <div className="bg-green-600 text-white text-sm py-2 px-4 md:px-[80px] flex justify-between items-center transition-all duration-300">
                    <div className="flex items-center gap-2 max-[450px]:text-xs whitespace-nowrap">
                        <FaPhoneAlt className="inline-block" /> <span>0813-6930-4112</span>
                        <FaEnvelope className="inline-block ml-2" /> <span>rumahklatenasri@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 max-[650px]:hidden">
                        <a href="https://wa.me/6281369304112" target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-2 hover:font-bold">
                                <span>Hubungi Kami</span>
                                <FaWhatsapp />
                            </div>
                        </a>
                    </div>
                </div>
            )}

            {/* Main Header */}
            <header
                className={`px-4 md:px-[80px] h-20 flex items-center justify-between w-full fixed ${scrolled ? "top-0" : "top-8"} z-40 transition-all duration-300 py-0 ${scrolled
                    ? "shadow bg-white bg-opacity-90 hover:bg-opacity-100"
                    : "shadow-none bg-white"
                    }`}
            >
                <div className="font-bold text-xl flex md:text-3xl items-center gap-4 justify-center text-green-600">
                    <ScrollLink
                        to="Hero"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        Rumah Klaten Asri
                    </ScrollLink>
                </div>

                <div className="hidden xl:flex items-center gap-x-2">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <ScrollLink
                                to={item.link}
                                smooth={true}
                                duration={500}
                                className="text-green-600 rounded-md px-2 py-[8px] hover:bg-green-100 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer"
                            >
                                {item.title}
                            </ScrollLink>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setNavOpen(true)}
                    className="block xl:hidden text-green-600 p-5 cursor-pointer"
                >
                    <FaBars size={22} />
                </button>
            </header>

            {/* Mobile Navigation */}
            <div
                ref={ref}
                style={{ right: navOpen ? "0" : "-300px" }}
                className="fixed z-50 top-0 h-full min-[300px]:w-[300px] bg-gray-600/50 backdrop-blur drop-shadow transition-all"
            >
                <div className="flex items-center justify-end text-white p-4">
                    <FaXmark
                        className="cursor-pointer"
                        onClick={() => setNavOpen(false)}
                    />
                </div>
                <div className="p-4 h-96 text-left space-y-8">
                    {menu.map((item, itemIdx) => (
                        <div key={itemIdx}>
                            <ScrollLink
                                to={item.link}
                                smooth={true}
                                duration={500}
                                className="px-6 py-2 text-white hover:bg-white/20 font-medium whitespace-nowrap cursor-pointer rounded-lg"
                                onClick={() => setNavOpen(false)} // Close menu after click
                            >
                                {item.title}
                            </ScrollLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
