// import React from 'react'

import { overviewIlustration } from "../assets";
import CustomButton from "../components/CustomButton";
import Navbar from "../components/Navbar";
import styles from "../dist/style";
import { FaArrowRight } from './../../node_modules/react-icons/fa';
import { motion } from "framer-motion"

// type Props = {}

const OverviewPage = () => {
    return (
        <>
            <Navbar />
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-row max-h-screen relative`}>
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
                    className="w-full lg:w-1/2 flex flex-col justify-start mt-40 lg:my-auto">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-4xl font-medium">Bismillah plan your future</h4>
                        <h1 className="text-8xl font-semibold">My <span className="text-blue-600">Technical</span> Test</h1>
                        <div className="flex flex-col mt-2 gap-2 text-3xl text-gray-400 leading-normal">
                            <p className="w-[85%]">Project ini dibangun menggunakan React Js, Tailwindcss, Axios, Redux dan library pendukung lainnya, dengan fitur sebagai berikut </p>
                            <ul className="list-disc list-inside">
                                <li>Login Page</li>
                                <li>List Users</li>
                                <li>Detail User</li>
                                <li>Overview</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 w-1/3">
                        <CustomButton
                            textStyle="text-2xl"
                            containerStyle="w-full"
                            title="Learn More"
                            rightIcon={<FaArrowRight/>}
                            />
                    </div>
                </motion.div>
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 md:pt-24 my-20 relative`}>
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
                        <img src={overviewIlustration} alt="" className="hidden sm:block lg:w-[90%] lg:-top-14 lg:-right-14 relative z-[21]" />
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