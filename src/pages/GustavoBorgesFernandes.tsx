import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import cell from '../assets/images/phonemuckup.png';
import gustavo from '../assets/gifs/gustavofernandesborges.gif';

import { CheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';

export const GustavoFernandesBorges = () => {
    return (
        <div className="overflow-x-hidden relative scroll-smooth">
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
                            className="font-montserrat text-center w-fit text-4xl font-semibold mobileGG:text-3xl mobileG:text-2xl"
                            >
                                Gustavo Fernandes Borges
                            </h1>
                            <h2
                                className="font-bold font-montserrat text-center w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions mt-3"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                Landing Page de uma advocacia
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p
                                className="font-thin max-w-[550px] mobileGG:text-sm text-justify"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                Este trabalho foi desenvolvido para uma advocacia da região, com o intuito de não ultilizar muitos recursos, deixando leve e simples, foi criado com <em>HTML</em>, <em>TailwindCSS</em> e <em>JavaScript</em>, o projeto já foi aprovado e agora estamos aguardando o cliente desenvolver os textos e demais conteúdos e informações para finalizar as animações e formulário de envio.
                            </p>
                                <div>
                                    <h3
                                        className="font-bold font-montserrat w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions"
                                        data-aos="fade-right"
                                        data-aos-offset="100"
                                        data-aos-delay="600"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="true"
                                    >
                                            Funcionalidades
                                    </h3>
                                    <ul
                                        className="flex flex-col gap-1 mobileGG:text-sm"
                                        data-aos="fade-right"
                                        data-aos-offset="100"
                                        data-aos-delay="650"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="true"
                                    >
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Conectar os usuários a advocacia de forma simples;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Formulário de envio para o email do cliente.</li>
                                    </ul>
                                </div>
                            <a
                                href="https://leandrotribeiro.github.io/Calculadora/index.html"
                                target={"_blank"}
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="800"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <GlobeAltIcon className="w-6"/>
                                acessar o demo
                            </a>
                            <a
                                href="https://github.com/LeandroTRibeiro/Calculadora"
                                target={"_blank"}
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-delay="800"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <img src={git} className="w-5"/>
                                acessar seu repositório
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex justify-center items-center fade3 tablet:mt-14"
                >
                    <img src={gustavo} alt="calculator gif" className="h-[440px] min-w-max rounded"/>
                    <img src={cell} alt="phone muckup" className="h-[500px] min-w-max drop-shadow-[0_0_10px_rgba(250,250,250,0.1)] absolute"/>
                </div>
            </div>
            <Footer />
        </div>
    );
};