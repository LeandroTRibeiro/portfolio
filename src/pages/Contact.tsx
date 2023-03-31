import github from '../assets/svgs/gitIcon.svg';
import instagran from '../assets/svgs/instagranIcon.svg';
import linkedin from '../assets/svgs/linkedinIcon.svg';

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const Contact = () => {
    return (
        <div id='contact' className="w-screen tecnologies text-stone-200 flex flex-col items-center gap-10 p-20">
            <div 
                className="flex flex-col gap-10 mobileGG:gap-5"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="botton-center"
            >
                <div className="flex flex-col gap-5 mobileGG:gap-3">
                    <div className="flex flex-col">
                        <h1 className="font-montserrat text-4xl font-semibold mobileGG:text-3xl mobileG:text-2xl">Contato</h1>
                        <h2 className="font-bold font-montserrat text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit">Fale comigo</h2>
                    </div>
                    <p className="font-thin text-stone-200">Estou disponível para ofertas de trabalho, contratos freelancer e sugestões, entre em contato!</p>
                </div>
                <div className="flex gap-1">
                    <div className="flex flex-col gap-10 mobileGG:gap-3">
                        <a href="tel:+5548996214871" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <PhoneIcon className="w-6"/>
                            +55 048 99621-4871
                        </a>
                        <a href="mailto:leandrothiago_ribeiro@hotmail.com" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <EnvelopeIcon className="w-6"/>
                            leandrothiago_ribeiro@hotmail.com
                        </a>
                        <div className="flex gap-5">
                            <a href="https://www.instagram.com/dymyyy/" target={"_blank"} className="flex justify-center items-center"><img src={instagran} alt="instagran icon" className="w-7"/></a>
                            <a href="https://www.linkedin.com/in/ribeiro-leandro/" target={"_blank"} className="flex justify-center items-center"><img src={linkedin} alt="linkedIn icon" className="w-7"/></a>
                            <a href="https://github.com/LeandroTRibeiro" target={"_blank"} className="flex justify-center items-center"><img src={github} alt="GitHub icon" className="w-7"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};