import { notFoundIlustration } from '../assets'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import { notFoundStyle } from '../styles/style'

const NotFoundPage = () => {

    const navigate = useNavigate()

    const buttonClickHandler = () => {
        navigate("/")
    }

    return (
        <>
            <div className={`${notFoundStyle.container} max-h-screen`}>
                <div className='w-full mx-auto'>
                    <img src={notFoundIlustration} alt="not found ilustration" className='w-2/4 md:w-1/3 lg:w-1/4 mx-auto' />
                </div>
                <div className={`${notFoundStyle.contentContiner}`}>
                    <h3 className='font-bold text-3xl text-gray-900'>Page Not Found</h3>
                    <p className='text-gray-400 text-xl md:text-2xl mt-4 text-center'>Sorry, the page you’re looking for <br/> can’t be found</p>
                    <div className='mt-8'>
                        <CustomButton
                                title='Go To Login Page'
                                textStyle="text-2xl font-semibold"
                                handleClick={buttonClickHandler}
                            />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default NotFoundPage