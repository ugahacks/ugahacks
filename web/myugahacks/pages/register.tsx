import React, { ReactElement } from "react";
import styles from "./register.module.css";

export default function Register(): ReactElement {
  return (
    <React.Fragment>
      <div className={styles.register}>
        <h1>Application Form for UGA Hacks 7</h1>
        <h2>Personal Information</h2>
        <form>
          <label>First Name</label>
          <input type="text" required></input>
          <label>Last Name</label>
          <input type="text" required></input>
          <label>Phone Number</label>
          <input type="text" required></input>
          <label>University</label>
          <input type="text" required></input>
          <label>Degree</label>
          <input type="text" required></input>
        </form>
      </div>
      <div className={styles.register}>
        <h2>UGA Hacks Information</h2>
        <form>
          <label>Is this your first hackathon?</label>
          <select>
            <option value="Yes">Yes!</option>
            <option value="No">No!</option>
          </select>
          <label>Have you attended previous UGA Hacks?</label>
          <select>
            <option value="Yes">Yes!</option>
            <option value="No">No</option>
          </select>
          <label>Would you like to apply for travel reimbursement?</label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
      <div className={styles.register}>
        <h2>Show us what you have built!</h2>
        <form>
          <label>Gitub (It is ok if you do not have one!)</label>
          <input type="text"></input>
          <label>Linkedin (It is ok if you do not have one!)</label>
          <input type="text"></input>
          <label>Personal Website (It is ok if you do not have one!)</label>
          <input type="text"></input>
          <h2>Private Information</h2>
          <label>Ethnicity?</label>
          <select>
            <option value="amIndian">American Indian or Alaskan Native</option>
            <option value="asian">Asian/Pacific Islander</option>
            <option value="aAm">Black or African American</option>
            <option value="hispanic">Hispanic</option>
            <option value="white">White or Caucasian</option>
            <option value="multiple">Multiple ethnicities/Other</option>
            <option value="noAnswer">Prefer not to answer</option>
          </select>
        </form>
      </div>
    </React.Fragment>
  );
}
