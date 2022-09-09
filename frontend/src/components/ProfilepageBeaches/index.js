import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'


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
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
        />
        {showOverlay &&
          <div onMouseEnter={() => setShowOverlay(true)}>
            <p className='beach-title-pp'>{beach.title}</p>
          </div>
        }
      </NavLink>
    </div>
  )
}
