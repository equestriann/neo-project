export default function Goods({ good, addToCart }) {

    return (
        <div>
            <div className="good">
                <img src={good.picture} alt=""/>
                <div className="good-details">
                    <p>
                        {good.title}
                        <span className="good-price">{good.price}₽</span>
                    </p>
                    <p>
                        <span className="star">&#9733;</span>
                        {good.rating}
                        <button className="buy-button" onClick={() => addToCart(good)}>Купить</button>
                    </p>
                </div>
            </div>
        </div>
    )
}