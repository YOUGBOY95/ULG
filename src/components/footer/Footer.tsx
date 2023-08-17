import { FC } from "react";
import Copyright from "./Copyright";
import Legals from "./Legals";
import Riot from "./Riot";
import Socials from "./Socials";

const Footer: FC = () => (
  <footer className="bg-black pb-12 ">
    <Socials />
    <Riot />
    <Copyright />
    <Legals />
  </footer>
);

export default Footer;
