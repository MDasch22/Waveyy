const SEARCH_ALL_BEACHES = 'search/searchAllBeaches'

export const actionSearchAllBeaches = (beaches) => {
  return {
    type: SEARCH_ALL_BEACHES,
    beaches
  }
}

export const thunkSearchAllBeaches = () => async dispatch => {
  const response = await fetch('/api/beaches/')

  if(response.ok) {
    const data = await response.json()
    dispatch(actionSearchAllBeaches(data))
    return data
  }
}


const initialState = {};

const searchBarReducer = (state = initialState, action) => {
  let newState = {...state}
  switch(action.type){
    case SEARCH_ALL_BEACHES:
      newState = {};
      action.beaches.forEach(beach => {
        newState[beach.id] = beach;
      })
        return newState

    default:
      return state;
  }
}

export default searchBarReducer
