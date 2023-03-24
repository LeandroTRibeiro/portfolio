import { useEffect, useState } from 'react';

import about from '../assets/images/about.png';

import { ArrowDownIcon } from '@heroicons/react/24/outline';

export const About = (props: {firstStep: boolean, secondStep: boolean, thirdStep: boolean}) => {

    const [firstFade, setFirstFade] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstFade(true);
        }, 2000);
    },[])

    return (
        <div id="about" className="w-screen bg-black text-stone-200 flex justify-center p-20 z-50">
            <div className="flex-1 flex flex-col gap-2">
                <div className='mt-20'>
                    <h1 
                        className={`font-montserrat text-4xl font-semibold fade3 transition-all duration-300 ease-in-out 
                        ${props.firstStep ? 'scale-90 opacity-50 translate-y-20' : ''} 
                        ${props.secondStep ? 'scale-75 opacity-30 translate-y-40' : ''} 
                        ${props.thirdStep ? 'opacity-0 scale-150' : ''}`}
                    >
                        Leandro Thiago Ribeiro
                    </h1>
                    <h2 
                        className={`font-bold font-montserrat w-fit text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fade3 transition-all duration-300 ease-in-out 
                        ${props.firstStep ? 'scale-90 opacity-50 translate-y-20 translate-x-3' : ''} 
                        ${props.secondStep ? 'scale-75 opacity-30 translate-y-40 translate-x-9' : ''} 
                        ${props.thirdStep ? 'opacity-0 scale-150' : ''}`}
                    >
                        Frontend Developer
                    </h2>
                </div>
                <p 
                    className={`fade3 transition-all duration-300 ease-in-out font-light text-stone-200 
                    ${props.firstStep ? 'scale-90 opacity-50 translate-y-20' : ''} 
                    ${props.secondStep ? 'scale-75 opacity-30 translate-y-40' : ''}
                    ${props.thirdStep ? 'opacity-0 scale-150' : ''}`}
                >
                    Como desenvolvedor front-end e meus conhecimento de <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>, estou confiante de que posso criar sites visualmente impressionantes e altamente funcionais.
                    Sou bem versado em design <em>responsivo</em> e entendo a importância de criar sites que possam se adaptar a vários tamanhos de tela e dispositivos. Também tenho experiência com frameworks de front-end populares, como <em>React</em>, que me permitem criar interfaces de usuário dinâmicas e interativas.
                    Além das minhas habilidades técnicas, sou um forte comunicador e colaborador. Acredito que uma comunicação eficaz é a chave para garantir que os projetos sejam concluídos no prazo e para a satisfação de todas as partes interessadas. Também estou aberto a feedback e disposto a trabalhar com outras pessoas para encontrar soluções para quaisquer desafios que possam surgir.
                </p>
                <a href="https://wa.me/5548996312210?text=Olá+consegui+seu+contato+atravéz+de+seu+site!" target="_blank">
                    <button 
                        className={`fade3 bg-gradient-to-tr from-indigo-900 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out w-[200px] py-3 rounded font-semibold text-black justify-center items-center 
                        ${props.firstStep ? 'scale-90 opacity-50 translate-y-20 translate-x-5' : ''} 
                        ${props.secondStep ? 'scale-75 opacity-30 translate-y-40 translate-x-12' : ''} 
                        hover:opacity-40 active:opacity-100
                        ${props.thirdStep ? 'opacity-0 scale-150' : ''} 
                        ${props.firstStep || props.secondStep || props.thirdStep ? '' : 'opacity-70'}`}
                    >
                        Contato
                    </button>
                </a>
                <div className={`font-montserrat flex flex-col items-start mt-10
                    ${props.firstStep || props.secondStep || props.thirdStep ? 'hidden' : ''}
                    ${firstFade ? 'animate-bounce' : 'fade3'}`}>
                    <div className=''>
                        <ArrowDownIcon className='w-8'/> 
                    </div>
                </div>
            </div>
            <div 
                className={`flex-1 fade3 transition-all  duration-300 ease-in-out 
                ${props.firstStep ? 'scale-90 opacity-50 translate-y-20' : ''} 
                ${props.secondStep ? 'scale-75 opacity-30 translate-y-40' : ''}
                ${props.thirdStep ? 'opacity-0 scale-150' : ''}`}
            >
                <img src={about} alt="man with laptop" 
                    className={`
                        ${props.firstStep || props.secondStep || props.thirdStep ? '' : 'pulse-img'}`}/>
            </div>
        </div>
    );
};