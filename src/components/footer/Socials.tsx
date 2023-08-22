import React, { FC, useState, useEffect } from "react";
import Instagram from "../../assets/img/instagram.png";
import Youtube from "../../assets/img/youtube.png";
import Twitch from "../../assets/img/twitch.png";
import TikTok from "../../assets/img/tik-tok.png";



const Socials: FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  const openPopup = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-[18px]">
      <ul className="flex flex-wrap flex-row items-center justify-center list-none">
      
      <a className="mr-4 mt-0.5"
        target="_blank"
        rel="noreferrer"
        href="https://www.twitch.tv/"
      >
        <img src={Twitch} alt="Twitch" className="w-4 h-4" />
      </a>

      <a className="mr-4 mt-1.5"
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/"
      >
        <img src={Youtube} alt="Youtube" className="w-5 h-5" />
      </a>


      <a className="mr-4 mt-"
        target="_blank"
        rel="noreferrer"
        href="https://tiktok.com/"
      >
        <img src={TikTok} alt="TikTok" className="w-4 h-4" />
      </a>

      <a className="mr-0 mt-"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/"
      >
        <img src={Instagram} alt="Instagram" className="w-4 h-4" />
      </a>
        
      </ul>
      {showArrow && (
        <div
          className="cursor-pointer fixed bottom-5 right-5 group-hover:translate-y-2.5 ease-out duration-300 w-7 h-7 transform -rotate-90 arrow-icon"
          onClick={openPopup}
        >
          <svg viewBox="0 0 25 15" className="w-full h-full">
            <path d="M16.2.5L19.9 4m4.6 3.5l-8.3 7" fill="none" stroke="#2cdcff"></path>
            <path fill="none" stroke="#2cdcff" strokeMiterlimit={10} d="M16 7.5H0"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Socials;
