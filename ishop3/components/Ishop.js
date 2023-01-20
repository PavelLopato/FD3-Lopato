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
      nam: '', 
      price: '',  
      url:'',
      remainder: '',
      code: 0,
      permission: true,
    };

    selectedProduct = (code) => {
      const editProductNew = this.state.products.filter (v => v.code == code);
      this.setState ({nam: editProductNew[0].nam, price: editProductNew[0].price,
        url: editProductNew[0].url, remainder: editProductNew[0].remainder,
        code: editProductNew[0].code, selectedProductCode:code, workMode: 4 });
    };
 
    deleteProduct = (code) => {
      const newProducts = this.state.products.filter (v => v.code !== code);
      this.setState ({products: newProducts, workMode:1,});
    };

    editProduct = (code) => {      
      const editProductNew = this.state.products.filter (v => v.code == code);
      this.setState ({workMode:2, nam: editProductNew[0].nam, price: editProductNew[0].price,
        url: editProductNew[0].url, remainder: editProductNew[0].remainder, 
        code: editProductNew[0].code, selectedProductCode:code,});
    };

    addNewProduct = () => {
      this.setState ({workMode:3, nam: '', price: '', url:'', remainder: '', code: 0, selectedProductCode:'',
      permission: false,});
    };

    cancelProduct = () => {
      this.setState ({workMode:1, permission: true,});
    };

    addNewProductCard = (Product) => {
      const newProducts = this.state.products.slice();
      newProducts.push (Product);
      this.setState ({products: newProducts, workMode:1, permission: true,});
    };

    saveProduct = (productSave) => {

        const flip = function (src_array, code)  {
          const result_array = src_array.slice();
          const obj = result_array.find(el => el.code == code);
          if (obj){ 
            obj.nam = productSave.nam;
            obj.price = productSave.price;
            obj.url = productSave.url;
            obj.remainder = productSave.remainder;
           
            return result_array;
          }
        }
        let newProduct =  flip (this.state.products, productSave.code);
        this.setState({products: newProduct, workMode: 1, permission: true,});

    };

    editField = (value) => {
      let bool = value === this.state.nam||
                 value === this.state.nam||
                 value === this.state.nam||
                 value === this.state.nam;
                 
      this.setState({permission: bool});
    };

    render () {
  
      const productsCode=this.state.products.map( v =>
        <Product key={v.code} code={v.code} 
          nam={v.nam} url={v.url} price={v.price}
          remainder={v.remainder} isSelected={v.code === this.state.selectedProductCode}
          cbDeleteProduct={this.deleteProduct}
          cbSelectedProduct={this.selectedProduct} cbEditProduct={this.editProduct} 
          workMode={this.state.workMode} permission={this.state.permission} />
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
        {(this.state.workMode==1||this.state.workMode==4)&& 
        <input className='NewProduct' type='button' disabled={!this.state.permission} value='новый продукт' onClick={this.addNewProduct}
          key={Math.random}/>
        }
        {(this.state.workMode==4)&&
          <Card key={this.state.code} nam={this.state.nam} price={this.state.price}
          remainder={this.state.remainder} cbSelectedProduct={this.selectedProduct}
          isSelected={this.state.code === this.state.selectedProductCode} workMode={this.state.workMode} /> 
        }
        {(this.state.workMode==2)&&
          <Card workMode={this.state.workMode} cbCancelProduct={this.cancelProduct}
           nam={this.state.nam} url={this.state.url} key={this.state.code}
           price={this.state.price} remainder={this.state.remainder} 
           code={this.state.code} cbSaveProduct={this.saveProduct} cbEditField={this.editField}
           permission={this.state.permission}/>
        } 
        {(this.state.workMode==3)&&
          <Card workMode={this.state.workMode} cbCancelProduct={this.cancelProduct}
           nam={this.state.nam} url={this.state.url}
           price={this.state.price} remainder={this.state.remainder} cbEditField={this.editField}
           code={this.state.code}  cbAddNewProductCard={this.addNewProductCard} permission={this.state.permission} /> 
        }         
      </div>    
      );
    }
}
export default Ishop;