import React, { FC, useState, useEffect } from "react";
import Discord from "./icons/Discord";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Youtube from "./icons/Youtube";

const socials = [
  { icon: <Twitter />, link: "https://twitter.com/votrecompte" },
  { icon: <Youtube />, link: "https://www.youtube.com/" },
  { icon: <Instagram />, link: "https://instagram.com/votrecompte" },
  { icon: <Facebook />, link: "https://facebook.com/votrecompte" },
  { icon: <Discord />, link: "https://discord.gg/votrecompte" },
];

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
        {socials.map((item, index) => (
          <li
            className="cursor-pointer m-[6px] rounded-xl bg-black-400/20 flex items-center justify-center
            w-5 h-5"
            key={index}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <span
                className="fill-white w-6 h-6"
                style={{ fillRule: "evenodd" }}
              >
                {item.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
      {showArrow && (
        <div
          className="cursor-pointer fixed bottom-5 right-5
          group-hover:translate-y-2.5 ease-out duration-300 w-7 h-7 transform -rotate-90"
          onClick={openPopup}
        >
          <svg viewBox="0 0 25 15" className="w-full h-full">
            <path
              d="M16.2.5L19.9 4m4.6 3.5l-8.3 7"
              fill="none"
              stroke="#2cdcff"
            ></path>
            <path
              fill="none"
              stroke="#2cdcff"
              strokeMiterlimit={10}
              d="M16 7.5H0"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Socials;
