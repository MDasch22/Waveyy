import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import CreateBeachModal from '../BeachFormModal';
import BeachSlider from '../BeachSlider';
import { SliderData } from '../BeachSlider/sliderData'
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
        {!sessionUser ?
          <>
            <h2 className='noSessionHeader'> Find your Beach </h2>
            <div className='homeCard'>
              <div className='beach-cards-container'>
              {beachArr.slice(0, 6).map(beach => {
                return (
                    <Link to={`/beaches/${beach.id}`} id='cardLink'  key={beach.id}>
                      <div className="homeBeachCard" key={beach.id}>
                        <div key={beach.id} className='homeContainer'>
                          <img src={beach.coverImg} alt="coverImg" id="beachHomeImg"></img>
                          <div id="beachDetails">
                            <h3 id="beachContent">{beach.title}</h3>
                            <p id="beachLocation">{beach.city} {beach.country}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
          :
          <>
            <div className='homeCard'>
              <div className='sessionUser-home'>
                <h2 className='homeHeader'> Checkout these beaches posted by other users </h2>
              </div>
              <div className='beach-cards-container'>
                {noSession.map(beach => {
                return (
                    <Link to={`/beaches/${beach.id}`} id='cardLink'  key={beach.id}>
                      <div className="homeBeachCard" key={beach.id}>
                        <div key={beach.id} className='homeContainer'>
                          <img src={beach.coverImg} alt="coverImg" id="beachHomeImg"></img>
                          <div id="beachDetails">
                            <h3 id="beachContent">{beach.title}</h3>
                            <p id="beachLocation">{beach.city} {beach.country}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        }
      </div>
  )
}
