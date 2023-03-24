import devtask from '../assets/images/devtask2.png';
import devchat from '../assets/images/devchat.png';
import gustavoborges from '../assets/images/gustavoborges.png';
import calculadora from '../assets/images/calcu.png';
import devshope from '../assets/images/devShope.png';
import { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const Projects = (props: {eighthStep: boolean, ninthStep: boolean}) => {

    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(false);
    const [s3, setS3] = useState(false);
    const [s4, setS4] = useState(false);
    const [s5, setS5] = useState(false);

    useEffect(() => {
        const openSlide = () => {
            if(props.ninthStep) {
                setTimeout(() => {
                    setS2(true);
                    setTimeout(() => {
                        setS2(false);
                        setS3(true);
                    },800)
                }, 500);
                return;
            }
            setS3(false);
            setS2(false);
            return;
        };
        openSlide();
    }, [props.ninthStep])

    const handlerS1 = () => {
        setS1(true);
        setS2(false);
        setS3(false);
        setS4(false);
        setS5(false);
    }
    const handlerS2 = () => {
        setS1(false);
        setS2(true);
        setS3(false);
        setS4(false);
        setS5(false);
    }
    const handlerS3 = () => {
        setS1(false);
        setS2(false);
        setS3(true);
        setS4(false);
        setS5(false);
    }
    const handlerS4 = () => {
        setS1(false);
        setS2(false);
        setS3(false);
        setS4(true);
        setS5(false);
    }
    const handlerS5 = () => {
        setS1(false);
        setS2(false);
        setS3(false);
        setS4(false);
        setS5(true);
    }

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
    }

    const handlerRight = () => {
        if(s1) {
            setS1(false);
            setS2(true);
            return;
        }
        if(s2) {
            setS2(false);
            setS3(true);
            return;
        } 
        if(s3) {
            setS3(false);
            setS4(true);
            return;
        } 
        if(s4) {
            setS4(false);
            setS5(true);
            return;
        } 
        if(s5) {
            setS5(false);
            setS1(true);
            return;
        } 
    }

    return (
        <div id='projects' className="w-screen bg-black text-stone-200 flex flex-col gap-10 p-20">
            <div className="flex-2 flex flex-col gap-5">
                <div className='flex justify-center'>
                    <h2 className={`font-bold font-montserrat text-4xl text-white transition-all duration-500 ease-in-out 
                    ${props.eighthStep ? '' : 'translate-y-40 opacity-0'}`}>Projetos</h2>
                </div>
                <div className={`m-auto font-bold font-montserrat text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit transition-all duration-500 ease-in-out
                    ${props.ninthStep ? '' : 'opacity-0'}`}
                >
                    {`${s1 ? 'devTask' : !s2 && !s3 && !s4 && !s5 ? '_' : ''} ${s2 ? 'devChat' : ''} ${s3 ? 'Gustavo Fernandes Borges' : ''} ${s4 ? 'Calculadora' : ''} ${s5 ? 'devShope' : ''}`}
                </div>
                <p className={`text-center font-montserrat font-thin text-stone-200  ${props.ninthStep ? '' : 'opacity-0'}`}>{`
                    ${s1 ? 'Aplicação para anotação de tarefas.' : !s2 && !s3 && !s4 && !s5 ? '_' : ''} 
                    ${s2 ? 'Aplicação de um LiveChat.' : ''} 
                    ${s3 ? 'Landing Page de uma advocacia.' : ''} 
                    ${s4 ? 'Aplicação de uma calculadora.' : ''} 
                    ${s5 ? 'E-commerce.' : ''}`}</p>
            </div>
            <div className={`flex-1 transition-all ease-in-out duration-500
                ${props.ninthStep ? '' : 'opacity-0'}`}>
                <ArrowLeftCircleIcon className='w-10 absolute mt-[18vh] left-20 cursor-pointer z-50 hover:opacity-70 active:scale-90 transition-all duration-200 ease-in-out' onClick={handlerLeft} />
                <ArrowRightCircleIcon className='w-10 absolute mt-[18vh] right-20 cursor-pointer z-50 hover:opacity-70 active:scale-90 transition-all duration-200 ease-in-out' onClick={handlerRight}/>
                <section id='slider' className='z-40'>
                    <input type="radio" name="slider" id="s1" checked={s1 ? true : false} readOnly/>
                        <input type="radio" name="slider" id="s2" checked={s2 ? true : false} readOnly/>
                            <input type="radio" name="slider" id="s3" checked={s3 ? true : false} readOnly/>
                                <input type="radio" name="slider" id="s4" checked={s4 ? true : false} readOnly/>
                                    <input type="radio" name="slider" id="s5" checked={s5 ? true : false} readOnly/>
                    <label id="slide1" onClick={handlerS1} className={`${s1 ? '' : 'cursor-pointer'}`}>
                        <div className={`${s1 ? 'transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-[150%]' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/projects/devtask" className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90'>Projeto!</Link></div>
                            <div><a href="https://dev-tasks.netlify.app/" target={'_blank'} className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-90 active:scale-90'>Navegue</a> por este site!</div>
                        </div>
                        <img src={devtask} alt="site devTask" height={"100%"} width="100%"/>
                    </label>
                    <label id="slide2" onClick={handlerS2} className={`${s2 ? '' : 'cursor-pointer'}`}>
                        <div className={`${s2 ? 'transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-[150%]' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/projects/devchat" className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90'>Projeto!</Link></div>
                            <div><a href="https://devlivechat.netlify.app/" target={'_blank'} className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-90 active:scale-90'>Navegue</a> por este site!</div>
                        </div>
                        <img src={devchat} alt="site devTask" height={"100%"} width="100%"/>
                    </label>
                    <label id="slide3" onClick={handlerS3} className={`${s3 ? '' : 'cursor-pointer'}`}>
                        <div className={`${s3 ? 'transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-[150%]' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/project/gustavofernandesborges" className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90'>Projeto!</Link></div>
                            <div><a href="https://leandrotribeiro.github.io/Gustavo-Borges/src/index.html" target={'_blank'} className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-90 active:scale-90'>Navegue</a> por este site!</div>
                        </div>
                        <img src={gustavoborges} alt="site devTask" height={"100%"} width="100%"/>
                    </label>
                    <label id="slide4" onClick={handlerS4} className={`${s4 ? '' : 'cursor-pointer'}`}>
                        <div className={`${s4 ? 'transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-[150%]' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/projects/calculadora" className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90'>Projeto!</Link></div>
                            <div><a href="https://leandrotribeiro.github.io/Calculadora/index.html" target={'_blank'} className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-90 active:scale-90'>Navegue</a> por este site!</div>
                        </div>
                        <img src={calculadora} alt="site devTask" height={"100%"} width="100%"/>
                    </label>
                    <label id="slide5" onClick={handlerS5} className={`${s5 ? '' : 'cursor-pointer'}`}>
                        <div className={`${s5 ? 'transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 absolute flex flex-col justify-center items-center gap-10 text-black backdrop-blur-sm bg-white/20 w-full h-[150%]' : "hidden"}`}>
                            <div className='font-montserrat'>Conheça mais sobre este <Link to="/projects/devshope" className='font-semibold px-5 py-2 rounded bg-[#570DF8] hover:bg-[#247cff] transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90'>Projeto!</Link></div>
                        </div>
                        <img src={devshope} alt="site devTask" height={"100%"} width="100%"/>
                    </label>
                </section>
            </div>
            <div className='h-[180px] flex items-end justify-center'>
                <p className='font-montserrat font-thin text-stone-200'>Acesse aqui meu <a href="https://github.com/LeandroTRibeiro" target={'_blank'} className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit font-semibold hover:opacity-70'>GitHub</a> e confira mais.</p>
            </div>
        </div>
    );
};
