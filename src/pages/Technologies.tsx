import { useRef, useEffect } from 'react';
import tecnologies from '../assets/images/JS5.png';

export const Technologies = () => {

    return (
        <div id='tecnologies' className="w-screen tecnologies text-stone-200 flex laptop:flex-row-reverse justify-center px-20 laptop:py-20 laptop:px-10 mobileG:px-5 mobileM:px-2 overflow-x-hidden overflow-y-hidden relative">
            <div 
                className="flex-1 flex justify-center items-center laptop:absolute laptop:mt-[-100px] laptop:right-[-10px] mobileGG:right-[-30px] mobileG:right-[-20px]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
            >
                <img src={tecnologies} alt="logo tecnologiras" className="min-w-[450px] max-w-[500px] laptop:opacity-40"/>
            </div>
            <div 
                className="flex-1 flex flex-col justify-center gap-5"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
            >
                <div>
                    <h2 className="font-bold font-montserrat text-4xl mobileGG:text-3xl mobileG:text-2xl bg-clip-text text-transparent w-fit bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
                        Tecnologias
                    </h2>
                </div>
                <p className="font-thin text-stone-200 text-justify w-[100%] laptop:w-[60%] tablet:w-full mobileGG:text-sm">
                Através de meus conhecimentos posso construir estruturas bem organizadas, acessíveis e de fácil navegação, usando a <em>semântica</em> de forma eficaz para melhorar o desempenho do site e a otimização do mecanismo de pesquisa.
                Meus conhecimentos de <em>CSS</em> e seus frameworks, me permitem a produção otimizada de aplicações responsivas, personalizadas e com vida.
                Ultilizando JavaSript e consumindo bibliotecas e estruturas populares como <em>React</em> e fazendo requisições ao backend, posso desenvolver aplicações complexas.
                Além de minhas habilidades de frontend, tenho familiaridade com <em>Node.js</em>, usando <em>Express.js</em> para gerenciar rotas e middlewares, manipulando de forma simples e ágil, bancos de dados SQL e no-SQL usando ORM's, posso assim criar <em>WebServices</em> e <em>API's RESTFUL.</em></p>
            </div>
        </div>
    );
};