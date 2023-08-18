import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "../../assets/img/close.png"; // Chemin vers votre icône

const SideMenuToggler: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <span
        onClick={toggleMenu}
        className="flex justify-center items-center rounded-[35%] bg-black w-12 h-12 cursor-pointer lg:hidden"
      >
        <Icon icon="ic:baseline-menu" className="text-[#fcfcfc]" height={24} />
      </span>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-4 w-full h-full sm:w-[390px] sm:h-[844px] text-white relative">
            <span
              onClick={closeMenu}
              className="absolute top-4 right-4 cursor-pointer"
              style={{ top: "1.8rem", right: "1.8rem" }} // Ajustez ces valeurs
            >
              <img src={closeIcon} alt="Close" className="h-6 w-6" />
            </span>
            <ul className="space-y-2">
              <li>Événements 1</li>
              <li>Événements 2</li>
              {/* Ajoutez d'autres éléments de menu ici */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenuToggler;
