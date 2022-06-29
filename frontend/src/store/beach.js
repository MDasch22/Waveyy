import { csrfFetch } from "./csrf";

//TYPES
const GET_BEACH = "beach/getBeach";
const UPDATE_BEACH = "beach/getBeach";
const DELETE_BEACH = "beach/getBeach";

//ACTION CREATOR
const actionGetBeach = (beach) => {
  return {
    type: GET_BEACH,
    beach,
  };
};
const actionUpdateBeach = (beach) => {
  return {
    type: UPDATE_BEACH,
    beach,
  };
};
const actionDeleteBeach = (beachId) => {
  return {
    type: DELETE_BEACH,
    beachId,
  };
};

//THUNKS

export const thunkGetBeach = (beachId) => async (dispatch) => {
  const responce = await csrfFetch(`/api/beaches/${beachId}`);

  if (responce.ok) {
    const data = await responce.json();
    dispatch(actionGetBeach(data));
  }
};

// export const thunkDeleteBeach = (beachId) => async dispatch => {
//   const response = await csrfFetch('/api/beaches', {
//     method: "DELETE",
//   });
//   if(response.ok) {

//     dispatch(actionDeleteBeach(beachId));

//   }
// };



//Reducer
const singleBeach = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case GET_BEACH:
      newState[action.beach.id] = action.beach;
      return newState;

    case DELETE_BEACH:
      newState = {...state}
      delete newState[action.beachId]
    default:
      return state;
  }
};

export default singleBeach;
