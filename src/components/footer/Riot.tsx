import { FC } from "react";
import Logo from "../../assets/img/logo.png";

const Riot: FC = () => (
  <div className="flex items-baseline justify-center py-6 px-5 select-none">
    <span className="fill-[#737373] w-[50px] h-8 hover:fill-[#2CB9FF]">
      <img src={Logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
    </span>
  </div>
);

export default Riot;
