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
    if(ratings.length === 0) {
      return null
    }
    let avgRating = 0
    ratings.forEach(rating => avgRating += rating)
    const average = avgRating /= ratings.length
    return (
        <p className="avg-rating" style={{color: 'rgb(253, 231, 135)'}}> {average.toFixed(1)} <FaStar color="rgb(253, 231, 135)" /></p>
      )
  }


  useEffect(() => {
    dispatch(thunkGetAllReviews(beachId))
  },[dispatch, beachId])


  if(!reviews){
    return null
  }

  return (
    <div className='reviews-container'>
      <div id="review-header">
        <h1 style={{color:'white'}}>Reviews </h1>
        <div>
        {rating()}
        </div>
      </div>
      {!reviews.length &&
        <>
          <h2  style={{color:'white'}}> Doest seem to be any reviews yet... why don't you start us off!</h2>
        </>
      }
      {sessionUser &&
        <CreateReviewModal />
      }
      {!sessionUser &&
      <div className='notLoggedIn'>
        <label  style={{color:'white'}}>
          Want to leave a review?
        </label>
        <LoginFormModal />
      </div>
      }
      {reviews.length > 0 &&
        <>
          {reviews.reverse().map(review => {
            return (
              <div id="single-review-container" key={review.id}>
                <p className='reviewData-header'>{review.User.username}</p>
                <div className='rating-div'>
                  {review.rating === 1 && (
                      <>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                      </>
                      )}
                  {review.rating === 2 && (
                      <>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                      </>
                      )}
                  {review.rating === 3 && (
                      <>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="lightgray"/>
                          <FaStar color="lightgray"/>
                      </>
                      )}
                  {review.rating === 4 && (
                      <>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="lightgray"/>

                      </>
                      )}
                  {review.rating === 5 && (
                      <>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                          <FaStar color="rgb(253, 231, 135)"/>
                      </>
                      )}
                </div>
                <p className='reviewData'>{review.comment}</p>
                <div>
                  { sessionUser?.id === review.userId &&
                    (
                      <div className='delete-container'>
                          <div style={{opacity: 0}}>No</div>
                          <button
                            id="deleteReview"
                            onClick={() => dispatch(thunkDeleteReview(review.id))}
                            className='deleteBttn'
                            >
                            Delete
                          </button>

                      </div>
                    )
                  }
                </div>
              </div>
              )
            })}
        </>
      }
    </div>
  )
}
