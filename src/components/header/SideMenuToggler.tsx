import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "../../assets/img/close.png"; // Chemin vers votre icône
import Logo from "../../assets/img/logo.png"; // Chemin vers le logo
import optilience from "../../assets/img/optilience.png";

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

            <a href="/" style={{ position: "absolute", top: "1.2rem", left: "1rem" }}>
              {/* Utilisation de Link pour le lien */}
              <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
            </a>
    
            <a href="/" style={{ position: "absolute", top: "-0.05rem", left: "3.5rem" }}>
  <img src={optilience} alt="optilience" className="w-20 h-20 cursor-pointer" />
</a>
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-2 text-center">
                <li>Événements 1</li>
                <br></br>
                <li>Événements 2</li>
                <br></br>
                <li>Événements 3</li>
                <br></br>
                <li>Événements 4</li>
                {/* Ajoutez d'autres éléments de menu ici */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenuToggler;
