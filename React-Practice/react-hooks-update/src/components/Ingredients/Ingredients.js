import React, { useState, useEffect, useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngrediantsList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';

const ingrediantsReducer = (currentIngrediants, action) => {
  switch(action.type) {
    case 'SET':
      return action.ingrediants;
    case 'ADD':
      return [...currentIngrediants, action.ingrediant]
    case 'DELETE':
      return currentIngrediants.filter(ing => ing.id !== action.id);
    default:
      throw new Error('should not get there');
  };
};



function Ingredients() {

  const[userIngrediants, dispatch] = useReducer(ingrediantsReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIndentifier, clear} = useHttp();
  

  useEffect(() => {
    if(!isLoading && !error && reqIndentifier === 'REMOVE_INGREDIANT'){
      dispatch({type: 'DELETE', id: reqExtra});
    }else if (!isLoading && !error && reqIndentifier === 'ADD_INGREDIANT'){
      dispatch({
        type: 'ADD',
       ingrediant: {id: data.name, ...reqExtra}});
    }
   
  }, [data, reqExtra, reqIndentifier, isLoading, error])

  const filteredIngrediantHandler = useCallback( (filteredIngrediants) => {
    dispatch({type: 'SET', ingrediants: filteredIngrediants});
  }, []);

  const addIngrediantsHandler = useCallback ((ingrediant) => {

    sendRequest('https://react-hooks-update-51a02-default-rtdb.firebaseio.com/ingrediants.json',
     'POST',
      JSON.stringify(ingrediant),
      ingrediant,
      'ADD_INGREDIANT');
  }, [sendRequest]);

  const removeIngrediantsHandler = useCallback((ingrediantId) => {
    sendRequest(`https://react-hooks-update-51a02-default-rtdb.firebaseio.com/ingrediants/${ingrediantId}.json`,
     'DELETE',
      null,
      ingrediantId,
      'REMOVE_INGREDIANT' );
    
  }, [sendRequest]);

  const clearError = useCallback(() => {
   clear();
  }, []);

  const ingrediantsList = useMemo(() => {
    return <IngrediantsList ingredients={userIngrediants} onRemoveItem={(Iid) => {removeIngrediantsHandler(Iid)}} />
  }, [userIngrediants, removeIngrediantsHandler]);

  return (
    <div className="App">

     {error && (<ErrorModal onClose={clear}>{error}</ErrorModal>) }

      <IngredientForm onAddIngrediants={addIngrediantsHandler}  loading={isLoading} />

      <section>
        <Search onLoadIngrediants={filteredIngrediantHandler} />
        {ingrediantsList}
      </section>
    </div>
  );
}

export default Ingredients;
