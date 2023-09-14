import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Auth/Login"
import { Products } from "../pages/Products/Products"

import { ProductId } from "../pages/ProductId/ProductId"
import { AppRouterInternas } from "../pages/RouterInternas/AppRouterInternas"
import { Navbar } from "../pages/Navbar/Navbar"

export const AppRouter = () => {
    return (
        <div>
            <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={
                <Products />
            } />
            <Route path="/products/:id" element={
                <ProductId />
          } />
            <Route path="/*" element={<AppRouterInternas />} />
        </Routes>
        </div>
    )
}
