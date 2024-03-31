import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Wired from './components/Wired.jsx'
import {wired, wireless} from './components/data.js'

export default function App() {

  return (
      <div className="wrapper">
          <Header/>
          <div className="category-name">Наушники</div>
          <main>
              {wired.map(good =>
                  <Wired good={good} key={good.id}/>)}
              {wired.map(good =>
                  <Wired good={good} key={good.id}/>)}
          </main>
          <div className="category-name">Беспроводные наушники</div>
          <main>
              {wireless.map(good =>
                  <Wired good={good} key={good.id}/>)}
          </main>
          <Footer/>
      </div>
  )
}