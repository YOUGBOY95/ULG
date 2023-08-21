import React, { FC } from "react";

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto max-w-[368px] md:max-w-[640px]">
      <p
        className="font-ffmark text-center leading-[160%] text-white text-[13px] font-normal select-none"
        style={{ wordBreak: "keep-all", marginTop: "30px" }} // Ajustez la valeur de marginTop selon vos besoins
      >
        © {currentYear} SITE INTERNET CRÉÉ PAR ULG BY OPTILIENCE TOUS DROITS RÉSERVÉS.
      </p>
    </div>
  );
};

export default Copyright;
