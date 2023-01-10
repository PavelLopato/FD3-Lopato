import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

let productsArr=require('./products.json');

ReactDOM.render(
    <Ishop products={productsArr} startWorkMode={1}/>
  , document.getElementById('container') 
);

