import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkCreateReview } from "../../store/reviews";
import { FaStar } from "react-icons/fa";
import "./reviewform.css";

export default function ReviewForm(props) {
  const { beachId } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if(rating === null) errors.push("Must provide a rating between 1-5!")
    if (!comment) errors.push("Please provide your thoughts on this beach!");
    if (comment.length < 19)
      errors.push("Review must be at least 20 characters!");
    setValidationErrors(errors);
  }, [comment, rating]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (validationErrors.length) return alert("Cannot Submit this Edit");

    const newReview = {
      userId: sessionUser.id,
      beachId: beachId,
      rating,
      comment,
    };

    dispatch(thunkCreateReview(beachId, newReview));

    setRating(1);
    setComment("");
    props.setTrigger(false);
  };

  return (
    <>
      <div className="reviewFormSection">
        <h1 className="reviewTitle">Create a review </h1>
        <form className="reviewForm" onSubmit={handleSubmit}>
          {hasSubmitted && validationErrors.length > 0 && (
            <div className="errorHandling">
              <div className="errorTitle">
                Lets fix these up before you're done! 👍:
              </div>
              <ul className="errors">
                {validationErrors.map((error) => (
                  <ul key={error} id="error">
                    <i className="fas fa-spinner fa-pulse"></i>
                    {error}
                  </ul>
                ))}
              </ul>
            </div>
          )}
          <label className="ratingLabel">Rating: </label>
          <div className="star-rating-container">
            {[...Array(5)].map((star, index) => {
              const ratingVal = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    id="radioBttn"
                    name="rating"
                    value={ratingVal}
                    onClick={() => setRating(ratingVal)}
                  />
                  <FaStar
                    className="star"
                    color={
                      ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    size={20}
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
            <label> {!rating ? 0 : rating} / 5</label>
          </div>
          <label className="ratingLabel">Leave your thoughts: </label>
          <textarea
            placeholder="Start typing here..."
            id="reviewText"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button id="reviewBttn" type="submit">
            Submit your review
          </button>
        </form>
      </div>
    </>
  );
}
