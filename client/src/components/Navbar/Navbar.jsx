import { useNavigate } from "react-router-dom"
import { logout } from "../../services/auth"

import './Navbar.css'

export default function Navbar({ user }) {

    const navigate = useNavigate()

    const closeSession = async () => {
        logout()
        const loggedUserJSON = window.localStorage.getItem('sesionPrueba')
        if (!loggedUserJSON) {
            navigate('/auth')
        }
    }

    const userDetail = () => {
        navigate(`/user-detail/${user.id}`)
    }

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <img
                    src="https://sistema.siwcargo.com/img/logo.png"
                    alt="logo-img"
                    className="navbar-logo"
                />
            </div>
            <div className="navbar-user-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
                    alt="avatar-img"
                    className="navbar-avatar"
                    onClick={() => userDetail()}
                />
                <div className="navbar-box">
                    <p onClick={() => userDetail()} className="navbar-user-name">{user?.name}</p>
                    <button
                        className="navbar-button"
                        onClick={() => closeSession()}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    )
}