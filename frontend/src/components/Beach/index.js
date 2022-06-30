import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, NavLink, Link } from 'react-router-dom'
import { thunkGetBeach, thunkDeleteBeach } from '../../store/beaches';
import EditFormModal from '../EditBeachModal';


export default function BeachId() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { beachId } = useParams();


  const beach = useSelector(state=> state.beaches[beachId]);

  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(thunkGetBeach(beachId))
  },[dispatch])

  const onDelete = async() => {
    await dispatch(thunkDeleteBeach(beachId))
    history.push('/beaches')
  }

  if(!beach){
    return null
  }

  if(!sessionUser) {
    return (
      <>
        <img src={beach.coverImg}></img>
        <h1>{beach.title}</h1>
        <h2>{beach.city} {beach?.country}</h2>
        <p>{beach.description}</p>
      </>
      )
  }

  return (
    <>
      <>
        <img src={beach.coverImg}></img>
        <h1>{beach.title}</h1>
        <h2>{beach.city} {beach?.country}</h2>
        <p>{beach.description}</p>
      </>
      {sessionUser.id === beach.ownerId &&
        (
          <>
            <EditFormModal />
            <button
            onClick={onDelete}>
            Delete
            </button>
          </>
        )
      }
    </>

  )
}
