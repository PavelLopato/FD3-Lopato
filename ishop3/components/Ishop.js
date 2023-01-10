import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product';

import Card from './Card';

class Ishop extends React.Component {

    static propTypes = {
      products:PropTypes.array.isRequired,
      startWorkMode: PropTypes.number.isRequired,         
    };

    state = {
      products: this.props.products,
      selectedProductCode: '',
      workMode:this.props.startWorkMode,
      editProductNew:'',     
    };

    selectedProduct = (code) => {
      this.setState ({selectedProductCode:code});
    };
 
    deleteProduct = (code) => {
      const newProducts = this.state.products.filter (v => v.code !== code);
      this.setState ({products: newProducts});
    };

    editProduct = (code) => {
      
      const editProductNew = this.state.products.filter (v => v.code == code);
      this.setState ({workMode:2, editProductNew:editProductNew});
    };

    addNewProduct = () => {
      this.setState ({workMode:3});
    };

    cancelProduct = () => {
      this.setState ({workMode:1});
    };

    render () {
  
      const productsCode=this.state.products.map( v =>
        <Product key={v.code} code={v.code} 
          nam={v.nam} url={v.url} price={v.price}
          remainder={v.remainder} isSelected={v.code === this.state.selectedProductCode}
          cbDeleteProduct={this.deleteProduct}
          cbSelectedProduct={this.selectedProduct} cbEditProduct={this.editProduct}
          
        />
      );      

      const cardCode=this.state.products.map( v =>    
        <Card key={v.code} nam={v.nam} price={v.price}
          remainder={v.remainder} cbSelectedProduct={this.selectedProduct}
          isSelected={v.code === this.state.selectedProductCode} workMode={this.state.workMode}/>      
      );

      return (
      <div>
        <table className="ishop">
          <tbody className='Products'>
            <tr>
              <th className='NAM'>название товара</th>
              <th className='PRICE'>цена</th>
              <th className='IMGS'>изображение товара</th>
              <th className='REMAINDER'>остаток на складе</th>
              <th className='DELETE'>изменить</th>              
            </tr>
            {productsCode}
          </tbody>
        </table>        
        {(this.state.workMode==1)&& [
        <input className='NewProduct' type='button' value='новый продукт' onClick={this.addNewProduct}/>,
          [cardCode]]}
        {(this.state.workMode==2)&&
          <Card workMode={this.state.workMode} cbCancelProduct={this.cancelProduct}
           cbEditProductNew={this.state.editProductNew} />
        } 
        {(this.state.workMode==3)&&
          <Card workMode={this.state.workMode} cbCancelProduct={this.cancelProduct} /> 
        } 
        
      </div>     
                 
      );
    }
}
export default Ishop;