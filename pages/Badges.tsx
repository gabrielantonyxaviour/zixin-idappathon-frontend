import { FunctionComponent } from "react";
import styles from "../styles/Badges.module.css";
import Sidebar from "../src/components/Sidebar";
import Zixins from "../src/components/Zixins";
import React from "react";
const Badges: FunctionComponent = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const twitter = () => {
    window.open("http://localhost:5000/auth/twitter", "_self");
  };
  const linkedin = () => {
    window.open("http://localhost:5000/auth/linkedin", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook  ", "_self");
  };
  return (
    <div className={styles.badges}>
      <div className={styles.badgesChild} />
      <div className={styles.text}>
        <div className={styles.breadcrumbitemprevious}>
          <div className={styles.breadcrumb}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
        <div className={styles.badges3}>Badges</div>
      </div>
      <div className={styles.text1}>
        <b className={styles.availableZxns}>Available Zìxìns</b>
        <div className={styles.breadcrumbitemprevious1}>
          <div className={styles.breadcrumb1}>
            <span>
              <span>{`Pages `}</span>
            </span>
            <span className={styles.badges1}>
              <span>{` `}</span>
              <span className={styles.badges2}>/ Badges</span>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.firstCard2}>
        <Zixins
          name="linkedin"
          description="Linkedin Auth Badge"
          imgsrc="/background2.svg"
          click={linkedin}
        />
      </div>
      <div className={styles.firstCard}>
        <Zixins
          name="Google"
          description="Google Auth Badge"
          imgsrc="/background3@2x.png"
          click={google}
        />
      </div>
      <div className={styles.firstCard4}>
        <Zixins
          name="Github"
          description="Github Auth Badge"
          imgsrc="/background4.svg"
          click={github}
        />
      </div>
      <div className={styles.firstCard5}>
        <Zixins
          name="Facebook"
          description="Facebook Auth Badge"
          imgsrc="/background5.svg"
          click={facebook}
        />
      </div>
      <Sidebar value={1} />
    </div>
  );
};

export default Badges;
