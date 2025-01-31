import React from 'react';
import {wired, wireless} from "../components/data.js";
import Goods from "../components/Goods.jsx";

export default function MainPage (addToCart) {

    return (
        <main>
            <h3> Наушники </h3>
            <div className="category-content">
                {wired.map(good =>
                    <Goods good={good} key={good.id} addToCart={addToCart}/>)}
                {wired.map(good =>
                    <Goods good={good} key={good.id} addToCart={addToCart}/>)}
            </div>
            <h3> Беспроводные наушники </h3>
            <div className="category-content">
                {wireless.map(good =>
                    <Goods good={good} key={good.id} addToCart={addToCart}/>)}
            </div>
        </main>
    );
};