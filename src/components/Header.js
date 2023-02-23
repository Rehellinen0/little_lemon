import restaurantFood from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <div className="row fillGreen" >
            <header>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className='lead-text'>
                        We are a family owned Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <button class="pillBtn">Reserve a Table</button>
                </div>
                <img src={restaurantFood} alt="restaurant food" id="estaurantFood" />
            </header>
        </div>
    );
};

export default Header;
