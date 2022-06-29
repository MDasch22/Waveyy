import { csrfFetch } from "./csrf"

//TODO DEFINE TYPES

const GET_BEACHS = 'beaches/getBeachs'
  //CREATE
const CREATE_BEACH = 'beaches/createBeach'
  //UPDATE

// TODO ACTION CREATOR

const actionGetBeachs = (beaches) => {
 return {
    type: GET_BEACHS,
    beaches
  }
}
const actionCreateBeachs = (beach) => {
 return {
    type: CREATE_BEACH,
    beach
  }
}



// TODO THUNKS

export const thunkGetAllBeaches = () => async dispatch => {
  const response = await csrfFetch('/api/beaches');
  if(response.ok) {
    const data = await response.json();
    dispatch(actionGetBeachs(data));
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
    dispatch(actionCreateBeachs(data));
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

    default:
      return state;
  };
};


export default beaches;
