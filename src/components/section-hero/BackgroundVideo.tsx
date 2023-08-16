import { FC } from "react";
// @ts-ignore
import EsportVideo from "../../assets/img/esport.mp4";


const BackgroundVideo: FC = () => (
  <div className="absolute top-0 left-0 object-cover w-full h-full z-0">
    <video
      autoPlay
      muted
      playsInline
      loop
      className="w-full h-full object-cover"
    >
      <source
        src={EsportVideo} // Utilisation du chemin vers la vidéo MP4
        type="video/mp4"
      />
    </video>
  </div>
);

export default BackgroundVideo;
