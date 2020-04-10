import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Catalog from "./catalog/catalog";
import Product from "./product/product";
import Admin from './admin/admin';

class App extends Component {
  render() {
  return (
    <div className="App">
         <BrowserRouter>
          <Switch>
            <Route path="/catalog" component={Catalog} />
            <Route path="/product" component={Product} />
            <Route path="/admin" component={Admin} />

          </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
