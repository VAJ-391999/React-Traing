import React, { useState, useEffect, useRef } from 'react';
import useHttp from '../../hooks/http';
import ErrorModal from '../UI/ErrorModal';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const inputRef = useRef();
  const { onLoadIngrediants } = props;
  const[enteredFilter, setEnteredFilter] = useState('');
  const{isLoading, data, error, sendRequest, clear}  = useHttp();

  useEffect(() => {

    const timer = setTimeout(() => {

      if(enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '':`?orderBy="title"&equalTo="${enteredFilter}"`;

        sendRequest('https://react-hooks-update-51a02-default-rtdb.firebaseio.com/ingrediants.json' + query, 'GET' );

      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, inputRef, sendRequest])

  useEffect(() => {
    if(!isLoading && !error && data) {
      
          const loadedIngrediants = [];

          for(const key in data) {
            loadedIngrediants.push({
              id: key,
              title: data[key].title,
              amount: data[key].amount
            });
          }
          onLoadIngrediants(loadedIngrediants);
        
    }
  }, [isLoading, data, error, onLoadIngrediants]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input type="text" value={enteredFilter} onChange={(event) => setEnteredFilter(event.target.value)} ref={inputRef} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
