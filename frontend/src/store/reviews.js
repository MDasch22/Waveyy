import { csrfFetch } from './csrf'

//--------------DEFINE TYPES-----------------//
  //GET ALL REVIEWS
  const GET_REVIEWS = 'reviews/getReviews'

  // CREATE REVIEW
  const CREATE_REVIEWS = 'reviews/createReviews'

  // DELETE REVIEW
  const DELETE_REVIEW = 'reviews/deleteReview'

//--------------ACTION CREATOR-----------------//

  //GET ALL REVIEWS
const actionGetReviews = (reviews) => {
  return {
     type: GET_REVIEWS,
     reviews
   }
 }

 // CREATE REVIEW
const actionCreateReview = (review) => {
  return {
     type: CREATE_REVIEWS,
     review
   }
 }

 // DELETE REVIEW
const actionDeleteReviews = (reviewId) => {
  return {
     type: DELETE_REVIEW,
     reviewId
   }
 }


//--------------  THUNK  -----------------//

export const thunkGetAllReviews = (beachId) => async dispatch => {
  const response = await csrfFetch(`/api/beaches/${beachId}/reviews`);
  if(response.ok) {
    const data = await response.json();
    dispatch(actionGetReviews(data));
    return response;
  }
  return await response.json()
};

export const thunkCreateReview = ( beachId, review) => async dispatch => {
  const response = await csrfFetch(`/api/beaches/${beachId}/reviews`, {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(review),
  });
  if(response.ok) {
    const data = await response.json();
    dispatch(actionCreateReview(data));
    return data;
  }
};

export const thunkDeleteReview = (reviewId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if(response.ok) {
    const deletedBeach = await response.json();
    dispatch(actionDeleteReviews(reviewId));
    return deletedBeach;
  }
};



//--------------REDUCER-----------------//

const reviews = (state = {}, action) => {

  let newState = {...state}

  switch(action.type){
    case GET_REVIEWS:
      newState = {}
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState

    case CREATE_REVIEWS:
      newState[action.review.id] = action.review
      return newState

    case DELETE_REVIEW:
      delete newState[action.reviewId]
      return newState
    default:
      return state;
  }
}

export default reviews;
