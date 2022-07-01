import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import './home.css'

export default function Home() {
  const dispatch = useDispatch();

  const beachArr = useSelector(state => Object.values(state.beaches))
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])


  return (
    <>
      <h1 className='homeTitle'>Welcome to Waveyy</h1>
      <div className='homeCard'>
        {beachArr.map(beach => {
          return (
              <div className="homeBeachCard">
                <Link to={`/beaches/${beach.id}`} id='cardLink'>
                  <div key={beach.id} className='homeContainer'>
                    <img src={beach.coverImg} alt="coverImg" id="beachHomeImg"></img>
                    <div id="beachDetails">
                      <h3 id="beachContent">{beach.title}</h3>
                      <p id="beachLocation">{beach.city} {beach.country}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>

    </>
  )
}
