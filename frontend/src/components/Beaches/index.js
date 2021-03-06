import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllBeaches } from '../../store/beaches';
import CreateBeachModal from '../BeachFormModal';

import './beaches.css'


export default function Beaches() {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])



  const beachArr = useSelector(state => Object.values(state.beaches))
  const sessionUser = useSelector(state => state.session.user);


  return (
    <>
      <h1 id="title"> Find your Beach </h1>
      <div id='beachCoverImg'>
        <img id='beachCovImg'src="https://i.postimg.cc/Kc0Jwx12/shelter-bnd-Xq-Ha-Qnw-U-unsplash.jpg" alt="beachCoverImg"></img>
      </div>
      {sessionUser &&
      <>
        <CreateBeachModal />
      </>
      }
      <div className='beachCard'>
        {beachArr.map(beach => {
          return (
            <Link to={`/beaches/${beach.id}`} id="beachLink" key={beach.id}>
              <div key={beach.id} className='beachContainer'>
                <img src={beach.coverImg} alt="coverImg" id="beachImg"></img>
                <h3 id="beachContentTitle">{beach.title}</h3>
                <p>{beach.city} {beach.country}</p>
              </div>
            </Link>
            )
          })
        }
      </div>
    </>
  )
}
