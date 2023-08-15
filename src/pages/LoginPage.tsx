// import React from 'react'

import { loginIlustration } from "../assets"
import Navbar from "../components/Navbar"
import styles, { loginStyle } from "../dist/style"

import { IoMdMail } from './../../node_modules/react-icons/io';
import { FaLock } from './../../node_modules/react-icons/fa';
import CustomButton from "../components/CustomButton";


const LoginPage = () => {

    return (
        <>
            <Navbar/>
            <section className={`${styles.paddingX} ${styles.paddingY} flex flex-row mt-12`}>
                <div className="w-2/4 hidden sm:block my-auto mt-12 md:flex">
                    <img src={loginIlustration} alt="" className="w-3/4" />
                </div>
                <div className="w-3/4 pt-28">
                    <h1 className="font-bold text-gray-800 text-6xl"><span className="text-blue-700">Login</span> Page</h1>
                    <div className="border border-gray-300 border-b-4 rounded-full w-32 mt-10"></div>
                    <h3 className="text-4xl h-16 mt-4 bg-gradient-to-r from-blue-500 to-green-300 text-transparent bg-clip-text font-medium">
                        Langkah Pertama Menuju Petualangan !
                    </h3>
                    <p className="text-gray-400 text-2xl w-2/3 leading-relaxed">Kami merindukan Anda. Masukkan email dan password informasi akun Anda untuk melanjutkan.</p>
                    
                    <form action="" method="" className="mt-12">
                        <label htmlFor="input-group-1" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Email</label>
                        <div className="relative mb-6">
                            <div className={`${loginStyle.inputLabel} absolute flex items-center`}>
                                <IoMdMail fontSize="1.8rem" color="#595555"/>
                            </div>
                            <input type="text" id="input-group-1" className={`${loginStyle.inputStyle}`} placeholder="name@email.com" />
                        </div>

                        <label htmlFor="input-group-1" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your Password</label>
                        <div className="relative mb-6">
                            <div className={`${loginStyle.inputLabel} absolute flex items-center`}>
                                <FaLock fontSize="1.8rem" color="#595555"/>
                            </div>
                            <input type="password" id="input-group-2" className={`${loginStyle.inputStyle}`} placeholder="Password milik anda" />
                        </div>

                        <CustomButton
                            title="Login"
                            textStyle="text-2xl font-semibold"
                            containerStyle="w-1/4 mt-4"
                            btnType="submit"
                        />
                        <p className="text-xl mt-4 text-gray-400">Belum memiliki akun ? <span className="cursor-pointer hover:text-blue-500 text-blue-600 font-semibold" onClick={()=>{}}>register</span></p>
                    </form>
                </div>
            </section>
        </>
    )
}


export default LoginPage