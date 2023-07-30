import { useState } from 'react'
import ShoppingCard from "./ShoppingCard";
import Navbar from "./navbar";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>
            <Navbar />
        </div>

    <div class="container">
    <div class="content">
        <h>Gardening is a <br/>way to  <span>healthy life. </span><br/></h><ul></ul>
        <h7>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque<br/> veritatis quas maiores architecto, debitis distinctio.</h7>
        <div>
          <ul></ul>
        <button className='order'>Order Now</button>
        <button className='watch'><img src="https://img.freepik.com/free-icon/rounded-play-button_318-9366.jpg?w=740&t=st=1690709906~exp=1690710506~hmac=06115b6332d4b8c87b019851cc677d2358049126148940a81148b281b402cac0"></img>Watch Video</button>
        </div>
    </div>

    <div>
      <a className='plant1'>
        <img src="https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?w=740&t=st=1690702371~exp=1690702971~hmac=76d2f9ed2730d830c7e6f67afa5c0a20ab4dd4aac136bf8d6c14873f3f423bf1" alt="plant" />
      </a>
    </div>
    </div>
      <div className='BSP'>BEST SELLER PRODUCT</div>
    </div>
    <div>
      <ShoppingCard />
    </div>
    </>
  )
}

export default App
