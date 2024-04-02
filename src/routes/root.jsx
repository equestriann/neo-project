import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import {Outlet} from "react-router-dom";

export default function Root() {
    const [cart, setCart] = useState([])

    function addToCart (good) {
        setCart([...cart, good]);
        console.log(cart)
    }

    return (
        <>
            <div className="wrapper">
                <Header cartItemsCount={cart.length}/>
                <main>
                    <Outlet addToCart={addToCart}/>
                </main>
                <Footer/>
            </div>
        </>
    )
}