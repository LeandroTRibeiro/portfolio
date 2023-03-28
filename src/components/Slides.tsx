import banner from '../assets/images/slideInf.png';

export const Slides = () => {
    return (
        <div className="w-screen py-20 flex items-center overflow-x-hidden relative">
            <div className='w-[2000px] absolute flex items-center tecnologiesBanner right-0'>
                <img src={banner} alt="tecnologies"  className='mx-5'/>
                <img src={banner} alt="tecnologies" className='mx-5'/>
            </div>
        </div>
    );
};