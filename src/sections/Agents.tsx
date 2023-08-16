import { FC } from "react";
import RiotButton from "../components/RiotButton";
import Section from "../components/Section";
import AgentImage from "../components/section-agents/AgentImage";
import Background from "../components/section-agents/Background";
import SectionHeadMotion from "../components/SectionHeadMotion";


const Agents: FC = () => {


    return <Section className="bg-black bg-contain bg-no-repeat md:bg-[url('/src/components/section-agents/agents-bg.webp')] bg-bottom pb-10 overflow-x-clip">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">

            {/* Text & CTA */}
            <div className="overflow-hidden text-white lg:w-[42%] lg:mb-[5vw] lg:ml-7 z-30">

                <h3 className="overflow-hidden relative font-tungstenBold leading-[0.94] py-7 mt-12 border-t border-slate-50/40 mb-3
            text-[3.5rem] md:text-[6.25rem] lg:text-[7.5rem]
            md:pt-10 
            ">
                    <SectionHeadMotion>
                 ULG ?
                    </SectionHeadMotion>
                </h3>
                <h3 className="font-dinw05 mb-4 text-xl leading-tight tracking-[-0.01em]  text-[#2CB9FF]">URBAN LEAGUE GAME</h3>
                <p className="font-dinw1g text-lg leading-snug md:max-w-lg lg:max-w-[80%]">
                Nous sommes une petite équipe qui s'est rassemblée autour de cette association afin de mener à bien ce projet qui nous est cher.
                </p>
                <div className="z-30
                text-center lg:text-left
                -translate-x-1/2  lg:translate-x-0
                left-[50%] lg:left-0
                absolute lg:static
                mt-[82vw] sm:mt-[70vw] md:mt-[60vw] lg:mt-12
                ">

                    <a href="/" >
                    <RiotButton white>
                        En savoir plus 
                    </RiotButton>
                    </a>
                </div>
            </div>

            <AgentImage />
        </div>


        <Background />
    </Section>
}

export default Agents;