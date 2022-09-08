import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { thunkGetAllReviews, thunkDeleteReview } from '../../store/reviews';
import LoginFormModal from '../LoginFormModal';
import CreateReviewModal from '../ReviewFormModal';
import { FaStar } from "react-icons/fa";
import './reviews.css'

export default function Reviews() {
  const dispatch = useDispatch();
  const { beachId } = useParams();

  const reviews = useSelector(state => Object.values(state.reviews))
  const sessionUser = useSelector(state => state.session.user);

  const rating = () => {
    const ratings = reviews.map(review => review.rating)
    let avgRating = 0
    ratings.forEach(rating => avgRating += rating)
    const average = avgRating /= ratings.length
    return (
        <p> Rating: {average.toFixed(1)} <FaStar color="#ffc107" /></p>
      )
  }


  useEffect(() => {
    dispatch(thunkGetAllReviews(beachId))
  },[dispatch, beachId])


  if(!reviews){
    return null
  }

  return (
    <>
      <h1>Reviews</h1>
      <div>
       {rating()}
      </div>
      {!reviews.length &&
        <>
          <h2> Doest seem to be any reviews yet... why don't you start us off!</h2>
        </>
      }
      {sessionUser &&
        <CreateReviewModal />
      }
      {!sessionUser &&
      <div className='notLoggedIn'>
        <label>
          Want to leave a review?
        </label>
        <LoginFormModal />
      </div>
      }
      {reviews.length > 0 &&
        <>
          <table className='reviews-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Review</th>
              </tr>
            {reviews.map(review => {
              return (
                <tr key={review.id}>
                  <td className='reviewData'>{review.User.username}</td>
                  <td className='star-rating'>{review.rating} <FaStar color="#ffc107" /></td>
                  <td className='reviewData'>{review.comment}</td>
                  <td>
                    { sessionUser?.id === review.userId &&
                      (
                        <>

                            <button
                              id="deleteReview"
                              onClick={() => dispatch(thunkDeleteReview(review.id))}
                              className='deleteBttn'
                              >
                              <i className="fa-solid fa-trash"></i>
                            </button>

                        </>
                      )
                    }
                  </td>
                  </tr>
                )
              })}
            </thead>
          </table>
        </>
      }
    </>
  )
}
