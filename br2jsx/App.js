import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let textStr="первый пошёл<br>ВТОРОЙ ПОШЁЛ<br/>третий не пошёл<br />последний";

ReactDOM.render(
    <Br2jsx text={textStr} />
  , document.getElementById('container') 
);

