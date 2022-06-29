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
      <img id='beachCoverImg'src="https://cdn.wallpapersafari.com/10/9/VHfU1r.gif"></img>
      <h1 id="title">🌴 Find your Beach 🌴</h1>
      {sessionUser &&
      <>
        <CreateBeachModal />
      </>
      }
      <div className='beachCard'>
        {beachArr.map(beach => {
          return (
            <div key={beach.id} className='beachContainer'>
              <Link to={`/beaches/${beach.id}`}>
                <img src={beach.coverImg} alt="coverImg" id="beachImg"></img>
                <h3 id="beachContent">{beach.title}</h3>
              </Link>
              <p>{beach.city} {beach.country}</p>
            </div>
            )
          })
        }
      </div>
    </>
  )
}
