import React, { FC, useState } from "react";

interface Event {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface GoToNewsProps {
  onClick: (event: Event) => void; // Utiliser le type Event au lieu de News
  selectedEvent: Event | null; // Ajouter la prop selectedEvent
}

const GoToNews: FC<GoToNewsProps> = ({ onClick, selectedEvent }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    onClick(selectedEvent!); // Appeler onClick avec selectedEvent
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="group cursor-pointer flex items-center flex-row mt-[0.625rem] lg:mt-0 mb-5 lg:mb-0">
      <p className="font-dinw05Bold uppercase text-[#2CB9FF] text-base mr-4 -tracking-wide" onClick={openPopup}>
        EN SAVOIR PLUS
      </p>
      <span className="group-hover:translate-x-2.5 ease-out duration-300 w-6 h-6">
        {/* Animated Arrow */}
        <svg viewBox="0 0 25 15" className="w-full h-full">
          <path d="M16.2.5L19.9 4m4.6 3.5l-8.3 7" fill="none" stroke="#2CB9FF"></path>
          <path fill="none" stroke="#2CB9FF" strokeMiterlimit={10} d="M16 7.5H0"></path>
        </svg>
      </span>

      {/* Fenêtre popup */}
      {isPopupOpen && selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Contenu des événements */}
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.author}</p>
            <p>{selectedEvent.date}</p>
            {/* ... autres détails de l'événement */}
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoToNews;
