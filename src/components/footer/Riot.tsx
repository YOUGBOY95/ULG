import React, { FC } from "react";
import Logo from "../../assets/img/logo.png";
import optilience from "../../assets/img/optilience.png";

const Riot: FC = () => (
  <div className="flex items-center justify-center py- px-5 select-none">
    <a href="/">
      <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
    </a>
    <a href="/">
      <img src={optilience} alt="optilience" className="w-20 h-20 cursor-pointer" />
    </a>
  </div>
);

export default Riot;
