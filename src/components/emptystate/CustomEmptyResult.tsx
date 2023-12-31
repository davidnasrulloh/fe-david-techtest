import { notFoundStyle } from '../../styles/style'
import { dataNotFoundIlustration, lostConnectionIlustration, notFoundIlustration} from '../../assets'
import CustomButton from '../CustomButton'
import { MouseEventHandler} from 'react';
import useOnlineStatus from '../../hooks/useOnlineStatus';

interface Props {
    title: string,
    buttonClickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const CustomEmptyResult = ({ title, buttonClickHandler}:Props) => {
    
    const online = useOnlineStatus();

    return (
        <>
            <div className={`${notFoundStyle.container} mt-16 2xl:mt-4`}>
                <div className='w-full mx-auto'>
                {
                    online && (
                        <>
                            {title === "Your Lost Connection" ? (
                                <img src={lostConnectionIlustration} alt="not found ilustration" className='w-2/4 md:w-1/3 lg:w-1/4 mx-auto' />
                            ) : (
                                title === "Data User Not Found" ? (
                                <img src={dataNotFoundIlustration} alt="not found ilustration" className='w-2/4 md:w-1/3 lg:w-1/4 mx-auto' />
                                ) : (
                                <img src={notFoundIlustration} alt="not found ilustration" className='w-2/4 md:w-1/3 lg:w-1/4 mx-auto' />
                                )
                            )}
                        </>
                    )
                }
                </div>
                {
                    !online && (
                        <div className='mt-44 2xl:mt-64'/>
                    )
                }
                <div className={`${notFoundStyle.contentContiner}`}>
                    <h3 className='font-bold text-3xl text-gray-900'>{title}</h3>
                    <p className='text-gray-400 text-xl md:text-2xl mt-4 text-center'>Sorry, the page you’re looking for <br/> can’t be found</p>
                    <div className='mt-8'>
                        <CustomButton
                            title='Go User Page & Refresh'
                            textStyle='text-2xl'
                            handleClick={buttonClickHandler}
                        />
                    </div>
                </div>
                </div>
        </>
    )
}

export default CustomEmptyResult;