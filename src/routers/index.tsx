import { Routes, Route } from "react-router-dom"
import Login from "../pages/LoginPage"
import UsersPage from "../pages/UsersPage"
import DetailUserPage from "../pages/DetailUserPage"
import NotFoundPage from "../pages/NotFoundPage"
import OverviewPage from "../pages/OverviewPage"

const SetupRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/users/:id" element={<DetailUserPage/>}/>
            <Route path="/overview" element={<OverviewPage/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default SetupRoutes