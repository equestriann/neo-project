import Header from "../components/Header.jsx";
import {wired, wireless} from "../components/data.js";
import Goods from "../components/Goods.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";

export default function Root() {

    let [counter, setCounter] = useState(0)

    function increment () {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className="wrapper">
                <Header counter={counter}/>
                <div className="category-name">Наушники</div>
                <main>
                    {wired.map(good =>
                        <Goods good={good} key={good.id} increment={increment}/>)}
                    {wired.map(good =>
                        <Goods good={good} key={good.id} increment={increment}/>)}
                </main>
                <div className="category-name">Беспроводные наушники</div>
                <main>
                    {wireless.map(good =>
                        <Goods good={good} key={good.id} increment={increment}/>)}
                </main>
                <Footer/>
            </div>
        </>
    )
}