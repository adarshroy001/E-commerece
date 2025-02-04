import { Navigate, Outlet } from "react-router-dom"
import useAuth from '../hooks/useAuth'

function ProtectedRoute() {
    return useAuth() ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute