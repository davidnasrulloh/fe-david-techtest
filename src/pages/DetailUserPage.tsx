import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom";
import styles from "../dist/style";
import { RootState } from "../store/Feature";
import { useEffect, useState } from 'react';
import { AxiosError } from "axios";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../store/Feature/FeaturesUsers/userSlice";
import { UserDetailState } from "../types";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LostConnection from "../components/emptystate/LostConnection";
import Loading from "../components/Loading";


const DetailUserPage = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const dataDetailUser = useSelector((state: RootState) => state.usersdetails.data);
    const totalDataUser = useSelector((state: RootState) => state.users.data.total);
    const [userData, setUserData] = useState(dataDetailUser);
    const status = useSelector((state: RootState) => state.usersdetails.status);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (id === undefined) {
            return;
        }
        const numericId = parseInt(id, 10);

        if (status === 'idle') {
            dispatch(fetchUserDetails(id))
                .then(unwrapResult)
                .then((user : UserDetailState) => {
                    setUserData(user.data)
                })
                .catch((err: AxiosError) => {
                    // console.log(err)
                    setError(err.message);
                });
        }

        
    
        if(userData.id?.toString() !== id){
            if(numericId <= totalDataUser){
                dispatch(fetchUserDetails(numericId))
                .then(unwrapResult)
                .then((user : UserDetailState) => {
                    setUserData(user.data)
                })
                .catch((err: AxiosError) => {
                    setError(err.message);
                });
            }
        } 

    }, [dispatch, status, id, userData, totalDataUser]);
    

    const buttonTryAgainClick = () => {
        navigate('/users')
        window.location.reload();
    }

    console.log(userData)

    return (
        <>
            <Navbar backgroundStyle="bg-white"/>
            {status === "loading" && <><Loading/></>}
            {status === "success" && (
                <div className={`flex flex-col lg:flex-row w-full mt-64 xl:mt-80 3xl:mt-64 h-full ${styles.paddingX}`} >
                    <div className="w-full lg:w-1/2 flex flex-col justify-start gap-10 mx-auto lg:mx-0">
                        <Link to="/users">
                            <div className="flex flex-row gap-4 justify-center lg:justify-start text-blue-600 hover:text-blue-500 transition delay-75">
                                {userData?.id !== 0 ? <IoMdArrowRoundBack fontSize="2.8rem"/> : "" }
                                <p className="my-auto text-4xl font-bold">{userData?.first_name} {userData?.last_name}</p>
                            </div>
                        </Link>
                        <div className="w-full flex flex-col items-center justify-center my-auto gap-10">
                            <h1 className="text-7xl 2xl:text-8xl font-bold text-gray-800">{userData?.first_name} {userData?.last_name}</h1>
                            <h4 className="text-4xl 2xl:text-5xl text-gray-400">{userData?.email}</h4>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/6 2xl:w-3/4 p-20 mt-0 lg:mt-0 lg:py-0">
                        <div className="w-full flex justify-end 3xl:justify-center">
                            <img src={userData?.avatar} className="w-full xl:w-4/6 shadow-blue-200 lg:rounded-es-[320px] rounded-3xl shadow-2xl hover:rotate-12 transition-all hover:p-12 hover:delay-75"/>
                        </div>
                    </div>
                </div>
            )}

            {error === "Cannot read properties of undefined (reading 'data')" && 
                <>
                    <LostConnection buttonClickHandler={buttonTryAgainClick}/>
                </>
            }
        </>
    )
}

export default DetailUserPage