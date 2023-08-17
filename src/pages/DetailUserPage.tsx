/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom";
import styles, { detailUserStyle } from "../styles/style";
import { RootState } from "../store/Feature";
import { useEffect, useState } from 'react';
import { AxiosError } from "axios";
import { unwrapResult } from "@reduxjs/toolkit";
import { UserDetailState } from "../types";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LostConnection from "../components/emptystate/LostConnection";
import Loading from "../components/Loading";
import { fetchUserDetails } from "../store/Feature/FeaturesUsers/userDetailSlice";
import HelmetComponent from "../components/HelmetComponent";


const DetailUserPage = () => {

    const dispatch = useDispatch<any>();
    const {id} = useParams();
    const navigate = useNavigate();

    const dataDetailUser = useSelector((state: RootState) => state.usersdetails.data);
    const totalDataUser = useSelector((state: RootState) => state.users.data.total);
    const [userData, setUserData] = useState(dataDetailUser);
    const status = useSelector((state: RootState) => state.usersdetails.status);

    const [error, setError] = useState<string | null>(null);
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        };
    }, []);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {

        if(!isOnline){
            return;
        }

        if (id === undefined) {
            return;
        }

        const numericId = parseInt(id, 10);
        

        if (status === 'idle' && isOnline) {
            dispatch(fetchUserDetails(numericId))
                .then(unwrapResult)
                .then((user : UserDetailState) => {
                    setUserData(user.data)
                })
                .catch((err: AxiosError) => {
                    setError(err.message);
                });
        }

        
    
        if((userData.id?.toString() !== id) && isOnline){
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

    }, [dispatch, status, id, userData, totalDataUser, isOnline]);
    

    const buttonTryAgainClick = () => {
        navigate('/users')
        window.location.reload();
    }

    return (
        <>
            <HelmetComponent title="Detail User"/>
            <Navbar backgroundStyle="bg-white"/>
            {status === "loading" && <><Loading/></>}
            {status === "success" && (
                <div className={` ${detailUserStyle.container} ${styles.paddingX}`} >
                    <div className={`${detailUserStyle.sectionData}`}>
                        <Link to="/users">
                            <div className={`${detailUserStyle.linkContainer}`}>
                                {userData?.id !== 0 ? <IoMdArrowRoundBack fontSize="2.8rem"/> : "" }
                                <p className="my-auto text-4xl font-bold">{userData?.first_name} {userData?.last_name}</p>
                            </div>
                        </Link>
                        <div className={`${detailUserStyle.dataContainer}`}>
                            <h1 className={`${detailUserStyle.dataTitle}`}>{userData?.first_name} {userData?.last_name}</h1>
                            <h4 className={`${detailUserStyle.dataParagraph}`}>{userData?.email}</h4>
                        </div>
                    </div>
                    <div className={`${detailUserStyle.sectionImage}`}>
                        <div className={`${detailUserStyle.imageContainer}`}>
                            <img src={userData?.avatar} className={`${detailUserStyle.imageContent}`}/>
                        </div>
                    </div>
                </div>
            )}

            {(!isOnline || error === "Cannot read properties of undefined (reading 'data')") && (
                <LostConnection
                    title={error === "Cannot read properties of undefined (reading 'data')" ? "Your Data Not Found" : "Lost Your Connection"}
                    buttonClickHandler={buttonTryAgainClick}
                />
            )}
        </>
    )
}

export default DetailUserPage