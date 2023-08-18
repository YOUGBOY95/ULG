import React, { FC } from "react";

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-[368px] md:max-w-[640px]">
      <p
        className="font-ffmark text-center leading-[140%] text-white text-[13px] font-normal select-none"
        style={{ wordBreak: "keep-all" }}
      >
        © {currentYear} SITE INTERNET CRÉÉ PAR ULG TOUS DROITS RÉSERVÉS.
      </p>
    </div>
  );
};

export default Copyright;
