import {useCart} from "./CartContext.jsx";

export default function Goods({ good }) {

    const { addToCart } = useCart()

    const handleBuyClick = () => {
        addToCart(good)
    }

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={good.picture} alt=""/>
                {/*this is product image*/}
            </div>
            <div className="product-info">
                <div className="left-column">
                    <p>{good.title}</p>
                    <p>
                        <span id="rating-star">&#9733;</span>
                        <span id="rating">{good.rating}</span>
                    </p>
                </div>
                <div className="right-column">
                    <p id="price">{good.price}</p>
                    <p>
                        <button id="buy-button" onClick={handleBuyClick}>
                            Купить
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}