import {useCart} from "../components/CartContext.jsx";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function Cart () {

    const {cart} = useCart()
    const {totalQuantity} = useCart()
    const {totalPrice} = useCart()
    // const {totalItemPrice} = useCart()
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
        <div>
            {!totalQuantity ?
            <h3 style={{textAlign:"center"}}>Корзина пуста</h3> :
            <h3>Корзина</h3>
            }
            <div className="cart-container">
                <div className="cart-list">
                    {cart.map(good =>
                        <div key={good.id} className="item-card">
                            <div className="img-n-quant">
                                <img src={good.picture} alt="Product image"/>
                                <div className="quant-group">
                                    <button id="quant-btn" onClick={() => decrement(good)}>-</button>
                                    <span>{good.quantity}</span>
                                    <button id="quant-btn" onClick={() => increment(good)}>+</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <p>{good.title}</p>
                                <p id="price-small">{good.price.toLocaleString('ru-RU')} ₽</p>
                            </div>
                            <div className="delete-n-price">
                                <RiDeleteBin2Line id="item-delete-btn" onClick={() => deleteGood(good)}/>
                                <p>{(good.price * good.quantity).toLocaleString('ru-RU')} ₽</p>
                            </div>
                        </div>
                    )}
                </div>
                {!totalQuantity ? null :
                    <div className="total-container">
                        <div className="total-info">
                            <p>ИТОГО</p>
                            <p>₽ {totalPrice.toLocaleString('ru-RU')}</p>
                        </div>
                        <button id="order-btn">Перейти к оформлению</button>
                    </div>
                }
            </div>
        </div>
    );
}