import React, { useState } from 'react';
import Home from '../Home/Home';
import './App.css';

import { Route, Link, Redirect, Switch } from 'react-router-dom'
import Currencies from '../Currencies/Currencies'
import Currency from '../Currency/Currency'

function App() {
  const [currency, setCurrency] = useState(null);

  return (
    <div>
      <nav>
        <Link onClick={() => setCurrency('')} to="/">
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
        </Link>
        <Link onClick={() => setCurrency('')} to="/currencies">
          {
          currency ? `Currency List > ${currency}` : `Currencies List`
          }
        </Link>

      </nav>
      <main>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/currencies/:currency" render={(routerProps) => (
          <Currency 
            setCurrency={setCurrency}
            {...routerProps}
            />
            )}
          />
          <Route path="/currencies" component={Currencies} />
          </Switch>


      </main>
    </div>
  );
}

export default App;
