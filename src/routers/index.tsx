
// import React from 'react'

import { Routes, Route } from "react-router-dom"
import Login from "../pages/LoginPage"
import UsersPage from "../pages/UsersPage"
import DetailUserPage from "../pages/DetailUserPage"

const SetupRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/users/:id" element={<DetailUserPage/>}/>
        </Routes>
    )
}

export default SetupRoutes