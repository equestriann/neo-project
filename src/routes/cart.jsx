import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Cart () {
    return (
        <div className="wrapper">
            <Header />
            <div style={{textAlign: "center"}}>
                Тут будет корзина
            </div>
            <Footer />
        </div>
    );
}