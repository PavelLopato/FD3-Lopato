import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let textStr="первый<br>ВТОРОЙ<br/>третий<br />последний";

ReactDOM.render(
    <Br2jsx text={textStr} />
  , document.getElementById('container') 
);

