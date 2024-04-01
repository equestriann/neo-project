import {FaRegHeart} from "react-icons/fa";
import {RiShoppingCart2Line} from "react-icons/ri";
import {Link} from "react-router-dom";


export default function Header(props) {

    return (
        <header>
            <div>
                <span className="logo">QPICK</span>
                <ul className="nav">
                    <li>
                        <FaRegHeart className="fav-image"/>
                    </li>
                    <li>
                        <Link to={`/cart`}>
                            <RiShoppingCart2Line className="cart-image"/>
                            <span className="counter-cart-circle">{props.counter}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
