import { csrfFetch } from "./csrf"

//TODO DEFINE TYPES

  //GET SINGLE BEACH
const GET_BEACH = "beaches/getBeach";
    //GET ALL BEACH
const GET_BEACHS = 'beaches/getBeachs'
  //CREATE
const CREATE_BEACH = 'beaches/createBeach'
  //UPDATE BEACH
const UPDATE_BEACH = "beaches/updateBeach";
  //DELETE BEACH
const DELETE_BEACH = "beaches/deleteBeach";

// TODO ACTION CREATOR

  //GET SINGLE BEACH
const actionGetBeach = (beach) => {
  return {
    type: GET_BEACH,
    beach,
  };
};
  //GET SINGLE BEACH
const actionGetBeachs = (beaches) => {
 return {
    type: GET_BEACHS,
    beaches
  }
}

//CREATE
const actionCreateBeachs = (beach) => {
 return {
    type: CREATE_BEACH,
    beach
  }
}

  //UPDATE BEACH
const actionUpdateBeach = (beach) => {
  return {
    type: UPDATE_BEACH,
    beach,
  };
};

//DELETE BEACH
const actionDeleteBeach = (beachId) => {
  return {
    type: DELETE_BEACH,
    beachId,
  };
};


// TODO THUNKS

export const thunkGetBeach = (beachId) => async (dispatch) => {
  const response = await csrfFetch(`/api/beaches/${beachId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(actionGetBeach(data));
    return response
  }
};

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

export const thunkUpdateBeach = (beach) => async dispatch => {
  const response = await csrfFetch(`/api/beaches/${beach.id}`, {
    method: "PUT",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(beach),
  });
  if(response.ok) {
    const data = await response.json();
    dispatch(actionUpdateBeach(data));
    return data;
  }
};

export const thunkDeleteBeach = (beachId) => async dispatch => {
  const response = await csrfFetch(`/api/beaches/${beachId}`, {
    method: "DELETE",
  });
  if(response.ok) {
    const deletedBeach = await response.json();
    dispatch(actionDeleteBeach(beachId));
    return deletedBeach;
  }
};



//TODO REDUCER
const beaches = (state = {}, action) => {

  let newState = {...state}

  switch (action.type) {

    case GET_BEACH:
      newState = {}
      newState = {[action.beach.id]: action.beach};
      return newState;

    case GET_BEACHS:
      action.beaches.forEach(beach => {
        newState[beach.id] = beach;
      })
        return newState

    case CREATE_BEACH:
      newState[action.beach.id] = action.beach
      return newState

    case UPDATE_BEACH:
      newState[action.beach.id] = action.beach
      return newState

    case DELETE_BEACH:
      delete newState[action.beachId]
      return newState;

    default:
      return state;
  };
};


export default beaches;
