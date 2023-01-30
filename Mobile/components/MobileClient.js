import React from 'react';
import PropTypes from 'prop-types';

import {voteEvents} from './events';
import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = { 
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,  
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.string.isRequired,
    }),
  };

editMe = (EO) => {
  voteEvents.emit('EeditMe',this.props.client.id,);
};

deleteMe = (EO) => {
  voteEvents.emit('EdeleteMe', this.props.client.id);
};

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");

    const isActive = this.props.client.balance > 0;
    
    return (
      <tr className='MobileClient'>
        <td className='MobileClientFam'>{this.props.client.fam}</td>
        <td className='MobileClientIm'>{this.props.client.im}</td>
        <td className='MobileClientOtch'>{this.props.client.otch}</td>
        <td className='MobileClientBalance'>{this.props.client.balance}</td>
        <td className='MobileClientStatus' style={{ backgroundColor: isActive ? 'green' : 'red' }}>
          {isActive? 'active' : 'blocked'}
        </td>
        <td className='MobileClientEdit'><input type='button' value='Редактировать' onClick={this.editMe} /></td>
        <td className='MobileClientDelete'><input type='button' value='Удалить' onClick={this.deleteMe} /></td>      
      </tr>
    );

  }

}

export default MobileClient;
