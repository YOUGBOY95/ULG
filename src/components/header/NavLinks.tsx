import { FC } from "react";

const links = [
  { label: "ÉVÉNEMENTS", target: "événements" },
  { label: "INSCRIPTIONS ÉVÉNEMENTS", target: "inscriptions" },
  { label: "NEWS", target: "news" },
  { label: "ULG ?", target: "ulg" },
  { label: "NEXT", target: "next" },
];

const NavLinks: FC = () => (
  <nav className="text-[#f9f9f9] ml-5 h-full hidden lg:block">
    <ul className="h-full flex flex-row items-stretch">
      {links.map((link) => (
        <li className="group mr-1 relative inline-flex" key={link.label}>
          <a
            href={`#${link.target}`} // Utilisation du lien d'ancrage
            className="tracking-widest text-[12.5px] py-2 px-4 group-hover:bg-black-500/30 group-hover:text-[#2CB9FF] rounded-md self-center cursor-pointer uppercase transition-colors"
          >
            {link.label}
          </a>
          <span
            className="absolute w-full left-0 bg-[#2CB9FF] h-1 rounded-sm bottom-2 hidden group-hover:inline"
          ></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavLinks;
