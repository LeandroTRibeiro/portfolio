import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import cell from '../assets/images/phonemuckup.png';
import calculator from '../assets/gifs/calculator.gif';

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';

export const Calculator = () => {
    return (
        <div className="overflow-x-hidden scroll-smooth relative">
            <Menu />
            <div className="w-screen tecnologies p-20 tablet:p-10 mobileG:p-5 mobileM:p-2 flex tabletM:flex-col-reverse justify-center">
                <div className="flex justify-center">
                    <div className="max-w-[700px] text-stone-200 flex flex-col gap-10 tabletM:mt-20 pr-10 tabletM:pr-0">
                        <div>
                            <h1 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                className="font-montserrat text-center tablet:m-auto w-fit text-4xl font-semibold mobileGG:text-3xl mobileG:text-2xl"
                            >
                                Calculadora
                            </h1>
                            <h2 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                className="font-bold font-montserrat text-center tablet:m-auto w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions mt-3"
                            >
                                Aplicação de uma calculadora
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                className="font-thin max-w-[550px] mobileGG:text-sm text-justify"
                            >
                                    Este foi um dos meus primeiros projetos ultilizando <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>, o objetivo desta criação era fazer uma aplicação web inteiramente responsiva, empregando meus conhecimentos sobre JavaScript para desenvolver uma calculadora plenamente funcional.</p>
                            <a 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                href="https://leandrotribeiro.github.io/Calculadora/index.html" 
                                target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                            >
                                <GlobeAltIcon className="w-6"/>
                                acessar o site
                            </a>
                            <a 
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                href="https://github.com/LeandroTRibeiro/Calculadora" 
                                target={"_blank"} 
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                            >
                                <img src={git} className="w-5"/>
                                acessar seu repositório
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center fade3 tablet:mt-14">
                    <img src={calculator} alt="calculator gif" className="h-[440px] min-w-max rounded"/>
                    <img src={cell} alt="phone muckup" className="h-[500px] min-w-max drop-shadow-[0_0_10px_rgba(250,250,250,0.1)] absolute"/>
                </div>
            </div>
            <Footer />
        </div>
    );
};