import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateBeach } from "../../store/beaches";

export default function BeachForm(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [coverImg, setCoverImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!coverImg) errors.push("Please provide a valid beach image ");
    if (!title || title.length < 2) errors.push("Please Provide a valid beach title");
    if (!description || description.length < 5) errors.push("Please provide a description of the beach");
    if (!address || address.length < 3)
      errors.push("Please provide a valid address");
    if (!city || city.length < 1)
      errors.push("Please provide the city where the beach is located");
    if (!country || city.length < 3)
      errors.push("Please provide the country where the beach is located");
    if (!zipCode || zipCode.length < 4) errors.push("Please provide the ZIP Code");
    setValidationErrors(errors);
  }, [coverImg, title, description, address, city, country, zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    console.log(validationErrors)
    if (validationErrors.length) return alert("Cannot Submit");

    const newBeach = {
      coverImg,
      ownerId: sessionUser.id,
      title,
      description,
      address,
      city,
      country,
      zipCode,
    };

    if (newBeach) {
      dispatch(thunkCreateBeach(newBeach));
    }

    setCoverImg("");
    setTitle("");
    setDescription("");
    setAddress("");
    setCity("");
    setCountry("");
    setZipCode("");
    setHasSubmitted(false);
    setValidationErrors([]);
    props.setTrigger(false);
  };

  return (
    <>
      <section className="beachForm">
        <h1>Fill out the form below to create your own beach! </h1>
        <form className="createNewBeach" onSubmit={handleSubmit}>
          {hasSubmitted && validationErrors.length > 0 && (
            <div>
              The following errors were found 😡:
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
          <button type="submit">Create New Beach</button>
        </form>
      </section>
    </>
  );
}
