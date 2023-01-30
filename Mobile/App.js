import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=require('./clients.json');

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

