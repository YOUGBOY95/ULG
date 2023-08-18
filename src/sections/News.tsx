import React, { FC, useState } from "react";
import Section from "../components/Section";
import BackgroundText from "../components/section-news/BackgroundText";
import GoToNews from "../components/section-news/GoToNews";
import Slider from "../components/section-news/Slider";
import SectionHeadMotion from "../components/SectionHeadMotion";
import player1 from "../components/section-news/slider-img/player1.jpg";
import player2 from "../components/section-news/slider-img/player2.jpg";
import esport from "../components/section-news/slider-img/esport.jpg";


const events = [
  {
    img: player1,
    author: "Tournois - 1",
    date: "03/04/23",
    title: "Première phase d'admission pour les participants",
  },

  {
    img: player2,
    author: "Tournois - 2",
    date: "03/05/23",
    title: "Deuxième phase d'admission pour les participants",
  },
  {
    img: esport,
    author: "Final sur Twitch !",
    date: "03/08/23",
    title: "Venez découvrir la finale du tournois sur Twitch !",
  },
  // Ajoutez plus d'événements de cette manière
];



const News: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Section className="overflow-hidden" blackVLine>
      <BackgroundText />
      <div id="événements">
        {/* Contenu de la section NEWS */}
      </div>

      <div
        className="relative mx-auto max-w-[76.875rem]
        pt-[4.375rem] lg:pt-[8.75rem]
        pb-[10vw] lg:pb-[6.25rem]"
      >
        <div
          className="left-1/2 -translate-x-1/2 absolute w-14 
            top-8 lg:top-16"
        >
          <span className="bg-black w-2 h-2 absolute"></span>
          <span className="bg-black w-2 h-2 absolute right-0"></span>
        </div>

        <div className="flex justify-between">
          <h2
            className="z-20 overflow-hidden relative text-[#2CB9FF] font-tungstenBold
            translate-y-[24%] lg:translate-y-[20%]
            leading-[0.95]
            text-[3.44rem] md:text-[6.25rem] lg:text-[7.5rem]
            py-1.5 lg:py-0"
          >
            <SectionHeadMotion>DERNIÈRES ÉVÉNEMENTS</SectionHeadMotion>
          </h2>
          <div className="hidden lg:flex">
          <GoToNews onClick={openPopup} selectedEvent={null} />
          </div>
        </div>

        <Slider />

        <div className="block lg:hidden">
        <GoToNews onClick={openPopup} selectedEvent={null} />
        </div>
      </div>

      {/* Fenêtre popup */}
      {isPopupOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg shadow-md max-w-[60vw] w-full h-[70vh] mx-4 overflow-y-auto">
      {/* Parcourir le tableau d'événements pour afficher les informations */}
      {events.map((event, index) => (
        <div key={index} className="mb-4 text-center">
          <img
            src={event.img}
            alt={`Événement ${index + 1}`}
            style={{ width: "500px", borderRadius: "10px" }}
            className="mx-auto"
          />
          <div className="mt-4">
            <span className="text-[#0f1923] block text-center event-date">{event.date}</span>
            <span className="text-[#2CB9FF] uppercase relative">
              <span className="absolute -left-[0.625rem] w-[1px] h-[1px] bg-[#2CB9FF] bottom-[0.1875rem]"></span>
              {event.author}
            </span>
            <h3 className="font-dinw05Bold mt-2 text-[1.25rem] leading-tight uppercase text-[#383e3a] text-center">
              {event.title}
            </h3>
            <br />
      <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't."</p>
    </div>
  </div>
))}

<button
        onClick={closePopup}
        className="relative group uppercase min-w-[12rem] p-[10px] font-dinw05Bold text-lg lg:text-sm w-50 lg:w-50 mx-auto mt-4 lg:mt-8"
        style={{ display: "block" }}
      >
        <span className="border-black-400 border-r border-l w-full absolute left-0 h-[calc(50%-0.375rem)] border-t top-0"></span>
        <span className="border-black-400 border-r border-l w-full absolute left-0 h-[calc(50%-0.375rem)] border-b bottom-0"></span>
        <div className="relative overflow-hidden leading-[1.15] bg-black">
          <div className="bg-[#2CB9FF] -left-[5%] -translate-x-full -skew-x-12 absolute w-[120%] top-0 group-hover:left-[110%] easy-out duration-300 h-[105%]"></div>
          <div className="relative">
            <div className="text-white px-[1.875rem] py-[1.1875rem] group-hover:text-black">
              Fermer
            </div>
            <span className="absolute right-0 bottom-0 ease-in duration-200 bg-[#2CB9FF] group-hover:bg-white w-[6px] lg:w-1 h-[6px] lg:h-1"></span>
          </div>
        </div>
      </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default News;
