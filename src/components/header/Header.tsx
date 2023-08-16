import React, { FC } from "react";
//import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom si vous l'utilisez pour la navigation
import NavLinks from "./NavLinks";
import SideMenuToggler from "./SideMenuToggler";
import Logo from "../../assets/img/logo.png"; // Chemin vers le logo
import Twitch from "../../assets/img/twitch.png";
import optilience from "../../assets/img/optilience.png";

const Header: FC = () => (
  <header className="flex fixed w-full top-0 left-0 h-20 items-center px-4 lg:px-9 bg-black font-markpro z-50 border-b-2 border-gray-700/40">
    <a href="/">{/* Utilisation de Link pour le lien */}
      <img src={optilience} alt="optilience" className="w-20 h-20 cursor-pointer" />
      </a>
    
    <a href="/">{/* Utilisation de Link pour le lien */}
      <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
      </a>

    
      <NavLinks />
   
    <div className="flex flex-row items-center ml-auto">
      <a className="mr-3"
        target="_blank"
        rel="noreferrer"
        href="https://www.twitch.tv/"
      >
        <img src={Twitch} alt="Twitch" className="w-7 h-7" />
      </a>
      <SideMenuToggler />
    </div>
  </header>
);

export default Header;
