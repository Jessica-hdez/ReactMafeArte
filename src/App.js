import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/* Import pages */
import Intro from './pages/Intro';
import Home from './pages/Home';
import Cart from './pages/Cart';
/* Import styles */
import './App.css';
import './assets/css/intro.css';
import './assets/css/home.css';
import './assets/css/cart.css';
/* Import Font Awesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faSearch, faShoppingCart, faHome, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronRight, faChevronLeft, faSearch, faShoppingCart, faHome, faInfoCircle, faTimes)

function App() {
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState('Promociones');
  const [generalCounter, setGeneralCounter] = useState(0);
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route exact path='/home'>
          <Home order={order} setOrder={setOrder} sort={sort} setSort={setSort} generalCounter={generalCounter} setGeneralCounter={setGeneralCounter}/>
        </Route>
        <Route exact path='/cart'>
          <Cart order={order} setOrder={setOrder} sort={sort} setSort={setSort} generalCounter={generalCounter} setGeneralCounter={setGeneralCounter}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
