import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import cell from '../assets/images/phonemuckup.png';
import devtask from '../assets/images/devtask.gif';

import { CheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';


export const DevTask = () => {
    return (
        <>
            <Menu />
            <div className="w-screen tecnologies p-20 pr-0 flex justify-center">
                <div className="w-[700px] text-stone-200 flex flex-col gap-10">
                    <div>
                        <h1 className="font-montserrat text-4xl font-semibold w-[450px] mobileGG:text-3xl mobileG:text-2xl">
                            DevTasks
                        </h1>
                        <h2 className="font-bold font-montserrat w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions">
                            Aplicação de uma lista de tarefas
                        </h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-thin w-[550px]">Este projeto foi totalmente desenvolvido em TypeScript e separado em duas etapas, backend e frontend, com o intuito de desenvolver uma aplicação que tivesse todas as funcionalidades de um CRUD, criei uma API usando Node juntamente com o Express e o banco de dados MongoDB, fazendo interação do banco com o ORM Mongoose.  Já o frontend foi desenvolvido em React, fazendo o consumo da API ultilizando a biblioteca Axios, a estilização do projeto foi feita com TailwindCSS e neste projeto ultilizei as bibliotecas React Redux e React Router DOM.</p>
                            <div>
                                <h3 className="font-bold font-montserrat w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions">Funcionalidades:</h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" /> Ler todas as terefas.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Adicionar nova tarefa.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Editar tarefa.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Deletar terefa.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Marcar terefa como feita.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Pesquisar por uma ou mais terefas pelo título ou parte dele.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Ordenar as tarefas por mais antigas ou recentes.</li>
                                    <li className="flex items-center gap-2"><CheckIcon className="w-6 text-green-500" />Trocar o tema para Dark ou Light.</li>
                                </ul>
                            </div>
                        <a href="https://leandrotribeiro.github.io/Calculadora/index.html" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <GlobeAltIcon className="w-6"/>
                            acessar o site
                        </a>
                        <a href="https://github.com/LeandroTRibeiro/Calculadora" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <img src={git} className="w-5"/>
                            acessar seu repositório frontend
                        </a>
                        <a href="https://github.com/LeandroTRibeiro/Calculadora" target={"_blank"} className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileG:w-[290px] mobileGG:text-sm">
                            <img src={git} className="w-5"/>
                            acessar seu repositório backend
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center pr-40 mr-20">
                    <img src={devtask} alt="calculator gif" className="h-[440px] w-[220px] absolute rounded"/>
                    <img src={cell} alt="phone muckup" className="h-[500px] absolute"/>
                </div>
            </div>
            <Footer />
        </>
    );
};