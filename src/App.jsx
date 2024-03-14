import { useState } from 'react'
import './App.css'
import ListCafe from './components/listCoffe'
import header from '../public/bg-cafe.jpg'
import CardCoffe from './components/cardCoffe'

function App() {
  const [available, setavailable] = useState(false)
  const all = () => {
    setavailable(false)
  }
  const availableS = () => {
    setavailable(true)
  }

  return (
    <>
      <header>
        <img src={header} alt="" width='100%' />
      </header>
      <div>
        <div className="coff">
        <div className="container">
          <div className="card">
            {/* <img src="../public/vector.svg" alt="" className="vector" /> */}
            <div className="title">
              <h3>Our Collection</h3>
              <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
              <div className="butons">
              <button className={!available ? "press" : ''} onClick={all}>All Products</button>
              <button className={available ? "press" : ''} onClick={availableS}>Available Now</button>
              </div>
              
            </div>

          </div>
          <div className="list">
            <ListCafe state={available} />
          </div>
        </div>

      </div>
      </div>
      
    </>
  )
}

export default App
