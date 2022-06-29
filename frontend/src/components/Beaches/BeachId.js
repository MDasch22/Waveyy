import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thunkGetBeach } from '../../store/beach';


export default function BeachId() {
  const dispatch = useDispatch();
  const { beachId } = useParams();

  useEffect( () => {
    dispatch(thunkGetBeach(beachId))
  },[dispatch])

  const beach = useSelector(state => state.beaches)

  const theBeach = beach[beachId]


  return (
    <>
      <img src={theBeach.coverImg}></img>
      <p>{theBeach.title}</p>

    </>
  )
}
