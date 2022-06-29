import { csrfFetch } from "./csrf";

// TYPES
const GET_REVIEWS = 'reviews/getReview'

//ACTION CREATOR
const actionGetReviews = (reviews) => {
  return {
     type: GET_REVIEWS,
     reviews
   }
 }

//THUNK
export const thunkGetAllReviews = () => async dispatch => {
  const response = await csrfFetch('/api/beaches');
  if(response.ok) {
    const data = await response.json();
    dispatch(actionGetReviews(data));
    return response;
  }
  return await response.json()
};

//REDUCER

const reviews = (state = {} , action) => {
  let newState = {...state}

  switch(action.type){
    case GET_REVIEWS:
      action.reviews.forEach(review => {
        newState[review.id] = review;
      })
        return newState

        default:
          return state
  }
}

export default reviews
