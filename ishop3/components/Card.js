import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends  React.Component {

    static propTypes = {
        code: PropTypes.number/*.isRequired*/,
     
        price: PropTypes.number,
        nam: PropTypes.string,
        remainder: PropTypes.number, 
        isSelected: PropTypes.bool,
        workMode: PropTypes.number,
        cbCancelProduct: PropTypes.func,
        cbEditProductNew: PropTypes.object,
        namTextChanged:  PropTypes.func,
    };  

    cancelMe = () => {
      this.props.cbCancelProduct ();
    };

    namTextChanged = (eo) => {
      console.log('VotesAnswer: текст свободного ответа изменён - '+eo.target.value); 
      this.props.cbNamTextChanged (eo.target.value);
    };

    render() {

      if ( this.props.workMode ==1 ){

      return (
        <div>{
          (this.props.isSelected) &&
          <div className='CARD' key={this.props.code}>
            <div className='hEADER'> {this.props.nam} </div>
            <div className='nAM'> {this.props.nam} </div>
            <div className='pRICE'> {"цена: " + this.props.price} </div>
            <div className='rEMAINDER'> {"остаток на складе: " + this.props.remainder} </div>     
          </div>          
        } </div>
      )

      } else if ( this.props.workMode == 2 ){
        return (
          <div className='CARD'>
            <span className='hEADER'>Edit existing Product</span>
            <br/>
            <span>Название  </span>
            <input type='text' className='nAM' value={this.props.cbEditProductNew[0].nam} onChange={namTextChanged}/>
            <br/>
            <span>Изображение  </span>
            <input type='text' className='uRL' value={this.props.cbEditProductNew[0].url}/>
            <br/>
            <span>Цена  </span>
            <input type='text' className='pRICE' value={this.props.cbEditProductNew[0].price}/>
            <br/>
            <span>Название  </span>
            <input type='text' className='rEMAINDER' value={this.props.cbEditProductNew[0].remainder}/>
            <br/>
            <input type='button' value='Save' onClick={this.saveMe} />
            <input type='button' value='Cancel' onClick={this.cancelMe} />
          </div>
        )

      } else {
        return (
          <div className='CARD'>
            <span className='hEADER'>Add new product</span>
            <br/>
            <span>Название  </span>
            <input type='text' className='nAM'/>
            <br/>
            <span>Цена  </span>
            <input type='text' className='uRL'/>
            <br/>
            <span>Изображенрие  </span>
            <input type='text' className='pRICE'/>
            <br/>
            <span>Остаток  </span>
            <input type='text' className='rEMAINDER'/>
            <br/>
            <input type='button' value='Add' onClick={this.addMe} />
            <input type='button' value='Cancel' onClick={this.cancelMe} />        
          </div>
        )
      }
    }
}
export default Card;