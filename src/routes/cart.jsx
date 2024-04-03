import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    const {cart} = useCart()
    const {totalQuantity} = useCart()
    const {totalPrice} = useCart()
    const {quantIncrease} = useCart()
    const {quantDecrease} = useCart()

    const increment = (good) => {
        quantIncrease(good)
    }

    const decrement = (good) => {
        quantDecrease(good)
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
                            <button onClick={() => increment(good)}>+</button>
                            <button onClick={() => decrement(good)}>-</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}