import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsId } from "../../helpers/ApiProducts."

export const ProductId = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    useEffect(() => {
        getProductsId(id).then(res => {
            if (res.status === 200) {
                setProduct(res.data)
            }
        })
    }, [])
    console.log(product)
    return (
        <section className="container">
            {
                product && (
                    <article>
                        <img src={product.images[0]} alt="" width={400} />
                        <div>
                            {
                                product.images.map(img => (
                                    <img src={img} width={100} height={100} />
                                ))
                            }
                        </div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </article>
                )
            }
        </section>
    )
}
