import React, { FC, useState, useEffect } from "react";
import Section from "../components/Section";
import BackgroundText from "../components/section-news/BackgroundText";
import GoToNews from "../components/section-news/GoToNews";
import Slider from "../components/section-news/Slider";
import SectionHeadMotion from "../components/SectionHeadMotion";
import ULG from "../components/section-news/slider-img/ULG.jpg";
import player2 from "../components/section-news/slider-img/player2.jpg";
import esport from "../components/section-news/slider-img/esport.jpg";


const events = [
  {
    img: ULG,
    author: "Championnat interquartier",
    date: "26/03/22",
    title: "Lancement d'un championnat interquartier de foot ",
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
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNextEvent = () => {
    setSelectedEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrevEvent = () => {
    setSelectedEventIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Fonction pour gérer la rotation automatique des images
    const rotateImages = () => {
      const timer = setInterval(() => {
        handleNextEvent(); // Appelle la fonction pour afficher l'image suivante
      }, 25000); // Change d'image toutes les 25 secondes


      return () => {
        clearInterval(timer); // Nettoie le timer lorsque le composant est démonté
      };
    };

    rotateImages(); // Appelle la fonction de rotation des images
  }, []); 
    
  

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
            <SectionHeadMotion>DERNIERS ÉVÉNEMENTS</SectionHeadMotion>
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
  <div
    key={index}
    className={`mb-4 text-center ${
      index === selectedEventIndex ? "block" : "hidden"
    }`}
  >
     <img
      src={event.img}
      alt={`Événement ${index + 1}`}
      style={{
        width: "500px",
        borderRadius: "10px",
        marginTop: "10px", // Ajoutez cette ligne pour déplacer l'image vers le bas
      }}
      className="mx-auto"
    />

<div className="flex justify-between">
  <button
    onClick={handlePrevEvent}
    className="group flex items-center justify-center mt-2"
    style={{ width: '30px', height: '30px' }}
  >
     <span className="group-hover:translate-x-1 ease-out duration-300 w-7 h-7 transform rotate-180 ">
      {/* Animated Arrow */}
      <svg viewBox="0 0 25 15" className="w-full h-full">
        <path d="M16.2.5L19.9 4m4.6 3.5l-8.3 7" fill="none" stroke="black"></path>
        <path fill="none" stroke="black" strokeMiterlimit={10} d="M16 7.5H0"></path>
      </svg>
    </span>
  </button>


  
  <button
    onClick={handleNextEvent}
    className="group flex items-center justify-center mt-2 "
    style={{ width: '30px', height: '30px' }}
  >
    <span className="group-hover:translate-x-1 ease-out duration-300 w-7 h-7 transform">
      {/* Animated Arrow */}
      <svg viewBox="0 0 25 15" className="w-full h-full">
        <path d="M16.2.5L19.9 4m4.6 3.5l-8.3 7" fill="none" stroke="black"></path>
        <path fill="none" stroke="black" strokeMiterlimit={10} d="M16 7.5H0"></path>
      </svg>
    </span>
  </button>
</div>



    <div className="mt-0">
      <span className="text-[#0f1923] block text-center event-date"><strong>{event.date}</strong></span>
      <span className="text-[#2CB9FF] uppercase relative">
        <span className="absolute -left-[1rem] w-[1px] h-[1px] bg-[#2CB9FF] bottom-[1rem]"></span>
        <strong>{event.author}</strong>
      </span>
      <h3 className="font-dinw05Bold mt-2 text-[1.5rem] leading-tight uppercase text-[#383e3a] text-center">
        {event.title}
      </h3>
      <br />
      {event.author === "Championnat interquartier" && (
        <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
         "En 2022 OPTILIENCE lançait le concept ULG, un championnat de Streetfootball inédit se déroulant sur 5 mois.

Près de 40 bénévoles ont oeuvré dans l'accompagnement de près 100 jeunes issus de différents quartiers de Garges répartis en 9 équipes.

Un travail préliminaire et des sessions de brainstorming ont été réalisés 3 mois en amont de la comptétition. Chaque équipe a été accompagnée dans la création d'une nouvelle identité positive afin d'améliorer la perception mentale de leur quartier et de leur environnement.

Ce dispositif sportif fût vecteur d'inclusion et de cohésion en permettant à la fois de stimuler la créativité et les "softs skills" des jeunes accompagnés. Ils ont ainsi été sensibilises à la citoyenneté et aux valeurs de la République à travers une écoute systématique de la Marseillaises avant chaque match.
 
Ce projet n'aurait pas pu être réalisé sans le soutien des pouvoirs publiques tels que la Ville de Garges, la préfecture du Val d'Oise, l'association Créative, ou encore des entreprises comme le BIG5 et R+Sport, que nous tenons sincèrement à remercier."
        </p>
       )}
       {event.author === "Tournois - 2" && (
         <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
           "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes)."
         </p>
       )}
       {event.author === "Final sur Twitch !" && (
         <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
           "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique."
         </p>
       )}
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
