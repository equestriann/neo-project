import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";

export default function Root() {

    return (
        <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}