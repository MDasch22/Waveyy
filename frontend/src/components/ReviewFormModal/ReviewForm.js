import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkCreateReview } from "../../store/reviews";



export default function ReviewForm(props) {
  const { beachId } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [rating, setRating] = useState(1)
  const [comment, setComment] = useState("")
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if(!comment) errors.push("Pleae provide your thoughts on this beach!")
    if(comment.length < 19) errors.push("Review must be at least 20 characters!")
    setValidationErrors(errors);
  },[comment])



const handleSubmit = (e) => {
  e.preventDefault();

  setHasSubmitted(true);

  if (validationErrors.length) return alert("Cannot Submit this Edit");

  const newReview = {
    userId: sessionUser.id,
    beachId: beachId,
    rating,
    comment
  }

  dispatch(thunkCreateReview( beachId, newReview))

  setRating(1);
  setComment('');
  props.setTrigger(false)
}

  return (
    <>
      <section className="reviewForm">
        <h1>Create a review </h1>
        <form
          className="reviewForm"
          onSubmit={handleSubmit}
        >
          {hasSubmitted && validationErrors.length > 0 && (
            <div>
              Lets fix these up before you're done! 👍:
              <ul>
                {validationErrors.map((error) => (
                  <ul key={error}>
                    <i className="fas fa-spinner fa-pulse"></i>
                    {error}
                  </ul>
                ))}
              </ul>
            </div>
          )}
          <label>Rating: </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option disabled={true}>---select one---</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label>Leave your thoughts: </label>
          <textarea
            placeholder="start typing here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Submit your review</button>
        </form>
      </section>
    </>
  )
}
