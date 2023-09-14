import { useEffect, useState } from "react"
import { getProducts } from "../../helpers/ApiProducts."
import { CardProduct } from "./components/CardProduct"
import { useNavigate } from "react-router-dom"

export const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    //    
    useEffect(() => {
        getProducts().then(res => {
            if (res.status === 200) {
                setProducts(res.data)
            }
        })
    }, [])

    const onCerrarSesion = () =>{
        localStorage.removeItem("token")
        navigate("/login", {state: {logged: false}})
    }

    return (
        <section className="container">
            <button onClick={onCerrarSesion}>Cerrar Sesin</button>
            <article className="containerProduct">
                {
                    products && (
                        products.map((product) => (
                            <CardProduct {...product} key={product.id}/>
                        ))
                    )
                }
            </article>
        </section>
    )
}
