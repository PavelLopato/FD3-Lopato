import React, {useState} from 'react';

export default ({onChange, isChecked, checked, cbReset, filterStr}) => {
  
  const filterChanged = (eo) => {
    onChange(eo.target.value);
  };
  const sortChanged = (eo) => {
    isChecked(eo.target.checked);
  };

  const reset = () => {
    cbReset ();
  };

  return (
    <div className='Controls'>
        <input type='checkbox' checked={checked} onChange={sortChanged} />
        <input type="text" value={filterStr} onChange={filterChanged} />
        <input type='button' value='reset' onClick={reset} />
    </div>
  )

};
