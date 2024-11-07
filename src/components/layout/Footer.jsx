import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [footerMenu] = useState([
        {
            head: "MENU",
            title: "Beranda",
            link: "/",
        },
        {
            head: "MENU",
            title: "Rekayasa Solusi",
            link: "/rekayasa-solusi",
        },
        {
            head: "MENU",
            title: "Eksplor Produk",
            link: "/eksplor-produk",
        },
        {
            head: "MENU",
            title: "Kontak",
            link: "/kontak",
        },
        {
            head: "MENU",
            title: "FAQ",
            link: "/faq",
        },
        {
            head: "TENTANG KAMI",
            title: "Perusahaan Kami",
            link: "/perusahaan-kami",
        },
        {
            head: "TENTANG KAMI",
            title: "Kontak Kami",
            link: "/kontak",
        },
        {
            head: "TENTANG KAMI",
            title: "List Pengguna",
            link: "/list-pengguna",
        },
        {
            head: "KEAMANAN PRIVASI",
            title: "F&Q",
            link: "/faq",
        },
        {
            head: "KEAMANAN PRIVASI",
            title: "Kebijakan Privasi",
            link: "/kebijakan-privasi",
        },
        {
            head: "KEAMANAN PRIVASI",
            title: "Copyright",
            link: "/copyright",
        },
    ]);

    const [alamatFooter] = useState({
        company: "PT Graha Skrip Infra Prima",
        address:
            "Jl. Alam Flora No.41, Way Halim Permai, Kecamatan Wayhalim, Kota Bandar Lampung, Lampung 35133",
        telp: "0859-6652-3396",
        telp_wa: "6285966523396",
    });

    const [sosialFooter] = useState({
        youtube: "https://www.youtube.com/@ERPSKRIP",
    });

    // Group menu items by head
    const groupedMenu = footerMenu.reduce((acc, item) => {
        if (!acc[item.head]) {
            acc[item.head] = [];
        }
        acc[item.head].push(item);
        return acc;
    }, {});

    return (
        <div className="px-[1rem] md:px-[80px] bg-purple-50 pt-4 md:pt-16 text-gray-600">
            <div className="mb-10 flex flex-wrap gap-x-8 gap-y-10">
                {/* Footer Menu */}
                {Object.entries(groupedMenu).map(([head, links], index) => (
                    <div key={index} className="flex flex-col">
                        <h4 className="font-bold text-lg text-fuchsia-600 mb-4">{head}</h4>
                        {links.map((item, i) => (
                            <div key={i} className="mb-2">
                                {item.menu ? (
                                    // Display submenu directly without dropdown
                                    <div className="flex flex-col ml-4 space-y-2">
                                        <div className="text-sm font-semibold text-gray-700">{item.title}</div>
                                        {item.menu.map((subItem, subIdx) => (
                                            <a
                                                key={subIdx}
                                                href={subItem.link}
                                                className="block text-sm hover:text-fuchsia-500"
                                            >
                                                {subItem.title}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <a
                                        href={item.link}
                                        className="text-sm hover:text-fuchsia-500"
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                {/* Address Footer */}
                <div className="flex flex-col w-[42rem]">
                    <h4 className="font-bold text-lg text-fuchsia-600 mb-4">KANTOR</h4>
                    <p className="text-sm mb-2">{alamatFooter.company}</p>
                    <p className="text-sm mb-2">
                        <strong>ALAMAT:</strong> {alamatFooter.address}
                    </p>
                    <div className="flex items-center text-sm">
                        <FiPhoneCall className="mr-2" />
                        {alamatFooter.telp}
                    </div>
                </div>
            </div>
            <div className="py-5 text-xs md:text-sm justify-between w-full font-semibold min-[500px]:flex border-t-[3px] border-[#D9D9D9]">
                <div className="mb-2">
                    © {currentYear} ERPSKRIP. All rights reserved
                </div>
                <div className="flex gap-4">
                    <a
                        href={sosialFooter.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fuchsia-500"
                    >
                        <FaYoutube size={26} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
