import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const Apresentation = () => {

    const navigate = useNavigate();

    const [apresentationReverse, setApresentatioReverse] = useState(false);
    const [rotateClass, setRotateClass] = useState('hidden');
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRotateClass('rotate-circuit');
        }, 1000);
        setTimeout(() => {
            setApresentatioReverse(true);
        }, 2800)
        setTimeout(() => {
            setPulse(true);
        }, 3800)
        setTimeout(() => {
            navigate('/home');
        }, 5000);
    },[])
    
    return (
        <div className="h-screen w-screen overflow-hidden relative bg-black flex justify-center items-center">
            <img src={`https://cdn.filestackcontent.com/resize=width:${window.innerWidth > 1200 ? `${window.innerWidth}` : '1200'}/7XwJOYy4QsSM8ac9BxnD`} alt="circuit neon" width={2912} height={2912} className='absolute min-w-[1200px] z-10'/>
            {!apresentationReverse &&
                <div className='absolute w-screen h-screen z-20 bg-black apresentation'></div>
            }
            {apresentationReverse &&
                <div className='absolute w-screen h-screen z-20 bg-black apresentation-reverse'></div>
            }
            {!pulse &&
                <img src="https://cdn.filestackcontent.com/resize=width:230/RhRUWn89RzaEVUp76S5A" alt="center circuit neon" className={`absolute min-w-[230px] max-w-[230px] z-30 ${rotateClass}`} width={98} height={987}/>
            }
            {pulse &&
                <img src="https://cdn.filestackcontent.com/resize=width:230/RhRUWn89RzaEVUp76S5A" alt="center circuit neon" className='absolute min-w-[230px] max-w-[230px] z-30 opacity-0 pulse-circuit' width={986} height={987}/>
            }
        </div>
    );
};