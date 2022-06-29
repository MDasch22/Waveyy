// import { csrfFetch } from "./csrf";

// //TYPES
// const GET_BEACH = "beach/getBeach";

// const UPDATE_BEACH = "beach/updateBeach";

// const DELETE_BEACH = "beach/deleteBeach";

// //ACTION CREATOR
// const actionGetBeach = (beach) => {
//   return {
//     type: GET_BEACH,
//     beach,
//   };
// };
// const actionUpdateBeach = (beach) => {
//   return {
//     type: UPDATE_BEACH,
//     beach,
//   };
// };
// const actionDeleteBeach = (beachId) => {
//   return {
//     type: DELETE_BEACH,
//     beachId,
//   };
// };

// //THUNKS

// export const thunkGetBeach = (beachId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/beaches/${beachId}`);

//   if (response.ok) {
//     const data = await response.json();
//     console.log("this is the data on render", data)
//     dispatch(actionGetBeach(data));
//     return response
//   }
// };

// export const thunkDeleteBeach = (beachId) => async dispatch => {
//   const response = await csrfFetch(`/api/beaches/${beachId}`, {
//     method: "DELETE",
//   });
//   if(response.ok) {
//     const deletedBeach = await response.json();
//     dispatch(actionDeleteBeach(beachId));
//     return deletedBeach;
//   }
// };



// //Reducer
// const singleBeach = (state = {}, action) => {
//   let newState;

//   switch (action.type) {
//     case GET_BEACH:
//       newState = {}
//       newState = {[action.beach.id]: action.beach};
//       return newState;

//     case DELETE_BEACH:
//       newState = {...state}
//       delete newState[action.beachId]
//       return newState;

//     default:
//       return state;
//   }
// };

// export default singleBeach;
