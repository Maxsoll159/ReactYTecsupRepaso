import { createContext, useEffect } from "react";
import { getUsuario } from "../helpers/ApiUsuarios";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const { pathname } = useLocation()
    const navgate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        getUsuario(token).then(res => {
            if (res.status === 200) {
                navgate(pathname, { state: { logged: true } })
            }
        })
    }, [])
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}