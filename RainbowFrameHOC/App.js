import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton';
import { withRainbowFrame } from './components/withRainbowFrame';

let colors = require('./colors.json');
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
    <div>
        <DoubleButton caption1='однажды' caption2='пору'  cbPressed={num => alert(num)}>
            в студёную зимнюю
        </DoubleButton>
        <FramedDoubleButton caption1='я из лесу' caption2='мороз'  cbPressed={num => alert(num)}>
            вышел, был сильный
        </FramedDoubleButton>
    </div>
    , document.getElementById('container') 
);


