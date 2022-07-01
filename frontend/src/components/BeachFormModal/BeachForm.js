import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateBeach } from "../../store/beaches";

export default function BeachForm(props) {
  const dispatch = useDispatch();
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
    let testRegex = /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png|bmp)$/;
    let imageUrlReg = coverImg;
    if (!testRegex.test(imageUrlReg)) {
      errors.push('Must provide a proper imageUrl (e.g., .jpg, .gif, .png, .bmp)')}
    if (!title)
      errors.push("Please provide a valid beach title");
    if (title.length < 3)
      errors.push("Must be at least 3 characters");
    if (title.length > 50)
      errors.push("Title can have no more than 50 characters");
    if (!description)
      errors.push("Please provide a description of the beach");
    if (description.length < 5)
      errors.push("Description must be longer than 5 characters");
    if (!address || address.length < 3)
      errors.push("Please provide a valid address");
    if (address.length > 50)
      errors.push("Address can be no longer than 50 characters");
    if (!city || city.length < 1 || city.length > 20)
      errors.push("Please provide a valid city");
    if (city.length > 20)
      errors.push("City cant exceed 20 characters");
    if (!country || country.length < 3 || country.length > 20)
      errors.push("Please provide a valid country");
    let zipTestRegex = /\d{5}/
    let zipReg = zipCode;
    if(!zipTestRegex.test(zipReg)){
      errors.push("Please provide the ZIP Code")}
    setValidationErrors(errors)
  }, [coverImg, title, description, address, city, country, zipCode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    // console.log(validationErrors);
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
        <h1>Create your very own beach!</h1>
        <form className="createNewBeach" onSubmit={handleSubmit}>
          {hasSubmitted && validationErrors.length > 0 && (
            <div>
              The following errors were found 😡:
              <ul>
                {validationErrors.map((error) => (
                  <ul key={error}>
                    <i class="fas fa-spinner fa-spin"></i>
                  {error}
                  </ul>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="Image URL (e.g .jpg, .png)"
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
