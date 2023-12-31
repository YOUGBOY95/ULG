import React, { FC } from "react";
//import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom si vous l'utilisez pour la navigation
import NavLinks from "./NavLinks";
import SideMenuToggler from "./SideMenuToggler";
import Logo from "../../assets/img/logo.png"; // Chemin vers le logo
import snapchat from "../../assets/img/snapchat.png";
import Twitch from "../../assets/img/twitch.png";
import optilience from "../../assets/img/optilience.png";
import Youtube from "../../assets/img/youtube.png";
import Instagram from "../../assets/img/instagram.png";
import TikTok from "../../assets/img/tik-tok.png";

const Header: FC = () => (
  <header className="flex fixed w-full top-0 left-0 h-20 items-center px-4 lg:px-10 bg-black font-markpro z-50 border-b-2 border-black -700/40">
    
    <a href="/">{/* Utilisation de Link pour le lien */}
      <img src={Logo} alt="Logo" className="w-14 h-14 cursor-pointer" />
      </a>
      <a href="/">{/* Utilisation de Link pour le lien */}
      <img src={optilience} alt="optilience" className="w-28 h-28 cursor-pointer" />
      </a>
    
      <NavLinks />
   
    <div className="flex flex-row items-center ml-auto ">

      <a className="mr-3 mt-0.5"
        target="_blank"
        rel="noreferrer"
        href="https://www.twitch.tv/urbanleaguegame"
      >
        <img src={Twitch} alt="Twitch" className="w-4 h-4" />
      </a>

      <a className="mr-3 mt-1.5"
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCh-zsemP4EfbOZxqg63iTug"
      >
        <img src={Youtube} alt="Youtube" className="w-5 h-5" />
      </a>


      <a className="mr-3 mt-"
        target="_blank"
        rel="noreferrer"
        href="https://www.tiktok.com/@urbanleaguegame"
      >
        <img src={TikTok} alt="TikTok" className="w-4 h-4" />
      </a>

      <a className="mr-3 mt-"
        target="_blank"
        rel="noreferrer"
        href="https://www.snapchat.com/add/ulg.2023"
      >
        <img src={snapchat} alt="snapchat" className="w-4 h-4" />
      </a>

      <a className="mr- mt-"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/urbanleaguegame/?igshid=MzRlODBiNWFlZA%3D%3D"
      >
        <img src={Instagram} alt="Instagram" className="w-4 h-4" />
      </a>

      
      
      <SideMenuToggler />
    </div>
  </header>
);

export default Header;
