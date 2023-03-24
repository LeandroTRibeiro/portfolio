import github from '../assets/svgs/gitIcon.svg';
import instagran from '../assets/svgs/instagranIcon.svg';
import linkedin from '../assets/svgs/linkedinIcon.svg';

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const Contact = () => {
    return (
        <div id='contact' className="w-screen tecnologies text-stone-200 flex flex-col items-center gap-10 p-20">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <h1 className="font-montserrat text-4xl font-semibold fade3">Contato</h1>
                        <h2 className="font-bold font-montserrat text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit fade3">Fale comigo</h2>
                    </div>
                    <p className="font-thin text-stone-200">Estou disponível para ofertas de trabalho, contratos freelancer e sujestões, entre em contato!</p>
                </div>
                <div className="flex gap-5">
                    <div className="flex flex-col gap-10">
                        <a href="tel:+5548996214871" target={"_blank"} className="flex gap-2 p-2 bg-stone-200 text-black rounded w-[350px]">
                            <PhoneIcon className="w-6"/>
                            +55 048 99621-4871
                        </a>
                        <a href="mailto:leandrothiago_ribeiro@hotmail.com" target={"_blank"} className="flex gap-2 p-2 bg-stone-200 text-black rounded w-[350px]">
                            <EnvelopeIcon className="w-6"/>
                            leandrothiago_ribeiro@hotmail.com
                        </a>
                        <div className="flex gap-5">
                            <a href="https://www.instagram.com/dymyyy/" target={"_blank"} className="flex justify-center items-center"><img src={instagran} alt="instagran icon" className="w-7"/></a>
                            <a href="https://www.linkedin.com/in/ribeiro-leandro/" target={"_blank"} className="flex justify-center items-center"><img src={linkedin} alt="linkedIn icon" className="w-7"/></a>
                            <a href="https://github.com/LeandroTRibeiro" target={"_blank"} className="flex justify-center items-center"><img src={github} alt="GitHub icon" className="w-7"/></a>
                        </div>
                    </div>
                    <form action="POST" className="mt-[-28px] flex flex-col gap-3">
                        <label className="flex flex-col gap-1">
                            <span className="after:content-['*'] after:ml-0.5 after:text-purple-700 font-thin text-stone-200">Seu nome</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-transparent border border-stone-800 rounded w-[350px] px-1 py-2  outline-none"
                                required
                            />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="after:content-['*'] after:ml-0.5 after:text-purple-700 font-thin text-stone-200">Telefone para contato</span>
                            <input
                                type="tel"
                                name="telefone"
                                id="telefone"
                                className="bg-transparent border border-stone-800 rounded w-[350px] px-1 py-2 outline-none"
                                placeholder="(DDD) 00000-0000"
                                required
                            />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="after:content-['*'] after:ml-0.5 after:text-purple-700 font-thin text-stone-200">E-mail para contato</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-transparent border border-stone-800 rounded w-[350px] px-1 py-2 outline-none"
                                required
                            />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="after:content-['*'] after:ml-0.5 after:text-purple-700 font-thin text-stone-200">informações Adicionais</span>
                            <textarea name="info" id="info" className="bg-transparent border border-stone-800 rounded w-[350px] p-1 resize-none outline-none"></textarea>
                        </label>
                        <button className="bg-gradient-to-tr from-indigo-900 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out w-[200px] py-3 rounded font-semibold text-black justify-center items-center hover:opacity-70 active:scale-90">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};