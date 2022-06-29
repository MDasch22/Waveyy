import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, NavLink, Link } from 'react-router-dom'
import { thunkGetBeach, thunkDeleteBeach } from '../../store/beach';
import { thunkGetAllBeaches } from '../../store/beaches';
import EditFormModal from '../EditBeachModal';


export default function BeachId() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { beachId } = useParams();

  const beaches = useSelector(state => state.beaches)

  const beach = useSelector(state=> state.beach);

  const sessionUser = useSelector(state => state.session.user);

  const theBeach = beaches[beachId]

  useEffect(() => {
    dispatch(thunkGetBeach(beachId))
  },[dispatch])



  return (
    <>
      <img src={theBeach.coverImg}></img>
      <h1>{theBeach.title}</h1>
      <h2>{theBeach.city} {theBeach.country}</h2>
      <p>{theBeach.description}</p>
      {sessionUser.id === theBeach.ownerId &&
        (
          <>
            <EditFormModal />
            <button
            onClick={() => dispatch(thunkDeleteBeach(theBeach.id))}>
              Delete
            </button>
          </>
          )
      }
    </>
  )
}
