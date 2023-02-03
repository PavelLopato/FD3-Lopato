import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

let wordsListArr=[ 
  'california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'
  ];

ReactDOM.render(
  <Filter wordsListArr={wordsListArr} />
  , document.getElementById('container') 
);

