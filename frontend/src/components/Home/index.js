import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import BeachSlider from '../BeachSlider';
import { SliderData } from '../BeachSlider/sliderData'
import './home.css'

export default function Home() {
  const dispatch = useDispatch();

  const beachArr = useSelector(state => Object.values(state.beaches))

  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])


  return (
    <div className='homePage'>
      <h1 className='homeTitle'> Welcome to Waveyy </h1>
      <div className='slider-content'>
        <BeachSlider slides={SliderData}/>
      </div>
      <h2 className='homeHeader'> You might find these beaches interesting... </h2>
      <div className='homeCard'>
        {beachArr.map(beach => {
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
          })
        }
      </div>

    </div>
  )
}
