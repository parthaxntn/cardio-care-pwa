import React from "react";
import styles from "./ProfileContact.module.scss";

const ProfileContact = () => {
  return (
    <div className={styles.ProfileDetails}>
      <div className={styles.Details}>
        <p>Email</p>
        <div className={styles.p}>User@gmail.com</div>
        <hr></hr>
      </div>
      <div className={styles.Details}>
        <p>Emergency Contact</p>
        <div className={styles.p}>9876543210</div>
        <hr></hr>
      </div>
      <div className={styles.Details}>
        <p>Emergency Contact</p>
        <div className={styles.p}>9876543210</div>
        <hr></hr>
      </div>
    </div>
  );
};
export default ProfileContact;