import React, {useState} from 'react';
import {wired, wireless} from "../components/data.js";
import Goods from "../components/Goods.jsx";

export default function MainPage () {

    return (
        <div>
            <div className="category-name">Наушники</div>
            <main>
                {wired.map(good =>
                    <Goods good={good} key={good.id}/>)}
                {wired.map(good =>
                    <Goods good={good} key={good.id}/>)}
            </main>
            <div className="category-name">Беспроводные наушники</div>
            <main>
                {wireless.map(good =>
                    <Goods good={good} key={good.id}/>)}
            </main>
        </div>
    );
};