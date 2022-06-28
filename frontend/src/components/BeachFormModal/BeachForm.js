import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { thunkCreateBeach } from '../../store/beaches';


export default function BeachForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const [formView, setFormView] = useState(false)

  const [coverImg, setCoverImg] = useState('');
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [address , setAddress] = useState('');
  const [city , setCity] = useState('');
  const [country , setCountry] = useState('');
  const [zipCode , setZipCode] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeach = {
      coverImg,
      ownerId: sessionUser.id,
      title,
      description,
      address,
      city,
      country,
      zipCode,
    }

    if(newBeach) {
      dispatch(thunkCreateBeach(newBeach))
    }
    setCoverImg('');
    setTitle('')
    setDescription('')
    setAddress('')
    setCity('')
    setCountry('')
    setZipCode('')
    props.setTrigger(false)
  }

  return (
    <>
      <section className="beachForm">
        <form
        className='createNewBeach'
        onSubmit={handleSubmit}
        hidden={formView}
        >
          <input
            type="text"
            placeholder='Beach Image URL'
            value={coverImg}
            onChange={(e) => setCoverImg(e.target.value)}
          />
          <input
            type="text"
            placeholder='Title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Description of beach 🌊'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder='ZipCode'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button type='submit'>Create New Beach</button>
        </form>
      </section>
    </>
  )
}
