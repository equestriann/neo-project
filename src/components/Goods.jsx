import {useCart} from "./CartContext.jsx";

export default function Goods({ good }) {

    const { addToCart } = useCart()

    const handleBuyClick = () => {
        addToCart(good)
    }

    return (
        <div className="product-card">
            <div className="product-image">
                <span>this is product image</span>
            </div>
            <div className="product-info">
                <div className="left-column">
                    <p id="prod-title">Название</p>
                    <p id="prod-rating">Рейтинг</p>
                </div>
                <div className="right-column">
                    <p>Цена</p>
                    <p>Купить</p>
                </div>
            </div>
        </div>
    )
}