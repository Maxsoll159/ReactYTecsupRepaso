import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postLogin } from "../../helpers/ApiUsuarios"

export const Login = () => {
    const navigate = useNavigate()

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })

    const onDatos = ({ target }) => {
        setUsuario({
            ...usuario,
            [target.name]: target.value
        })
    }
    const onLogged = (e) => {
        e.preventDefault()
        postLogin(usuario).then(res => {
            if (res.status === 201) {
                localStorage.setItem("token", res.data.access_token)
                navigate("/products", { state: { logged: true } })
            } else {
                alert("Usuarios no existen")
            }
        })
    }
    return (
        <div>
            <form action="" onSubmit={onLogged}>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" onChange={onDatos} />
                </div>
                <div>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="password" onChange={onDatos} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
