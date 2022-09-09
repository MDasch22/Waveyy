import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { thunkGetAllBeaches } from '../../store/beaches'

export default function ProfilePageBeaches({beach}) {

  const [showOverlay, setShowOverlay] = useState(false)


  return (
    <div id="session-beaches">
      <NavLink
        id="beach-link-pp"
        to={`/beaches/${beach.id}`}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}>
        <img
        className='beach-img-pp'
        src={beach.coverImg}
        style={{width:300, height:300}}
        />
        {showOverlay &&
          <div>
            <p className='beach-title-pp'>{beach.title}</p>
          </div>
        }
      </NavLink>
    </div>
  )
}
