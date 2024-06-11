import {  NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav style={{ backgroundColor: 'orange' }}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                    >
                        первая ссылка
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/first"
                        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                    >
                        первая ссылка
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/second"
                        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                    >
                        первая ссылка
                    </NavLink>
                </li>
                <li onClick={() => navigate('/second', { replace: true })}>
                    онклик
                </li>
                <li>
                    <NavLink
                        to=".."
                    >
                        назад
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;