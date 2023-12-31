import { FC } from "react";
import Countdown from 'react-countdown';
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import SectionHeadMotion from "../components/SectionHeadMotion";
import Act2Img from "../assets/img/Act2.jpg";

const Act2: FC = () => {

  // Date de fin du compte à rebours (remplacez avec la date souhaitée)
  const countdownEndDate = new Date('2023-10-28T00:00:00');


  
  return (
    <Section className="h-[53.125rem] overflow-hidden">
      <div id="inscriptions">
      {/* Contenu de la section NEWS */}
    </div>
      {/* Background Image */}
      <div className="h-full absolute left-0 top-0 ">
        <img
          loading="lazy"
          className="object-cover max-w-none
            w-full md:w-[120%] lg:w-[110%] xl:w-full
            h-[110%] md:h-[120%] lg:h-[120%] xl:h-[120%]
            "
          src={Act2Img}
          alt="key art"
        />
      </div>

      {/* Section Content */}
      <div
        className="h-full w-full relative max-w-7xl
        py-10 lg:py-0
        "
      >
        <div className="relative flex flex-col-reverse h-full">
          <div
            className="flex flex-col-reverse relative
          lg:ml-[1.875rem] lg:mt-[calc(5vw+0.625rem)] lg:mb-[5vw] lg:pb-10 lg:pt-[1.375rem]"
          > 
          <a href="https://www.twitch.tv/urbanleaguegame" >
          <RiotButton white>Rejoins le live !</RiotButton>
        </a>
            
            <h2 className="absolute font-dinw05 text-white tracking-[0.35em] top-0 my-0 leading-tight text-xl">
              ULG E-SPORT 2023 "FIFA ÉDITION" // ACTE-1
            </h2>
            <h2
              className="overflow-hidden font-tungstenBold text-white pt-[4.5rem] mt-2 mb-9 pb-[0.35rem] leading-[0.94]
                text-[3.4375rem] md:text-[6.25rem] lg:text-[7.5rem]
                "
            >
              <SectionHeadMotion>INSCRIPTIONS</SectionHeadMotion>
              <Countdown
          date={countdownEndDate}
          renderer={({ days, hours, minutes, seconds, completed }) => (
            <span className="text-xl md:text-2xl lg:text-4xl font-bold text-[#2CB9FF] ml-4">
              {days}j {hours}h {minutes}m {seconds}s
            </span>
            )}
            />
            </h2>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Act2;
