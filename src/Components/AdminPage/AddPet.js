import React from "react";
import validate from "../../Components/AdminPage/ValidateAdminInfo";
import useForm from "../../Components/AdminPage/useFormAdmin";
import "../pages/Form";

const FormAdmin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form
        action=""
        method="post"
        enctype="multipart/form-data"
        className="form"
      >
        <div className="form-inputs">
          <label className="form-label">Type</label>
          <input
            className="form-input"
            type="text"
            name="Type"
            placeholder="Enter your type of pet"
            value={values.Type}
            onChange={handleChange}
          />
          {errors.Type && <p>{errors.Type}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="Name"
            placeholder="Enter name of pet"
            value={values.Name}
            onChange={handleChange}
          />
          {errors.Name && <p>{errors.Name}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Adaption Status</label>
          <input
            className="form-input"
            type="text"
            name="Status"
            placeholder="Enter adaption status"
            value={values.Status}
            onChange={handleChange}
          />
          {errors.Status && <p>{errors.Status}</p>}
        </div>
        <label className="form-label" for="avatar">
          Select image:
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        ></input>
        <div className="form-inputs">
          <label className="form-label">Height</label>
          <input
            className="form-input"
            type="number"
            name="Height"
            placeholder="Enter Hight"
            value={values.Height}
            onChange={handleChange}
          />
          {errors.Height && <p>{errors.Height}</p>}
          <label className="form-label">Weight</label>
          <input
            className="form-input"
            type="number"
            name="Weight"
            placeholder="Enter adaption status"
            value={values.Weight}
            onChange={handleChange}
          />
          {errors.Weight && <p>{errors.Weight}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Color</label>
          <input
            className="form-input"
            type="text"
            name="Color"
            placeholder="Enter color"
            value={values.Color}
            onChange={handleChange}
          />
          {errors.Color && <p>{errors.Color}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Bio</label>
          <br></br>
          <textarea
            name="Bio"
            rows="10"
            cols="80"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-inputs">
          <label className="form-label">Hypoallargenic ?</label>
          <input
            type="radio"
            id="yes"
            name="Hypoallargenic"
            value="yes"
            className="form-input"
          ></input>
          <label for="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="Hypoallargenic"
            value="no"
            className="form-input"
          ></input>
          <label for="no">No</label>
          {errors.Hypoallargenic && <p>{errors.Hypoallargenic}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Dietary Restriction</label>
          <input
            className="form-input"
            type="text"
            name="DietaryRestrictions"
            placeholder="Ristrictions"
            value={values.DietaryRestrictions}
            onChange={handleChange}
          />
          {errors.DietaryRestrictions && <p>{errors.DietaryRestrictions}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Breed of animal</label>
          <input
            className="form-input"
            type="text"
            name="Breed"
            placeholder="Breed of animal"
            value={values.Breed}
            onChange={handleChange}
          />
          {errors.Breed && <p>{errors.Breed}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default FormAdmin;
