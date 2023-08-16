import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";
import styles from "../dist/style";
import { RootState } from "../store/Feature";
import { useEffect, useState } from 'react';
import { AxiosError } from "axios";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../store/Feature/FeaturesUsers/userSlice";
import { UserDetailState } from "../types";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";


const DetailUserPage = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const dataDetailUser = useSelector((state: RootState) => state.usersdetails.data);
    const totalDataUser = useSelector((state: RootState) => state.users.data.total);
    const [userData, setUserData] = useState(dataDetailUser);
    const status = useSelector((state: RootState) => state.usersdetails.status);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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

    }, [dispatch, status, id]);
    
    if (id === undefined) {
        return <div>Error: No ID provided</div>;
    }
    const numericId = parseInt(id, 10);

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

    // console.log(error)

    return (
        <>
            <Navbar/>
            {status === "loading" && <p>Loading...</p>}
            {status === "success" && (
                <div className={`${styles.paddingX} flex flex-row w-full mt-64 h-full`} >
                    <div className="w-1/2 flex flex-col justify-start gap-10">
                        <Link to="/users">
                            <div className="flex flex-row gap-4 text-blue-600 hover:text-blue-500 transition delay-75">
                                <IoMdArrowRoundBack fontSize="2.8rem"/>
                                <p className="my-auto text-4xl font-bold">{userData?.first_name} {userData?.last_name}</p>
                            </div>
                        </Link>
                        <div className="w-full flex flex-col items-center justify-center my-auto gap-10">
                            <h1 className="xl:text-8xl font-bold text-gray-800">{userData?.first_name} {userData?.last_name}</h1>
                            <h4 className="xl:text-5xl text-gray-400">{userData?.email}</h4>
                        </div>
                    </div>
                    <div className="w-1/2 items-center content-center flex flex-row justify-center">
                        <img src={userData?.avatar} className="w-4/6 my-auto mx-auto shadow-blue-200 rounded-es-[320px] rounded-3xl shadow-2xl hover:rotate-12 transition-all hover:p-12 hover:delay-75"/>
                    </div>
                </div>
            )}

            {error === "Cannot read properties of undefined (reading 'data')" && <p>Error cik</p>}
        </>
    )
}

export default DetailUserPage