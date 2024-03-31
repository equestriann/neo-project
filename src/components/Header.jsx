import {FaCircle, FaRegHeart} from "react-icons/fa";
import {RiShoppingCart2Line} from "react-icons/ri";


export default function Header(props) {



    return (
        <header>
            <div>
                <span className="logo">QPICK</span>
                <ul className="nav">
                    <li>
                        <FaRegHeart className="fav-image"/>
                        <FaCircle className="counter-fav-circle"/>
                    </li>
                    <li>
                        <RiShoppingCart2Line className="cart-image"/>
                        <FaCircle className="counter-cart-circle"/>
                        <div className="count">{props.counter}</div>
                    </li>
                </ul>
            </div>
        </header>
    )
}
