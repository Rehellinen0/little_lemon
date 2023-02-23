import imgUrl from "../images/restaurant.jpg";

const Footer = () => {
    return (
        <div className="row fillGreen">
            <footer className="flex-row">
                <div className="doormat flex-row">
                    <img src={imgUrl} alt="Restaurant image" />
                    <ul className="p-text">
                        <li className="card-title-text">Doormat Navigation</li>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="contacts">
                    <ul className="p-text">
                        <li  className="card-title-text">Contacts</li>
                        <li>XXXXXXX 123, Chichago</li>
                        <li>+1 234567890</li>
                        <li>littlelemon@restaurant.com</li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="p-text">
                        <li  className="card-title-text">Social</li>
                        <li><a href="www.facebook.com">Facebook</a></li>
                        <li><a href="www.instagram.com">Instagram</a></li>
                        <li><a href="twitter.com">Twitter</a></li>
                        <li><a href="www.youtube.com/">YouTube</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )

};

export default Footer;