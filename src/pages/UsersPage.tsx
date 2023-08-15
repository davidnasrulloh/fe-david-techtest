import { useDispatch, useSelector } from "react-redux";

import{ RootState } from './../store/Feature/index';
import { useEffect, useState } from "react";
import { fetchUsers } from "../store/Feature/FeaturesUsers/userSlice";
import { unwrapResult  } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { User, UserData } from "../types";


const UsersPage = () => {

    const dispatch = useDispatch();
    const dataUserList = useSelector((state: RootState) => state.users.data);
    const { data, page, total_pages } : UserData = dataUserList;
    const status = useSelector((state: RootState) => state.users.status);

    const [pageNumber, setPageNumber] = useState(page);

    // console.log(dataUserList);
    // console.log(userList);
    // console.log(pageNumber)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers(pageNumber))
                .then(unwrapResult)
                .catch((err: AxiosError) => {
                    console.log(err);
                });
        }

    }, [dispatch, status, pageNumber]);

    const handlePageChange = (newPage: number) => {
        setPageNumber(newPage);
        dispatch(fetchUsers(newPage))
                .then(unwrapResult)
                .catch((err: AxiosError) => {
                    console.log(err);
                });
    }

    return (
        <div>
            <h2>User List</h2>
            {status === "loading" && <p>Loading...</p>}
            {status === "success" && (
                <>
                    <div>
                        {Array.from({ length: total_pages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={pageNumber === index + 1}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <ul>
                        Hai {total_pages}
                        {data.map((user: User) => (
                            <div key={user.id}>
                                <li>{user.first_name} {user.last_name} {user.id}</li>
                                <img src={user.avatar} alt={user.first_name}/>
                            </div>
                        ))}
                    </ul>
                    
                </>
            )}
            {status === "failed" && <p>Failed to fetch users.</p>}
        </div>
    );
}

export default UsersPage