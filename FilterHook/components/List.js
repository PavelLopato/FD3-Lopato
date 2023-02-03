import React  from 'react';

import "./List.css";

export default ({wordsList}) => {

  return (
    <textarea className='wordsList' value={wordsList.join('\n')} readOnly={true} />
  )

};
