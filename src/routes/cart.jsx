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
            {totalQuantity ?
                <h3>Корзина</h3> :
                <h3 style={{textAlign:"center"}}>Корзина пуста</h3>}
            <div className="cart-content">
                <div className="cart-item-card">
                    {cart.map(good =>
                        <div key={good.id} className="cart-item-info">
                            <button onClick={() => deleteGood(good)} style={{fontSize: "30px"}}>&#128465;</button>
                            <img className="cart-item-image" src={good.img} alt=""/>
                            <p>{good.title}</p>
                            <p className="cart-item-price-small">{good.price}₽</p>
                            <span className="cart-item-quantity" onClick={() => increment(good)}
                                  style={{fontSize: "30px"}}>+</span>
                            <span>{good.quantity}</span>
                            <span className="cart-item-quantity" onClick={() => decrement(good)}
                                  style={{fontSize: "30px"}}>-</span>
                            <span className="cart-item-price-main">{good.price}₽</span>
                        </div>
                    )}
                </div>
                {!totalQuantity ? null :
                    <div className="total-card">
                        <span className="total-price">ИТОГО</span>
                        <span className="total-price">₽{totalPrice}</span>
                        <p>
                            <button className="order-button">Перейти к оформлению</button>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}