import React, { FC } from "react";

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-[368px] md:max-w-[640px]">
      <p
        className="font-ffmark text-center leading-[160%] text-white text-[13px] font-normal select-none"
        style={{ wordBreak: "keep-all", marginTop: "30px" }}
      >
        © {currentYear} SITE INTERNET CRÉÉ PAR{" "}
        <a href="/" className="text-white-400 hover:underline">
        <span className="souligne">ULG</span>
        </a>{" "}
        BY{" "}
        <a href="/" className="text-white-400 hover:underline">
        <span className="souligne">OPTILIENCE</span>
        </a>{" "}
        TOUS DROITS RÉSERVÉS.
      </p>
    </div>
  );
};

export default Copyright;
