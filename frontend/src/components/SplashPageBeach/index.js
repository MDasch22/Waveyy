import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { thunkGetAllReviews, thunkGetEveryReview } from '../../store/reviews'
import { FaStar } from "react-icons/fa";

import './splashBeach.css'

export default function SplashBeach({beach}) {


  return (
    <div>
      <NavLink id="splash-link" to={`/beaches/${beach.id}`}>
        <img className='splash-link-img' src={beach.coverImg} style={{width:300, height:300}}></img>
        <div className='splash-link__overlay splash-link__overlay--blur'>
          <p className='splash-link__title'><b>{beach.title}</b></p>
          <p className='splash-link__city'>{beach.city} </p>
        </div>
      </NavLink>
    </div>
  )
}
