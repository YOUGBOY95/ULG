import { FC } from "react";
import RiotLogoSvg from "../RiotLogo";

const RiotLogo: FC = () => (
  <div className="w-24 h-8 lg:w-19 lg:h-6 cursor-pointer">
    <span
      className="fill-[#2CB9FF] min-w-fit
    w-[5.3rem] lg:w-auto
    h-7 lg:h-auto
    hover:fill-[#2CB9FF]"
    >
      <RiotLogoSvg />
    </span>
  </div>
);

export default RiotLogo;
