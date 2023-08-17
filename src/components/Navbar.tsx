
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { davidImg } from '../assets';
import { AiFillCloseCircle } from './../../node_modules/react-icons/ai';
import { HiMenu } from './../../node_modules/react-icons/hi';
import styles from '../styles/style';

interface propsNavbar{
    backgroundStyle?: string
}

const Navbar = ({backgroundStyle}: propsNavbar ) => {

    const [nav, setNav] = useState(false);

    const openNavHandler = () => {
        setNav((prev)=>{
            return !prev
        })
    }

    return (
        <>
            <nav>
                {/* Mobile Navbar*/}
                <div className={`mobile-navbar ${nav ? "open-nav" : ""} px-28`}>
                    <div className='flex flex-row justify-center w-full mb-10'>
                        <div className='flex flex-row mr-10'>
                            <img src={davidImg} className='w-20 rounded-full mr-3'/>
                            <p className='my-auto text-3xl sm:text-[20px] font-semibold'>David Nasrulloh</p>
                        </div>
                        <div onClick={openNavHandler} className='my-auto'>
                            <AiFillCloseCircle fontSize="3.5em" color="#2c30f2" />
                        </div>
                    </div>
                    <ul className='mobile-navbar_links sm:w-1/2 w-full'>
                        <li className='w-full'>
                            <NavLink
                                onClick={openNavHandler}
                                to="/"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                Login
                            </NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink
                                onClick={openNavHandler}
                                to="/users"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                List User
                            </NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink
                                onClick={openNavHandler}
                                to="/overview"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                Overview
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Dekstop View */}
                <div className={`navbar ${backgroundStyle} ${styles.paddingX}`}>
                    <Link to="/" onClick={()=>window.scrollTo(0,0)}>
                        <div className='flex flex-row'>
                            <img src={davidImg} className='w-20 rounded-full mr-4 md:mr-8'/>
                            <p className='my-auto text-[24px] md:text-[28px] text-blue-900'><span className='font-bold'>David</span> Nasrulloh</p>
                        </div>
                    </Link>
                    <ul className="navbar_links text-2xl xl:w-3/5 2xl:w-2/3 gap-10 font-medium md:pl-0 pl-10">
                        <li className='mr-10'>
                            <NavLink
                                to="/"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                Login
                            </NavLink>
                        </li>
                        <li className='mr-10'>
                            <NavLink
                                to="/users"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                List User
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to="/overview"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : ""
                                        };
                                    }}
                                >
                                Overview
                            </NavLink>
                        </li>
                    </ul>

                    <div className="mobile-hamb" onClick={openNavHandler}>
                        <HiMenu fontSize="2em"/>
                    </div>
                </div>

                
            </nav>
        </>
    )
}

export default Navbar;