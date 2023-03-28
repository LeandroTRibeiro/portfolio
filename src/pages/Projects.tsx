import devtask from '../assets/images/devtask2.png';
import devchat from '../assets/images/devchat.png';
import gustavoborges from '../assets/images/gustavoborges.png';
import calculadora from '../assets/images/calcu.png';
import devshope from '../assets/images/devShope.png';
import { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const Projects = () => {

    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(false);
    const [s3, setS3] = useState(true);
    const [s4, setS4] = useState(false);
    const [s5, setS5] = useState(false);

    const handlerS1 = () => {
        setS1(true);
        setS2(false);
        setS3(false);
        setS4(false);
        setS5(false);
    };
    const handlerS2 = () => {
        setS1(false);
        setS2(true);
        setS3(false);
        setS4(false);
        setS5(false);
    };
    const handlerS3 = () => {
        setS1(false);
        setS2(false);
        setS3(true);
        setS4(false);
        setS5(false);
    };
    const handlerS4 = () => {
        setS1(false);
        setS2(false);
        setS3(false);
        setS4(true);
        setS5(false);
    };
    const handlerS5 = () => {
        setS1(false);
        setS2(false);
        setS3(false);
        setS4(false);
        setS5(true);
    };

    const handlerLeft = () => {
        if(s1) {
            setS1(false);
            setS5(true);
            return;
        }
        if(s2) {
            setS2(false);
            setS1(true);
            return;
        } 
        if(s3) {
            setS3(false);
            setS2(true);
            return;
        } 
        if(s4) {
            setS4(false);
            setS3(true);
            return;
        } 
        if(s5) {
            setS5(false);
            setS4(true);
            return;
        } 
    };

    const handlerRight = () => {
        if(s1) {
            setS1(false);
            setS2(true);
            return;
        };
        if(s2) {
            setS2(false);
            setS3(true);
            return;
        };
        if(s3) {
            setS3(false);
            setS4(true);
            return;
        };
        if(s4) {
            setS4(false);
            setS5(true);
            return;
        }; 
        if(s5) {
            setS5(false);
            setS1(true);
            return;
        }; 
    };

    return (
        <div id='projects' className="w-screen bg-black text-stone-200 flex flex-col gap-10 p-20 tablet:p-14">
            <div className="flex-2 flex flex-col gap-2 mobileGG:gap-2">
                <div className="flex justify-center">
                    <h2 className="font-bold font-montserrat text-4xl mobileGG:text-3xl mobileG:text-2xl text-white">Projetos</h2>
                </div>
                <div className="m-auto text-center font-bold font-montserrat text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit h-[60px]"
                >
                    {`
                        ${s1 ? 'devTask' : ''} 
                        ${s2 ? 'devChat' : ''} 
                        ${s3 ? 'Gustavo Fernandes Borges' : ''} 
                        ${s4 ? 'Calculadora' : ''} 
                        ${s5 ? 'devShope' : ''}
                    `}
                </div>
                <p 
                    className="text-center font-montserrat font-thin text-stone-200 mobileGG:text-sm h-[15px]">
                        {`
                            ${s1 ? 'Aplicação para anotação de tarefas.' : ''} 
                            ${s2 ? 'Aplicação de um LiveChat.' : ''} 
                            ${s3 ? 'Landing Page de uma advocacia.' : ''} 
                            ${s4 ? 'Aplicação de uma calculadora.' : ''} 
                            ${s5 ? 'E-commerce.' : ''}
                        `}
                </p>
            </div>
            <div className="flex-1">
                <ArrowLeftCircleIcon className="w-10 mobileGG:w-8 absolute mt-[13vw] tablet:mt-[22vw] tablet:rotate-90 mobileGG:mt-[24vw] left-10 tablet:left-1 mobileGG:left-4 cursor-pointer z-50 hover:opacity-70 active:scale-90 transitions" onClick={handlerLeft} />
                <ArrowRightCircleIcon className="w-10 mobileGG:w-8 absolute mt-[13vw] tablet:mt-[22vw] tablet:rotate-90 mobileGG:mt-[24vw] right-10 tablet:right-1 mobileGG:right-4 cursor-pointer z-50 hover:opacity-70 active:scale-90 transitions" onClick={handlerRight}/>
                <section id="slider" className="z-40">
                    <input type="radio" name="slider" id="s1" checked={s1 ? true : false} readOnly/>
                        <input type="radio" name="slider" id="s2" checked={s2 ? true : false} readOnly/>
                            <input type="radio" name="slider" id="s3" checked={s3 ? true : false} readOnly/>
                                <input type="radio" name="slider" id="s4" checked={s4 ? true : false} readOnly/>
                                    <input type="radio" name="slider" id="s5" checked={s5 ? true : false} readOnly/>
                    <label id="slide1" onClick={handlerS1} className={`${s1 ? '' : 'cursor-pointer'}`}>
                        <div className={`w-full h-full transitions ${s1 ? 'opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/projects/devtask" className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-70 active:scale-90">Projeto!</Link></div>
                            <div><a href="https://dev-tasks.netlify.app/" target={'_blank'} className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-90 active:scale-90">Navegue</a> por este site!</div>
                        </div>
                        <img src={devtask} alt="site devTask" height="100%" width="100%" className={`${s3 || s4 ? 'imgDown' : 'imgUp'}`}/>
                    </label>
                    <label id="slide2" onClick={handlerS2} className={`${s2 ? '' : 'cursor-pointer'}`}>
                        <div className={`w-full h-full transitions ${s2 ? 'opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-full' : "hidden"}`}>
                            <div className="font-montserrat">Conheça mais sobre este <Link to="/projects/devchat" className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-70 active:scale-90">Projeto!</Link></div>
                            <div><a href="https://devlivechat.netlify.app/" target={'_blank'} className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-90 active:scale-90">Navegue</a> por este site!</div>
                        </div>
                        <img src={devchat} alt="site devTask" height={"100%"} width="100%" className={s4 || s5 ? 'imgDown' : 'imgUp'}/>
                    </label>
                    <label id="slide3" onClick={handlerS3} className={`${s3 ? '' : 'cursor-pointer'}`}>
                        <div className={`h-full w-full transitions ${s3 ? 'opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20' : "hidden"}`}>
                            <div className="font-montserrat">Conheça mais sobre este <Link to="/project/gustavofernandesborges" className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-70 active:scale-90">Projeto!</Link></div>
                            <div><a href="https://leandrotribeiro.github.io/Gustavo-Borges/src/index.html" target={'_blank'} className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-90 active:scale-90">Navegue</a> por este site!</div>
                        </div>
                        <img src={gustavoborges} alt="site devTask" height={"100%"} width="100%" className={`${s5 || s1 ? 'imgDown' : 'imgUp'}`}/>
                    </label>
                    <label id="slide4" onClick={handlerS4} className={`${s4 ? '' : 'cursor-pointer'}`}>
                        <div className={`transitions ${s4 ? 'opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-full' : "hidden"}`}>
                            <div className="font-montserrat">Conheça mais sobre este <Link to="/projects/calculadora" className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-70 active:scale-90">Projeto!</Link></div>
                            <div><a href="https://leandrotribeiro.github.io/Calculadora/index.html" target={'_blank'} className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-90 active:scale-90">Navegue</a> por este site!</div>
                        </div>
                        <img src={calculadora} alt="site devTask" height={"100%"} width="100%" className={s1 || s2 ? 'imgDown' : 'imgUp'}/>
                    </label>
                    <label id="slide5" onClick={handlerS5} className={`${s5 ? '' : 'cursor-pointer'}`}>
                        <div className={`transitions ${s5 ? 'opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-full' : "hidden"}`}>
                            <div className="font-montserrat">Conheça mais sobre este <Link to="/projects/devshope" className="font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transitions hover:opacity-70 active:scale-90">Projeto!</Link></div>
                        </div>
                        <img src={devshope} alt="site devTask" height={"100%"} width="100%" className={s2 || s3 ? 'imgDown' : 'imgUp'}/>
                    </label>
                </section>
            </div>
            <div className="h-[180px] flex items-end justify-center mobileGG:mt-[-100px] mobileG:mt-[-120px] mobileM:mt-[-140px]">
                <p className="font-montserrat text-center mobileGG:text-sm font-thin text-stone-200">Acesse aqui meu <a href="https://github.com/LeandroTRibeiro" target={'_blank'} className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit font-semibold hover:opacity-70">GitHub</a> e confira mais.</p>
            </div>
        </div>
    );
};
