import { csrfFetch } from "./csrf"

const SAVED = 'likes/saved'
const UNSAVED = 'likes/unsaved'
const GET_ALL_SAVED = 'likes/getAllSaved'

// ACTION
const actionSaved = (like) => {
  return {
    type: SAVED,
    like
  }
}

const actionUnsaved = (likeId) => {
  return {
    type: UNSAVED,
    likeId
  }
}

const actionGetBeachSaved = (likes) => {
  return {
    type: GET_ALL_SAVED,
    likes
  }
}

//THUNK
export const thunkSaved = (saved) => async (dispatch) => {
  const response = await csrfFetch('/api/likes/', {
    method: 'POST',
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(saved),
  })

  if(response.ok){
    const data = await response.json();
    dispatch(actionSaved(data));
    return data
  }
}


export const thunkUnsaved = (likeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/likes/${likeId}`, {
    method: 'DELETE'
  })

  if(response.ok){
    const data = await response.json();
    dispatch(actionUnsaved(data));
    return data
  }
}

export const thunkGetBeachSaved = (beachId) => async(dispatch) => {
  const response = await csrfFetch(`/api/likes/beach/${beachId}`);

  if(response.ok){
    const data = await response.json()
    dispatch(actionGetBeachSaved(data))
    return data
  }
}



// REDUCER
const initialState = {}
const likesReducer = (state = initialState, action) => {
  let newState = {...state}

  switch(action.type) {
    case SAVED:
      return {
        ...state,
        [action.like.id] : action.like
      }

    case UNSAVED:
      delete newState[action.likeId]
      return newState

    case GET_ALL_SAVED:
      newState = {}
      action.likes.forEach(like => {
        newState[like.id] = like
      })
      return newState

    default:
      return state
  }
}


export default likesReducer
