import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetAllBeaches } from '../../store/beaches';
import './beaches.css'


export default function Beaches() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(thunkGetAllBeaches())
  }, [dispatch])

  const beachArr = useSelector(state => Object.values(state.beaches))


  return (
    <>
      <img id='beachCoverImg'src="https://cdn.wallpapersafari.com/10/9/VHfU1r.gif"></img>
      <h1 id="title"> 🌴 Find your Beach 🌴</h1>
        <button className='createBeachBttn'>
          +
        </button>
      <div className='beachCard'>
        {beachArr.map(beach => {
          return (
            <div className='beachContainer'>
              <a href={`/api/beaches/${beach.id}`} key={beach.id}>
                <img src={beach.coverImg} alt="coverImg" id="beachImg"></img>
                <h3 id="beachContent">{beach.title}</h3>
              </a>
              <p id="beachContent">{beach.city} {beach.country}</p>
            </div>
            )
          })
        }
      </div>
    </>
  )
}
