import React, { ReactElement, useState } from "react";

import styles from "./register.module.css";

export default function Register(): ReactElement {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    university: "",
    degree: "",
    github: "",
    linkedin: "",
    website: "",
    ethnicity: "",
    firstHack: "",
    firstUGAHack: "",
    reimburse: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
    };
  };

  return (
    <React.Fragment>
      <div className={styles.register}>
        <h1>Application Form for UGA Hacks 7</h1>
        <h2>Personal Information</h2>
        <form>
          <label>First Name</label>
          <input
            value={values.firstName}
            type="text"
            required
            name="firstName"
            onChange={handleChange}
          ></input>
          <label>Last Name</label>
          <input
            value={values.lastName}
            type="text"
            required
            name="lastName"
            onChange={handleChange}
          ></input>
          <label>Phone Number</label>
          <input
            value={values.phoneNumber}
            type="text"
            required
            name="phoneNumber"
            onChange={handleChange}
          ></input>
          <label>University</label>
          <input
            value={values.university}
            type="text"
            required
            name="university"
            onChange={handleChange}
          ></input>
          <label>Degree</label>
          <input
            value={values.degree}
            type="text"
            required
            name="degree"
            onChange={handleChange}
          ></input>

          <h2>UGA Hacks Information</h2>

          <label>Is this your first hackathon?</label>
          <select value={values.firstHack} name="firstHack" onChange={handleChange}>
            <option value="Yes">Yes!</option>
            <option value="No">No!</option>
          </select>
          <label>Have you attended previous UGA Hacks?</label>
          <select value={values.firstUGAHack} name="firstUGAHack" onChange={handleChange}>
            <option value="Yes">Yes!</option>
            <option value="No">No</option>
          </select>
          <label>Would you like to apply for travel reimbursement?</label>
          <select value={values.reimburse} name="reimburse" onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <h2>Show us what you have built!</h2>

          <label>Gitub (It is ok if you do not have one!)</label>
          <input
            value={values.github}
            type="text"
            name="github"
            onChange={handleChange}
          ></input>
          <label>Linkedin (It is ok if you do not have one!)</label>
          <input
            value={values.linkedin}
            type="text"
            name="linkedin"
            onChange={handleChange}
          ></input>
          <label>Personal Website (It is ok if you do not have one!)</label>
          <input
            value={values.website}
            type="text"
            name="website"
            onChange={handleChange}
          ></input>
          <h2>Private Information</h2>
          <label>Ethnicity?</label>
          <select value={values.ethnicity} name="ethnicity" onChange={handleChange}>
            <option value="amIndian">American Indian or Alaskan Native</option>
            <option value="asian">Asian/Pacific Islander</option>
            <option value="aAm">Black or African American</option>
            <option value="hispanic">Hispanic</option>
            <option value="white">White or Caucasian</option>
            <option value="multiple">Multiple ethnicities/Other</option>
            <option value="noAnswer">Prefer not to answer</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}
