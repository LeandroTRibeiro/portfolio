import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import cell from '../assets/images/phonemuckup.png';
import calculator from '../assets/images/calculator.gif';
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';

export const Calculator = () => {
    return (
        <>
            <Menu />
            <div className="w-screen h-screen bg-black p-20 pr-0 flex justify-center">
                <div className="w-[700px] text-stone-200 flex flex-col gap-10">
                    <div>
                        <h1 className="font-montserrat text-4xl font-semibold w-[450px] mobileGG:text-3xl mobileG:text-2xl">
                            Calculadora
                        </h1>
                        <h2 className="font-bold font-montserrat w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions">
                            Aplicação de uma calculadora
                        </h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-thin w-[550px]">Este foi um dos meus primeiros projetos ultilizando <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>, na época o intuito da criação deste projeto foi fazer uma aplicação web totalmente responsiva e aplicar meus recém adquiridos conhecimentos sobre JavaScript, para desenvolver uma calculadora totalmente funcional.</p>
                        <a href="https://leandrotribeiro.github.io/Calculadora/index.html" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <GlobeAltIcon className="w-6"/>
                            acessar o site
                        </a>
                        <a href="https://github.com/LeandroTRibeiro/Calculadora" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <img src={git} className="w-5"/>
                            acessar seu repositório
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center pr-40 mr-20">
                    <img src={calculator} alt="calculator gif" className="h-[440px] w-[220px] absolute rounded"/>
                    <img src={cell} alt="phone muckup" className="h-[500px] absolute"/>
                </div>
            </div>
            <Footer />
        </>
    );
};