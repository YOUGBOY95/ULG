import React, { FC, useState } from "react";
import { Icon } from "@iconify/react";
// @ts-ignore
import EsportVideo from "../../assets/img/esport.mp4";


const BackgroundVideo: FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  return (
    <div className="absolute top-0 left-0 object-cover w-full h-full z-0">
      <video
        autoPlay
        muted={isMuted}
        playsInline
        loop
        className="w-full h-full object-cover"
      >
        <source
          src={EsportVideo} // Utilisation du chemin vers la vidéo MP4
          type="video/mp4"
        />
      </video>

      <div
        className="absolute bottom-4 right-4 z-10"
        style={{ color: "#fff", cursor: "pointer" }}
      >
        {isMuted ? (
          < Icon icon="ic:baseline-music-off" className="text-[#fcfcfc]" height={24}  onClick={handleToggleMute}/>
          
        ) : (
          < Icon icon="ic:baseline-audiotrack" className="text-[#fcfcfc]" height={24}  onClick={handleToggleMute}/>
        )}
      </div>
    </div>
  );
};

export default BackgroundVideo;
