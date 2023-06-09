import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import devtask from '../assets/gifs/devtask.gif';

import { CheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';

export const DevTask = () => {

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
                            className="font-montserrat text-center tablet:m-auto w-fit text-4xl font-semibold mobileGG:text-3xl mobileG:text-2xl"
                            >
                                DevTasks
                            </h1>
                            <h2 
                                className="font-bold font-montserrat text-center tablet:m-auto w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions mt-3"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                Aplicação de uma lista de tarefas
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
                                Este é um projeto desenvolvido em <em>TypeScript</em> e composto em duas etapas, backend e frontend. Concluído com o intuito de exercer uma aplicação contando com todas as funcionalidades de um CRUD. Para o backend, criei uma <em>API</em> usando <em>Node</em> juntamente com o <em>Express</em>, fazendo interação do banco de dados <em>MongoDB</em> com o ORM <em>Mongoose</em>. O frontend foi elaborado utilizando a biblioteca <em>React</em>, <em>React</em> <em>Redux</em>, <em>React</em> <em>Router</em> <em>DOM</em> e <em>Axios</em> para o consumo da <em>API</em>. A estilização do projeto foi executada com <em>TailwindCSS</em>.
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
                                            Funcionalidades</h3>
                                    <ul 
                                        className="flex flex-col gap-1 mobileGG:text-sm"
                                        data-aos="fade-right"
                                        data-aos-offset="100"
                                        data-aos-delay="650"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-once="true"
                                    >
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" /> Ler todas as tarefas;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Adicionar nova tarefa;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Editar tarefa;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Deletar tarefa;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Marcar tarefa como feita;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Pesquisar por uma ou mais tarefas pelo título ou parte dele;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Ordenar as tarefas por mais antigas ou recentes;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Trocar o tema para Dark ou Light.</li>
                                    </ul>
                                </div>
                            <a 
                                href="https://dev-tasks.netlify.app/" 
                                target={"_blank"} 
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <GlobeAltIcon className="w-6"/>
                                acessar o site
                            </a>
                            <a 
                                href="https://github.com/LeandroTRibeiro/tasklist-app" 
                                target={"_blank"} 
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <img src={git} className="w-5" width={41} height={45}/>
                                acessar seu repositório frontend
                            </a>
                            <a 
                                href="https://github.com/LeandroTRibeiro/api-tasklist" 
                                target={"_blank"} 
                                className="flex justify-start items-center gap-2 p-2 bg-stone-200 text-black rounded w-[350px] mobileGG:w-[250px] mobileG:w-full mobileGG:text-sm"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                            >
                                <img src={git} className="w-5" width={41} height={45}/>
                                acessar seu repositório backend
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                    className="flex justify-center items-start fade3 tablet:mt-14"
                >
                    <div className="flex justify-center items-center">
                        <img src={devtask} alt="calculator gif" className="h-[440px] w-[198px] rounded"/>
                        <img src="https://cdn.filestackcontent.com/resize=width:330/3fzDvFoQRequZcOOfYlw" alt="phone muckup" className="h-[500px] w-[331px] drop-shadow-[0_0_10px_rgba(250,250,250,0.1)] absolute"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};