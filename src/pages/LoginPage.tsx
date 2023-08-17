
import { loginIlustration } from "../assets"
import Navbar from "../components/Navbar"
import styles, { loginStyle } from "../styles/style"

import { IoMdMail } from './../../node_modules/react-icons/io';
import { FaLock } from './../../node_modules/react-icons/fa';
import CustomButton from "../components/CustomButton";
import { motion } from 'framer-motion';
import { useState, ChangeEvent } from 'react';
import CustomInput from "../components/CustomInput";
import HelmetComponent from "../components/HelmetComponent";


const LoginPage = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const onChangeDataHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [ev.target.name]: ev.target.value
        })
    } 

    const onSubmitHandler = () => {
        if(data.email !== "" && data.password !== ""){
            alert(`
                Email kamu ${data.email}
                Password kamu ${data.password} 
            `);
            setData({
                email: "",
                password: ""
            })
        }
    } 

    return (
        <>
            <HelmetComponent title="Login Page"/>
            <Navbar/>
            <section className={`${styles.paddingX} ${styles.paddingY} flex flex-row max-h-screen`}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 7,
                            stiffness: 80,
                            restDelta: 0.001
                        }
                    }}
                    className={`${loginStyle.imageContainer}`}>
                    <img src={loginIlustration} alt="" className="lg:w-full xl:w-3/4" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        x: { duration: 1 }
                    }}
                    className={`${loginStyle.loginContainer}`}>
                    <h1 className={`${loginStyle.loginTitle}`}><span className="text-blue-700">Login</span> Page</h1>
                    <div className={`${loginStyle.loginBorder}`}></div>
                    <h3 className={`${loginStyle.loginTitleSecondary}`}>
                        Langkah Pertama Menuju Petualangan !
                    </h3>
                    <p className={`${loginStyle.loginParagraph}`}>Kami merindukan Anda. Masukkan email dan password informasi akun Anda untuk melanjutkan.</p>
                    
                    <form action="" method="" onSubmit={onSubmitHandler} className="mt-12 flex flex-col w-full">
                        
                        <CustomInput
                            name="email"
                            label="Email Kamu"
                            handleChange={onChangeDataHandler}
                            inputStyle={`${loginStyle.inputStyle}`}
                            inputType="text"
                            placeholder="name@email.com"
                            value={data.email}
                            labelStyle="text-gray-900"
                            leadingIcon={<IoMdMail fontSize="1.8rem" color="#595555"/>}
                            iconStyle={`${loginStyle.inputLabel}`}
                        />

                        <CustomInput
                            name="password"
                            label="Password Kamu"
                            handleChange={onChangeDataHandler}
                            inputStyle={`${loginStyle.inputStyle}`}
                            inputType="password"
                            placeholder="Password milik anda"
                            value={data.password}
                            labelStyle="text-gray-900"
                            leadingIcon={<FaLock fontSize="1.8rem" color="#595555"/>}
                            iconStyle={`${loginStyle.inputLabel}`}
                        />

                        <div className="xl:w-1/4 lg:w-1/2 mt-10">
                            <CustomButton
                                title="Login"
                                textStyle="text-2xl font-semibold"
                                containerStyle="w-full"
                                btnType="submit"
                            />
                        </div>
                        <p className="text-xl mt-4 text-gray-400">Belum memiliki akun ? <span className="cursor-pointer hover:text-blue-500 text-blue-600 font-semibold" onClick={()=>{}}>register</span></p>
                    </form>
                </motion.div>
            </section>
        </>
    )
}


export default LoginPage