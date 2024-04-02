import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    const {cart} = useCart()
    const {totalQuantity} = useCart()
    const {totalPrice} = useCart()
    const {addToCart} = useCart()

    function handlePlusClick (good) {
        addToCart(good)
    }

    return (
        <div className="wrapper">
            <div>
                <p>Количество товаров в корзине: {totalQuantity}</p>
                <p>Итого: {totalPrice}</p>
                <hr />
                <div>
                    {cart.map(good =>
                        <div key={good.id}>
                            <p>{good.title}</p>
                            <p>{good.price}</p>
                            <p>{good.quantity}</p>
                            <button onClick={handlePlusClick}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}