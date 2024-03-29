import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { thunkGetBeach, thunkDeleteBeach } from '../../store/beaches';
import EditFormModal from '../EditBeachModal';
import Reviews from '../Reviews';
import SaveButton from '../SaveButton';
import './beach.css'


export default function BeachId() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { beachId } = useParams();


  const beach = useSelector(state=> state.beaches[beachId]);

  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    window.scroll(0,0)
    dispatch(thunkGetBeach(beachId))
  },[dispatch, beachId])

  const onDelete = async(e) => {
    e.preventDefault()
    await dispatch(thunkDeleteBeach(beachId))
    history.push('/beaches')
  }

  if(!beach){
    return null
  }

  if(!sessionUser) {
    return (
      <>
        <div className='beachDetails'>
          <img src={beach.coverImg} id='beachDetailImg' alt='beachImg'></img>
          <h1>{beach.title}</h1>
          <h2>{beach.city} {beach?.country}</h2>
          <p className='beach-description'>{beach.description}</p>

        </div>
        <div className='reviews'>
          <Reviews />
        </div>
      </>
      )
  }

  return (
    <>
      <div className='beachDetails'>
        <>
          <img src={beach.coverImg} id='beachDetailImg' alt='beachImg'></img>
          <h1>{beach.title}</h1>
          <h2>{beach.city} {beach?.country}</h2>
          <p className='beach-description'>{beach.description}</p>
        </>
        {sessionUser.id === beach.ownerId &&
          (
            <div id="edit-delete-selection">
              <EditFormModal />
              <button
              onClick={onDelete}
              className='deleteBttn'
              >

                <i className="fa-solid fa-trash fa-lg"></i>
              </button>
            </div>
          )
        }
        <div>
          <SaveButton beachId={beachId} />
        </div>
      </div>
      <div className='reviews'>
        <Reviews />
      </div>
    </>
  )
}
