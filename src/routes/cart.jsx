import {useCart} from "../components/CartContext.jsx";

export default function Cart () {

    const {cart} = useCart()

    return (
        <div className="wrapper">
            <div style={{textAlign: "center"}}>
                Количество товаров в корзине: {cart.length}
            </div>
        </div>
    );
}