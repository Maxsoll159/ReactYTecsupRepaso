import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
        <Link to="/sd/dashboard">Dashboard</Link>
        <Link to="/sd/productsxd">productos</Link>
        <Link to="/sd/hola">Hola</Link>
    </div>
  )
}
