import styles from '../styles/style'
import { loadingIlustration } from '../assets'


const Loading = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY} flex flex-row max-h-screen`}>
            <div className={`${styles.flexCenter} w-full mt-32`}>
                <img src={loadingIlustration} alt="loading" className='my-auto' />
            </div>
        </div>
    )
}

export default Loading;