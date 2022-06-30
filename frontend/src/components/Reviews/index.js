import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, NavLink, Link } from 'react-router-dom'
import { thunkGetAllReviews, thunkDeleteReview } from '../../store/reviews';
import CreateReviewModal from '../ReviewFormModal';

export default function Reviews() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { beachId } = useParams();

  const reviews = useSelector(state => Object.values(state.reviews))
  const sessionUser = useSelector(state => state.session.user);


  useEffect(() => {
    dispatch(thunkGetAllReviews(beachId))
  },[dispatch, beachId])


  if(!reviews){
    return null
  }

  return (
    <>
      <h1>Reviews</h1>
      <CreateReviewModal />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          {reviews.map(review => {
            return (
              <tr key={review.id}>
                <td>{review.User.username}</td>
                <td>{review.rating}⭐</td>
                <td>{review.comment}</td>
                { sessionUser?.id === review.userId &&
                  (
                    <>
                      <td>
                        <button
                          onClick={() => dispatch(thunkDeleteReview(review.id))}
                        >Delete
                        </button>
                      </td>
                    </>
                  )
                }
              </tr>
              )
            })}
          </thead>
        </table>
    </>
  )
}
