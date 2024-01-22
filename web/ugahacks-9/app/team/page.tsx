import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Team.module.css"; 

function Team() {
  return (
    <div>
      <Navbar />
      <div className="main">
      <Navbar />
      <div className={styles.ParentContainer}>
        <div className={styles.leadContainer}>
          {/* bani lead director here */}
          <h2 className={styles.heading}>Banibe Ebegbodi</h2>
          <h3 className={styles.heading}>Lead Director</h3>
        </div>
        <div className={styles.directorContainer}>
          <div className={styles.sponsorContainer}>
            {/* sponsors and director here */}
            <h3 className={styles.heading}>Siddhi Chitgopkar</h3>
            <h4 className={styles.heading}>Sponsorship Director</h4>
            <p>Jiya Patel</p>
            <p>Matthew Chambers</p>
            <p>Raegan Girdley</p>
            <p>Matthew Jue</p>
            <p>Samee Lalani</p>
          </div>
          <div className={styles.marketingContainer}>
            {/* marketing and director here */}
            <h3 className={styles.heading}>Gargee Jamadagni</h3>
            <h4 className={styles.heading}> Marketing Director</h4>
            <p>Siri Alla</p>
            <p>Ryan Majd</p>
            <p>Sophia Rhoads</p>
            <p>Hailey Hubbard</p>
            <p>Siya Sharma</p>
            <p>Kaytie Lin</p>
            <p>Sarah Orji</p>
          </div>
          <div className={styles.logisticsContainer}>
            {/* logistics and director here */}
            <h3 className={styles.heading}>Helium Yang</h3>
            <h4 className={styles.heading}>Logistics Director</h4>
            <p>Khushi Bhatamrekar</p>
            <p>Catherine Chu</p>
            <p>Ethan Ogle</p>
            <p>Batu Ozdener</p>
            <p>Kevin Do</p>
            <p>Angel Hoang</p>
             <p>Hemant Gautam</p>
            <p>Kellen Brown</p>
            <p>Codey Borrelli</p>
            <p>Elaine Chow</p>
          </div>
          <div className={styles.techContainer}>
            {/* tech and director here */}
             <h3 className={styles.heading}>Shawn Pradeep</h3>
            <h4 className={styles.heading}>Tech Director</h4>
            <p>Nikita Jha</p>
            <p>Vansh Arora</p>
            <p>Kasra Ghaffari</p>
            <p>Max Pelot</p>
            <p>Hannah Kwak</p>
            <p>Dhruv Patel</p>
            <p>Alex Teal</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Team;
