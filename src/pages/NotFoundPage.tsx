import notfound from '../assets/images/notfound2.png';

export const NotFoundPage = () => {
    return (

        <div className="w-screen h-screen bg-black overflow-hidden p-40 mobileG::p-0 flex justify-center items-center">
            <div className="flex items-center tablet:flex-col">
                <div className="flex-1">
                    <h1 className="fade3 font-montserrat text-stone-200 text-4xl tablet:text-3xl mobileG:text-2xl font-bold z-10">NOT FOUND PAGE</h1>
                    <h2 className="fade3 font-bold font-montserrat text-5xl tablet:text-4xl mobileG:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-fit z-10 pulse-img">ERROR</h2>
                    <a href="/" className="z-10 mt-3 fade3 bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out w-[200px] py-3 rounded font-semibold text-black flex justify-center items-center hover:opacity-80 active:scale-90">Back to home</a>
                </div>
                <img src={notfound} alt="not found image" className="pulse-img min-w-[290px] flex-1"/>
            </div>
        </div>

    );
};