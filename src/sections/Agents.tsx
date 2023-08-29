import React, { FC, useState } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import AgentImage from "../components/section-agents/AgentImage";
import Background from "../components/section-agents/Background";
import SectionHeadMotion from "../components/SectionHeadMotion";
import ULG from "../components/section-news/slider-img/trophée.jpg";

const events = [
    {
      img: ULG,
      author: "Qui sommes-nous ?",
      date: "",
      title: "LES OBJECTIFS DE ULG",
    },
  
  ];


const Agents: FC = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEventIndex] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Section className="bg-black bg-contain bg-no-repeat md:bg-[url('/src/components/section-agents/agents-bg.webp')] bg-bottom pb-10 overflow-x-clip">
      <div id="ulg">{/* Contenu de la section NEWS */}</div>
      <div className="lg:flex lg:flex-row-reverse lg:items-center">
        {/* Text & CTA */}
        <div className="overflow-hidden text-white lg:w-[42%] lg:mb-[5vw] lg:ml-7 z-30">
          <h3 className="overflow-hidden relative font-tungstenBold leading-[0.94] py-7 mt-12 border-t border-slate-50/40 mb-3 text-[3.5rem] md:text-[6.25rem] lg:text-[7.5rem] md:pt-10">
            <SectionHeadMotion>ULG ?</SectionHeadMotion>
          </h3>
          <h3 className="font-dinw05 mb-4 text-xl leading-tight tracking-[-0.01em] text-[#2CB9FF]">
            URBAN LEAGUE GAME
          </h3>
          <p className="font-dinw1g text-lg leading-snug md:max-w-lg lg:max-w-[80%]">
          "Libérez la Puissance Intérieure, Dominez l'Arène Digitale !"
          </p>
          <div className="z-30 text-center lg:text-left -translate-x-1/2 lg:translate-x-0 left-[50%] lg:left-0 absolute lg:static mt-[82vw] sm:mt-[70vw] md:mt-[60vw] lg:mt-12">
          <div onClick={openPopup}> {/* Ajoutez cet élément div */}
    <RiotButton white>
      En savoir plus
    </RiotButton>
          </div>
        </div>
        </div>
        <AgentImage />
      </div>
      <Background />

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


<br></br>


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
      {event.author === "Qui sommes-nous ?" && (
        <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>1. FAVORISER LA COOPÉRATION ET LA COHÉSION SOCIALE, INTRA ET INTER QUARTIER :</strong>
  {"\n"}
        En prévention de la violence urbaine sous-jacent, cette rencontre aura pour objectif
        de créer du lien et de la proximité entre les jeunes participants.
      </p>
       
      )}

      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>2. SPORTIF :</strong> 
        {"\n"}
        Composer une équipe avec les meilleurs joueurs du championnat et les faire accéder
        directement au tournoi IMPULSTAR.
      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>3. VALORISATION DES COMPÉTENCES :</strong> 
        {"\n"}
        Récompenser la meilleure équipe et les talents individuels (Prix, job d’été, voyage etc…).
      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>4. OUVERTURE D’ESPRIT ET LEADERSHIP :</strong> 
        {"\n"}
        Permettre le développement personnel des jeunes qui participeront à la compétition
        à travers un voyage dépaysant.
      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>5. SENSIBILISATION À LA CITOYENNETÉ :</strong>
        {"\n"}
        Écouter l’hymne nationale Française au début de chaque rencontre.
      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>6. FAVORISER LA MIXITÉ ENTRE LES JEUNES :</strong> 
        {"\n"}
        Participation d’une équipe féminine.
      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>7. FAVORISER L’INSERTION A L’EMPLOI ET L’ENTREPRENEURIAT :</strong> 
        {"\n"}
        Déploiement d’animations de sensibilisation à l’insertion par l’emploi et entrepreneuriat,
        en périphérie de chaque rencontre en y associant des acteurs du territoire associatif,
        privés et institutionnels.
      </p>
      
          
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

export default Agents;
