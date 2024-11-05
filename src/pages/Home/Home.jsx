import React, { useContext ,useEffect,useState} from 'react'
import './Home.css'
import { CoinContext } from '../../Context/coinContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const {allCoin, Currency} =useContext(CoinContext);
  const [displayCoin,setDisplayCoin] =useState([]);
  const[input,setinput] = useState('');

  const inputHandler =(event)=>{
    setinput(event.target.value);
    if(event.target.value == ""){
      setDisplayCoin(allCoin);
    }
  }
  const searchHandler = async (event)=>{
    event.preventDefault();
    const coins =await allCoin.filter((item)=>{
     return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])
  
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler}list='coinlist'value={input} type="text" placeholder='Search crypto..'  required/>

          <datalist id='coinlist'>
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>



          <button type='Submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:'center'}}>24HChange</p>
          <p className='market-cap'>MarketCap</p>
        </div>
        {
          displayCoin.slice(0,10).map((item,index)=>(
           
           
           <Link to = {`/coin/${item.id}`}className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - "+item.symbol}</p>
              </div>
              <p> {Currency.Symbol}{item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h>0?"green":"red"}>
                {Math.floor(item.price_change_percentage_24h*100)/100}</p>
              <p className='market-cap'>{Currency.Symbol}{item.market_cap.toLocaleString()}</p>

            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Home
