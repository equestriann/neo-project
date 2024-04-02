import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    const {cart} = useCart()
    const {totalQuantity} = useCart()

    return (
        <div className="wrapper">
            <div>
                Количество товаров в корзине: {totalQuantity}
                <hr />
                <div>
                    {cart.map(good =>
                        <div key={good.id}>
                            <p>{good.title}</p>
                            <p>{good.price}</p>
                            <p>{good.quantity}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}