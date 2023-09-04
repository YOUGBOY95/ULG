import React, { FC, useState } from "react";
import Section from "../components/Section";
import SectionHeadMotion from "../components/SectionHeadMotion";
import RiotButton from "../components/RiotButton";
import Background from "../components/section-maps/Background";
import OPTILICENCE from "../components/section-news/slider-img/idée.jpg";


const events = [
  {
    img: OPTILICENCE,
    author: "Qui sommes-nous ?",
    date: "",
    title: "OPTILIENCE",
  },

];

const Maps: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEventIndex] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Section className="pt-[3.75rem] md:pt-[7.5rem] lg:pt-10" blackVLine>
      <div id="optilience">{/* Contenu de la section NEWS */}</div>
      <div className="relative overflow-hidden pb-10 z-10">
        <div className="lg:ml-[8.5%] lg:mt-[calc(5vw+10px)] lg:mb-[5vw] lg:max-w-[42%] lg:pt-0 lg:pb-10">
          <h2
            className="overflow-hidden font-tungstenBold leading-[0.94] border-t border-slate-500
            py-[0.5em] lg:pt-8 lg:pb-0
            lg:mb-14
            text-6xl md:text-[6.25rem] lg:text-[7.5rem] text-[#2CB9FF]"
          >
            <SectionHeadMotion>OPTILIENCE ?</SectionHeadMotion>
          </h2>

          <h2
            className="text-[black] font-dinw05 -tracking-[.01em] text-xl leading-tight uppercase
                mt-2 md:-mt-2
                mb-4 lg:mb-5"
          >
            OPTILIENCE
          </h2>
          <p
            className="text-[grey] font-dinw1g
                leading-snug lg:leading-normal
                text-lg lg:text-base
                max-w-[31.25rem] lg:max-w-[77%]"
          >
            "Valoriser nos talents et cultiver l'ouverture d'esprit !"
          </p>
          <div
            className="text-center lg:text-left mt-[25rem] lg:mt-12"
            onClick={openPopup}
          >
            <RiotButton accentBorder>EN SAVOIR PLUS</RiotButton>
          </div>
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
         <strong>1. Identité :</strong>
        
        
  {"\n"}
 
 <strong>OPTILIENCE</strong> est une association <strong>fondée en 2021</strong>.
 {"\n"}
Le nom de l’association correspond à la contraction de deux mots faisant référence à deux états esprits
constituant des fondements pour réussir au sens large. il s’agit de <strong>“optimisme”</strong> et de la <strong>“résilience”</strong>.


      </p>
       
      )}

      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>2. Nos valeurs :</strong> 
        {"\n"}
        La promotion de la citoyenneté, des solidarités,
        de l'insertion professionnelle, de l'inclusion,
        et la mise en valeur de la pratique du sport pour les apports en matière de santé et "softs skills".

      </p>
      
      <br />
      
      <p className="mt-0" style={{ whiteSpace: "pre-line" }}>
        <strong>3. Missions :</strong> 
        {"\n"}
        Nos missions se déclinent en trois axes qui empreignent toutes nos actions et s’organisent en pôle :
        {"\n"}
        <strong>- Pôle inclusion par le Sport et le E-Sport</strong>
        {"\n"}
        <strong>- Pôle Coaching à travers des Masterclass</strong>
        {"\n"}
        <strong>- Pôle sourcing et placement de jeunes en entreprises</strong>
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
 
      <Background />
    </Section>
  );
};

export default Maps;
