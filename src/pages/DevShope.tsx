import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
<em></em>
import devshope from '../assets/gifs/devshope.gif';

import { CheckIcon } from "@heroicons/react/24/outline";
import git from '../assets/svgs/gitIconBlack.svg';

export const DevShope = () => {
    return (
        <div className="overflow-x-hidden relative scroll-smooth">
            <Menu />
            <div className="w-screen tecnologies p-20 tablet:p-10 mobileG:p-5 mobileM:p-2 flex tabletM:flex-col-reverse justify-center">
                <div className="flex justify-center">
                    <div className="max-w-[700px] text-stone-200 flex flex-col gap-10 tabletM:mt-20 pr-20 tabletM:pr-0">
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
                                DevShope
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
                                E-commerce
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
                                Este é o projeto em que estou trabalhando, utilizo várias tecnologias para desenvolve-lo, tais como: <em>TypeScript</em>, <em>React</em>, <em>Axios</em>, <em>Js</em> <em>Cookie</em>, <em>React</em> <em>Redux</em>, <em>React</em> <em>Router</em> <em>DOM</em>, <em>TailwindCSS</em>,  <em>Node</em>, <em>Express</em>, <em>Express</em> <em>validator</em>, <em>JsonWebToken</em>, <em>Mongoose</em>, <em>MongoDB</em>, <em>Correios</em> <em>Brasil</em>, <em>Multer</em>, <em>Sharp</em>, <em>Cloudinary</em>, <em>SendGrid</em>, <em>dotenv</em>, <em>Jest</em>, entre outras. Poderia iniciar o projeto com muitas funcionalidades já prontas, porém, o propósito deste é estimular e desenvolver minhas atuais habilidades, sendo assim, todas as aplicações até aqui otimizadas foram elaboradas por mim. Pretendo ampliar as funcionalidades do site, bem como aprontar um Dashboard personalizado.
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
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Registrar um usuário;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Recuperar a senha do usuário;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Editar perfil do usuário;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Lista de Desejos;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Carrinho de Compras;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Calcular Frete;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Ler todos os produtos;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Pesquisar por categorias ou nomes de produtos;</li>
                                        <li className="flex items-center gap-2"><CheckIcon className="w-6 text-indigo-500" />Histórico de compras.</li>
                                    </ul>
                                </div>
                            <a 
                                href="https://github.com/LeandroTRibeiro/devShope-app" 
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
                                href="https://github.com/LeandroTRibeiro/devShope-api" 
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
                        
                        <img src={devshope} alt="devshope gif" className="w-[350px] min-w-[350px] mobileGG:w-[290px] mobileG:w-[220px] mobileGG:min-w-[290px] mobileG:min-w-[220px] rounded" width={690} height={388}/>

                        <picture className="w-[450px] mobileGG:w-[370px] mobileG:w-[300px] min-w-[450px] mobileGG:min-w-[370px] mobileG:min-w-[300px] drop-shadow-[0_0_10px_rgba(250,250,250,0.1)] absolute">
                            <source srcSet="https://cdn.filestackcontent.com/resize=width:300/zTliI3AZT8C8A1THQBII" media="(max-width: 425px)"/>
                            <source srcSet="https://cdn.filestackcontent.com/resize=width:370/zTliI3AZT8C8A1THQBII" media='(max-width: 535px)'/>
                            <img src="https://cdn.filestackcontent.com/resize=width:450/zTliI3AZT8C8A1THQBII" alt="laptop muckup" width={1920} height={1188}/>
                        </picture>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};