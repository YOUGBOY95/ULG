import React, { FC, useState} from "react";
import Section from "../components/Section";
import BackgroundText from "../components/section-news/BackgroundText";
import GoToNews from "../components/section-news/GoToNews";
import Slider from "../components/section-news/Slider";
import SectionHeadMotion from "../components/SectionHeadMotion";
import ULG from "../components/section-news/slider-img/ULG.jpg";
import player2 from "../components/section-news/slider-img/player2.jpg";
import player3 from "../components/section-news/slider-img/player3.jpg";
//import esport from "../components/section-news/slider-img/esport.jpg";


const events = [
  {
    img: ULG,
    author: "Championnat interquartier",
    date: "26/03/22",
    title: "Lancement d'un championnat interquartier de foot ",
  },

 
  {
    img: player3,
    author: "ULG E-SPORT 2023 FIFA édition - Annonce",
    date: "02/09/2023",
    title: "Lancement du tournoi ULG E-SPORT 2023 FIFA édition",
  },

  {
    img: player2,
    author: "ULG E-SPORT 2023 FIFA édition",
    date: "28/10/23",
    title: "Phase qualificative pour le tournoi du 28 au 29 octobre 2023",
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
         En 2022 OPTILIENCE lançait le concept ULG, un championnat de Streetfootball inédit se déroulant sur 5 mois.
         {"\n"}
         <br></br>
Près de 40 bénévoles ont oeuvré dans l'accompagnement de près 100 jeunes issus de différents quartiers de Garges répartis en 9 équipes.
{"\n"}
<br></br>
Un travail préliminaire et des sessions de brainstorming ont été réalisés 3 mois en amont de la comptétition. Chaque équipe a été accompagnée dans la création d'une nouvelle identité positive afin d'améliorer la perception mentale de leur quartier et de leur environnement.
{"\n"}
<br></br>
Ce dispositif sportif fût vecteur d'inclusion et de cohésion en permettant à la fois de stimuler la créativité et les "softs skills" des jeunes accompagnés. Ils ont ainsi été sensibilises à la citoyenneté et aux valeurs de la République à travers une écoute systématique de la Marseillaises avant chaque match.
{"\n"}
<br></br>
Ce projet n'aurait pas pu être réalisé sans le soutien des pouvoirs publiques tels que la Ville de Garges, la préfecture du Val d'Oise, l'association Créative, ou encore des entreprises comme le BIG5 et R+Sport, que nous tenons sincèrement à remercier.
        </p>
       )}
       {event.author === "ULG E-SPORT 2023 FIFA édition" && (
         <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
            Comme vous le savez, le tournoi <strong><span className="gras">ULG E-SPORT 2023 " FIFA édition"</span></strong> est lancé !
           {"\n"}
         <br></br>
Voici quelques informations supplémentaires sur son déroulement.
{"\n"}
         <br></br>

Celui-ci sera un tournoi <strong>exclusivement en binôme</strong> qui se jouera sur consoles<strong>(Playstation)</strong> et se divisera en deux étapes :
{"\n"}
         <br></br>
         <strong>UNE PHASE QUALIFICATIVE : 28 et 29 Octobre</strong> 
{"\n"}
         <br></br>
<strong>192 participants</strong>  de toute la ville s'affronteront directement en équipes
{"\n"}
         <br></br>
Les rencontres seront interquartiers/zone de résidence via un système de poules éliminatoires
{"\n"}
         <br></br>
A l'issue de cette phase chaque quartier aura son binôme <strong>"champion du quartier"</strong> capable de se retrouver en finale
{"\n"}
         <br></br>
         <strong>UNE PHASE FINALE : <em>Date à venir</em></strong>
{"\n"}
         <br></br>
Les <strong>"champions de quartier"</strong> précédemment qualifiés joueront les uns contre les autres via un nouveau système de poules éliminatoires
Le meilleur d'entre vous sera alors désigné comme équipe gagnante du tournoi !
{"\n"}
         <br></br>
Vous retrouverez <strong><span className="gras">l'ensemble de ces modalités et plus encore via notre système d'inscription.</span></strong>
{"\n"}
         <br></br>
Bon courage à tous et à toutes, hâte de démarrer cette aventure avec vous et que la meilleure équipe gagne !
{"\n"}
         <br></br>
En attendant, à vos manettes !


         </p>
       )}
       {event.author === "ULG E-SPORT 2023 FIFA édition - Annonce" && (
         <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
          <strong> ​ULG IS BACK ! </strong> Le championnat interquartiers de foot ne vous a pas suffit ? NOUS NON PLUS!
           {"\n"}
         <br></br>
Alors on a décidé de remettre le couvert mais cette fois-ci version 2.0 avec l'organisation en exclusivité totale du <strong> premier tournoi E-sport </strong> interquartiers de la ville !
{"\n"}
         <br></br>
Le tournoi <strong> ULG E-SPORT 2023 "FIFA édition" </strong> est lancé !
{"\n"}
         <br></br>
Les <strong> Gargeois et les Gargeoises  dès 13 ans </strong>  auront la possibilité de briller et de se défier au travers d'une compétition intense autour du jeu <strong>FIFA</strong>.
{"\n"}
         <br></br>
Certains profiteront de l'occasion afin de prendre leur revanche à la suite du championnat "streetfoot" façon "claque digitale" tandis que d'autres seront propulsés sur le devant de la scène pour démonter tout leur talent avec un ballon entre les pouces !
{"\n"}
         <br></br>
Restez à l'affût car du lourd s'annonce à suivre avec en autres, les étapes du <strong>tournoi</strong>, l'annonce des <strong>lots</strong>, des tonnes <strong>d'activités</strong>, de la rediffusion <strong>Twitch</strong> alors ne vous endormez pas !
{"\n"}
         <br></br>
On compte sur vous pour relayer un maximum cette information mais avec tout cet enthousiasme n'oubliez pas aussi de vous entraîner à côté car on ne vous le cache pas, la compétition sera féroce et seuls <strong>les meilleurs</strong> d'entre vous seront récompensés !
{"\n"}
         <br></br>
Juste un conseil avant de se quitter : il paraît que les inscriptions sont ouvertes mais que <strong>les places sont limités</strong> alors si j'étais vous je ne tarderais pas !
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
