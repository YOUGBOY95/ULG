import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import SectionHeadMotion from "../components/SectionHeadMotion";
import Background from "../components/section-maps/Background";

const Maps: FC = () => {
  return (
    <Section className="pt-[3.75rem] md:pt-[7.5rem] lg:pt-10" blackVLine>
      <div id="plus">
      {/* Contenu de la section NEWS */}
    </div>
      <div className="relative overflow-hidden pb-10 z-10">
        <div className="lg:ml-[8.5%] lg:mt-[calc(5vw+10px)] lg:mb-[5vw] lg:max-w-[42%] lg:pt-0 lg:pb-10">
          <h2
            className="overflow-hidden font-tungstenBold leading-[0.94] border-t border-slate-500
            py-[0.5em] lg:pt-8 lg:pb-0
            lg:mb-14
            text-6xl md:text-[6.25rem] lg:text-[7.5rem] text-[#2CB9FF]"
          >
            <SectionHeadMotion>PLUS</SectionHeadMotion>
          </h2>

          <h2
            className="text-[#383e3a] font-dinw05 -tracking-[.01em] text-xl leading-tight uppercase
                mt-2 md:-mt-2
                mb-4 lg:mb-5"
          >
            Informations supplémentaires
          </h2>
          <p
            className="text-[#768079] font-dinw1g
                leading-snug lg:leading-normal
                text-lg lg:text-base
                max-w-[31.25rem] lg:max-w-[77%]"
          >
            Ici toute les informations supplémentaires concernant ULG.
          </p>
          <div
            className="
                text-center lg:text-left 
                mt-[25rem] lg:mt-12"
          >
            <a href="/" >
            <RiotButton>EN SAVOIR PLUS</RiotButton>
            </a>
          </div>
        </div>
      </div>

      <Background />
    </Section>
  );
};

export default Maps;
