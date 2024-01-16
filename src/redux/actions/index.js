export const addToFavouriteAction = (companyName) => {
    return {
      type: 'ADD_TO_FAVOURITE',
      payload: companyName,
    };
  };
  
  export const removeFromFavouriteAction = (company_name) => {
    return {
      type: 'REMOVE_FROM_FAVOURITE',
      payload: company_name,
    };
  };
  
  export const setSearchResultsAction = (i) => {
    return {
      type: 'SET_SEARCH_RESULTS',
      payload: i,
    };
  };
  