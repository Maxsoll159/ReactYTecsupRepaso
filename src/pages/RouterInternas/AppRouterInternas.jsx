
import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../Dashboard/Dashboard"
import { Navbar } from "../Navbar/Navbar"
import { ProductXd } from "../Dashboard/ProductXd"
import { Hola } from "../Dashboard/Hola"
export const AppRouterInternas = () => {
    return (
        <>

            <Navbar />
            <Routes>
                <Route path="/sd/dashboard" element={<Dashboard />} />
                <Route path="/sd/productsxd" element={<ProductXd />} />
                <Route path="/sd/hola" element={<Hola />} />
            </Routes>
        </>
    )
}