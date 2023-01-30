import React from 'react';
import PropTypes from 'prop-types';

import {voteEvents} from './events';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    id: 0,
    fam: '',
    im: '',
    otch: '',
    balance: '',
    workMode: 1,
    status: 0,
  };

  constructor(props) {
    super(props);
    this.famRef = React.createRef();
    this.imRef = React.createRef();
    this.otchRef = React.createRef();
    this.balanceRef = React.createRef();
  };

  componentDidMount = () => {
    voteEvents.addListener('EeditMe',this.editOldClient);
    voteEvents.addListener('EdeleteMe',this.deleteOldClient);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EeditMe',this.editOldClient);
    voteEvents.removeListener('EdeleteMe',this.deleteOldClient);
  };


  editOldClient = (id) => {
    let clients = this.state.clients.slice();
    const client = clients.filter (cl => cl.id === id);
    this.setState ({workMode:2, id: client[0].id, fam: client[0].fam, im: client[0].im,
      otch: client[0].otch, balance: client[0].balance, 
    });
  };

  deleteOldClient = (id) => {
    let clients = this.state.clients.slice();
    const newClients = clients.filter (cl => cl.id !== id);
    this.setState ({clients: newClients});
    if (id === this.state.id){
      this.setState({workMode: 1, fam: '', im:'', otch:'', balance:'', id: 0,})
    }

  };

  addClient = () => {
    this.setState({workMode:3});
  };

  save = () => {
    let fam = this.famRef.current.value;
    let im = this.imRef.current.value;
    let otch = this.otchRef.current.value;
    let balance = this.balanceRef.current.value;
    let id = this.state.id;
    let clients = this.state.clients.slice();
    const clientIndex = clients.findIndex (cl => cl.id === id);
    if (clientIndex !== -1) {
      let newClient = {
        ...clients[clientIndex],
        fam, im, otch, balance
      };
      clients[clientIndex] = newClient;
      this.setState({clients:clients, workMode:1, fam: '', im:'', otch:'', balance:'', id: 0,}); 
    }; 
  };

  saveNew = () => {
    let fam = this.famRef.current.value;
    let im = this.imRef.current.value;
    let otch = this.otchRef.current.value;
    let balance = this.balanceRef.current.value;
    let id = Math.random();
    let clients = this.state.clients.slice();
    clients = [... clients, {fam, im, otch, balance, id}];
    this.setState ({clients:clients, workMode:1,})
  };

  cancel = () => {
    this.setState({workMode:1, fam: '', im:'', otch:'', balance: '', id: 0,});
  };

  filterAll = () => this.setState({ status: 0 });
  filterActive = () => this.setState({ status: 1 });
  filterBlocked = () => this.setState({ status: 2 });
  
  render() {

    console.log("MobileCompany render");

    const filteredClients = this.state.clients.filter((client) => {
      switch (this.state.status) {
        case 1: return client.balance > 0;
        case 2: return client.balance < 0;
        default: return true;
      }
    });

    const clientsCode = filteredClients.map( cl => {
        return <MobileClient key={cl.id} 
          client={cl} />;
      }
    );

    return (
      <div>
        <input className='buttonFilter' type='button' value='Все' onClick={this.filterAll} />
        <input className='buttonFilter'  type='button' value='Активные' onClick={this.filterActive} />
        <input className='buttonFilter' type='button' value='Заблокированные' onClick={this.filterBlocked} />
        <table className='MobileCompanyTable'>
          <tbody>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th className='edit'>Редактировать</th>
              <th>Удалить</th>                
            </tr>
            {clientsCode}
          </tbody>
        </table>
        <input className='buttonNew' type='button' value='Добавить клиента' onClick={this.addClient} /> <br/>
        {(this.state.workMode==2)&&
          <div>
            Фамилия: <input className='fam' type='text' ref={this.famRef} defaultValue={this.state.fam} /> <br />
            Имя: <input className='im' type='text' ref={this.imRef} defaultValue={this.state.im} /> <br />
            Отчество: <input className='otch' type='text' ref={this.otchRef} defaultValue={this.state.otch} /> <br />
            Баланс: <input className='balance' type='text' ref={this.balanceRef} defaultValue={this.state.balance} /> <br />
            <input type='button' value='сохранить' onClick={this.save} />
            <input type='button' value='отменить' onClick={this.cancel} />
          </div>
        }  
        {(this.state.workMode==3)&&
          <div>
            Фамилия: <input className='fam' type='text' ref={this.famRef} defaultValue={this.state.fam} /> <br />
            Имя: <input className='im' type='text' ref={this.imRef} defaultValue={this.state.im} /> <br />
            Отчество: <input className='otch' type='text' ref={this.otchRef} defaultValue={this.state.otch} /> <br />
            Баланс: <input className='balance' type='text' ref={this.balanceRef} defaultValue={this.state.balance} /> <br />
            <input type='button' value='сохранить' onClick={this.saveNew} />
            <input type='button' value='отменить' onClick={this.cancel} />
          </div>
        } 
      </div>
    );
  }
}

export default MobileCompany;
