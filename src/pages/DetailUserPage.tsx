// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom";
import styles from "../dist/style";
import { RootState } from "../store/Feature";
// import { User, UserData } from "../types";
import { useEffect } from 'react';
import { AxiosError } from "axios";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../store/Feature/FeaturesUsers/userSlice";
import { User, UserDetailState } from "../types";
import { useState } from 'react';

const DetailUserPage = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const [idParam, setIdParam] = useState(id);
    const dataDetailUser = useSelector((state: RootState) => state.usersdetails.data);
    const [userData, setUserData] = useState(dataDetailUser);

    const status = useSelector((state: RootState) => state.usersdetails.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUserDetails(idParam))
                .then(unwrapResult)
                .then((user : UserDetailState) => {
                    console.log('Fetched user:', user.data);
                    setUserData(user.data)
                })
                .catch((err: AxiosError) => {
                    console.log(err);
                });
        }

    }, [dispatch, status, idParam, id]);

    if(userData.id?.toString() !== id){
        dispatch(fetchUserDetails(idParam))
                .then(unwrapResult)
                .then((user : UserDetailState) => {
                    console.log('Fetched user:', user.data);
                    setUserData(user.data)
                })
                .catch((err: AxiosError) => {
                    console.log(err);
                });
    } 

    console.log(userData);
    console.log(idParam);
    console.log(id);

    return (
        <>
            <Navbar/>
            <div className={`${styles.paddingX} flex flex-row w-full mt-52`} >
                {
                    userData.email
                }
            </div>
        </>
    )
}

export default DetailUserPage