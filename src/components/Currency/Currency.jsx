import React, {useState, useEffect} from "react";
import "./Currency.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Currency(props){
  console.log('Currency props', props)

  const [currency, setCurrency] = useState(null)


  useEffect(() => {
    const currency = props.match.params.currency
    const url = `${coindeskURL}${currency}.json`
    const makeApiCall = async () => {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      let currencyPrice = data.bpi[currency].rate
      setCurrency(currencyPrice)
      props.setCurrency(currency)
    }
    makeApiCall()
  }, []);


    return (
      <div>
        <h1>Bitcoin price in {props.match.params.currency} </h1>
        <div className="price">{currency}</div>
        <button onClick={() => props.history.push('/currencies')}>Currencies</button>
      </div>
    )
}

export default Currency;
