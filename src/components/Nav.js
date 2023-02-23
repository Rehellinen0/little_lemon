import logo from "../images/logo.svg"

const Nav = () => {
    return (
        <div className="row">
            <nav className="flex-row">
                <img src={logo} alt="Logo" width="202px" height="50px" />
                <ul className="nav-bar flex-row">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;