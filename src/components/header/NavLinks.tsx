import { FC } from "react";

const links = ["ACTUALITÉS", "INSCRITPTION", "NEWS", "QUI SOMMES-NOUS ?", "PLUS"];

const NavLinks: FC = () => (
  <nav
    className="text-[#f9f9f9] ml-5 h-full 
    hidden lg:block"
  >
    <ul className="h-full flex flex-row items-stretch">
      {links.map((link) => (
        <li className="group mr-1 relative inline-flex" key={link}>
          <span className="tracking-widest text-[12.5px] py-2 px-4 group-hover:bg-black-500/30 rounded-md self-center cursor-pointer uppercase">
            {link}
          </span>
          <span
            className="absolute w-full left-0 bg-[#2CB9FF] h-1 rounded-sm bottom-2 hidden 
          group-hover:inline"
          ></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks;
