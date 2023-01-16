import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    };

    clickMe1 = (eo) => {
        this.props.cbPressed (this.props.caption1);
    };

    clickMe2 = (eo) => {
        this.props.cbPressed (this.props.caption2);
    };
  
    render() {
    
        return (
            <div className='doubleButton' key={Math.random()}>
                <input type='button' className='button' value={this.props.caption1} onClick={this.clickMe1}/> 
                {this.props.children}            
                <input type='button' className='button' value={this.props.caption2} onClick={this.clickMe2}/>
            </div>
        );
    }
}

export default DoubleButton;