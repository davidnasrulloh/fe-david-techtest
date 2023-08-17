import { notFoundIlustration } from '../assets'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import HelmetComponent from '../components/HelmetComponent'
import { notFoundStyle } from '../styles/style'

const NotFoundPage = () => {

    const navigate = useNavigate()

    const buttonClickHandler = () => {
        navigate("/")
    }

    return (
        <>
            <HelmetComponent title='Not Found Page'/>
            <div className={`${notFoundStyle.container} max-h-screen`}>
                <div className='w-full mx-auto'>
                    <img src={notFoundIlustration} alt="not found ilustration" className={notFoundStyle.imageContent} />
                </div>
                <div className={`${notFoundStyle.contentContiner}`}>
                    <h3 className={`${notFoundStyle.titleContent}`}>Page Not Found</h3>
                    <p className={`${notFoundStyle.paragraphContent}`}>Sorry, the page you’re looking for <br/> can’t be found</p>
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