/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";

import{ RootState } from './../store/Feature/index';
import { useEffect, useState } from "react";
import { fetchUsers } from "../store/Feature/FeaturesUsers/userSlice";
import { unwrapResult  } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { User, UserData } from "../types";
import styles from "../styles/style";
import Navbar from "../components/Navbar";
import CardUser from "../components/CardUser";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "../components/HelmetComponent";
import CustomEmptyResult from "../components/emptystate/CustomEmptyResult";


const UsersPage = () => {

    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const dataUserList = useSelector((state: RootState) => state.users.data);
    const { data, page, total_pages } : UserData = dataUserList;
    const status = useSelector((state: RootState) => state.users.status);
    const [pageNumber, setPageNumber] = useState(page);

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

        if (status === 'idle' && isOnline ) {
            dispatch(fetchUsers(pageNumber))
                .then(unwrapResult)
                .catch((err: AxiosError) => {
                    return err;
                });
        }

    }, [dispatch, status, pageNumber, isOnline]);

    const handlePageChange = (newPage: number) => {
        setPageNumber(newPage);
        dispatch(fetchUsers(newPage))
                .then(unwrapResult)
                .catch((err: AxiosError) => {
                    return err;
                });
    }
    
    const buttonTryAgainClick = () => {
        navigate('/users')
        window.location.reload();
    }

    return (
        <>
            <HelmetComponent title="Users Page"/>
            <Navbar backgroundStyle="bg-white" />

            <div className={`${styles.paddingX} flex flex-wrap w-full justify-center gap-10 mt-52`}>
                <div className="flex flex-row gap-10">
                    {Array.from({ length: total_pages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={pageNumber === index + 1}
                            className="text-3xl text-gray-700 font-medium p-4 bg-gray-100 border-4 border-gray-100 w-20 h-20 rounded-full disabled:bg-blue-100 disabled:border-blue-200 hover:border-gray-200">
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            {status === "loading" && <><Loading/></>}
            {status === "success" && (
                <>
                    <div className={`${styles.paddingX} flex flex-wrap w-full justify-center gap-12 md:gap-20 my-16`}>
                        {data.map((user: User) => (
                            <CardUser {...user} key={user.id}/>
                        ))}
                    </div>
                </>
            )}

            {!isOnline && 
                <>
                    <CustomEmptyResult title="Lost Your Connection" buttonClickHandler={buttonTryAgainClick}/>
                </>
            }
        </>
    );
}

export default UsersPage