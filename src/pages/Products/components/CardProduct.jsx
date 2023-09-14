import { Link } from "react-router-dom"

export const CardProduct = ({ id, title, category, price, images }) => {
    return (
        <div className="cardProduct">
            <img src={images[0]} alt={title} width={200} height={200} />
            <div>
                <h2>{title}</h2>
                <p>{category.name}</p>
                <p>S/. {price}</p>
                <Link to={`/products/${id}`} state={{ logged: true }}>Ver mas+</Link>
            </div>
        </div>
    )
}
