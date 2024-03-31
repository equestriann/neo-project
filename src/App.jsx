import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Goods from './components/Goods.jsx'
import {wired, wireless} from './components/data.js'
import {useState} from "react";

export default function App() {

    let [counter, setCounter] = useState(0)

    function increment () {
        setCounter(counter + 1)
    }

  return (
      <div className="wrapper">
          <Header counter={counter}/>
          <div className="category-name">Наушники</div>
          <main>
              {wired.map(good =>
                  <Goods good={good} key={good.id} increment={increment}/>)}
              {wired.map(good =>
                  <Goods good={good} key={good.id}/>)}
          </main>
          <div className="category-name">Беспроводные наушники</div>
          <main>
              {wireless.map(good =>
                  <Goods good={good} key={good.id}/>)}
          </main>
          <Footer/>
      </div>
  )
}