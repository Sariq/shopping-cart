
import React, {Component} from 'react';
import Product from "../product/product";
import { Link } from 'react-router-dom';

class Catalog extends Component {
    state = {
        catalogList: [
            {title:"home",id:1,active:true,productList:[{title:"pr1c1"},{title:"pr2c1"}]},
            {title:"bags",id:2,active:true,productList:[{title:"pr1c2"},{title:"pr2c2"}]},
            {title:"shirts",id:3,active:true,productList:[{title:"pr1c3"},{title:"pr2c3"}]}
        ],
        seletedProductsList : null
    }
    handleCatalogClick = (id) =>{
        
        // 1) filter catalogList by id(*catalogList.filter())
        // 2) setState selected catalog.productList(this.setState({seletedProductsList : VALUE}))
        // 3) show seletedProductsList
    }
    render() {
    return (
      <div className="App">
          {this.state.catalogList.map((catlog)=>{
              return <div onClick={() => this.handleCatalogClick(catlog.id)}>{catlog.title}</div>
          })}

        {this.state.seletedProductsList && this.state.seletedProductsList.map((product)=>{
              return <div >{product.title}</div>
          })}
          {/* Show selected catalog product list */}
      </div>
    )};
  }
  
export default Catalog;
  