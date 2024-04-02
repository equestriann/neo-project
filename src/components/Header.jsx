import {FaRegHeart} from "react-icons/fa";
import {RiShoppingCart2Line} from "react-icons/ri";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext.jsx";

export default function Header() {

    // const {cart} = useCart()
    const {totalQuantity} = useCart()

    return (
        <header>
            <div>
                <Link to={`/main`} style={{ textDecoration: "none" }}>
                    <span className="logo">QPICK</span>
                </Link>
                <ul className="nav">
                    <li>
                        <FaRegHeart className="fav-image"/>
                    </li>
                    <li>
                        <Link to={`/cart`}>
                            <RiShoppingCart2Line className="cart-image"/>
                            {
                                totalQuantity ? <span className="counter-cart-circle">{totalQuantity}</span> : null
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
