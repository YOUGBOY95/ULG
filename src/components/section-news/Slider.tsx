import { FC, useEffect, useRef, useState } from "react";
import ULG from "./slider-img/ULG.jpg";
//import player1 from "./slider-img/player1.jpg";
import player2 from "./slider-img/player2.jpg";
//import esport from "./slider-img/esport.jpg";
import player3 from "./slider-img/player3.jpg";
import { motion } from "framer-motion";

const news: News[] = [
  {
    id: 1,
    img: ULG,
    author: "championnat interquartier",
    date: "26/03/22",
    title: "Lancement d'un championnat interquartier de foot ",
    
  },
  {
    id: 3,
    img: player3,
    author: "ULG E-SPORT 2023 FIFA édition - Annonce",
    date: "02/09/2023",
    title: "Lancement du tournoi ULG E-SPORT 2023 FIFA édition",
    
  },

  {
    id: 2,
    img: player2,
    author: "ULG E-SPORT 2023 FIFA édition",
    date: "28/10/23",
    title: "Phase qualificative pour le tournoi du 28 au 29 octobre 2023",
 
  },
  
  
  
  
];

 

const BREAKPOINT = 25;
const TRANSITION_CLASSES = ["ease-out", "duration-500"];

const Slider: FC = () => {
  const [disabled, setDisabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024 && !disabled) {
        setDisabled(true);
      } else if (window.innerWidth < 1024 && disabled) {
        setDisabled(false);
      }
    }
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [disabled]);

  const elastic: Axis = {};
  const constrain: Axis = {};

  if (sliderIndex === 0) {
    constrain.right = 0;
    elastic.right = 0.5;
  }

  if (sliderIndex === news.length - 1) {
    constrain.left = 0;
    elastic.left = 0.5;
  }

  return (
    <motion.div
      ref={ref}
      drag={disabled ? false : "x"}
      dragSnapToOrigin
      dragMomentum={false}
      dragTransition={{ bounceDamping: 100, bounceStiffness: 1000 }}
      style={{
        translateX: `-${sliderIndex * 100}%`,
      }}
      dragConstraints={constrain}
      dragElastic={elastic}
      onPointerDown={() => ref.current?.classList.remove(...TRANSITION_CLASSES)}
      onDragEnd={(e, info) => {
        const width = ref.current?.getBoundingClientRect().width ?? 0;
        const percentage: number = (info.offset.x / width) * 100;
        ref.current?.classList.add(...TRANSITION_CLASSES);
        if (percentage <= -BREAKPOINT && sliderIndex < news.length - 1) {
          setSliderIndex(sliderIndex + 1);
        } else if (percentage >= BREAKPOINT && sliderIndex > 0) {
          setSliderIndex(sliderIndex - 1);
        }
      }}
      className="w-full flex overflow-x-visible select-none"
    >
      {news.map((obj) => (
        <div
          className="relative group cursor-pointer flex-[1_0]
        pr-8 lg:pr-0
        min-w-full lg:min-w-[auto]
        lg:mr-[1.875rem]"
          key={obj.id}
        >
          
            <picture
              key={obj.id}
              className="relative block w-full h-auto overflow-hidden"
            >
              <span className="block relative w-full pt-[56.25%] z-20 "></span>
              <span className="absolute top-0 left-0 h-full -translate-x-[120%] -skew-x-12 bg-[#2CB9FF] mix-blend-multiply group-hover:-translate-x-1/4 easy-out duration-300 w-[150%] z-10 rounded"></span>

              <img
               loading="lazy"
               src={obj.img}
               className="w-full h-full object-cover object-center absolute top-0 left-0 rounded-image"
               alt="slider"
               width={1280}
               height={720}
              />
            </picture>
            <div className="mt-[1.25rem] mb-[0.9375rem] leading-5 text-sm font-dinw05">
              <span className="text-[#0f1923]">{obj.date}</span>
              <span className="text-[#2CB9FF] ml-5 uppercase relative">
                <span className="absolute -left-[0.625rem] w-[1px] h-[1px] bg-[#2CB9FF] bottom-[0.1875rem]"></span>
                {obj.author}
              </span>
            </div>
            <h3 className="font-dinw05Bold mb-4 text-[1.25rem] leading-tight uppercase text-[#383e3a]">
              {obj.title}
            </h3>
          
        </div>
      ))}
    </motion.div>
  );
};

export default Slider;

interface News {
  id: number;
  img: string;
  date: string;
  title: string;
  author: string;
 // videoLink: string; // Add videoLink property
}

interface Axis {
  left?: number;
  right?: number;
}

