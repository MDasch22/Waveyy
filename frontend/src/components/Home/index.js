import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import CreateBeachModal from '../BeachFormModal';
import BeachSlider from '../BeachSlider';
import { SliderData } from '../BeachSlider/sliderData'
import SplashBeach from '../SplashPageBeach';
import './home.css'

export default function Home() {
  const dispatch = useDispatch();

  const beachArr = useSelector(state => Object.values(state.beaches))
  const sessionUser = useSelector(state => state.session.user)


  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])

  const noSession = beachArr.filter(beach => beach.ownerId !== sessionUser?.id)


  return (
    <div className='homePage'>
      <div className='slider-content'>
        <BeachSlider slides={SliderData}/>
      </div>
      <div className='waveyy-intro'>
        <p className='welcome-intro'>Welcome to Waveyy</p>
      </div>
        {!sessionUser ?
          <>
            <p className='noSessionHeader'> Find your Beach </p>
            <div className='homeCard'>
              <div className='beach-cards-container'>
              {beachArr.slice(0, 6).map(beach => {
                return (
                  <SplashBeach beach={beach} />

                  )
                })}
              </div>
            </div>
          </>
          :
          <>
            <div className='homeCard'>
              <div className='sessionUser-home'>
                <p className='homeHeader'> Checkout these beaches posted by other users </p>
              </div>
              <div className='beach-cards-container'>
                {noSession.map(beach => {
                return (
                    <SplashBeach beach={beach} />
                  )
                })}
              </div>
            </div>
          </>
        }
      </div>
  )
}
