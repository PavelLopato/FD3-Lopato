import React, { useState, useEffect } from 'react';

import List from "./List";
import Controls from "./Controls";

export default ({wordsListArr}) => {

    const [wordsList, setwordsList]=useState(wordsListArr);
    const [filterStr, setfilterStr]=useState('');
    const [checked, setCheked]=useState(false);

    const filterChanged = (filterStr) => { 
        setfilterStr(filterStr);
    };

    const sortChanged = (checked) => {
        setCheked(checked);
    };

    const reset = () => {
        setwordsList(wordsListArr);
        setfilterStr('');
        setCheked(false);
    };

    useEffect(
        ()=>{      
            let newWordsList=wordsListArr.slice();      
            if (filterStr) 
                newWordsList = newWordsList.filter((w => w.includes(filterStr)));
            if (checked)
                newWordsList = newWordsList.sort();
            setwordsList (newWordsList);              
        },
        [filterStr, checked] 
      );
    

    return (
    
        <div className="Filter">
            <Controls onChange={filterChanged} checked={checked} 
                isChecked={sortChanged} cbReset={reset}
                 filterStr={filterStr}/>
            <List wordsList={wordsList} />
        </div>
    );
};


