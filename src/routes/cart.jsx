import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    // const {cart} = useCart()
    const {totalQuantity} = useCart()

    return (
        <div className="wrapper">
            <div style={{textAlign:"center"}}>
                Количество товаров в корзине: {totalQuantity}
                <hr />
            </div>
        </div>
    );
}