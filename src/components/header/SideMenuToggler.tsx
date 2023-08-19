import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../../assets/img/logo.png";
import optilience from "../../assets/img/optilience.png";

const SideMenuToggler: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (index: number) => {
    setSelectedLink(index);
    setIsMenuOpen(false);
  };

  const links = [
    { label: "ÉVÉNEMENTS", target: "événements" },
    { label: "INSCRIPTIONS ÉVÉNEMENTS", target: "inscriptions" },
    { label: "NEWS", target: "news" },
    { label: "ULG ?", target: "ulg" },
    { label: "PLUS", target: "plus" },
  ];

  return (
    <div className="relative">
      <span
        onClick={toggleMenu}
        className="flex justify-center items-center rounded-[35%] bg-black w-12 h-12 cursor-pointer lg:hidden"
      >
        <Icon icon="ic:baseline-menu" className="text-[#fcfcfc]" height={24} />
      </span>
      
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center transition-transform duration-300 ${isMenuOpen ? "-translate-x-0" : "translate-x-full"} right-0`}
      >
        <div className="bg-black p-4 w-full h-full sm:w-[390px] sm:h-[844px] text-white relative">
          <span
            onClick={closeMenu}
            className="absolute top-4 right-4 cursor-pointer"
            style={{ top: "1.8rem", right: "1.8rem" }}
          >
            <Icon icon="ic:baseline-close" className="text-[#fcfcfc]" height={24} />
          </span>

          <a href="/" style={{ position: "absolute", top: "1.2rem", left: "1rem" }}>
            <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
          </a>
    
          <a href="/" style={{ position: "absolute", top: "-0.05rem", left: "3.5rem" }}>
            <img src={optilience} alt="optilience" className="w-20 h-20 cursor-pointer" />
          </a>
          
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-10 text-center">
              {links.map((link, index) => (
                <li key={link.label} className="menu-link">
                  <a
                    href={`#${link.target}`}
                    onClick={() => handleLinkClick(index)}
                    className={selectedLink === index ? "selected-link" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuToggler;
