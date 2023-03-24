import tecnologies from '../assets/images/JS5.png';

export const Technologies = (props: {fourthStep: boolean, fifhStep: boolean, sixthStep: boolean, seventhStep: boolean}) => {

    return (
        <div id='tecnologies' className="w-screen tecnologies text-stone-200 flex justify-center p-20 pb-0">
            <div 
                className={`w-[40%] transition-all duration-1000 ease flex justify-center items-center
                ${props.fourthStep ? '' : 'scale-0 opacity-30'}
                ${props.fifhStep ? 'scale-90 opacity-50 translate-y-20' : ''}
                ${props.sixthStep ? 'scale-75 opacity-30 translate-y-30' : ''}
                ${props.seventhStep ? 'opacity-0 scale-150' : ''}`}
            >
                <img src={tecnologies} alt="logo tecnologiras" className='mt-[-80px]'/>
            </div>
            <div className="flex-1 flex flex-col gap-5 mt-[-40px]">
                <div>
                    <h2 
                        className={`transition-all duration-1000 ease font-bold font-montserrat text-4xl bg-clip-text text-transparent w-fit bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500
                        ${props.fourthStep ? '' : 'translate-x-[350%] opacity-10'}
                        ${props.fifhStep ? 'scale-90 opacity-50 translate-y-20 translate-x-3' : ''}
                        ${props.sixthStep ? 'scale-75 opacity-30 translate-y-30' : ''}
                        ${props.seventhStep ? 'opacity-0 scale-150' : ''}`}
                    >
                        Tecnologias
                    </h2>
                </div>
                <p className={`text-justify font-thin text-stone-200 w-[100%] transition-all duration-1000 ease 
                ${props.fourthStep ? '' : 'translate-x-[150%] opacity-0'}
                ${props.fifhStep ? 'scale-90 opacity-50 translate-y-20' : ''}
                ${props.sixthStep ? 'scale-75 opacity-30 translate-y-30' : ''}
                ${props.seventhStep ? 'opacity-0 scale-150' : ''}`}>
                Minhas habilidades me permitiram criar sites e aplicativos web visualmente impressionantes e altamente funcionais.
                Em <em>HTML</em>, sou capaz de criar estruturas de sites bem organizadas e acessíveis, fáceis de navegar para os usuários. Tenho conhecimento de <em>HTML</em> <em>semântico</em> e posso usá-lo de forma eficaz para melhorar o desempenho do site e a otimização do mecanismo de pesquisa.
                Com <em>CSS</em>, sou capaz de dar vida a essas estruturas de sites criando designs envolventes e visualmente atraentes. Sou proficiente com frameworks como <em>TailwindCSS</em> e <em>Styled Components</em>, para criar sites responsivos e personalizados.
                Em <em>JavaScript</em>, sou capaz de criar interfaces de usuário dinâmicas e interativas usando bibliotecas e estruturas populares como <em>React</em>. Sempre visando usar em meus projetos boas praticas incluindo gerenciamento de estado usando Redux, possuo conhecimentos em fazer solicitações do front-end para servidores de back-end usando as técnicas <em>Fetch API</em> e a biblioteca <em>Axios</em>.
                Além de minhas habilidades de front-end, também tenho experiência com <em>Node.js</em>, o que me permite criar <em>webservices</em> e <em>APIs RESTful</em> usando <em>Express.js</em> para gerenciar rotas e middleware. Trabalho com bancos de dados <em>SQL</em>, como <em>MySQL</em> e <em>PostgreSQL</em>, e bancos de dados <em>no-SQL</em>, como <em>MongoDB</em>, usando <em>ORM's</em>, como <em>Sequelize</em> e <em>Mongoose</em>, para simplificar e agilizar as interações com o banco de dados.</p>
            </div>
        </div>
    );
};