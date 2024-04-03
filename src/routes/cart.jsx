import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    const {cart} = useCart()
    const {totalQuantity} = useCart()
    const {totalPrice} = useCart()
    const {quantIncrease} = useCart()
    const {quantDecrease} = useCart()
    const {deleteItem} = useCart()

    const increment = (good) => {
        quantIncrease(good)
    }

    const decrement = (good) => {
        quantDecrease(good)
    }

    const deleteGood = (good) => {
        deleteItem(good)
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
                            <button onClick={() => increment(good)} style={{fontSize:"30px"}}>+</button>
                            <button onClick={() => decrement(good)} style={{fontSize:"30px"}}>-</button>
                            <button onClick={() => deleteGood(good)} style={{fontSize:"30px"}}>&#128465;</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}