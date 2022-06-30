import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkUpdateBeach } from "../../store/beaches";

export default function EditForm(props) {
  const { beachId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const beach = useSelector((state) => state.beaches[beachId]);
  const sessionUser = useSelector((state) => state.session.user);

  const [coverImg, setCoverImg] = useState(beach.coverImg);
  const [title, setTitle] = useState(beach.title);
  const [description, setDescription] = useState(beach.description);
  const [address, setAddress] = useState(beach.address);
  const [city, setCity] = useState(beach.city);
  const [country, setCountry] = useState(beach.country);
  const [zipCode, setZipCode] = useState(beach.zipCode);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!coverImg) errors.push("Please provide a valid beach image ");
    if (!title || title.length < 2)
      errors.push("Please Provide a valid beach title");
    if (!description || description.length < 5)
      errors.push("Please provide a description of the beach");
    if (!address || address.length < 3)
      errors.push("Please provide a valid address");
    if (!city || city.length < 1)
      errors.push("Please provide the city where the beach is located");
    if (!country || city.length < 3)
      errors.push("Please provide the country where the beach is located");
    if (!zipCode || zipCode.length < 4)
      errors.push("Please provide the ZIP Code");
    setValidationErrors(errors);
  }, [coverImg, title, description, address, city, country, zipCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    console.log(validationErrors);
    if (validationErrors.length) return alert("Cannot Submit this Edit");

    const newBeach = {
      ...beach,
      coverImg,
      ownerId: sessionUser.id,
      title,
      description,
      address,
      city,
      country,
      zipCode,
    };

    const updatedBeach = await dispatch(thunkUpdateBeach(newBeach));

    if (updatedBeach) {
      reset();
    }
  };
  const reset = () => {
    setCoverImg("");
    setTitle("");
    setDescription("");
    setAddress("");
    setCity("");
    setCountry("");
    setZipCode("");
    props.setTrigger(false);
  };

  return (
    <>
      <section className="beachForm">
        <h1>Editing {beach.title}</h1>
        <form className="createNewBeach" onSubmit={handleSubmit}>
          {hasSubmitted && validationErrors.length > 0 && (
            <div>
              Wow there! Fix these up before you go 😉:
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="Beach Image URL"
            value={coverImg}
            onChange={(e) => setCoverImg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description of beach 🌊"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="ZipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button type="submit">Finish Editing</button>
        </form>
      </section>
    </>
  );
}
