import { Navigate, useLocation } from "react-router-dom"

export const AppRouterPriv = ({ children }) => {
    const { state } = useLocation()
    return state?.logged ? children : <Navigate to="/login" />
}
