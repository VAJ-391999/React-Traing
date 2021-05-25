import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngrediantsList from './IngredientList';
import ErrorModel from '../UI/ErrorModal';

function Ingredients() {

  const[userIngrediants, setUserIngrediats] = useState([]);

  const filteredIngrediantHandler = useCallback( (filteredIngrediants) => {
    setUserIngrediats(filteredIngrediants);
  }, []);

  const[isLoading, setLoading] = useState(false);
  const[error, setError] = useState();

 

  const addIngrediantsHandler = (ingrediant) => {
    setLoading(true);
    fetch('https://react-hooks-update-51a02-default-rtdb.firebaseio.com/ingrediants.json', {
      method: 'POST',
      body: JSON.stringify(ingrediant),
      headers: { 'Content-Type': 'application/json'}
    }).then(response => {
      setLoading(false);
      return response.json();
     
    }).then(responseData => {
      setUserIngrediats(prevIngrediants => [...prevIngrediants, {
        id: responseData.name,
        ...ingrediant
      }]);
    });
  };

  const removeIngrediantsHandler = (ingrediantId) => {
    console.log(ingrediantId)
    setLoading(true);
    fetch(`https://react-hooks-update-51a02-default-rtdb.firebaseio.com/ingrediants/${ingrediantId}.json`, {
      method: 'DELETE',
     
    }).then(response => {
      setLoading(false);
      setUserIngrediats(prevIngrediants => {
        //debugger
        prevIngrediants.filter(ingredient => ingredient.id !== ingrediantId);
      }).catch(error => {
        setError(error.message);
      });
    });
  };

  const clearError = () => {
    setError(null);
    isLoading(false);
  }

  return (
    <div className="App">

      {error && <ErrorModel onclose={clearError}>{error}</ErrorModel>}

      <IngredientForm onAddIngrediants={addIngrediantsHandler}  loaidng={isLoading} />

      <section>
        <Search onLoadIngrediants={filteredIngrediantHandler} />
        
        <IngrediantsList ingredients={userIngrediants} onRemoveItem={(Iid) => {removeIngrediantsHandler(Iid)}} />
      </section>
    </div>
  );
}

export default Ingredients;
