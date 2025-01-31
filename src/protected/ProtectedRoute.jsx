import { Navigate, Outlet } from "react-router-dom"
import useAuth from '../middleWare/useAuth'

function ProtectedRoute() {
    return useAuth() ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute