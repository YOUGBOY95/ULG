import { FC } from "react";
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

const Socials: FC = () => (
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
  </div>
);

export default Socials;
