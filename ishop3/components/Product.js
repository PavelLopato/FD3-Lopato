import React from 'react';
import PropTypes from 'prop-types';

class Product extends  React.Component {

    static propTypes = {
        code: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        nam: PropTypes.string.isRequired,
        remainder: PropTypes.string.isRequired, 
        cbSelectedProduct: PropTypes.func.isRequired,
        cbDeleteProduct: PropTypes.func.isRequired,
        cbEditProduct: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        workMode: PropTypes.number.isRequired,
        permission: PropTypes.bool,
    };  
    
    deleteMe = (eo) => {
      eo.stopPropagation ();
      this.props.cbDeleteProduct (this.props.code);
    };

    selectMe = () => {
      if(this.props.permission)
        this.props.cbSelectedProduct (this.props.code);
    };

    editMe = (eo) => {
      eo.stopPropagation ();
      this.props.cbEditProduct (this.props.code);
    };

    render() {

      return (
        <tr key={this.props.code} className='Product' onClick={this.selectMe} style={{backgroundColor:(this.props.isSelected && (this.props.workMode==2||this.props.workMode==4))?'red':'white'}}>
          <td className='nam'>{this.props.nam}</td>
          <td className='price'>{this.props.price}</td>
          <td className='imgs'>
            <img src={this.props.url} alt='картинка'/>
          </td>
          <td className='remainder'>{this.props.remainder}</td>
          <td className='button'>
            <input type='button' disabled={!this.props.permission} value='edit' onClick={this.editMe} />
            <input type='button' disabled={!this.props.permission} value='delete' onClick={this.deleteMe} />
          </td>
        </tr>
      )
    }
}
export default Product;