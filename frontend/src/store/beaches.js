import { csrfFetch } from "./csrf"

//TODO DEFINE TYPES
  //READ
const GET_BEACHS = 'beaches/getBeach'
  //CREATE
const CREATE_BEACH = 'beaches/createBeach'
  //UPDATE
const UPDATE_BEACH = 'beaches/createBeach'
  //DELETE
const DELETE_BEACH = 'beaches/deleteBeach'

// TODO ACTION CREATOR
const actionGetBeach = (beaches) => {
 return {
    type: GET_BEACHS,
    beaches
  }
}
const actionCreateBeach = (beach) => {
 return {
    type: CREATE_BEACH,
    beach
  }
}
const actionUpdateBeach = (beach) => {
 return {
    type: UPDATE_BEACH,
    beach
  }
}
const actionDeleteBeach = (beachId) => {
 return {
    type: DELETE_BEACH,
    beachId
  }
}


// TODO THUNKS

export const thunkGetAllBeaches = () => async dispatch => {
  const response = await csrfFetch('/api/beaches');
  if(response.ok) {
    const data = await response.json();
    dispatch(actionGetBeach(data));
    return response;
  }
  return await response.json()
};

export const thunkCreateBeach = (beach) => async dispatch => {
  const response = await csrfFetch('/api/beaches', {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(beach),
  });
  if(response.ok) {
    const data = await response.json();
    dispatch(actionCreateBeach(data));
    return response;
  }
};


//TODO REDUCER
const beaches = (state = {}, action) => {

  let newState = {...state}

  switch (action.type) {
    case GET_BEACHS:
    action.beaches.forEach(beach => {
      newState[beach.id] = beach;
    })
      return newState

    case CREATE_BEACH:
      newState[action.beach.id] = action.beach
      return newState
    case DELETE_BEACH:
      delete newState[action.beachId]
    default:
      return state;
  };
};


export default beaches;
