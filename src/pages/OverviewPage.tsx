import { overviewIlustration } from "../assets";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import styles, { overviewStyle } from "../styles/style";
import { FaArrowRight } from './../../node_modules/react-icons/fa';
import { motion } from "framer-motion"
import HelmetComponent from "../components/HelmetComponent";


const OverviewPage = () => {

    const redirectToLinkedIn = () => {
        const linkedinURL = 'https://www.linkedin.com/in/davidnasrulloh/';
        window.open(linkedinURL, '_blank');
    };

    return (
        <>
            <HelmetComponent title="Overview Page"/>
            <Navbar />
            <div className={`${styles.paddingX} ${styles.paddingY} ${overviewStyle.container} `}>
                <motion.div 
                    // animate={{ x: 0 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                    className={`${overviewStyle.contentCotainer}`}>
                    <div className="flex flex-col gap-20 lg:gap-4">
                        <h4 className={`${overviewStyle.headingSecondary}`}>Bismillah plan your future</h4>
                        <h1 className={`${overviewStyle.headingMain}`}>My <span className="text-blue-600">Technical</span> Test</h1>
                        <div className={`${overviewStyle.contentInfoContainer}`}>
                            <p className={`${overviewStyle.paragraph}`}>Project ini dibangun menggunakan React Js, Tailwindcss + Framer Motion, Axios, Redux dan library pendukung lainnya, dengan fitur sebagai berikut </p>
                            <ul className={`${overviewStyle.listSyle}`}>
                                <li>Login Page</li>
                                <li>List Users</li>
                                <li>Detail User</li>
                                <li>Overview</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${overviewStyle.buttonContiner}`}>
                        <CustomButton
                            textStyle="text-2xl"
                            containerStyle="w-full mx-auto"
                            title="About Me"
                            handleClick={redirectToLinkedIn}
                            rightIcon={<FaArrowRight/>}
                            />
                    </div>
                </motion.div>

                <div className={`${styles.flexCenter} ${overviewStyle.imageContainer}`}>
                    <motion.div
                        initial={{ opacity: 0.5, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                            x: { duration: 3 }
                        }}
                        className="z-[21]"
                    >
                        <img src={overviewIlustration} alt="" className={`${overviewStyle.imageContent}`} />
                    </motion.div>

                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                </div>
            </div>
        </>
    )
}

export default OverviewPage;