import { ArrowDownIcon } from '@heroicons/react/24/outline';

export const About = () => {

    return (
        <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="botton-center"  
            id="about" 
            className="w-screen bg-black text-stone-200 flex laptop:flex-col-reverse justify-center p-20 tablet:p-10 tablet:pt-0 mobileG:p-5 mobileM:p-2"
        >
            <div className="flex-1 flex flex-col justify-center gap-3">
                <div className="">
                    <h1 className="font-montserrat text-4xl font-semibold w-[450px] mobileGG:text-3xl mobileG:text-2xl">
                        Leandro Thiago Ribeiro
                    </h1>
                    <h2 className="font-bold font-montserrat w-fit text-3xl mobileGG:text-2xl mobileG:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transitions">
                        Frontend Developer
                    </h2>
                </div>
                <p className="font-light text-stone-200 mobileGG:text-sm text-justify">
                    Como desenvolvedor frontend tenho conhecimentos de <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em>. Me permitindo criar sites visualmente impressionantes e altamente funcionais. Entendo a importância do design <em>responsivo</em>. Possuo prática com a biblioteca <em>React</em>, e suas boas práticas que me permitem desenvolver UI's dinâmicas e interativas. Estou sempre aberto a feedback e disposto a trabalhar com outras pessoas para superar quaisquer desafios que possam surgir.
                </p>
                <a href="https://wa.me/5548996312210?text=Olá+consegui+seu+contato+atravéz+de+seu+site!" target="_blank" className=''>
                    <button className="bg-gradient-to-tr from-indigo-900 via-purple-500 to-pink-500 transitions w-[200px] mobileGG:w-[150px] py-3 rounded font-semibold text-black justify-center items-center hover:opacity-40 active:opacity-100">
                        Contato
                    </button>
                </a>
                <div className="font-montserrat flex flex-col items-start mt-10 transitions mobileGG:hidden">
                    <div className="animate-bounce">
                        <ArrowDownIcon className="w-8"/> 
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <picture className="transitions pulse-img min-w-[450px] mobileG:min-w-[300px] max-w-[500px]">
                    <source srcSet='https://cdn.filestackcontent.com/resize=width:300/DUc2kUvWTTWZqP5QxyCg' media='(max-width: 300px)' />
                    <source srcSet='https://cdn.filestackcontent.com/resize=width:450/DUc2kUvWTTWZqP5QxyCg' media='(max-width: 530px)' />
                    <img src="https://cdn.filestackcontent.com/resize=width:500/DUc2kUvWTTWZqP5QxyCg" alt="robot with laptop" width={1024} height={1024}/>
                </picture>
            </div>
        </div>
    );
};