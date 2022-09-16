import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import { FaStar } from "react-icons/fa";

import './beaches.css'


export default function Beaches() {
  const dispatch = useDispatch();



  useEffect(() => {
    window.scroll(0,0)
    dispatch(thunkGetAllBeaches())
  }, [dispatch])



  const beachArr = useSelector(state => Object.values(state.beaches))
  const sessionUser = useSelector(state => state.session.user);


  const shuffledBeaches = beachArr.sort(() => Math.random() - 0.5)

  const ratings = (beach) => {

    const ratings = beach.Reviews.map(review => review.rating)
    let sum = 0
    ratings.forEach(rating => sum += rating)
    let avgRating = sum /= ratings.length

    return (
      <>
        <p className='rating'> {beach.Reviews.length} reviews (Average Rating: {avgRating.toFixed(1)})</p>
      </>
      )
  }

  const toTop =() => {
    window.scroll(0, 0)
  }

  return (
    <div className='beaches-container'>
      <div className='header-beaches'>
        <h1 id="title"> Explore all Beaches </h1>
      </div>
      <div id='beachCoverImg'>
        <img id='beachCovImg'src="https://i.postimg.cc/Kc0Jwx12/shelter-bnd-Xq-Ha-Qnw-U-unsplash.jpg" alt="beachCoverImg"></img>
      </div>
      <div className='beachCard'>
        {shuffledBeaches.map(beach => {
          return (

            <Link to={`/beaches/${beach.id}`} id="beachLink" key={beach.id}>
              <div key={beach.id} className='beachContainer'>
                <div>
                  <img src={beach.coverImg}  alt="coverImg" id="beachImg"></img>
                </div>
                <div className='beachCard-content'>
                  <p id="beachContentTitle">{beach.title}</p>
                  {ratings(beach)}
                  <p>{beach.city} {beach.country}</p>
                  <p>{beach.description}</p>
                </div>
              </div>
            </Link>

            )
          })
        }
      </div>
      <div className='top'>
        <button className='toTop' onClick={toTop}>Back to the top</button>
      </div>
    </div>
  )
}
