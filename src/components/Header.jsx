import {FaRegHeart} from "react-icons/fa";
import {RiShoppingCart2Line} from "react-icons/ri";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext.jsx";

export default function Header() {

    // const {cart} = useCart()
    const {totalQuantity} = useCart()

    return (
        <header>
            <Link to={`/main`} style={{ textDecoration: "none" }}>
                <span className="logo">QPICK</span>
            </Link>
            <ul className="nav">
                <li>
                    <FaRegHeart className="fav-icon"/>
                </li>
                <li>
                    <Link to={`/cart`} style={{ textDecoration: "none" }}>
                        <RiShoppingCart2Line className="cart-icon"/>
                        {
                            totalQuantity ? <span className="cart-counter">{totalQuantity}</span> : null
                        }
                    </Link>
                </li>
            </ul>
        </header>
    )
}
