import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { thunkCreateBeach } from '../../store/beaches';


export default function EditForm(props) {
  const { beachId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionBeach = useSelector(state => state.beach);
  const theBeach = sessionBeach[beachId]

  const [coverImg, setCoverImg] = useState(theBeach.coverImg);
  const [title , setTitle] = useState(theBeach.title);
  const [description , setDescription] = useState(theBeach.description);
  const [address , setAddress] = useState(theBeach.address);
  const [city , setCity] = useState(theBeach.city);
  const [country , setCountry] = useState(theBeach.country);
  const [zipCode , setZipCode] = useState(theBeach.zipCode);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newBeach = {
  //     coverImg,
  //     ownerId: sessionUser.id,
  //     title,
  //     description,
  //     address,
  //     city,
  //     country,
  //     zipCode,
  //   }

  //   if(newBeach) {
  //     dispatch(thunkCreateBeach(newBeach))
  //   }
  //   setCoverImg('');
  //   setTitle('')
  //   setDescription('')
  //   setAddress('')
  //   setCity('')
  //   setCountry('')
  //   setZipCode('')
  //   props.setTrigger(false)
  // }

  return (
    <>
      <section className="beachForm">
        <h1>Editing {title}</h1>
        <form
        className='createNewBeach'
        // onSubmit={handleSubmit}
        // hidden={formView}
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
          <button type='submit'>Finish Editing</button>
        </form>
      </section>
    </>
  )
}
