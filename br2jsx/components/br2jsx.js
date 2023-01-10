import React from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

class Br2jsx extends React.Component {

    static propTypes = {
      text:PropTypes.string.isRequired,         
    };

    render () {

      const textArray = this.props.text.split(/<br *\/?>+/gi);
      const textNew = [];
      textArray.forEach((element, i) => {
          if (i) {
              textNew.push(<br key={i} />);
          }
          textNew.push(element);
      });
      return (
          <div className='myBr'>
              {textNew}
          </div>
      )
  }
    
}
export default Br2jsx;